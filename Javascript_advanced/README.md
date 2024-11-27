<img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/baniere_holberton.png">

# JavaScript advanced

## Table of Contents :

- [Resources](#Resources)
- [Learning Objectives](#Learning-Objectives)
- [Requirements](#Requirements)
- [Task](#Task)
- - [0. Lexical scoping and welcome message] (#0.-Lexical-scoping-and-welcome-message)
- [Authors](#Authors)

## Resources
### Read or watch:
https://intranet.hbtn.io/rltoken/ePGYHoF7G6QtQLrAo5jXBA
https://intranet.hbtn.io/rltoken/5hVqVK9QjNOzh_xsPtPxag
https://intranet.hbtn.io/rltoken/Z5BRWGr9-D30Tn9e8y6uAw
https://intranet.hbtn.io/rltoken/1jcQ4CgKqN2c3X3xHFbW5Q
https://intranet.hbtn.io/rltoken/SIcSmzcprPwCWcwAOo6qaw

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
* What is lexical scoping in JavaScript
* What is closure in JavaScript
* How to use closure
* How to chain different closures
* How to simulate private methods with Closure
* The execution stack order with JavaScript
* How to use binding
* How to use callbacks


## Requirements
### General
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All your files should end with a new line
* A README.md file, at the root of the folder of the project, is mandatory
* Your code should use the js extension

## Task
### 0. Lexical scoping and welcome message

Create a function named welcome:

- It takes two arguments: firstName (string) and lastName (string)
- It contains a variable named fullName, that will contains the firstName followed by a space and then the lastName
- Within the welcome function, write a function named displayFullName:
- It should display an alert with the message Welcome + the variable fullName + and exclamation mark.
- Call the function displayFullName at the end of the function welcome

How to test

- Open your web inspector in the tab “Console”
- Copy paste your code
- Run welcome('Holberton', 'School'); should prompt an alert with this content: Welcome Holberton School!
- alert(fullName), should return a reference error fullName is not defined

File: 0-welcome.js