# Create maps for hold translation
def create_hold_maps () -> int:    
    # positions A - K on the moonboard
    categories = [chr(i) for i in range(ord('A'), ord('K')+1)]
    
    #Assign values to positions
    position = dict()
    for cnt, elem in enumerate(categories):
        position[elem] = cnt+1
        
    #Creat unique values for hold positions
    hold_positions = dict()
    for pos in position:
        for cnt in range(1, 19):
            hold_positions[pos + str(cnt)] = (cnt*100) + position[pos]
        
    return hold_positions

def item_generator (json_input, lookup_key):
    if isinstance(json_input, dict):
        for k, v in json_input.items():
            if k == lookup_key:
                yield v
            else:
                yield from item_generator(v, lookup_key)
    elif isinstance(json_input, list):
        for item in json_input:
            yield from item_generator(item, lookup_key)
            
def climbing_grade_to_number(grade):
    grades = {'4a' : 1, '4b' : 2, '4c' : 3, '5a' : 4, 
              '5b' : 5, '5c' : 6, '6a' : 7, '6a+' : 8, 
              '6b+' : 9, '6c' : 10, '6c+' : 11,'7a' : 12, 
              '7a+' : 13, '7b' : 14, '7b+' : 15,'7c' : 16,
              '7c+' : 17, '8a' : 18, '8a+' : 19,'8b' : 20, 
              '8b+' : 21, '8c' : 22, '8c+' : 23}
    
    return grades[grade]