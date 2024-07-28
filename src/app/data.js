export const CodeData = {
  1: {
    question:
      "Write a python program using class and object to display the car details. The implementation should have the class car with attributes Brand, prize, model and color. Create minimum 2 objects for the class and display the details",

    code: `class Car:
    def __init__(self, brand, price, model, color):
        self.brand = brand
        self.price = price
        self.model = model
        self.color = color

    def display_details(self):
        print(f"Car Details:")
        print(f"Brand: {self.brand}")
        print(f"Price: {self.price}")
        print(f"Model: {self.model}")
        print(f"Color: {self.color}")
        print("\n")

car1 = Car(brand="Toyota", price=15000, model="Corolla", color="Red")
car2 = Car(brand="Honda", price=18000, model="Civic", color="Blue")

car1.display_details()
car2.display_details()
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
      "Write a python program to find the factorial of a number using recursion",
    code: `
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

number = int(input("Enter a number to find its factorial: "))

if number < 0:
    print("Factorial is not defined for negative numbers.")
else:
    result = factorial(number)
    print(f"The factorial of {number} is {result}.")
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
    Write a python program to implement LIST ADT using python arrays. The implementation should have the following Operations
  (i) Insertion
  (ii) Deletion
  (iii) Traversal
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
    code: `class ListADT:
    def __init__(self):
        # Initialize an empty list
        self.array = []

    def insert(self, element, index=None):
        if index is None:
            # Append to the end if index is not provided
            self.array.append(element)
            print(f"Inserted {element} at the end.")
        else:
            # Insert at the specified index
            if 0 <= index <= len(self.array):
                self.array.insert(index, element)
                print(f"Inserted {element} at index {index}.")
            else:
                print("Invalid index for insertion.")

    def delete(self, index):
        # Check if index is valid
        if 0 <= index < len(self.array):
            removed_element = self.array.pop(index)
            print(f"Deleted element {removed_element} from index {index}.")
        else:
            print("Invalid index for deletion.")

    def traverse(self):
        # Print each element in the list
        print("List Traversal:")
        for element in self.array:
            print(element, end=' ')
        print("\n")

list_adt = ListADT()

list_adt.insert(10)
list_adt.insert(20)
list_adt.insert(30)
list_adt.insert(15, 1)  # Insert 15 at index 1
list_adt.traverse()

list_adt.delete(2)  # Delete element at index 2
list_adt.traverse()

list_adt.delete(5)  # Attempt to delete element at invalid index
`,
  },
  4: {
    question: `
    Write a python program to implement LIST ADT using linked list. The implementation should have the following Operations
(i)Insertion
(ii)Deletion
(iii)Traversal
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
    code: `class Node:
    def __init__(self, data):
        self.data = data  # Store data
        self.next = None  # Pointer to the next node


class LinkedList:
    def __init__(self):
        self.head = None  # Initialize the head of the list

    def insert(self, data, position=None):
        new_node = Node(data)

        if position is None:  # Insert at the end
            if not self.head:
                self.head = new_node
                print(f"Inserted {data} at the head.")
            else:
                current = self.head
                while current.next:
                    current = current.next
                current.next = new_node
                print(f"Inserted {data} at the end.")
        else:  # Insert at the specified position
            if position == 0:
                new_node.next = self.head
                self.head = new_node
                print(f"Inserted {data} at position 0 (head).")
            else:
                current = self.head
                current_position = 0
                while current and current_position < position - 1:
                    current = current.next
                    current_position += 1

                if current is None:
                    print("Invalid position for insertion.")
                else:
                    new_node.next = current.next
                    current.next = new_node
                    print(f"Inserted {data} at position {position}.")

    def delete(self, position):
        if not self.head:
            print("List is empty. Cannot delete.")
            return

        if position == 0:  # Delete the head node
            deleted_data = self.head.data
            self.head = self.head.next
            print(f"Deleted {deleted_data} from position 0.")
        else:
            current = self.head
            current_position = 0
            prev = None
            while current and current_position < position:
                prev = current
                current = current.next
                current_position += 1

            if current is None:
                print("Invalid position for deletion.")
            else:
                deleted_data = current.data
                prev.next = current.next
                print(f"Deleted {deleted_data} from position {position}.")

    def traverse(self):
        if not self.head:
            print("List is empty.")
            return

        print("List Traversal:")
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")


linked_list = LinkedList()

linked_list.insert(10)
linked_list.insert(20)
linked_list.insert(30)
linked_list.insert(15, 1)  # Insert 15 at position 1
linked_list.traverse()

linked_list.delete(2)  # Delete element at position 2
linked_list.traverse()

linked_list.delete(5)  # Attempt to delete element at invalid position
`,
  },

  5: {
    question: `
        Write a python program to implement Stack ADT using python arrays. The implementation should have the following Operations
(i)Push
(ii)POP
(iii)PEEP,
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
    code: `class Stack:
    def __init__(self):
        # Initialize an empty list to represent the stack
        self.stack = []

    def push(self, element):
        # Add an element to the top of the stack
        self.stack.append(element)
        print(f"Pushed {element} onto the stack.")

    def pop(self):
        # Remove and return the top element of the stack
        if self.is_empty():
            raise IndexError("Pop operation failed: stack is empty.")
        else:
            element = self.stack.pop()
            print(f"Popped {element} from the stack.")
            return element

    def peep(self):
        # Return the top element of the stack without removing it
        if self.is_empty():
            raise IndexError("Peep operation failed: stack is empty.")
        else:
            element = self.stack[-1]
            print(f"Top element is {element}.")
            return element

    def is_empty(self):
        # Check if the stack is empty
        return len(self.stack) == 0

    def display(self):
        # Display the current stack
        print("Current Stack:")
        for element in reversed(self.stack):
            print(element)
        print()


stack = Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.display()

stack.peep()

stack.pop()
stack.display()

stack.peep()

stack.pop()
stack.pop()
try:
    stack.pop()
except IndexError as e:
    print(e)
`,
  },
  6: {
    question: `Write a python program to implement Stack ADT using Linked List. The implementation should have the following Operations

(i)PUSH
(ii)POP (iii)TRAVERSAL`,
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
    code: `class Node:
    def __init__(self, data):
        self.data = data  # Store data
        self.next = None  # Pointer to the next node


class Stack:
    def __init__(self):
        self.top = None  # Initialize the top of the stack

    def push(self, data):
        new_node = Node(data)
        # Set the next of the new node to the current top
        new_node.next = self.top
        # Update the top to be the new node
        self.top = new_node
        print(f"Pushed {data} onto the stack.")

    def pop(self):
        if self.is_empty():
            raise IndexError("Pop operation failed: stack is empty.")
        else:
            # Get the data from the top node
            popped_data = self.top.data
            # Update the top to the next node
            self.top = self.top.next
            print(f"Popped {popped_data} from the stack.")
            return popped_data

    def is_empty(self):
        # Check if the stack is empty
        return self.top is None

    def traverse(self):
        if self.is_empty():
            print("Stack is empty.")
            return

        print("Stack Traversal:")
        current = self.top
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")


stack = Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.traverse()

stack.pop()
stack.traverse()

stack.pop()
stack.traverse()

stack.pop()
try:
    stack.pop()
except IndexError as e:
    print(e)
`,
  },
  7: {
    question: `Write a python program to implement Queue ADT using python arrays. The implementation should have the following Operations
(i)Enqueue
(ii)Dequeue
(iii)Traversal`,
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
    code: `class Queue:
    def __init__(self):
        # Initialize an empty list to represent the queue
        self.queue = []

    def enqueue(self, element):
        # Add an element to the end of the queue
        self.queue.append(element)
        print(f"Enqueued {element}.")

    def dequeue(self):
        # Remove and return the front element of the queue
        if self.is_empty():
            raise IndexError("Dequeue operation failed: queue is empty.")
        else:
            element = self.queue.pop(0)
            print(f"Dequeued {element}.")
            return element

    def is_empty(self):
        # Check if the queue is empty
        return len(self.queue) == 0

    def traverse(self):
        if self.is_empty():
            print("Queue is empty.")
            return

        print("Queue Traversal:")
        for element in self.queue:
            print(element, end=" -> ")
        print("None")


queue = Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.traverse()

queue.dequeue()
queue.traverse()

queue.dequeue()
queue.traverse()

queue.dequeue()
try:
    queue.dequeue()
except IndexError as e:
    print(e) 
`,
  },
  8: {
    question: `Write a python program to implement Queue ADT using Linked List. The implementation should have the following Operations
(i)Enqueue 
(ii)Dequeue
(iii)Traversal `,
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
    code: `class Node:
    def __init__(self, data):
        self.data = data  
        self.next = None  


class Queue:
    def __init__(self):
        self.front = None  
        self.rear = None   

    def enqueue(self, data):
        new_node = Node(data)
        if self.rear is None:  
            self.front = self.rear = new_node
            print(f"Enqueued {data} as the first element.")
        else:
            self.rear.next = new_node
            self.rear = new_node
            print(f"Enqueued {data}.")

    def dequeue(self):
        if self.is_empty():
            raise IndexError("Dequeue operation failed: queue is empty.")
        else:
            dequeued_data = self.front.data
            self.front = self.front.next
            if self.front is None:
                self.rear = None
            print(f"Dequeued {dequeued_data}.")
            return dequeued_data

    def is_empty(self):
        return self.front is None

    def traverse(self):
        if self.is_empty():
            print("Queue is empty.")
            return

        print("Queue Traversal:")
        current = self.front
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")


# Example usage
queue = Queue()

# Enqueue examples
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.traverse()

# Dequeue examples
queue.dequeue()
queue.traverse()

# Dequeue example after dequeue
queue.dequeue()
queue.traverse()

# Invalid dequeue example (from an empty queue)
queue.dequeue()
try:
    queue.dequeue()
except IndexError as e:
    print(e)

`,
  },
  9: {
    question: `Write a python program to convert the following infix expression to postfix (100)
  (a +b) *(c/d) +e`,
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
    code: `# Define precedence of operators
precedence = {'+': 1, '-': 1, '*': 2, '/': 2}

def infix_to_postfix(expression):
    stack = []
    output = []

    for char in expression:
        if char.isalnum():  # Operand: Add to output list
            output.append(char)
        elif char == '(':  # Left Parenthesis: Push onto stack
            stack.append(char)
        elif char == ')':  # Right Parenthesis: Pop until left parenthesis is found
            while stack and stack[-1] != '(':
                output.append(stack.pop())
            stack.pop()  # Pop the left parenthesis
        else:  # Operator: Manage precedence and stack operations
            while stack and stack[-1] != '(' and precedence[stack[-1]] >= precedence[char]:
                output.append(stack.pop())
            stack.append(char)

    while stack:
        output.append(stack.pop())

    return ''.join(output)

expression = "(a+b)*(c/d)+e"

postfix_expression = infix_to_postfix(expression)
print(f"Infix: {expression}")
print(f"Postfix: {postfix_expression}")
`,
  },
  10: {
    question: `Write a python program to implement First Come First Serve (FCFS) CPU Scheduling algorithm to demonstrate the application of Queue`,
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
    code: `class Process:
    def __init__(self, pid, arrival_time, burst_time):
        self.pid = pid 
        self.arrival_time = arrival_time 
        self.burst_time = burst_time 
        self.waiting_time = 0 
        self.turnaround_time = 0 

class FCFSQueue:
    def __init__(self):
        self.queue = []  

    def add_process(self, process):
        self.queue.append(process)  

    def execute(self):
        current_time = 0  
        total_waiting_time = 0  
        total_turnaround_time = 0  

        print("Execution Order and Details:")

        for process in self.queue:
            process.waiting_time = max(0, current_time - process.arrival_time)
            process.turnaround_time = process.waiting_time + process.burst_time
            current_time = max(current_time, process.arrival_time) + process.burst_time

            total_waiting_time += process.waiting_time
            total_turnaround_time += process.turnaround_time

            print(f"Process {process.pid}: Waiting Time = {process.waiting_time}, Turnaround Time = {process.turnaround_time}")

        num_processes = len(self.queue)
        average_waiting_time = total_waiting_time / num_processes
        average_turnaround_time = total_turnaround_time / num_processes

        print(f"\nAverage Waiting Time: {average_waiting_time:.2f}")
        print(f"Average Turnaround Time: {average_turnaround_time:.2f}")

# Example usage
fcfs_queue = FCFSQueue()

# Add processes to the queue with process ID, arrival time, and burst time
fcfs_queue.add_process(Process(1, 0, 5))
fcfs_queue.add_process(Process(2, 2, 3))
fcfs_queue.add_process(Process(3, 4, 2))
fcfs_queue.add_process(Process(4, 6, 4))

# Execute the FCFS scheduling
fcfs_queue.execute()
`,
  },
  11: {
    question: `Write a python program to implement Linear Search algorithm`,
    description: `Initialize the List and Target Element:

Create a list of elements in which to search.
Define the target element to find in the list.
Iterate Over the List:

Traverse the list from the first element to the last.
Compare each element with the target.
Check for a Match:

If a match is found, return the index of the element.
If no match is found after checking all elements, return a message indicating that the target is not present in the list.`,
    code: `def linear_search(arr, target):
    for index, element in enumerate(arr):
        if element == target:
            return index  # Target found, return its index
    return -1  # Target not found, return -1

elements = [4, 2, 7, 1, 9, 3]  # List of elements
target_element = 7  # Element to search for

result = linear_search(elements, target_element)

if result != -1:
    print(f"Element {target_element} found at index {result}.")
else:
    print(f"Element {target_element} not found in the list.")
`,
  },
  12: {
    question: `Write a python program to implement Binary search algorithm`,
    description: `1. Initialize Pointers:

Set two pointers, low and high, at the beginning and end of the list, respectively.

3.Iterate While Low is Less Than or Equal to High:
Calculate the middle index mid as the average of low and high.
Compare the element at the middle index with the target element.
If the middle element is equal to the target, return the middle index.
If the middle element is less than the target, move the low pointer to mid + 1 to search the right half.
If the middle element is greater than the target, move the high pointer to mid - 1 to search the left half.

3. Return -1 If Target is Not Found:
If the loop exits without finding the target, return -1 to indicate the target is not present.
`,
    code: `def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2

        if arr[mid] == target:
            return mid

        elif arr[mid] < target:
            low = mid + 1

        else:
            high = mid - 1
    return -1

elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  # Sorted list of elements
target_element = 7  # Element to search for

result = binary_search(elements, target_element)

if result != -1:
    print(f"Element {target_element} found at index {result}.")
else:
    print(f"Element {target_element} not found in the list.")
`,
  },
  13: {
    question: `Write a python program to implement bubble sort algorithm`,

    description: `1.Initialize Variables:

Get the length of the list n.

2. Outer Loop (Passes):
Loop through the list from 0 to n-1 for multiple passes.

3. Inner Loop (Comparisons):
Loop from the beginning of the list to n-i-1, where i is the current pass number.
Compare each element with the next element.
Swap the elements if they are in the wrong order (the current element is greater than the next element).

4. Optimization (Early Exit):
If no swaps occur during a pass, the list is already sorted, and the algorithm can exit early.

5. Repeat:
Continue the passes until the list is sorted.`,
    code: `def bubble_sort(arr):
    n = len(arr)

    for i in range(n):
        swapped = False  # Track if a swap was made during this pass
        
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
                print(f"Swapped {arr[j]} and {arr[j+1]}: {arr}")
        if not swapped:
            break

    return arr

elements = [64, 34, 25, 12, 22, 11, 90]  # Unsorted list

print("Original list:", elements)
sorted_elements = bubble_sort(elements)
print("Sorted list:", sorted_elements)
`,
  },

  14: {
    question: `Write a python program to implement insertion sort algorithm`,
    description: `Iterate Through the List:

Start with the second element (assuming the first element is trivially sorted).
Compare the current element with the elements before it.
Insert the Current Element into the Sorted Sublist:

Shift larger elements to the right.
Place the current element in its correct position within the sorted portion of the list.
Repeat:

Continue until the entire list is sorted.`,
    code: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]  # Element to be inserted
        j = i - 1

        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        
        arr[j + 1] = key

        print(f"Step {i}: {arr}")
    return arr

elements = [64, 34, 25, 12, 22, 11, 90] 
print("Original list:", elements)
sorted_elements = insertion_sort(elements)
print("Sorted list:", sorted_elements)
`,
  },
  15: {
    question: `Write a python program to implement Quick sort algorithm`,
    description: `Choose a Pivot:

Select a pivot element from the list. Various strategies can be used, such as picking the first element, the last element, or the median.
Partitioning:

Rearrange the list so that elements less than the pivot come before it and elements greater than the pivot come after it.
Recursively Apply:

Recursively apply the same process to the sublists of elements before and after the pivot.
Base Case:

If the list has one or zero elements, it is already sorted.`,
    code: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr


    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]   
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]  

    return quick_sort(left) + middle + quick_sort(right)

elements = [64, 34, 25, 12, 22, 11, 90]  # Unsorted list
print("Original list:", elements)

sorted_elements = quick_sort(elements)
print("Sorted list:", sorted_elements)
`,
  },
  16: {
    question: `Write a python program to implement Merge sort algorithm`,
    description: `Divide:

Split the list into two halves until each sublist contains a single element or is empty.
Conquer:

Recursively sort each half.
Combine:

Merge the sorted halves to produce a sorted list.`,
    code: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2

    left_half = merge_sort(arr[:mid])
    right_half = merge_sort(arr[mid:])

    return merge(left_half, right_half)

def merge(left, right):
    sorted_list = []
    left_index = 0
    right_index = 0

    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            sorted_list.append(left[left_index])
            left_index += 1
        else:
            sorted_list.append(right[right_index])
            right_index += 1

    if left_index < len(left):
        sorted_list.extend(left[left_index:])

    if right_index < len(right):
        sorted_list.extend(right[right_index:])

    return sorted_list

elements = [64, 34, 25, 12, 22, 11, 90]  # Unsorted list
print("Original list:", elements)
sorted_elements = merge_sort(elements)
print("Sorted list:", sorted_elements)
`,
  },
  17: {
    question: `Write a python program to demonstrate the following Binary Tree Traversal methods (i) in order traversal (ii) preorder traversal
(iii) post order traversal`,
    description: `In-order Traversal (Left, Root, Right):

Visit the left subtree.
Visit the root node.
Visit the right subtree.
Pre-order Traversal (Root, Left, Right):

Visit the root node.
Visit the left subtree.
Visit the right subtree.
Post-order Traversal (Left, Right, Root):

Visit the left subtree.
Visit the right subtree.
Visit the root node.`,
    code: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def in_order_traversal(node):
    result = []
    if node:
        result.extend(in_order_traversal(node.left))
        result.append(node.value)
        result.extend(in_order_traversal(node.right))
    return result

def pre_order_traversal(node):
    result = []
    if node:
        result.append(node.value)
        result.extend(pre_order_traversal(node.left))
        result.extend(pre_order_traversal(node.right))
    return result

def post_order_traversal(node):
    result = []
    if node:
        result.extend(post_order_traversal(node.left))
        result.extend(post_order_traversal(node.right))
        result.append(node.value)
    return result

if __name__ == "__main__":
    # Create a sample binary tree
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(3)
    root.left.left = TreeNode(4)
    root.left.right = TreeNode(5)
    root.right.left = TreeNode(6)
    root.right.right = TreeNode(7)

    print("In-order traversal:", in_order_traversal(root))
    print("Pre-order traversal:", pre_order_traversal(root))
    print("Post-order traversal:", post_order_traversal(root))
`,
  },
  18: {
    question: `Write a python program to construct a Binary Search Tree. Insert minimum eight elements. Delete a Leaf node. Display the tree and the necessary data after insertion and deletion (100)`,
    description: `
    TreeNode Class: Defines a node in the tree.
BST Class: Manages the BST operations including insertion, deletion, and traversal.
Insertion: Adds elements while maintaining BST properties.
Deletion: Removes a leaf node.
Display: Shows the tree structure in-order.
    `,
    code: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if not self.root:
            self.root = TreeNode(value)
        else:
            self._insert_recursive(self.root, value)

    def _insert_recursive(self, node, value):
        if value < node.value:
            if node.left is None:
                node.left = TreeNode(value)
            else:
                self._insert_recursive(node.left, value)
        else:
            if node.right is None:
                node.right = TreeNode(value)
            else:
                self._insert_recursive(node.right, value)

    def delete_leaf(self, value):
        self.root = self._delete_leaf_recursive(self.root, value)

    def _delete_leaf_recursive(self, node, value):
        if node is None:
            return None
    
        if node.left is None and node.right is None and node.value == value:
            return None  # Remove the leaf node
        
        if value < node.value:
            node.left = self._delete_leaf_recursive(node.left, value)
        elif value > node.value:
            node.right = self._delete_leaf_recursive(node.right, value)
        
        return node

    def in_order_traversal(self, node):
        """
        Perform in-order traversal of the BST.
        
        Parameters:
        node (TreeNode): The root node of the BST.

        Returns:
        list: A list of node values in in-order.
        """
        result = []
        if node:
            result.extend(self.in_order_traversal(node.left))
            result.append(node.value)
            result.extend(self.in_order_traversal(node.right))
        return result

if __name__ == "__main__":
    bst = BinarySearchTree()

    elements = [50, 30, 70, 20, 40, 60, 80, 10]
    for element in elements:
        bst.insert(element)
    
    print("In-order traversal before deletion:", bst.in_order_traversal(bst.root))

    bst.delete_leaf(10)
    print("In-order traversal after deletion:", bst.in_order_traversal(bst.root))
`,
  },
  19: {
    question: `Write a python program to implement Minheap and Maxheap`,
    description: `Min-Heap:

A binary tree where the value of each node is less than or equal to the values of its children.
The smallest element is at the root.
Max-Heap:

A binary tree where the value of each node is greater than or equal to the values of its children.
The largest element is at the root.`,
    code: `import heapq

class MinHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        heapq.heappush(self.heap, value)

    def extract_min(self):
        if self.is_empty():
            raise IndexError("Extract from an empty heap")
        return heapq.heappop(self.heap)

    def peek_min(self):
        if self.is_empty():
            raise IndexError("Peek from an empty heap")
        return self.heap[0]

    def is_empty(self):
        return len(self.heap) == 0

    def display(self):
        return self.heap

class MaxHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        # Python's heapq only supports min-heap, so we invert values to use it as a max-heap
        heapq.heappush(self.heap, -value)

    def extract_max(self):
        if self.is_empty():
            raise IndexError("Extract from an empty heap")
        return -heapq.heappop(self.heap)

    def peek_max(self):
        if self.is_empty():
            raise IndexError("Peek from an empty heap")
        return -self.heap[0]

    def is_empty(self):
        return len(self.heap) == 0

    def display(self):
        return [-x for x in self.heap]

if __name__ == "__main__":
    # Min-Heap example
    min_heap = MinHeap()
    min_heap.insert(3)
    min_heap.insert(1)
    min_heap.insert(4)
    min_heap.insert(1)
    min_heap.insert(5)
    min_heap.insert(9)

    print("Min-Heap contents:", min_heap.display())
    print("Minimum value:", min_heap.peek_min())
    print("Extracted minimum value:", min_heap.extract_min())
    print("Min-Heap contents after extraction:", min_heap.display())

    max_heap = MaxHeap()
    max_heap.insert(3)
    max_heap.insert(1)
    max_heap.insert(4)
    max_heap.insert(1)
    max_heap.insert(5)
    max_heap.insert(9)

    print("Max-Heap contents:", max_heap.display())
    print("Maximum value:", max_heap.peek_max())
    print("Extracted maximum value:", max_heap.extract_max())
    print("Max-Heap contents after extraction:", max_heap.display())
`,
  },
  20: {
    question: `Write a python program to implement depth first graph traversal`,
    description: `from collections import defaultdict

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, u, v):
        self.graph[u].append(v)
        self.graph[v].append(u)  # Add this line if the graph is undirected

    def dfs_recursive(self, start, visited=None):
        if visited is None:
            visited = set()
        visited.add(start)
        result = [start]

        for neighbor in self.graph[start]:
            if neighbor not in visited:
                result.extend(self.dfs_recursive(neighbor, visited))
        return result

    def dfs_iterative(self, start):
        visited = set()
        stack = [start]
        result = []

        while stack:
            node = stack.pop()
            if node not in visited:
                visited.add(node)
                result.append(node)
                stack.extend(neighbor for neighbor in self.graph[node] if neighbor not in visited)
        return result

