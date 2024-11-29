export const CodeData = {
  1: {
    title: `
Perform the following:;
A. Create database;
B. Create employee tables (with constraints).;
C. Create a view for each table;
D. Perform Insert/delete/update operations.;`,
    code: `
CREATE DATABASE CompanyDB;
USE CompanyDB;
CREATE TABLE Employee (
EmployeeID INT PRIMARY KEY,FirstName VARCHAR(50) NOT NULL,LastName VARCHAR(50) NOT NULL,
Email VARCHAR(100) UNIQUE,HireDate DATE,Salary DECIMAL(10, 2),DepartmentID INT);
CREATE VIEW EmployeeView AS SELECT EmployeeID, FirstName, LastName, Email, HireDate, Salary FROM Employee;
INSERT INTO Employee (EmployeeID, FirstName, LastName, Email, HireDate, Salary, DepartmentID)
VALUES (1, 'John', 'Doe', 'john.doe@example.com', '2024-01-15', 50000.00, 101);
INSERT INTO Employee (EmployeeID, FirstName, LastName, Email, HireDate, Salary, DepartmentID)
VALUES (2, 'John day', 'Dosa', 'john.dosa@example.com', '2024-01-19', 8000.00, 108);
UPDATE Employee SET Salary = 55000.00 WHERE EmployeeID = 1;
DELETE FROM Employee WHERE EmployeeID = 1;
select * from Employee;
    `
  },
  2: {
    title: `
Create a employee table and perform the following operations;
A. Create a query to display first name and joining date of each employee in the order they
joined.;
B. Display the employee records whose salary is above 25000.;
C. Create a query to display the name of the employee whose salary is not in the range of
10000 and 50000.;`,
    code: `
create database db2;
use db2;
CREATE TABLE employee (
    employee_id INT PRIMARY KEY,first_name VARCHAR(100),last_name VARCHAR(100),
    salary DECIMAL(10, 2),joining_date DATE );
INSERT INTO employee (employee_id, first_name, last_name, salary, joining_date)
VALUES 
(1, 'John', 'Doe', 35000.00, '2023-06-15'),
(2, 'Jane', 'Smith', 55000.00, '2022-11-20'),
(3, 'Mike', 'Johnson', 22000.00, '2023-03-12'),
(6, 'Sarah', 'Miller', 10000.00, '2020-05-01');
SELECT first_name, joining_date FROM employee ORDER BY joining_date;
SELECT * FROM employee WHERE salary > 25000;
SELECT first_name FROM employee WHERE salary NOT BETWEEN 10000 AND 50000;`,
  },
  3: {
    title: `
Create a database as College and tables as student, teacher and management etc…;
Perform all then DCL and TCL functions.;`,
    code: `
CREATE DATABASE College;
USE College;
CREATE TABLE student (
    student_id INT PRIMARY KEY,first_name VARCHAR(100),last_name VARCHAR(100),
    date_of_birth DATE,grade VARCHAR(5)
);
CREATE TABLE teacher (
    teacher_id INT PRIMARY KEY,
    first_name VARCHAR(100),last_name VARCHAR(100),
    subject VARCHAR(100),hire_date DATE
);
CREATE TABLE management (
    management_id INT PRIMARY KEY,name VARCHAR(100),
    position VARCHAR(100),start_date DATE
);
INSERT INTO student (student_id, first_name, last_name, date_of_birth, grade)
VALUES 
(1, 'John', 'Doe', '2000-05-15', 'A'),
(2, 'Jane', 'Smith', '1999-08-22', 'B'),
(3, 'Mike', 'Johnson', '2001-02-10', 'C');
INSERT INTO teacher (teacher_id, first_name, last_name, subject, hire_date)
VALUES 
(1, 'Emily', 'Davis', 'Math', '2020-03-01'),
(2, 'David', 'Wilson', 'Science', '2019-11-20');
INSERT INTO management (management_id, name, position, start_date)
VALUES 
(1, 'Alice', 'Principal', '2015-07-01'),
(2, 'Bob', 'Vice Principal', '2017-09-15');
GRANT SELECT ON student TO 'root'@'localhost';
REVOKE SELECT ON student FROM 'root'@'localhost';
COMMIT;
ROLLBACK;
SAVEPOINT sp1;
`,
  },
  4: {
    title: `
Create tables for a customer applying for bank loan (employee, customer and loan).;
A. View the customer names whose account opening date from 01.06.2018 to till now.;
B. View the details of a customer whose loan amount is greater than 100000 in Coimbatore
branch.;
C. Create a view for customer table in order to prevent modification.;`,
    code: `
CREATE DATABASE db4;
USE db4;
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,FirstName VARCHAR(100),
    LastName VARCHAR(100),Position VARCHAR(100),Branch VARCHAR(100));
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,FirstName VARCHAR(100),LastName VARCHAR(100),
    AccountOpeningDate DATE,Address VARCHAR(255),Branch VARCHAR(100));
CREATE TABLE Loan (
    LoanID INT PRIMARY KEY,CustomerID INT, -- No foreign key constraint here
    LoanAmount DECIMAL(15, 2),LoanDate DATE,Branch VARCHAR(100));
INSERT INTO Employee (EmployeeID, FirstName, LastName, Position, Branch) 
VALUES (1, 'John', 'Doe', 'Loan Officer', 'Coimbatore'),
(2, 'Jane', 'Smith', 'Branch Manager', 'Coimbatore'),
(3, 'Alice', 'Johnson', 'Loan Officer', 'Chennai');
INSERT INTO Customer (CustomerID, FirstName, LastName, AccountOpeningDate, Address, Branch) 
VALUES (1, 'Raj', 'Kumar', '2019-05-10', '1234, ABC Street, Coimbatore', 'Coimbatore'),
(3, 'Vijay', 'Singh', '2018-02-25', '2345, DEF Lane, Chennai', 'Chennai'),
(4, 'Ananya', 'Sharma', '2022-08-15', '9876, GHI Avenue, Coimbatore', 'Coimbatore');
INSERT INTO Loan (LoanID, CustomerID, LoanAmount, LoanDate, Branch) 
VALUES (1, 1, 150000, '2023-06-15', 'Coimbatore'),
(2, 2, 50000, '2023-07-20', 'Coimbatore'),
(4, 4, 200000, '2023-08-01', 'Coimbatore');
SELECT FirstName, LastName FROM Customer 
WHERE AccountOpeningDate BETWEEN '2018-06-01' AND CURDATE();
SELECT c.CustomerID, c.FirstName, c.LastName, l.LoanAmount, l.LoanDate, l.Branch 
FROM Customer c JOIN Loan l ON c.CustomerID = l.CustomerID 
WHERE l.LoanAmount > 100000 AND l.Branch = 'Coimbatore';
CREATE VIEW ViewCustomer AS 
SELECT CustomerID, FirstName, LastName, AccountOpeningDate, Address, Branch 
FROM Customer;
SELECT * FROM ViewCustomer;`,
  }, 
  5: {
    title: `
Create a trigger for new employee.;
• Insert an new employee to the employee relation;
• Check the emp_no of the new employee tuple is not null or not.;
• If it is not null, update the department relation with newly inserted employee by adding
their salary to the total salary attribute to the concern department.;`,
    code: `
CREATE DATABASE EmployeeDB;
USE EmployeeDB;
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50) NOT NULL,LastName VARCHAR(50),DepartmentID INT,
    Salary DECIMAL(10, 2) CHECK (Salary > 0),HireDate DATE);
CREATE TABLE IF NOT EXISTS Departments (
    DepartmentID INT PRIMARY KEY,DepartmentName VARCHAR(100) NOT NULL UNIQUE,
    TotalSalary DECIMAL(15, 2) DEFAULT 0.00);
DELIMITER $$
CREATE TRIGGER AfterInsertEmployee
AFTER INSERT ON Employees
FOR EACH ROW
BEGIN
    IF NEW.EmployeeID IS NOT NULL THEN
        UPDATE Departments
        SET TotalSalary = TotalSalary + NEW.Salary
        WHERE DepartmentID = NEW.DepartmentID;
    END IF;
END$$
DELIMITER ;
INSERT INTO Departments (DepartmentID, DepartmentName) VALUES (1, 'Engineering');
INSERT INTO Employees (FirstName, LastName, DepartmentID, Salary) VALUES ('John', 'Doe', 1, 75000.00);
SELECT * FROM Employees;
SELECT * FROM Departments;
`,
  },
  6: {
    title: `
Create a procedure for incrementing rupees 2000 for those with experience less than 5 years
and 5000 for rest of all employees in an organization which uses employee table`,
    code: `
CREATE DATABASE db6;
USE db6;
CREATE TABLE employee ( employee_id INT PRIMARY KEY,first_name VARCHAR(100),
last_name VARCHAR(100),salary DECIMAL(15, 2),experience_years INT);
INSERT INTO employee (employee_id, first_name, last_name, salary, experience_years)
VALUES (1, 'John', 'Doe', 30000, 3),
(2, 'Jane', 'Smith', 50000, 6),
(4, 'Bob', 'Lee', 60000, 8);
DELIMITER $$
CREATE PROCEDURE IncrementSalary()
BEGIN
    UPDATE employee
    SET salary = salary + IF(experience_years < 5, 2000, 5000) WHERE employee_id > 0;
END$$
DELIMITER ;
CALL IncrementSalary();
SELECT * FROM employee;`,
  },
  7: {
    title: `
Create a procedure for customers who deposits and withdraw amount from the banking
systems`,
    code: `
CREATE DATABASE db7;
USE db7;
CREATE TABLE  Customer (
    CustomerID INT PRIMARY KEY,FirstName VARCHAR(100),
    LastName VARCHAR(100),AccountBalance DECIMAL(15, 2) DEFAULT 0.00);
INSERT INTO Customer (CustomerID, FirstName, LastName, AccountBalance) 
VALUES (1, 'Raj', 'Kumar', 5000.00),
(2, 'Vijay', 'Singh', 3000.00),
(3, 'Ananya', 'Sharma', 10000.00);
DELIMITER $$
CREATE PROCEDURE ManageTransaction(
    IN custID INT,IN transType VARCHAR(10),IN amount DECIMAL(15, 2))
BEGIN
    IF transType = 'Deposit' THEN
        UPDATE Customer SET AccountBalance = AccountBalance + amount
        WHERE CustomerID = custID;
    ELSEIF transType = 'Withdraw' THEN
        UPDATE Customer SET AccountBalance = AccountBalance - amount
        WHERE CustomerID = custID AND AccountBalance >= amount;
    END IF;
END $$
DELIMITER ;
CALL ManageTransaction(1, 'Deposit', 1500.00);
CALL ManageTransaction(2, 'Withdraw', 1000.00);
CALL ManageTransaction(2, 'Withdraw', 5000.00);
CALL ManageTransaction(3, 'Deposit', 2000.00);
select * from customer;`,
  },
  8: {
    title: `
Creating a function for calculating net salary for all employees in an organization using an
employee table`,
    code: `
create database db8;
use db8;
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,FirstName VARCHAR(100),
    LastName VARCHAR(100),BasicSalary DECIMAL(15, 2),
    Bonus DECIMAL(15, 2),Deductions DECIMAL(15, 2),Allowances DECIMAL(15, 2));
INSERT INTO Employee (EmployeeID, FirstName, LastName, BasicSalary, Bonus, Deductions, Allowances)
VALUES (1, 'John', 'Doe', 50000, 5000, 2000, 3000),  -- Employee 1
(2, 'Jane', 'Smith', 60000, 4000, 1500, 3500),  -- Employee 2
(3, 'Alice', 'Johnson', 55000, 3000, 1000, 2500);  -- Employee 3
DELIMITER $$
CREATE FUNCTION CalculateNetSalary(empID INT) 
RETURNS DECIMAL(15, 2)
DETERMINISTIC
BEGIN
    DECLARE netSalary DECIMAL(15, 2);
    SELECT 
        (BasicSalary + Bonus - Deductions + Allowances) INTO netSalary
    FROM Employee
    WHERE EmployeeID = empID;
    RETURN netSalary;
END $$
DELIMITER ;
SELECT CalculateNetSalary(1);`,
  },
};
