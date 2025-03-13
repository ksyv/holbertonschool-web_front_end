<div align="center"><img src="https://github.com/ksyv/holbertonschool-web_front_end/blob/main/baniere_holberton.png"></div>

# Resources

## Table of Contents :

  - [0. Setup your dev environment](#subparagraph0)
  - [1. Creating a DOM element](#subparagraph1)
  - [2. Creating multiple DOM elements at once](#subparagraph2)
  - [3. Chain DOM elements](#subparagraph3)
  - [4. HTML function](#subparagraph4)
  - [5. Click attribute and remove function](#subparagraph5)
  - [6. Val, before, and prepend functions](#subparagraph6)
  - [7. Query - Setup your dev environment](#subparagraph7)
  - [8. Pagination](#subparagraph8)
  - [9. Wrap/unwrap](#subparagraph9)
  - [10. Another Get API](#subparagraph10)
  - [11. Post query](#subparagraph11)
  - [12. Delete query](#subparagraph12)
  - [13. Tasks list](#subparagraph13)

## Resources
### Read or watch:
* [jQuery CDN](/rltoken/iOz8wEa7kAwnzFOjpBvXbw)
* [jQuery API Documentation](/rltoken/JbOOsa1cUaTDLbOlenMgsQ)
* [Json server](/rltoken/LzW-VhO8IFImmyt6UDvaHQ)

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
* Allowed editors:vi,vim,emacs,Visual Studio Code
* All your files should end with a new line
* AREADME.mdfile, at the root of the folder of the project, is mandatory

## Task
### 0. Setup your dev environment <a name='subparagraph0'></a>

You are given this starter HTML for this task:

`html
<!DOCTYPE html>
<html lang="en" dir="ltr">

    <head>

        <meta charset="utf-8" />
        <title>Task 0</title>

    </head>

    <body>

    </body>

</html>
`

<strong>In a file <code>0-index.html</code>:</strong>

* Load the latest version of jQuery using their <code>code.jquery.com</code> CDN
* Use the Slim & minified version of jQuery
* When the page is being loaded, verify that jQuery is loaded correctly
* If jQuery is ready to be used, log to the console <code>jQuery has been loaded correctly</code>
* If jQuery has not been loaded properly, log to the console <code>jQuery has not been loaded correctly</code>

<strong>Requirements</strong>

* Make sure your code is in a <code>script</code> of type <code>application/javascript</code>

---

### 1. Creating a DOM element <a name='subparagraph1'></a>

<strong>In a file <code>1-index.html</code>, reuse the template you created previously.</strong>

* Remove the code that verifies jQuery loaded and logs messages to the console
* Create a function named <code>createTextElement</code>:


  * Within the function, create a <code>p</code> HTML element
  * The paragraph should display <code>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in diam risus. Nunc sit amet euismod ipsum. Aenean tempus ex sed est volutpat, sed sodales velit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin auctor sollicitudin eleifend. Vivamus porta enim vitae mauris commodo, vitae tempor tellus elementum. Quisque sed pellentesque nulla, at eleifend nisi. Phasellus eget tincidunt ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</code>
  * Add the paragraph to the <code>body</code> of the page
* Call the <code>createTextElement</code> function

<strong>Requirements:</strong>

* You must use jQuery only to generate the HTML tag and attach it to the page
* Use the keyword <code>append</code> to attach the element to the page

---

### 2. Creating multiple DOM elements at once <a name='subparagraph2'></a>

<strong>In a file <code>2-index.html</code>, reuse the template you created previously.</strong>

* Remove the function <code>createTextElement</code>
* Create a function named <code>createFamilyTree</code>:


  * It should create a table element


    * The head of the table should display <code>Firstname</code> and <code>Lastname</code> in two cells
    * The body of the table should three rows
    * The first row should contain two cells with <code>Guillaume</code> and <code>Salva</code>
    * The second row should contain two cells with <code>Paulette</code> and <code>Salva</code>
    * The third row should contain two cells with <code>Antoine</code> and <code>Salva</code>
  * Use the keyword <code>append</code> only once to attach all the elements of the table to the page
* Call the <code>createFamilyTree</code> function

<strong>Requirements:</strong>

* You must use jQuery only to generate the HTML tag and attach it to the page
* The entire table code should be contained in one string

<strong>The table created by your script should look like this</strong>



---

### 3. Chain DOM elements <a name='subparagraph3'></a>

<strong>In a file <code>3-index.html</code>, reuse the template you created previously. Reuse also the function named <code>createFamilyTree</code>:</strong>

* The table is containing the exact same values as the previous task
* This time, create each element one by one
* Use the keywords <code>append</code> for each element and <code>text</code> for the cells
* Do not create any intermediate variable
* Call the <code>createFamilyTree</code> function

<strong>Tips:</strong>

* You can append multiple elements at once, by separating the elements with a comma

<strong>Requirements:</strong>

* You must use jQuery only to generate the HTML tag and attach it to the page

<strong>The table created by your script should look like this</strong>



---

### 4. HTML function <a name='subparagraph4'></a>

<strong>In a file <code>4-index.html</code>, reuse the template you created in the previous task. Reuse also the function named <code>createFamilyTree</code>.</strong>

* Create a new function <code>replaceFamilyTree</code>:


  * It should replace the children of the <code>tbody</code> elements with a new <code>tr</code>
  * The <code>tr</code> element should contain two cells with <code>Gerard</code> and <code>Bonissa</code> in each
* Make sure <code>createFamilyTree</code> and <code>replaceFamilyTree</code> are called

<strong>Requirements:</strong>

* You must use the keyword <code>html</code> to replace the content of the table

<strong>The table created by your script should look like this</strong>



---

### 5. Click attribute and remove function <a name='subparagraph5'></a>

<strong>In a file <code>5-index.html</code>, reuse the template you created previously.</strong>

* Remove the <code>createFamilyTree</code> and <code>replaceFamilyTree</code> functions
* Create a function <code>createFamilyTree</code>:


  * It should append to the <code>body</code> an empty table, with <code>thead</code> and two cells with text <code>Firstname</code> and <code>Lastname</code>, respectively
  * It should append an empty <code>tbody</code> element to the <code>table</code> after the <code>thead</code>
* Create a function <code>addNewMember</code>:


  * It accepts two arguments <code>firstName</code>(string) and <code>lastName</code>(string)
  * It appends to the body of the <code>table</code> a new row with three cells
  * The first cell displays the <code>firstName</code>, the second cell displays the <code>lastName</code>
  * The third cell displays <code>(x)</code>
  * On click on the third cell, it should remove the row
  * Add CSS to the third cell to have an <code>orange</code> background
* Calls the function <code>createFamilyTree</code>
* Using <code>addNewMember</code>, generate a fake table with:


  * the first row <code>Guillaume</code>, <code>Salva</code>
  * the second row <code>Arielle</code>, <code>Snizt</code>
  * the third row <code>Fanette</code>, <code>Snizt</code>
  * the fourth row <code>Gerard</code>, <code>Snizt</code>
  * the fifth row <code>Victor</code>, <code>Salva</code>

<strong>Requirements:</strong>

* You must use the keywords <code>click</code>, <code>css</code>, and <code>remove</code>

<strong>The table created by your script should look like this:</strong>



---

### 6. Val, before, and prepend functions <a name='subparagraph6'></a>

<strong>In a file <code>6-index.html</code>, reuse the template you created previously.</strong>

* Reuse the function <code>createFamilyTree</code> you wrote in the previous task
* Reuse the function <code>addNewMember</code> you wrote in the previous task, and add the following modification:


  * The function should accept a new argument <code>position</code>(string)
  * When position is equal to <code>before</code>, it should add the row at the top of the table
  * Otherwise, it should add the row at the bottom of the table
* Write a function <code>createForm</code>:


  * It should add before the table two <code>input</code> of type <code>text</code>
  * It should add a <code>select</code> with two options as well: <code>before</code> and <code>after</code> with corresponding <code>Before</code> and <code>After</code> text
  * It should add a <code>input</code> of type <code>submit</code> as well


    * When the user clicks on the submit, it should call the function <code>addNewMember</code> with the value of the two inputs and the value of the select element
* Call the function <code>createFamilyTree</code>
* Call the function <code>createForm</code>

<strong>Requirements:</strong>

* You must use the keywords <code>first</code>, <code>before</code>, and <code>prepend</code>
* To select the second input, use the <code>nth-of-type</code> selector

<strong>The form created by your script should look like this:</strong>



---

### 7. Query - Setup your dev environment <a name='subparagraph7'></a>

<strong>In a file <code>7-index.html</code>, reuse the template you created in the previous task</strong>

* Remove the functions from the <code>script</code>
* 
* * Create a function <code>createSearchForm</code>, it should append to the body:


    * An empty <code>input</code> of type <code>text</code> without ID, name, or class
    * An <code>input</code> of type <code>submit</code>

      * When the user clicks on the submit button, it should query the function <code>queryWikipedia</code> that you are going to create with the value of the text <code>input</code>
    * An empty <code>ul</code> element
* * It accepts three arguments <code>id</code>(string), <code>title</code>(string), and <code>snippet</code>(string)
  * It create an element <code>li</code>

    * Within the <code>li</code>, add two <code>paragraph</code> elements


      * The first paragraph contains a <code>span</code> tag with the following text: <code>id -</code>, then a <code>b</code> element with the <code>title</code>
      * The second paragraph, should contain the <code>snippet</code>
  * Appends the <code>li</code> to the <code>ul</code> element (created by <code>createSearchForm</code>)
* * It accepts one argument <code>search</code>(string)
  * Create a data object with attributes required to query a search using the string passed in the argument with Wikipedia
  * For each result returned by the API, call the function <code>addNewArticle</code> with the result’s <code>pageid</code>, <code>title</code>, and <code>snippet</code>
* 

<strong>Requirements:</strong>

* Look at the documentation from Wikipedia to query the API <code>https://www.mediawiki.org/wiki/API:Search</code>
* Use the minified only version of jQuery, so you can access the ajax methods
* When adding the <code>snippet</code>, make sure that the HTML coming from Wikipedia is correctly displayed

<strong>The form created by your script should look like this:</strong>



<strong>Query results should display like this:</strong>



---

### 8. Pagination <a name='subparagraph8'></a>

<strong>In a file <code>8-index.html</code>, reuse the code from the previous task</strong>

* * It should append to the body another list, with the id <code>pagination</code>
* * Add a new parameter named <code>offset</code>(number)
  * By default, the offset should be set to <code>0</code>
  * Modify the data object to add the <code>offset</code>
  * When you receive the response from the API, call the function <code>buildPagination</code> that you are going to create below
* * It accepts three arguments <code>numberOfItems</code>(number), <code>itemsPerPage</code>(number), and <code>currentOffset</code>(number)
  * When the function is called, reset the pagination list to an empty tag
  * Write a loop that will display the pagination (using the total number of items divided by the number of items per page)
  * For each page, create a list item


    * Add some CSS for each item (<code>cursor: 'pointer'</code>, <code>10px</code> margin left, and bold when this is the current page)
    * The text of the item should be the page number
    * When clicking on a page number, it should call the function <code>queryWikipedia</code> with the right offset

<strong>Requirements:</strong>

* Use the <code>totalhits</code> value from Wikipedia to define the total number of items
* Display 10 items per page
* Make sure your pages are displayed in an horizontal line

<strong>The form created by your script should look like this:</strong>



<strong>The query results should display like this, notice how the <code>12</code> is in bold, because that is the current page</strong>



---

### 9. Wrap/unwrap <a name='subparagraph9'></a>

<strong>In a file <code>9-index.html</code>, reuse the code from the previous task</strong>

* * Add a new class named <code>loading</code>

    * Set the opacity at 0.2 within that class
* * It accepts one argument <code>loading</code>
  * It select the first <code>ul</code> element of the page
  * If <code>loading</code> is true, it wraps the element with a <code>div</code> tag and the class <code>loading</code>
  * If <code>loading</code> is false, it unwrap the <code>ul</code> from the <code>div</code>
* * It should call the function <code>displayLoading</code> before querying the API
  * Once the API returns the value, it should remove the opacity by calling the function again

<strong>Requirements:</strong>

* You must use the <code>wrap</code> and <code>unwrap</code> functions of Jquery

<strong>How the page should look when results are loading</strong>



---

### 10. Another Get API <a name='subparagraph10'></a>

<strong>Setup your dev environment</strong>

* Install <code>json-server</code> locally within your projects using <code>npm</code>:
* Run the server using <code>node_modules/.bin/json-server --watch db.json</code>

<strong>You are provided with this <code>db.json</code>, don’t forget to push it, you can change the values of the <code>id</code>, <code>title</code>, <code>author</code>, <code>postId</code>, <code>name</code> as you like</strong>

`html
{
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
`

<strong>In a file <code>10-index.html</code>:</strong>

* Reuse your template from the previous task, remove the functions in your <code>script</code> and the <code>style</code> in the head
* 
* * It takes into argument <code>data</code> (object)
  * It append to the body a paragraph
  * The paragraph should contain a <code>span</code> element with the text <code>Post created with id ID, title: TITLE, author: AUTHOR</code>

    * Each variable is contained in the <code>data</code> object
* * It should query your local server on the <code>posts</code> endpoint
  * When the server return a 200 response, it should call the function <code>addPostRow</code> for each element in the response
  * When the server is unavailable, display an alert with the message <code>Server Error</code>
* 

<strong>Requirements:</strong>

* You must use the <code>get</code> function from jQuery

---

### 11. Post query <a name='subparagraph11'></a>

<strong>In a file <code>11-index.html</code>, reuse the code you previously wrote</strong>

* * It appends to the body a <code>form</code> element
  * Inside the form, add a <code>div</code> element, with a <code>label</code> for <code>author</code> with text <code>Author</code> and an <code>input</code> of type <code>text</code> with id <code>author</code>
  * Inside the form, add a <code>div</code> element, with a <code>label</code> for <code>title</code> with text <code>Title</code> and a <code>textarea</code> with id <code>title</code>
  * Inside the form, add an <code>input</code> of type <code>submit</code>
  * When clicking on the submit button, call the function <code>sendForm</code> detailed below
* * It should add after the <code>form</code>, the text <code>About to send the query to the API</code>
  * It should create a data object, with the <code>title</code> and <code>author</code> attributes. The values are the ones within the inputs
  * It should send a <code>POST</code> query to your server endpoint <code>posts</code> with the data
  * If the query succeed, call the function <code>addPostRow</code> with the data coming back from the API
  * If the query does not succeed, it should display an alert with the message <code>Error sending the POST query</code>
* 

<strong>Requirements:</strong>

* When clicking on the label, the input text should be selected by the browser
* When pressing enter on the input text, the form should be submitted without reloading the page
* You must use the <code>after</code> function from jQuery

<strong>With the JSON server running, your <code>11-index.html</code> should look something like this in your browser (does not have to be exactly the same, rows and values depend on what’s in your <code>db.json</code>)</strong>



---

### 12. Delete query <a name='subparagraph12'></a>

<strong>In a file <code>12-index.html</code>, reuse your code from the previous task</strong>

* * Add an id attribute to the paragraph with <code>row-ID</code> (the ID being the one of the post)
  * Append a <code>span</code> element with the text <code>(delete)</code> to the <code>p</code>, this <code>span</code> should come before the <code>span</code> with the post information


    * On click, call the function <code>deletePost</code> with the post id
* * It accepts one argument <code>id</code>(number)
  * Send a <code>DELETE</code> query to the <code>posts</code> endpoint with the id of the post
  * If the query is successful, remove the row from the body
  * If the query is not successful, display an alert with the message <code>Post was not deleted</code>

<strong>Requirements:</strong>

* You must use the function <code>remove</code> from jQuery

<strong>With your JSON server running, <code>12-index.html</code> should look like this in your browser, actual rows and values depend on what’s in your <code>db.json</code></strong>



---

### 13. Tasks list <a name='subparagraph13'></a>

* <a data-toggle="tab" href="#mandatory" role="tab">Mandatory</a>
* <a data-toggle="tab" href="#advanced" role="tab">Advanced</a>

---


## Authors
Your Name - [Your GitHub Profile](https://github.com/yourusername)