# Example usage
if __name__ == "__main__":
    g = Graph()
    g.add_edge(1, 2)
    g.add_edge(1, 3)
    g.add_edge(2, 4)
    g.add_edge(2, 5)
    g.add_edge(3, 6)
    g.add_edge(3, 7)

    print("Depth-First Traversal (Recursive):", g.dfs_recursive(1))
    print("Depth-First Traversal (Iterative):", g.dfs_iterative(1))
`,
    code: `from collections import defaultdict

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, u, v):
        self.graph[u].append(v)
        self.graph[v].append(u)  # Add this line if the graph is undirected

    def dfs_recursive(self, start, visited=None):
        if visited is None:
            visited = set()
        visited.add(start)
        result = [start]

        for neighbor in self.graph[start]:
            if neighbor not in visited:
                result.extend(self.dfs_recursive(neighbor, visited))
        
        return result

    def dfs_iterative(self, start):
        visited = set()
        stack = [start]
        result = []

        while stack:
            node = stack.pop()
            if node not in visited:
                visited.add(node)
                result.append(node)
                # Add neighbors to the stack
                stack.extend(neighbor for neighbor in self.graph[node] if neighbor not in visited)
        
        return result

# Example usage
if __name__ == "__main__":
    g = Graph()
    g.add_edge(1, 2)
    g.add_edge(1, 3)
    g.add_edge(2, 4)
    g.add_edge(2, 5)
    g.add_edge(3, 6)
    g.add_edge(3, 7)

    print("Depth-First Traversal (Recursive):", g.dfs_recursive(1))
    print("Depth-First Traversal (Iterative):", g.dfs_iterative(1))
