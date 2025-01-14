<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/baniere_holberton.png"></div>

# Cookies & local storage

## Table of Contents :

- [Resources](#Resources)
- [Learning Objectives](#Learning-Objectives)
- [Requirements](#Requirements)
- [Task](#Task)
    - [0. Create basic cookie](#subparagraph1)
    - [1. Create cookie with expiration date and specific path](#subparagraph2)
    - [2. Read cookie](#subparagraph3)
    - [3. Delete cookie and mini application](#subparagraph4)
    - [4. Use js-cookie](#subparagraph5)
    - [5. Local storage](#subparagraph6)
    - [6. Session storage](#subparagraph7)
    - [7. Advanced use of web storage](#subparagraph8)
- [Authors](#Authors)

## Resources
### Read or watch:
* https://www.w3schools.com/js/js_cookies.asp
* https://developer.mozilla.org/fr/docs/Web/HTTP/Cookies
* https://github.com/js-cookie/js-cookie
* https://www.w3schools.com/html/html5_webstorage.asp

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
* Understand how to create cookies using Javascript
* Learn how to set specific settings for the cookie
* Learn how to read cookies with Javascript
* How to use js-cookie for easy cookie manipulation
* How to use the browser web storage
* The differences between local storage and session storage


## Requirements
### General
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All your files should end with a new line
* A README.md file, at the root of the folder of the project, is mandatory
* Your code should use the js extension
* All of your code will be compiled/executed on Ubuntu 18.04 using Node 12.x and npm 6.x
* src/index.js should stay empty - all your Javascript must be in your HTML, inside <script> tag

## Task
### 0. Create basic cookie <a name="subparagraph1"></a>

Install your development environment:

* Installwebpack-dev-server by running npm install webpack-dev-server --save-dev (if you have some errors of missing dependencies, install these packages: npm i -D webpack and npm i -D webpack-cli)
* Create an empty file src/index.js
* Run your server with node_modules/.bin/webpack-dev-server

In a file 0-index.html, create a basic html template:

* Add two text inputs, with the id firstname and email
* Add one button with the text “Log me in” that will call the function setCookies
* Add one button with the text “Show the cookies” that will call the function showCookies
* Create a function setCookies:
    - It should set the cookie firstname with the value in the firstname input
    - It should set the cookie email with the value in the email input
* Create a function showCookies:
    - It should create a DOM element p
    - It should set the inner html with Cookies: and the value of the cookie
    - It should append the paragraph at the bottom of the page

Requirements:

* Try to make your page to look as close to the image below as possible

<div align="center"><img src="./task0.png"></div>

* Access your code with http://localhost:8080/0-index.html
* Use vanilla javascript to complete the task

Tips:

* If you are using VSCode, you can use the plugin live server
* Make sure you have created and configured webpack.config.js

### 1. Create cookie with expiration date and specific path <a name="subparagraph2"></a>

In a file 1-index.html:

* Reuse the code of the previous task
* Modify the way you are setting cookies to expire in 10 days

Requirements:

* Access your code with http://localhost:8080/1-index.html
* Use vanilla javascript to complete the task

### 2. Read cookie <a name="subparagraph3"></a>

In a file 2-index.html:

* Reuse the code of the previous task

* Create a function getCookie:

  - It accepts name as argument
  - It should return the value of the cookie with the name passed in argument
  - If the cookie does not exist, it should return an empty string

* Modify the function showCookies:

  - It should display the paragraph Email: EMAIL - Firstname: FIRSTNAME

Requirements:

* Access your code with http://localhost:8080/2-index.html
* Use vanilla javascript to complete the task

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
<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/JQuery_advanced/readme_img/table.png"></div>

### 4. HTML function <a name="subparagraph5"></a>

In a file 4-index.html, reuse the template you created in the previous task. Reuse also the function named createFamilyTree.

* Create a new function replaceFamilyTree:
        - It should replace the children of the tbody elements with a new tr
        - The tr element should contain two cells with Gerard and Bonissa in each
* Make sure createFamilyTree and replaceFamilyTree are called

Requirements:

* You must use the keyword html to replace the content of the table
* The table created by your script should look like this
<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/JQuery_advanced/readme_img/table2.png"></div>

### 5. Click attribute and remove function <a name="subparagraph6"></a>

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
<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/JQuery_advanced/readme_img/table3.png"></div>

### 6. Val, before, and prepend functions <a name="subparagraph7"></a>

In a file 6-index.html, reuse the template you created previously.

* Reuse the function createFamilyTree you wrote in the previous task
* Reuse the function addNewMember you wrote in the previous task, and add the following modification:
        - The function should accept a new argument position(string)
        - When position is equal to before, it should add the row at the top of the table
        - Otherwise, it should add the row at the bottom of the table
* Write a function createForm:
    - It should add before the table two input of type text
    - It should add a select with two options as well: before and after with corresponding Before and After text
    - It should add a input of type submit as well
        - When the user clicks on the submit, it should call the function addNewMember with the value of the two inputs and the value of the select element
* Call the function createFamilyTree
* Call the function createForm

Requirements:

* You must use the keywords first, before, and prepend
* To select the second input, use the nth-of-type selector
* The form created by your script should look like this:
<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/JQuery_advanced/readme_img/form.png"></div>

### 7. Query - Setup your dev environment <a name="subparagraph8"></a>

In a file 7-index.html, reuse the template you created in the previous task

* Remove the functions from the script
* Import jQuery using the CDN and make sure you can access the ajax methods

* Create a form:

- Create a function createSearchForm, it should append to the body:
        - An empty input of type text without ID, name, or class
        - An input of type submit
            -When the user clicks on the submit button, it should query the function queryWikipedia that you are going to create with the value of the text input
        - An empty ul element
- Create a function addNewArticle to add new items to a list

    - It accepts three arguments id(string), title(string), and snippet(string)
    - It create an element li
        -Within the li, add two paragraph elements
            -The first paragraph contains a span tag with the following text: id -, then a b element with the title
            -The second paragraph, should contain the snippet
    - Appends the li to the ul element (created by createSearchForm)
- Implement a get function: create a function queryWikipedia

    - It accepts one argument search(string)
    - Create a data object with attributes required to query a search using the string passed in the argument with Wikipedia
    - For each result returned by the API, call the function addNewArticle with the result’s pageid, title, and snippet
- Call the function createSearchForm when the page loads

Requirements:

- Look at the documentation from Wikipedia to query the API https://www.mediawiki.org/wiki/API:Search
- Use the minified only version of jQuery, so you can access the ajax methods
- When adding the snippet, make sure that the HTML coming from Wikipedia is correctly displayed
- The form created by your script should look like this:
<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/JQuery_advanced/readme_img/form2.png"></div>

Query results should display like this:
<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/JQuery_advanced/readme_img/text.png"></div>

### 8. Pagination <a name="subparagraph9"></a>

In a file 8-index.html, reuse the code from the previous task

* Modify the function createSearchForm:

    - It should append to the body another list, with the id pagination

* Modify the function queryWikipedia:

    - Add a new parameter named offset(number)
    - By default, the offset should be set to 0
    - Modify the data object to add the offset
    - When you receive the response from the API, call the function buildPagination that you are going to create below

* Create a new function named buildPagination:

    - It accepts three arguments numberOfItems(number), itemsPerPage(number), and currentOffset(number)
    - When the function is called, reset the pagination list to an empty tag
    - Write a loop that will display the pagination (using the total number of items divided by the number of items per page)
    - For each page, create a list item
        - Add some CSS for each item (cursor: 'pointer', 10px margin left, and bold when this is the current page)
        - The text of the item should be the page number
        - When clicking on a page number, it should call the function queryWikipedia with the right offset

Requirements:

- Use the totalhits value from Wikipedia to define the total number of items
- Display 10 items per page
- Make sure your pages are displayed in an horizontal line

* The form created by your script should look like this:
<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/JQuery_advanced/readme_img/form2.png"></div>

The query results should display like this, notice how the 12 is in bold, because that is the current page
<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/JQuery_advanced/readme_img/text2.png"></div>


### 9. Wrap/unwrap <a name="subparagraph10"></a>

In a file 9-index.html, reuse the code from the previous task

* In the header, add some CSS, with the style tag:

    - Add a new class named loading
        - Set the opacity at 0.2 within that class

* In your script with your other functions, create a function named displayLoading:

    - It accepts one argument loading
    - It select the first ul element of the page
    - If loading is true, it wraps the element with a div tag and the class loading
    - If loading is false, it unwrap the ul from the div

* Modify the queryWikipedia function:

    - It should call the function displayLoading before querying the API
    - Once the API returns the value, it should remove the opacity by calling the function again

Requirements:

* You must use the wrap and unwrap functions of Jquery
* How the page should look when results are loading
<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/JQuery_advanced/readme_img/text3.png"></div>

### 10. Another Get API <a name="subparagraph11"></a>

Setup your dev environment

* Install json-server locally within your projects using npm:
* Run the server using node_modules/.bin/json-server --watch db.json

You are provided with this db.json, don’t forget to push it, you can change the values of the id, title, author, postId, name as you like

```{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    },
    {
      "title": "fd",
      "author": "fffff",
      "id": 2
    },
    {
      "title": "fd",
      "author": "fffff",
      "id": 3
    },
    {
      "title": "f",
      "author": "f",
      "id": 4
    },
    {
      "title": "",
      "author": "",
      "id": 5
    },
    {
      "title": "",
      "author": "",
      "id": 6
    },
    {
      "title": "",
      "author": "",
      "id": 7
    },
    {
      "title": "",
      "author": "",
      "id": 8
    },
    {
      "title": "",
      "author": "",
      "id": 9
    },
    {
      "title": "",
      "author": "",
      "id": 10
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

In a file 10-index.html:

* Reuse your template from the previous task, remove the functions in your script and the style in the head
* Make sure you import jQuery using the CDN and make sure you can access the ajax methods

* Create a function addPostRow:

    - It takes into argument data (object)
    - It append to the body a paragraph
    - The paragraph should contain a span element with the text Post created with id ID, title: TITLE, author: AUTHOR
        - Each variable is contained in the data object

* Create a function named listPosts:

    - It should query your local server on the posts endpoint
    - When the server return a 200 response, it should call the function addPostRow for each element in the response
    - When the server is unavailable, display an alert with the message Server Error

* Call the function listPosts when your page loads

Requirements:

- You must use the get function from jQuery

### 11. Post query <a name="subparagraph12"></a>

In a file 11-index.html, reuse the code you previously wrote

* Create a new function buildForm:

    - It appends to the body a form element
    - Inside the form, add a div element, with a label for author with text Author and an input of type text with id author
    - Inside the form, add a div element, with a label for title with text Title and a textarea with id title
    - Inside the form, add an input of type submit
    - When clicking on the submit button, call the function sendForm detailed below

* Create a new function sendForm:

    - It should add after the form, the text About to send the query to the API
    - It should create a data object, with the title and author attributes. The values are the ones within the inputs
    - It should send a POST query to your server endpoint posts with the data
    - If the query succeed, call the function addPostRow with the data coming back from the API
    - If the query does not succeed, it should display an alert with the message Error sending the POST query

* Call the functions listPosts and buildForm when your page loads

Requirements:

* When clicking on the label, the input text should be selected by the browser
* When pressing enter on the input text, the form should be submitted without reloading the page
* You must use the after function from jQuery
With the JSON server running, your 11-index.html should look something like this in your browser (does not have to be exactly the same, rows and values depend on what’s in your db.json)

<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/JQuery_advanced/readme_img/text4.png"></div>

### 12. Delete query <a name="subparagraph13"></a>

In a file 12-index.html, reuse your code from the previous task

* Modify the function addPostRow:

    - Add an id attribute to the paragraph with row-ID (the ID being the one of the post)
    - Append a span element with the text (delete) to the p, this span should come before the span with the post information
        - On click, call the function deletePost with the post id

* Create a function deletePost:

    - It accepts one argument id(number)
    - Send a DELETE query to the posts endpoint with the id of the post
    - If the query is successful, remove the row from the body
    - If the query is not successful, display an alert with the message Post was not deleted
Requirements:

* You must use the function remove from jQuery
With your JSON server running, 12-index.html should look like this in your browser, actual rows and values depend on what’s in your db.json
<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/JQuery_advanced/readme_img/text4.png"></div>
