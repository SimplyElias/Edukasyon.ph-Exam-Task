const studentDir = [];
const totalGrades = [];


function grading() {
    let studentName = document.getElementById("inputStudent").value;
    let studentGrade = document.getElementById("inputGrade").value;
    let listings = document.getElementById("listingStudents");
    studentDir.push([studentName, parseInt(studentGrade)]);
    totalGrades.push(parseInt(studentGrade));
    listings.innerHTML += "<tr><td> " + studentName + " </td> <td> " + studentGrade + "</td></tr>";

    // let listing = studentDir.find(([name]) => name === studentName);
    // if (listing) {
    //     listing.push(parseInt(studentGrade));
    // }
    // else {
    //     studentDir.push([studentName, parseInt(studentGrade)]);
    // }
    //}


    console.log(studentDir)
}

function computeAverage() {
    let averageGrade = document.getElementById("average");
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
}

function clearData() {
    document.getElementById("listingStudents").innerHTML = "";
    document.getElementById("average").innerHTML = "";

    studentDir = [];
    totalGrades = [];

}