<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/baniere_holberton.png"></div>

# jQuery advanced

## Table of Contents :

- [Resources](#Resources)
- [Learning Objectives](#Learning-Objectives)
- [Requirements](#Requirements)
- [Task](#Task)
    - [0. Lexical scoping and welcome message](#subparagraph1)
    - [1. Creating a DOM element](#subparagraph2)
    - [2. Creating multiple DOM elements at once](#subparagraph3)
    - [3. Chain DOM elements](#subparagraph4)
    - [4. HTML function](#subparagraph5)
    - [5. Click attribute and remove function](#subparagraph6)
    - [6. Val, before, and prepend functions](#subparagraph7)
    - [7. Query - Setup your dev environment](#subparagraph8)
    - [8. Pagination](#subparagraph9)
    - [9. Wrap/unwrap](#subparagraph10)
    - [10. Another Get API](#subparagraph11)
    - [11. Post query](#subparagraph12)
    - [12. Delete query](#subparagraph13)
- [Authors](#Authors)

## Resources
### Read or watch:
* https://releases.jquery.com/
* https://api.jquery.com/
* https://github.com/typicode/json-server/tree/v0

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
* Learn how to load jQuery from a CDN in a page
* Learn the different ways to create DOM elements with jQuery
* Learn how to modify elements
* Learn how to add new elements to a page with different positions
* Learn how to add a click handler on an element
* Learn how to send GET, POST, DELETE or any type of AJAX query with jQuery
* Learn how to create a pagination


## Requirements
### General
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All your files should end with a new line
* A README.md file, at the root of the folder of the project, is mandator

## Task
### 0. Setup your dev environment <a name="subparagraph1"></a>

You are given this starter HTML for this task:

'''<!DOCTYPE html>
<html lang="en" dir="ltr">

    <head>

        <meta charset="utf-8" />
        <title>Task 0</title>

    </head>

    <body>

    </body>

</html>'''

In a file 0-index.html:

- Load the latest version of jQuery using their code.jquery.com CDN
- Use the Slim & minified version of jQuery
- When the page is being loaded, verify that jQuery is loaded correctly
- If jQuery is ready to be used, log to the console jQuery has been loaded correctly
- If jQuery has not been loaded properly, log to the console jQuery has not been loaded correctly

Requirements

- Make sure your code is in a script of type application/javascript

File: 0-index.html

### 1. Creating a DOM element <a name="subparagraph2"></a>

In a file 1-index.html, reuse the template you created previously.

* Remove the code that verifies jQuery loaded and logs messages to the console
* Create a function named createTextElement:
    - Within the function, create a p HTML element
    - The paragraph should display '''Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in diam risus. Nunc sit amet euismod ipsum. Aenean tempus ex sed est volutpat, sed sodales velit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin auctor sollicitudin eleifend. Vivamus porta enim vitae mauris commodo, vitae tempor tellus elementum. Quisque sed pellentesque nulla, at eleifend nisi. Phasellus eget tincidunt ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'''
    - Add the paragraph to the body of the page
* Call the createTextElement function

Requirements:

* You must use jQuery only to generate the HTML tag and   attach it to the page
* Use the keyword append to attach the element to the page

### 2. Creating multiple DOM elements at once <a name="subparagraph3"></a>

In a file 2-index.html, reuse the template you created previously.

* Remove the function createTextElement
* Create a function named createFamilyTree:
    - It should create a table element
        -The head of the table should display Firstname and Lastname in two cells
        -The body of the table should three rows
        -The first row should contain two cells with Guillaume and Salva
        -The second row should contain two cells with Paulette and Salva
        -The third row should contain two cells with Antoine and Salva
    - Use the keyword append only once to attach all the elements of the table to the page
* Call the createFamilyTree function

Requirements:

* You must use jQuery only to generate the HTML tag and attach it to the page
* The entire table code should be contained in one string
* The table created by your script should look like this:
<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/JQuery_advanced/table.png"></div>

### 3. Chain DOM elements <a name="subparagraph4"></a>

In a file 3-index.html, reuse the template you created previously. Reuse also the function named createFamilyTree:

* The table is containing the exact same values as the previous task
* This time, create each element one by one
* Use the keywords append for each element and text for the cells
* Do not create any intermediate variable
* Call the createFamilyTree function

Tips:

* You can append multiple elements at once, by separating the elements with a comma

Requirements:

* You must use jQuery only to generate the HTML tag and attach it to the page
* The table created by your script should look like this:
<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/JQuery_advanced/table.png"></div>

### 4. HTML function <a name="subparagraph5"></a>

In a file 4-index.html, reuse the template you created in the previous task. Reuse also the function named createFamilyTree.

* Create a new function replaceFamilyTree:
        - It should replace the children of the tbody elements with a new tr
        - The tr element should contain two cells with Gerard and Bonissa in each
* Make sure createFamilyTree and replaceFamilyTree are called

Requirements:

* You must use the keyword html to replace the content of the table
* The table created by your script should look like this
<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/JQuery_advanced/table2.png"></div>

### 5. Chain DOM elements <a name="subparagraph6"></a>

In a file 5-index.html, reuse the template you created previously.

* Remove the createFamilyTree and replaceFamilyTree functions
* Create a function createFamilyTree:
    - It should append to the body an empty table, with thead and two cells with text Firstname and Lastname, respectively
    - It should append an empty tbody element to the table after the thead
* Create a function addNewMember:
    - It accepts two arguments firstName(string) and lastName(string)
    - It appends to the body of the table a new row with three cells
    - The first cell displays the firstName, the second cell displays the lastName
    - The third cell displays (x)
    - On click on the third cell, it should remove the row
    - Add CSS to the third cell to have an orange background
* Calls the function createFamilyTree
* Using addNewMember, generate a fake table with:
    - the first row Guillaume, Salva
    - the second row Arielle, Snizt
    - the third row Fanette, Snizt
    - the fourth row Gerard, Snizt
    - the fifth row Victor, Salva

Requirements:

* You must use the keywords click, css, and remove
* The table created by your script should look like this:
<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/JQuery_advanced/table3.png"></div>

### 6. Chain DOM elements <a name="subparagraph7"></a>
### 7. Chain DOM elements <a name="subparagraph8"></a>
### 8. Chain DOM elements <a name="subparagraph9"></a>
### 9. Chain DOM elements <a name="subparagraph10"></a>
### 10. Chain DOM elements <a name="subparagraph11"></a>
### 11. Chain DOM elements <a name="subparagraph12"></a>
### 12. Chain DOM elements <a name="subparagraph13"></a>