import numpy as np
from flask import Flask, jsonify, request
from flask_restful import Api
from flask_cors import CORS
import torch
from torch import nn
import torch.nn.functional as F
import torch.utils.data as data

# Network definition
class LinNet(nn.Module):
    def __init__(self, input_size, num_classes):
        super().__init__()
        self.fc1 = nn.Linear(input_size, 256)
        self.fc2 = nn.Linear(256, 128)
        self.fc3 = nn.Linear(128, 64)
        self.fc4 = nn.Linear(64, num_classes)
        
        self.dropout = nn.Dropout(p=0.2)
        
    def forward(self, x):
        x = x.view(x.shape[0], -1)
        
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = self.dropout(F.relu(self.fc3(x)))
        x = F.log_softmax(self.fc4(x), dim=1)
        
        return x
    
class ConvNet(nn.Module):
    def __init__(self):
        super(ConvNet, self).__init__()
        self.conv1 = nn.Conv1d(1, 6, 5)
        self.pool = nn.MaxPool1d(2, 2)
        self.conv2 = nn.Conv1d(6, 16, 5)
        self.fc1 = nn.Linear(1536, 256)
        self.fc2 = nn.Linear(256, 128)
        self.fc3 = nn.Linear(128, 64)
        self.fc4 = nn.Linear(64, 13)

    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        x = x.view(x.size(0), -1)
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = F.relu(self.fc3(x))
        x = self.fc4(x)
        return x

# Convert dataset to tensor
class Dataset(data.Dataset):
    def __init__(self, df):
        self.dataset = df
        
    def __getitem__(self, index):
            return torch.Tensor(self.dataset.astype(float))
        
    def __len__(self):
        return self.dataset.shape[0]

# Get device info
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Load NN
PATH = '../cnnDict.pt'
model = ConvNet()
model.load_state_dict(torch.load(PATH))
model.eval()

app = Flask(__name__)

# CORS disabled
cors = CORS(app)
api = Api(app)

# Set-up function
@app.route('/')
def setUp():
    return 'hi'

# Route grader
@app.route('/grade', methods=['POST'])
def grade_route():
    # Get request
    route = transform_route(request.get_json())
    fPrediction, vPrediction = convert_pred(get_prediction(route))
    
    # Return JSON
    retJson = {
        'status' : 200,
        'msg' : 'Route was successfully graded',
        'vgrade' : vPrediction,
        'fgrade' : fPrediction
    }
    
    return jsonify(retJson)

def transform_route(hold):
    # Get route variables
    holds, route, cols_in_order = ([] for i in range(3))
    for i in hold['hand']:
        holds.append('I' + i['name'])
        
    for i in hold['finish']:
        holds.append('F' + i['name'])
        
    # Create dataset for route
    for k in range(1, 19):
        for j in ['A','B','C','D','E','F','G','H','I','J','K']:
            cols_in_order.append('{type}{col}{row}'.format(type = 'I', col = j, row=k))
            cols_in_order.append('{type}{col}{row}'.format(type = 'F', col = j, row=k))
            if k == 18 and j == 'K':
                cols_in_order.append('largest_move')
                cols_in_order.append('number_of_holds')
                
    # Create dictionary with index as value
    dic = dict(zip(cols_in_order,range(len(cols_in_order))))
    
    route = np.zeros(len(cols_in_order))
    
    # Add flag for hold positions
    for i in holds:
        route[dic[i]] = 1
    
    # Largest move calculation
    holds, largest_move, h_cnt, largest_jump = {}, 0, 0, 0
    for cnt, val in enumerate(route):
        if val == 1:
            holds[h_cnt] = (ord(cols_in_order[cnt][1]), int(cols_in_order[cnt][2:]))
            if h_cnt > 0:
                res = abs(holds[h_cnt][0] - holds[h_cnt-1][0]) +  abs(holds[h_cnt][1] - holds[h_cnt-1][1])
                largest_move = max(largest_move, res)
            h_cnt += 1
    route[-2] = largest_move
    
    # Number of holds calculation
    route[-1] = len(holds)

    return route

def get_prediction(route):
    route = torch.from_numpy(route).float()
    route = route.unsqueeze(0).unsqueeze(1)
    outputs = model(route)
    _, predicted = torch.max(outputs.data, 1)
    print(outputs)
    return predicted.numpy()[0]

def convert_pred(route):
    grades = {0 : ('6b+', 'V4/V5'), 1 : ('6c', 'V5'), 2 : ('6c+', 'V5/V6'), 3 : ('7a', 'V6'), 
            4 : ('7a+', 'V7'), 5 : ('7b', 'V8'), 6 : ('7b+', 'V8/V9'), 7 : ('7c', 'V9'),
            8 : ('7c+', 'V10'), 9 : ('8a', 'V11'), 10 : ('8a+', 'V12'), 11 : ('8b', 'V13'), 
            12 : ('8b+', 'V14'), 13 : ('8c', 'V15')}
    
    return grades[route]

if __name__ == '__main__':
    app.run()