`,
  },
  21: {
    question: `Write a python program to implement Breadth first traversal`,
    description: `Initialize:

Create a visited set to keep track of visited nodes.
Create a queue and add the starting node to it.
Create a result list to store the order of traversal.
While Queue is Not Empty:

Dequeue: Remove a node from the front of the queue.
If Node is Not Visited:
Mark the node as visited.
Add the node to the result list.
For Each Neighbor of the Node:
If the neighbor has not been visited:
Enqueue: Add the neighbor to the queue.
Return:

Return the result list, which contains nodes in the order they were visited.`,
    code: `
    from collections import deque, defaultdict

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, u, v):
        self.graph[u].append(v)
        self.graph[v].append(u)  # Add this line if the graph is undirected

    def bfs(self, start):
       visited = set()
        queue = deque([start])
        result = []

        while queue:
            node = queue.popleft()
            if node not in visited:
                visited.add(node)
                result.append(node)
                queue.extend(neighbor for neighbor in self.graph[node] if neighbor not in visited)
        
        return result

# Example usage
if __name__ == "__main__":
    g = Graph()
    g.add_edge(1, 2)
    g.add_edge(1, 3)
    g.add_edge(2, 4)
    g.add_edge(2, 5)
    g.add_edge(3, 6)
    g.add_edge(3, 7)

    print("Breadth-First Traversal:", g.bfs(1))
