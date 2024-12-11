<img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/baniere_holberton.png">

# jQuery advanced

## Table of Contents :

- [Resources](#Resources)
- [Learning Objectives](#Learning-Objectives)
- [Requirements](#Requirements)
- [Task](#Task)
    - [0. Lexical scoping and welcome message](#subparagraph1)
    - [1. Creating a DOM element](#subparagraph2)
- [Authors](#Authors)

## Resources
### Read or watch:
https://releases.jquery.com/
https://api.jquery.com/
https://github.com/typicode/json-server/tree/v0

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