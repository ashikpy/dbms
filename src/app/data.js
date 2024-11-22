export const CodeData = {
  1: {
    question: `For the data given below, perform the following;
    i) Bar plot; 
    ii) Vertical Bar plot; 
    iii) Scatter plot; 
    iv) Histogram;`,

    code: `
import pandas as pd
import matplotlib.pyplot as plt
df=pd.read_csv('https://raw.githubusercontent.com/ashikpy/csvs/refs/heads/main/plot.csv')
plt.barh(df['DAY'], df['SOLAR'])
plt.show()
plt.bar(df['DAY'], df['SOLAR'])
plt.show()
plt.scatter(df['DAY'],df['WIND'])
plt.show()
plt.hist(df['DAY'])
plt.show(
`,

    description: ``,
  },

  2: {
    question:
      "Use the array processing package perform the following.; i) Create a numpy array.; ii) Demonstrate Indexing in numpy array.; iii) Perform basic operations on a single array.",
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

    description: ``,
  },
  3: {
    question: `
    Write a python program to determine the distance between two points (x1,y1) and (x2,y2).
  `,

    description: ``,
    code: `
x1 = int(input("Enter the location x1: "))
y1 = int(input("Enter the location y1: "))
x2 = int(input("Enter the location x2: "))
y2 = int(input("Enter the location y2: "))
print("The distance between the points:", ((x2 x1)**2 + (y2 - - y1)**2)**0.5)

`,
  },

  4: {
    question: `
   Write a python program to arrange the given numbers/words in ascending/Descending order.
    `,
    description: ``,

    code: `
data = input("Enter numbers or words separated by space: ").split()
data = [int(i) if i.isdigit() else i.lower() for i in data]
order = input("Enter the order (ascending/descending): ").lower()
print(sorted (data, reverse=(order == "descending")))

`,
  },

  5: {
    question: `
        Perform the following using Pandas Data frame:;
    i) Create a data frame using list;
    ii) Create DataFrame from dict of narray/list;
    iii) Indexing a DataFrame using .loc[]
    `,
    description: ``,

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
    question: `Write a python program to generate Armstrong number.`,
    description: ``,
    code: `
n = int(input("Enter the number: "))
num_digits = len(str(n))
s, temp = 0, n
while n > 0:
s += (n % 10) ** num_digits
n //= 10
print("It is an Armstrong number." if s == temp else "It is not an Armstrong number.")
`,
  },
  7: {
    question: `Write a python program to check the given string is palindrome or not.`,
    description: ``,

    code: `
input_string = input("Enter a string: ").replace("", "").lower()
print(f"{input_string} is a palindrome." if
input_string==input_string[::-1] else f"{input_string} is not a palindrome.")
`,
  },
  8: {
    question: `Write a python program to find the area of shapes.`,
    description: ``,
    code: `
radius = float(input("Enter the radius of the circle: "))
print(f"The area of the circle is: 3.14 * radius ** 2}")
length = float(input("Enter the length of the rectangle: "))
width = float(input("Enter the width of the rectangle: "))
print(f"The area of the rectangle is: {length * width}")
base = float(input("Enter the base of the triangle: "))
height = float(input("Enter the height of the triangle: "))
print(f"The area of the triangle is: {0.5 * base * height}")
side = float(input("Enter the side of the square: "))
print(f"The area of the square is: {side ** 2}")
`,
  },
  9: {
    question: `Write a python program to find the greatest common divisor between two numbers`,
    description: ``,
    code: `
a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))
while b!= 0:
a, b = b, a% b
result = a
print("The GCD of number is: ", result)
`,
  },
  10: {
    question: `Perform Time series data visualization using Python.`,
    description: ``,
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
  11: {
    question: `Perform Exploratory Data Analysis on Wine Quality Data Set.`,
    description: ``,
    code: `
import pandas as pd
import matplotlib.pyplot as plt
df=pd.read_csv('https://raw.githubusercontent.com/ashikpy/csvs/refs/heads/main/wine.csv')
df.head()
df.hist(bins=10, figsize=(20, 14))
plt.show()
plt.scatter(df['alcohol'], df['quality'])
plt.xlabel('Alcohol')
plt.ylabel('Quality')
plt.title('Alcohol vs Quality')
plt.show()
print("\nMissing values per column:")
print(df.isnull().sum())
`,
  },
};