`,
  },
  22: {
    question: `Write a python program to implement Dijkstra’s Algorithm to find the shortest path`,
    description: `Initialize:

Create a distances dictionary to store the shortest distance from the start node to each node. Initialize all distances to infinity, except for the start node, which is initialized to 0.
Create a previous_nodes dictionary to store the previous node for each node on the shortest path. Initialize all previous nodes to None.
Create a priority queue (min-heap) and add the start node with distance 0.
While Priority Queue is Not Empty:

Extract the node with the smallest distance from the priority queue. This node is considered the current node.
For Each Neighbor of the current node:
Calculate the distance from the start node to the neighbor through the current node.
If this new distance is smaller than the known distance for the neighbor:
Update the distance for the neighbor in the distances dictionary.
Update the previous node for the neighbor in the previous_nodes dictionary.
Add the neighbor to the priority queue with the updated distance.
Return:

The distances dictionary containing the shortest distance from the start node to each node.
The previous_nodes dictionary for reconstructing the shortest path.
Reconstruct Path (Optional):

To find the shortest path from the start node to a specific end node, backtrack from the end node using the previous_nodes dictionary until the start node is reached.`,
    code: `import heapq

class Graph:
    def __init__(self):
        self.graph = {}  # Dictionary to store graph as adjacency list

    def add_edge(self, u, v, weight):
        if u not in self.graph:
            self.graph[u] = []
        if v not in self.graph:
            self.graph[v] = []
        self.graph[u].append((v, weight))
        self.graph[v].append((u, weight))  # Add this line if the graph is undirected

    def dijkstra(self, start):
        distances = {node: float('inf') for node in self.graph}
        previous_nodes = {node: None for node in self.graph}
        distances[start] = 0
        priority_queue = [(0, start)]

        while priority_queue:
            current_distance, current_node = heapq.heappop(priority_queue)

            if current_distance > distances[current_node]:
                continue

            for neighbor, weight in self.graph[current_node]:
                distance = current_distance + weight

                if distance < distances[neighbor]:
                    distances[neighbor] = distance
                    previous_nodes[neighbor] = current_node
                    heapq.heappush(priority_queue, (distance, neighbor))

        return distances, previous_nodes

    def shortest_path(self, start, end):
        distances, previous_nodes = self.dijkstra(start)
        path = []
        current_node = end

        while current_node is not None:
            path.append(current_node)
            current_node = previous_nodes[current_node]

        path.reverse()
        return path

