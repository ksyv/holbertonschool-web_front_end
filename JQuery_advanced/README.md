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

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

    <head>

        <meta charset="utf-8" />
        <title>Task 0</title>

    </head>

    <body>

    </body>

</html>
```

In a file 0-index.html :

* Load the latest version of jQuery using theircode.jquery.comCDN
* Use the Slim & minified version of jQuery
* When the page is being loaded, verify that jQuery is loaded correctly
* If jQuery is ready to be used, log to the consolejQuery has been loaded correctly
* If jQuery has not been loaded properly, log to the consolejQuery has not been loaded correctly

Requirements

* Make sure your code is in ascriptof typeapplication/javascript

---

### 1. Creating a DOM element <a name='subparagraph1'></a>

In a file 1-index.html , reuse the template you created previously.

* Remove the code that verifies jQuery loaded and logs messages to the console
* Create a function namedcreateTextElement:Within the function, create apHTML elementThe paragraph should displayLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in diam risus. Nunc sit amet euismod ipsum. Aenean tempus ex sed est volutpat, sed sodales velit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin auctor sollicitudin eleifend. Vivamus porta enim vitae mauris commodo, vitae tempor tellus elementum. Quisque sed pellentesque nulla, at eleifend nisi. Phasellus eget tincidunt ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Add the paragraph to thebodyof the page
* Within the function, create apHTML element
* The paragraph should displayLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in diam risus. Nunc sit amet euismod ipsum. Aenean tempus ex sed est volutpat, sed sodales velit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin auctor sollicitudin eleifend. Vivamus porta enim vitae mauris commodo, vitae tempor tellus elementum. Quisque sed pellentesque nulla, at eleifend nisi. Phasellus eget tincidunt ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
* Add the paragraph to thebodyof the page
* Call thecreateTextElementfunction

Requirements:

* You must use jQuery only to generate the HTML tag and attach it to the page
* Use the keywordappendto attach the element to the page

---

### 2. Creating multiple DOM elements at once <a name='subparagraph2'></a>

In a file 2-index.html , reuse the template you created previously.

* Remove the functioncreateTextElement
* Create a function namedcreateFamilyTree:It should create a table elementThe head of the table should displayFirstnameandLastnamein two cellsThe body of the table should three rowsThe first row should contain two cells withGuillaumeandSalvaThe second row should contain two cells withPauletteandSalvaThe third row should contain two cells withAntoineandSalvaUse the keywordappendonly once to attach all the elements of the table to the page
* It should create a table elementThe head of the table should displayFirstnameandLastnamein two cellsThe body of the table should three rowsThe first row should contain two cells withGuillaumeandSalvaThe second row should contain two cells withPauletteandSalvaThe third row should contain two cells withAntoineandSalva
* The head of the table should displayFirstnameandLastnamein two cells
* The body of the table should three rows
* The first row should contain two cells withGuillaumeandSalva
* The second row should contain two cells withPauletteandSalva
* The third row should contain two cells withAntoineandSalva
* Use the keywordappendonly once to attach all the elements of the table to the page
* Call thecreateFamilyTreefunction

Requirements:

* You must use jQuery only to generate the HTML tag and attach it to the page
* The entire table code should be contained in one string

The table created by your script should look like this



---

### 3. Chain DOM elements <a name='subparagraph3'></a>

In a file 3-index.html , reuse the template you created previously. Reuse also the function named createFamilyTree :

* The table is containing the exact same values as the previous task
* This time, create each element one by one
* Use the keywordsappendfor each element andtextfor the cells
* Do not create any intermediate variable
* Call thecreateFamilyTreefunction

Tips:

* You can append multiple elements at once, by separating the elements with a comma

Requirements:

* You must use jQuery only to generate the HTML tag and attach it to the page

The table created by your script should look like this



---

### 4. HTML function <a name='subparagraph4'></a>

In a file 4-index.html , reuse the template you created in the previous task. Reuse also the function named createFamilyTree .

* Create a new functionreplaceFamilyTree:It should replace the children of thetbodyelements with a newtrThetrelement should contain two cells withGerardandBonissain each
* It should replace the children of thetbodyelements with a newtr
* Thetrelement should contain two cells withGerardandBonissain each
* Make surecreateFamilyTreeandreplaceFamilyTreeare called

Requirements:

* You must use the keywordhtmlto replace the content of the table

The table created by your script should look like this



---

### 5. Click attribute and remove function <a name='subparagraph5'></a>

In a file 5-index.html , reuse the template you created previously.

* Remove thecreateFamilyTreeandreplaceFamilyTreefunctions
* Create a functioncreateFamilyTree:It should append to thebodyan empty table, withtheadand two cells with textFirstnameandLastname, respectivelyIt should append an emptytbodyelement to thetableafter thethead
* It should append to thebodyan empty table, withtheadand two cells with textFirstnameandLastname, respectively
* It should append an emptytbodyelement to thetableafter thethead
* Create a functionaddNewMember:It accepts two argumentsfirstName(string) andlastName(string)It appends to the body of thetablea new row with three cellsThe first cell displays thefirstName, the second cell displays thelastNameThe third cell displays(x)On click on the third cell, it should remove the rowAdd CSS to the third cell to have anorangebackground
* It accepts two argumentsfirstName(string) andlastName(string)
* It appends to the body of thetablea new row with three cells
* The first cell displays thefirstName, the second cell displays thelastName
* The third cell displays(x)
* On click on the third cell, it should remove the row
* Add CSS to the third cell to have anorangebackground
* Calls the functioncreateFamilyTree
* UsingaddNewMember, generate a fake table with:the first rowGuillaume,Salvathe second rowArielle,Sniztthe third rowFanette,Sniztthe fourth rowGerard,Sniztthe fifth rowVictor,Salva
* the first rowGuillaume,Salva
* the second rowArielle,Snizt
* the third rowFanette,Snizt
* the fourth rowGerard,Snizt
* the fifth rowVictor,Salva

Requirements:

* You must use the keywordsclick,css, andremove

The table created by your script should look like this:



---

### 6. Val, before, and prepend functions <a name='subparagraph6'></a>

In a file 6-index.html , reuse the template you created previously.

* Reuse the functioncreateFamilyTreeyou wrote in the previous task
* Reuse the functionaddNewMemberyou wrote in the previous task, and add the following modification:The function should accept a new argumentposition(string)When position is equal tobefore, it should add the row at the top of the tableOtherwise, it should add the row at the bottom of the table
* The function should accept a new argumentposition(string)
* When position is equal tobefore, it should add the row at the top of the table
* Otherwise, it should add the row at the bottom of the table
* Write a functioncreateForm:It should add before the table twoinputof typetextIt should add aselectwith two options as well:beforeandafterwith correspondingBeforeandAftertextIt should add ainputof typesubmitas wellWhen the user clicks on the submit, it should call the functionaddNewMemberwith the value of the two inputs and the value of the select element
* It should add before the table twoinputof typetext
* It should add aselectwith two options as well:beforeandafterwith correspondingBeforeandAftertext
* It should add ainputof typesubmitas wellWhen the user clicks on the submit, it should call the functionaddNewMemberwith the value of the two inputs and the value of the select element
* When the user clicks on the submit, it should call the functionaddNewMemberwith the value of the two inputs and the value of the select element
* Call the functioncreateFamilyTree
* Call the functioncreateForm

Requirements:

* You must use the keywordsfirst,before, andprepend
* To select the second input, use thenth-of-typeselector

The form created by your script should look like this:



---

### 7. Query - Setup your dev environment <a name='subparagraph7'></a>

In a file 7-index.html , reuse the template you created in the previous task

* Remove the functions from thescript
* Import jQuery using the CDN and make sure you can access the ajax methods
* Create a form:Create a functioncreateSearchForm, it should append to the body:An emptyinputof typetextwithout ID, name, or classAninputof typesubmitWhen the user clicks on the submit button, it should query the functionqueryWikipediathat you are going to create with the value of the textinputAn emptyulelement
* Create a functioncreateSearchForm, it should append to the body:An emptyinputof typetextwithout ID, name, or classAninputof typesubmitWhen the user clicks on the submit button, it should query the functionqueryWikipediathat you are going to create with the value of the textinputAn emptyulelement
* An emptyinputof typetextwithout ID, name, or class
* Aninputof typesubmitWhen the user clicks on the submit button, it should query the functionqueryWikipediathat you are going to create with the value of the textinput
* When the user clicks on the submit button, it should query the functionqueryWikipediathat you are going to create with the value of the textinput
* An emptyulelement
* Create a functionaddNewArticleto add new items to a listIt accepts three argumentsid(string),title(string), andsnippet(string)It create an elementliWithin theli, add twoparagraphelementsThe first paragraph contains aspantag with the following text:id -, then abelement with thetitleThe second paragraph, should contain thesnippetAppends thelito theulelement (created bycreateSearchForm)
* It accepts three argumentsid(string),title(string), andsnippet(string)
* It create an elementliWithin theli, add twoparagraphelementsThe first paragraph contains aspantag with the following text:id -, then abelement with thetitleThe second paragraph, should contain thesnippet
* Within theli, add twoparagraphelementsThe first paragraph contains aspantag with the following text:id -, then abelement with thetitleThe second paragraph, should contain thesnippet
* The first paragraph contains aspantag with the following text:id -, then abelement with thetitle
* The second paragraph, should contain thesnippet
* Appends thelito theulelement (created bycreateSearchForm)
* Implement a get function: create a functionqueryWikipediaIt accepts one argumentsearch(string)Create a data object with attributes required to query a search using the string passed in the argument with WikipediaFor each result returned by the API, call the functionaddNewArticlewith the result’spageid,title, andsnippet
* It accepts one argumentsearch(string)
* Create a data object with attributes required to query a search using the string passed in the argument with Wikipedia
* For each result returned by the API, call the functionaddNewArticlewith the result’spageid,title, andsnippet
* Call the functioncreateSearchFormwhen the page loads

Requirements:

* Look at the documentation from Wikipedia to query the APIhttps://www.mediawiki.org/wiki/API:Search
* Use the minified only version of jQuery, so you can access the ajax methods
* When adding thesnippet, make sure that the HTML coming from Wikipedia is correctly displayed

The form created by your script should look like this:



Query results should display like this:



---

### 8. Pagination <a name='subparagraph8'></a>

In a file 8-index.html , reuse the code from the previous task

* Modify the functioncreateSearchForm:It should append to the body another list, with the idpagination
* It should append to the body another list, with the idpagination
* Modify the functionqueryWikipedia:Add a new parameter namedoffset(number)By default, the offset should be set to0Modify the data object to add theoffsetWhen you receive the response from the API, call the functionbuildPaginationthat you are going to create below
* Add a new parameter namedoffset(number)
* By default, the offset should be set to0
* Modify the data object to add theoffset
* When you receive the response from the API, call the functionbuildPaginationthat you are going to create below
* Create a new function namedbuildPagination:It accepts three argumentsnumberOfItems(number),itemsPerPage(number), andcurrentOffset(number)When the function is called, reset the pagination list to an empty tagWrite a loop that will display the pagination (using the total number of items divided by the number of items per page)For each page, create a list itemAdd some CSS for each item (cursor: 'pointer',10pxmargin left, and bold when this is the current page)The text of the item should be the page numberWhen clicking on a page number, it should call the functionqueryWikipediawith the right offset
* It accepts three argumentsnumberOfItems(number),itemsPerPage(number), andcurrentOffset(number)
* When the function is called, reset the pagination list to an empty tag
* Write a loop that will display the pagination (using the total number of items divided by the number of items per page)
* For each page, create a list itemAdd some CSS for each item (cursor: 'pointer',10pxmargin left, and bold when this is the current page)The text of the item should be the page numberWhen clicking on a page number, it should call the functionqueryWikipediawith the right offset
* Add some CSS for each item (cursor: 'pointer',10pxmargin left, and bold when this is the current page)
* The text of the item should be the page number
* When clicking on a page number, it should call the functionqueryWikipediawith the right offset

Requirements:

* Use thetotalhitsvalue from Wikipedia to define the total number of items
* Display 10 items per page
* Make sure your pages are displayed in an horizontal line

The form created by your script should look like this:



The query results should display like this, notice how the 12 is in bold, because that is the current page



---

### 9. Wrap/unwrap <a name='subparagraph9'></a>

In a file 9-index.html , reuse the code from the previous task

* In the header, add some CSS, with thestyletag:Add a new class namedloadingSet the opacity at 0.2 within that class
* Add a new class namedloadingSet the opacity at 0.2 within that class
* Set the opacity at 0.2 within that class
* In yourscriptwith your other functions, create a function nameddisplayLoading:It accepts one argumentloadingIt select the firstulelement of the pageIfloadingis true, it wraps the element with adivtag and the classloadingIfloadingis false, it unwrap theulfrom thediv
* It accepts one argumentloading
* It select the firstulelement of the page
* Ifloadingis true, it wraps the element with adivtag and the classloading
* Ifloadingis false, it unwrap theulfrom thediv
* Modify thequeryWikipediafunction:It should call the functiondisplayLoadingbefore querying the APIOnce the API returns the value, it should remove the opacity by calling the function again
* It should call the functiondisplayLoadingbefore querying the API
* Once the API returns the value, it should remove the opacity by calling the function again

Requirements:

* You must use thewrapandunwrapfunctions of Jquery

How the page should look when results are loading



---

### 10. Another Get API <a name='subparagraph10'></a>

Setup your dev environment

* Installjson-serverlocally within your projects usingnpm:
* Run the server usingnode_modules/.bin/json-server --watch db.json

You are provided with this db.json , don’t forget to push it, you can change the values of the id , title , author , postId , name as you like

```html
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
```

In a file 10-index.html :

* Reuse your template from the previous task, remove the functions in yourscriptand thestylein the head
* Make sure you import jQuery using the CDN and make sure you can access the ajax methods
* Create a functionaddPostRow:It takes into argumentdata(object)It append to the body a paragraphThe paragraph should contain aspanelement with the textPost created with id ID, title: TITLE, author: AUTHOREach variable is contained in thedataobject
* It takes into argumentdata(object)
* It append to the body a paragraph
* The paragraph should contain aspanelement with the textPost created with id ID, title: TITLE, author: AUTHOREach variable is contained in thedataobject
* Each variable is contained in thedataobject
* Create a function namedlistPosts:It should query your local server on thepostsendpointWhen the server return a 200 response, it should call the functionaddPostRowfor each element in the responseWhen the server is unavailable, display an alert with the messageServer Error
* It should query your local server on thepostsendpoint
* When the server return a 200 response, it should call the functionaddPostRowfor each element in the response
* When the server is unavailable, display an alert with the messageServer Error
* Call the functionlistPostswhen your page loads

Requirements:

* You must use thegetfunction from jQuery

---

### 11. Post query <a name='subparagraph11'></a>

In a file 11-index.html , reuse the code you previously wrote

* Create a new functionbuildForm:It appends to the body aformelementInside the form, add adivelement, with alabelforauthorwith textAuthorand aninputof typetextwith idauthorInside the form, add adivelement, with alabelfortitlewith textTitleand atextareawith idtitleInside the form, add aninputof typesubmitWhen clicking on the submit button, call the functionsendFormdetailed below
* It appends to the body aformelement
* Inside the form, add adivelement, with alabelforauthorwith textAuthorand aninputof typetextwith idauthor
* Inside the form, add adivelement, with alabelfortitlewith textTitleand atextareawith idtitle
* Inside the form, add aninputof typesubmit
* When clicking on the submit button, call the functionsendFormdetailed below
* Create a new functionsendForm:It should add after theform, the textAbout to send the query to the APIIt should create a data object, with thetitleandauthorattributes. The values are the ones within the inputsIt should send aPOSTquery to your server endpointpostswith the dataIf the query succeed, call the functionaddPostRowwith the data coming back from the APIIf the query does not succeed, it should display an alert with the messageError sending the POST query
* It should add after theform, the textAbout to send the query to the API
* It should create a data object, with thetitleandauthorattributes. The values are the ones within the inputs
* It should send aPOSTquery to your server endpointpostswith the data
* If the query succeed, call the functionaddPostRowwith the data coming back from the API
* If the query does not succeed, it should display an alert with the messageError sending the POST query
* Call the functionslistPostsandbuildFormwhen your page loads

Requirements:

* When clicking on the label, the input text should be selected by the browser
* When pressing enter on the input text, the form should be submitted without reloading the page
* You must use theafterfunction from jQuery

With the JSON server running, your 11-index.html should look something like this in your browser (does not have to be exactly the same, rows and values depend on what’s in your db.json )



---

### 12. Delete query <a name='subparagraph12'></a>

In a file 12-index.html , reuse your code from the previous task

* Modify the functionaddPostRow:Add an id attribute to the paragraph withrow-ID(the ID being the one of the post)Append aspanelement with the text(delete)to thep, thisspanshould come before thespanwith the post informationOn click, call the functiondeletePostwith the post id
* Add an id attribute to the paragraph withrow-ID(the ID being the one of the post)
* Append aspanelement with the text(delete)to thep, thisspanshould come before thespanwith the post informationOn click, call the functiondeletePostwith the post id
* On click, call the functiondeletePostwith the post id
* Create a functiondeletePost:It accepts one argumentid(number)Send aDELETEquery to thepostsendpoint with the id of the postIf the query is successful, remove the row from the bodyIf the query is not successful, display an alert with the messagePost was not deleted
* It accepts one argumentid(number)
* Send aDELETEquery to thepostsendpoint with the id of the post
* If the query is successful, remove the row from the body
* If the query is not successful, display an alert with the messagePost was not deleted

Requirements:

* You must use the functionremovefrom jQuery

With your JSON server running, 12-index.html should look like this in your browser, actual rows and values depend on what’s in your db.json



---

### 13. Tasks list <a name='subparagraph13'></a>

* Mandatory
* Advanced

---


## Authors
Your Name - [Your GitHub Profile](https://github.com/yourusername)
