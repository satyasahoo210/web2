'''
Input: 5

Output:
*****              
****               
***                
**                 
*  

'''

def print_pattern(size):
    for i in range(size, 0, -1):
        print(i * '*')



if __name__ == '__main__':
    # inp = int(input())
    inp = 5
    print_pattern(inp)