# Example usage
if __name__ == "__main__":
    g = Graph()
    g.add_edge(1, 2, 1)
    g.add_edge(1, 3, 4)
    g.add_edge(2, 3, 2)
    g.add_edge(2, 4, 5)
    g.add_edge(3, 4, 1)

    start_node = 1
    end_node = 4

    distances, previous_nodes = g.dijkstra(start_node)
    path = g.shortest_path(start_node, end_node)

    print(f"Shortest distances from node {start_node}: {distances}")
    print(f"Shortest path from node {start_node} to node {end_node}: {path}")
`,
  },
  23: {
    question: `Write a python program to implement travelling salesman problem using Minimum spanning tree`,
    description: `Initialize:

Graph: Represent the graph with nodes and weighted edges.
Start Node: Choose a starting node for constructing the MST.
Construct MST:

Initialize:
Create an empty adjacency list for the MST.
Create a priority queue (min-heap) to manage edges.
Initialize all nodes as not visited.
Set the distance to the start node as 0.
Prim’s Algorithm:
Add the start node to the priority queue with a distance of 0.
While the priority queue is not empty:
Extract the node with the smallest distance from the queue.
If the node is not visited:
Mark it as visited.
Add its neighbors to the priority queue with their respective weights.
Add the edge to the MST adjacency list.
Generate TSP Tour:

