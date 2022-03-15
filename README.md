# Edukasyon.ph-Exam-Task - Von Naval
The purpose of this project is to meet Edukasyon.ph's Exam Task requirements for a job position. <br> I do hope you'll appreciate everything I made in this application! <br>
You may access the application by clicking [here](https://simplyelias.github.io/Edukasyon.ph-Exam-Task/).

## Contents
There are 2 files (not including the README.md) in this repository,

### index.html
The index.HTML file is an HTML file that displays the actual application on the browser. <br>
The HTML file contains external scripts that are linked into the file. These scripts from [Bootstrap](https://getbootstrap.com), which displays a mobile responsive outlook for the application. 
Then inside the file contains a script called function.js which is the logic the application itself. 
<br><br>
The file displays `<div>` wrapped in containers, and inside these containers contain a `<form>` as well as a `<table>`.
<br><br>
The form contains two `<input>` fields and three `<button>` fields. The input fields are one with a text type which takes the name of the student, and another one with a number type which takes the grade of the student.
<br>
There are three `<button>`s:
<br>
The __Submit__ button (which adds the values of the input fields to the table <br>
The __Compute Average__ button (which computes the average of the grades on the table and displays on the `<label>`) <br>
The __Clear__ button (which clears the data from the table). <br>
<br>
There is a `<table>` that will contain the values from the two input fields once the user clicks the Submit button. This displays the name and the grade of the student in each table entry.
<br> Finally, there is a label that updates the average of each of the grades on the table when the tester clicks the __Compute Average__ button. <hr>

### function.js
The function.js is the heart and logic of the application. This file contains two intialized arrays and three functions.

#### Initialized arrays
```javascript
const studentDir = [];
const totalGrades = [];
```
These are the two arrays that are first initialized when opening the application. The `studentDir` is an array that accepts the student's name and the student's grade enclosed as an array, to be pushed. <br>
The `totalGrades` array accepts the student's grades (This is a little redundant, but this is only used to compute the average.)
<br>
<br>

#### grading() function
```javascript
let studentName = document.getElementById("inputStudent").value;
let studentGrade = document.getElementById("inputGrade").value;
let listings = document.getElementById("listingStudents");
```
These are HTML controllers that control the two `<input>` fields from the index.html file, and the `listings` controller controls the table rows from the `<table>`.
```javascript
studentDir.push([studentName, parseInt(studentGrade)]);
totalGrades.push(parseInt(studentGrade));
listings.innerHTML += "<tr><td> " + studentName + " </td> <td> " + studentGrade + "</td></tr>";
```
I use a `.push` function to push the name and grade as an array into the `studentDir` array, and push the grade into `totalGrades` array. I would then append the `listings` HTML controller to add this new entry into the table in the index.html.
<br>
<br>
_Note that I have a commented out code below this function in the function.js file. This code is not part of the requirements, but this code is necessarily used to check if the same student with the name already exists on the `studentsDir` array. It has worked by pushing just the grade into the `studentDir` array, but cannot be displayed on the table._
<br>
<br>

#### computeAverage() function
```javascript
let averageGrade = document.getElementById("average");
```
I would first initialize a HTML controller that controls the label on the index.html file called `averageGrade`
```javascript
if (totalGrades.length === 0) {
        averageGrade.innerHTML = "There are no grades on the table!";
    } else {
        let average = 0;
        for (let x = 0; x < totalGrades.length; x++) {
            average += totalGrades[x];
        }
        let totalAverage = average / totalGrades.length; 
        averageGrade.innerHTML = Math.round(totalAverage * 100) / 100;
    }
```
I would first check if the table inside the application is empty by checking if the `totalGrades` array is empty. If it's not, the computing process begin <br>
I placed a initialized variable `average` and would create a `for` loop that loops a number of times of how many elements are in the `totalGrades` array. It would sum up the `average` variable from the value in each index of `totalGrades` array. <br>
Then I initialized a `totalAverage` array to get the quotient of the average divided by the number of elements in the `totalGrades` array, and then finally, using the `averageGrade` HTML controller, I append that to the value of the `totalAverage` variable and rounding that off to the nearest hundreth of a decimal, to ensure that the average grade has a minimum round off to two decimal places.
<br>
<br>

#### clearData() function
```javascript
document.getElementById("listingStudents").innerHTML = "";
document.getElementById("average").innerHTML = "";

studentDir = [];
totalGrades = [];
```
The clearData function clears the two initialzied arrays without the need of refreshing the page, and would also append the table in the index.html to clear all data inside that table.
