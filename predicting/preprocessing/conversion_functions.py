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
    grades = {0 : ('6b+', 'V4/V5'), 1 : ('6c', 'V5'), 2 : ('6c+', 'V5/V6'), 3 : ('7a', 'V6'), 
            4 : ('7a+', 'V7'), 5 : ('7b', 'V8'), 6 : ('7b+', 'V8/V9'), 7 : ('7c', 'V9'),
            8 : ('7c+', 'V10'), 9 : ('8a', 'V11'), 10 : ('8a+', 'V12'), 11 : ('8b', 'V13'), 
            12 : ('8b+', 'V14'), 13 : ('8c', 'V15')}
    
    return grades[grade]