Pre-order Traversal:
Perform a Depth-First Search (DFS) traversal on the MST starting from the start node.
Append each node to a tour list as you visit it.
Complete Tour:
Add the start node to the end of the tour list to form a cycle.
Return:

The tour list representing an approximate solution to the TSP.`,
    code: `import heapq
from collections import defaultdict, deque

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, u, v, weight):
        self.graph[u].append((v, weight))
        self.graph[v].append((u, weight))  # Add this line if the graph is undirected

    def prim_mst(self, start):
        mst = defaultdict(list)
        visited = set()
        min_heap = [(0, start, None)]  # (weight, current_node, previous_node)
        total_weight = 0

        while min_heap:
            weight, node, prev = heapq.heappop(min_heap)
            if node in visited:
                continue

            visited.add(node)
            if prev is not None:
                mst[prev].append((node, weight))
                mst[node].append((prev, weight))

            for neighbor, w in self.graph[node]:
                if neighbor not in visited:
                    heapq.heappush(min_heap, (w, neighbor, node))

        return mst

    def preorder_traversal(self, mst, start):
        def dfs(node, path):
            path.append(node)
            for neighbor, _ in mst[node]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    dfs(neighbor, path)

        visited = set([start])
        path = []
        dfs(start, path)
        return path

    def tsp_using_mst(self, start):
        mst = self.prim_mst(start)
        tour = self.preorder_traversal(mst, start)
        # To complete the tour, return to the starting node
        tour.append(start)
        return tour

# Example usage
if __name__ == "__main__":
    g = Graph()
    g.add_edge(1, 2, 10)
    g.add_edge(1, 3, 15)
    g.add_edge(2, 3, 35)
    g.add_edge(2, 4, 20)
    g.add_edge(3, 4, 30)

    start_node = 1
    tour = g.tsp_using_mst(start_node)

    print(f"Tour: {tour}")
`,
  },
};
