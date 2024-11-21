export const CodeData = {
  1: {
    question:
      `For the data given below, perform the following i) Bar plot ii) Vertical Bar plot iii) Scatter plot iv) Histogram`, 

    code: `
        import pandas as pd
        import matplotlib.pyplot as plt
        df=pd.read_csv('datas.csv')
        plt.barh(df['DAY'], df['SOLAR'])
        plt.show()
        plt.bar(df['DAY'], df['SOLAR'])
        plt.show()
        plt.scatter(df['DAY'],df['WIND'])
        plt.show()
        plt.hist(df['DAY'])
        plt.show()

        """
        CSV
        OZONE,SOLAR,TEMP,WIND,MONTH,DAY
        41,190,7.4,67,5,1
        36,118,8.0,72,5,2
        12,149,12.6,74,5,3
        na,313,11.5,62,5,4
        18,na,14.3,56,5,5
        28,na,14.9,66,5,6
        """
`,

    description: `
    Define the Class:

Create a class named Car.
Define an __init__ method to initialize the attributes: brand, price, model, and color.
Create a Method to Display Details:

Define a method named display_details inside the Car class.
In this method, print the details of the car: brand, price, model, and color.
Create Car Objects:

Instantiate at least two objects of the Car class, passing the brand, price, model, and color as arguments.
Display Car Details:

Call the display_details method for each car object to print their details.`,
  },

  2: {
    question:
      "Use the array processing package perform the following. i) Create a numpy array. ii) Demonstrate Indexing in numpy array. iii) Perform basic operations on a single array.",
    code: `
    import numpy as np
    array = np.array([10, 20, 30, 40, 50])
    print("First element:", array[0])  
    print("Last element:", array[-1])  
    print("Add 5:", array + 5)  
    print("Multiply by 2:", array * 2)  
    print("Square:", array ** 2)  
    print("Sum:", np.sum(array))
`,

    description: `
Define a Recursive Function:

Define a function named factorial that takes an integer n as its parameter.
Base Case:

If n is equal to 0 or 1, return 1. This is the base case for the recursion.
Recursive Case:

Otherwise, return n multiplied by the factorial of n-1. This reduces the problem size and eventually reaches the base case.
Input and Output:

Take an integer input from the user.
Call the factorial function with this input and display the result.
      `,
  },
  3: {
    question: `
    Write a python program to determine the distance between two points (x1,y1) and (x2,y2).
  `,

    description: `Define the ListADT Class:

Initialize an empty list to represent the array.
Insertion Operation:

Define a method insert that takes an element and an optional index as parameters.
If the index is not provided, append the element to the end of the list.
If the index is provided, insert the element at the specified index.
Deletion Operation:

Define a method delete that takes an index as a parameter.
Check if the index is valid (i.e., within the range of the list).
Remove the element at the specified index.
Traversal Operation:

Define a method traverse that iterates over the list and prints each element.
Demonstrate the Operations:

Create an object of the ListADT class.
Perform insertion, deletion, and traversal operations to demonstrate functionality.`,

    code: `
    import math
    def calculate_distance(x1, y1, x2, y2):
        distance = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
        return distance
    x1 = int(input("Enter the coordinates of the first point x1: "))
    y1 = int(input("Enter the coordinates of the first point y1: "))
    x2 = int(input("Enter the coordinates of the second point x2: "))
    y2 = int(input("Enter the coordinates of the second point y2: "))
    distance = calculate_distance(x1, y1, x2, y2)
    print("The distance between the points:" ,distance)
`,
  },

  4: {
    question: `
   Write a python program to arrange the given numbers/words in ascending/Descending order.
    `,
    description: `Define a Node Class:

Create a class Node that has two attributes: data to store the data and next to point to the next node in the list.
Define a LinkedList Class:

Create a class LinkedList with a head attribute initialized to None.
Insertion Operation:

Define an insert method that takes data and an optional position as parameters.
If position is None, insert the new node at the end of the list.
If position is specified, insert the new node at the specified index.
Deletion Operation:

Define a delete method that takes position as a parameter.
Check if the position is valid.
Remove the node at the specified position.
Traversal Operation:

Define a traverse method to iterate over the linked list and print each element.
Demonstrate the Operations:

Create an object of the LinkedList class.
Perform insertion, deletion, and traversal operations to demonstrate functionality.`,

    code: `
    data = input("Enter numbers or words separated by space: ").split()
    data = [int(i) if i.isdigit() else i.lower() for i in data]
    order = input("Enter the order (ascending/descending): ").lower()
    print(sorted(data, reverse=(order == "descending")))
`,
  },

  5: {
    question: `
        4. Perform the following using Pandas Data frame:
    i) Create a data frame using list
    ii) Create DataFrame from dict of narray/list
    iii) Indexing a DataFrame using .loc[]
    `,
    description: `Define the Stack Class:

1.Create a class named Stack.
Initialize an empty list to represent the stack.
Push Operation:

2. Define a method push that takes an element as a parameter.
Append the element to the end of the list.
Pop Operation:

3. Define a method pop to remove and return the top element of the stack.
Check if the stack is empty before attempting to pop. If empty, raise an error.
Peep Operation:

4 .Define a method peep to return the top element of the stack without removing it.
Check if the stack is empty before peeping. If empty, raise an error.
Demonstrate the Operations:

5 .Create an object of the Stack class.
Perform push, pop, and peep operations to demonstrate functionality.`,
    code: `
data_list = [[1, 'Alice', 25], [2, 'Bob', 30], [3, 'Charlie', 35]]
df = pd.DataFrame(data_list, columns=['ID', 'Name', 'Age'])
df
data_dict = {'ID': [1, 2, 3],'Name': ['Alice', 'Bob', 'Charlie'],'Age': [25, 30, 35]}
df_dict = pd.DataFrame(data_dict)
df_dict
df_dict.loc[2]
`,
  },
  6: {
    question: `i) Write a python program to generate Armstrong number.`,
    description: `Define a Node Class:

1. Create a class Node that has two attributes: data to store the data and next to point to the next node in the list.
Define a Stack Class:

2. Create a class Stack with a top attribute initialized to None.
Push Operation:

3. Define a push method that takes data as a parameter.
Create a new node with the data and set its next pointer to the current top.
Update the top to point to this new node.
Pop Operation:

4. Define a pop method to remove and return the data from the top node.
Check if the stack is empty before attempting to pop. If empty, raise an error.
Update the top to point to the next node.
Traversal Operation:

5 .Define a traverse method to iterate over the stack and print each element.
Demonstrate the Operations:

6 .Create an object of the Stack class.
Perform push, pop, and traversal operations to demonstrate functionality.`,
    code: `
    n = int(input("Enter the number: "))
    temp = n
    num_digits = len(str(n))
    s = 0
    while n > 0:
        d = n % 10 
        s += d ** num_digits  
        n = n // 10 
    if s == temp:
        print("It is an Armstrong number.")
    else:
        print("It is not an Armstrong number.")
`,
  },
  7: {
    question: `Write a python program to check the given string is palindrome or not.`,
    description: `
    1.Define the Queue Class:

2. Create a class named Queue.
Initialize an empty list to represent the queue.
Enqueue Operation:

3. Define a method enqueue that takes an element as a parameter.
Append the element to the end of the list to simulate adding it to the back of the queue.
Dequeue Operation:

4. Define a method dequeue to remove and return the front element of the queue.
Check if the queue is empty before attempting to dequeue. If empty, raise an error.
Traversal Operation:

5. Define a method traverse to iterate over the queue and print each element.
Demonstrate the Operations:

6. Create an object of the Queue class.
Perform enqueue, dequeue, and traversal operations to demonstrate functionality.`,

    code: `
    def is_palindrome(s):
        s = s.replace(" ", "").lower()  
        return s == s[::-1]
    input_string = input("Enter a string: ")
    if is_palindrome(input_string):
        print(input_string, "is a palindrome.")
    else:
        print(input_string, "is not a palindrome.")
`,
  },
  8: {
    question: `Write a python program to find the area of shapes.`,
    description: `Define a Node Class:

Create a class Node with two attributes: data to store the data and next to point to the next node in the queue.
Define a Queue Class:

Create a class Queue with front and rear attributes initialized to None.
Enqueue Operation:

Define an enqueue method that takes data as a parameter.
Create a new node with the given data.
If the queue is empty, set both front and rear to the new node.
If the queue is not empty, set the next pointer of the rear node to the new node and update rear to the new node.
Dequeue Operation:

Define a dequeue method to remove and return the data from the front node.
Check if the queue is empty before attempting to dequeue. If empty, raise an error.
Update front to point to the next node.
If the queue becomes empty after dequeueing, set rear to None.
Traversal Operation:

Define a traverse method to iterate over the queue and print each element.
Demonstrate the Operations:

Create an object of the Queue class.
Perform enqueue, dequeue, and traversal operations to demonstrate functionality`,
    code: `
import math

def area_of_circle(radius):
    return math.pi * radius ** 2

def area_of_rectangle(length, width):
    return length * width

def area_of_triangle(base, height):
    return 0.5 * base * height

def area_of_square(side):
    return side ** 2

# Main program to select shape and calculate area
print("Select a shape to find its area:")
print("1. Circle")
print("2. Rectangle")
print("3. Triangle")
print("4. Square")

radius = float(input("Enter the radius of the circle: "))
print(f"The area of the circle is: {area_of_circle(radius)}")
length = float(input("Enter the length of the rectangle: "))
width = float(input("Enter the width of the rectangle: "))
print(f"The area of the rectangle is: {area_of_rectangle(length, width)}")
base = float(input("Enter the base of the triangle: "))
height = float(input("Enter the height of the triangle: "))
print(f"The area of the triangle is: {area_of_triangle(base, height)}")
side = float(input("Enter the side of the square: "))
print(f"The area of the square is: {area_of_square(side)}")

`,
  },
  9: {
    question: `Write a python program to find the greatest common divisor between two numbers`,
    description: `1. Initialize Two Structures:
  
An empty stack for operators.
An empty list for the output (postfix expression).

2. Process Each Token:
If the token is an operand (a variable or number), add it to the output list.
If the token is a left parenthesis (, push it onto the stack.
If the token is a right parenthesis ), pop from the stack to the output list until a left parenthesis is encountered.
If the token is an operator, pop from the stack to the output list until the token at the top of the stack has less precedence or the stack is empty. Then push the current operator onto the stack.

3.After Processing All Tokens:

Pop any remaining operators from the stack to the output list.
Operator Precedence:

4. Operators + and - have lower precedence than * and /.`,
    code: `
        import math
        def gcd(a, b):
            while b:
                a, b = b, a % b
            return a
        num1 = int(input("Enter the first number: "))
        num2 = int(input("Enter the second number: "))
        result = gcd(num1, num2)
        print("The GCD of number is: ",result)
`,
  },
  10: {
    question: `Perform Time series data visualization using Python.`,
    description: `1 .Initialize a Queue:

Use a queue to store processes with their arrival times and burst times.

2.Process Execution:
Execute each process in the order it appears in the queue.
Calculate the waiting time and turnaround time for each process.

3. Calculate Metrics:
Waiting Time: The time a process waits in the queue before its execution starts.
Turnaround Time: The total time taken from arrival to completion of the process.

4. Compute Average Times:
Calculate the average waiting time and average turnaround time for all processes.`,
    code: `
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
date_range = pd.date_range(start='2023-01-01', periods=100, freq='D') 
temp = np.random.uniform(20, 35, 100)
df = pd.DataFrame({'Date': date_range,'Temperature': temp})
plt.plot(df.index, df['Temperature'])
`,
  },
};
