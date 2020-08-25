from flask import Flask, jsonify, request
from flask_restful import Api, Resource
import json 
from flask_cors import CORS

app = Flask(__name__)
# CORS disabled for test
cors = CORS(app)
api = Api(app)

@app.route("/", methods=["POST"])
def grade_route():
    # Get posted data
    js = request.get_json()

    # Compute grade
    
    # Return JSON
    retJson = {
        'status' : 200,
        'msg' : "Route was successfully graded"
    }
    
    return "hi"


if __name__ == '__main__':
    app.run()
