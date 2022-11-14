// Q.Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

document.write("<h1> Marks Sheet</h1>");
var english = +prompt("Enter English Obtained Marks");
math = +prompt("Enter Math Obtained Marks");
urdu = +prompt("Enter Urdu Obtained Marks");
total = +prompt("Enter Total Marks");
var obt = english + urdu + math;
var percentage = (obt * 100) / total;
document.write(" Total Marks : " + total + "<br>")
document.write(" Marks Obtained : " + obt + "<br>")

if (percentage >= 80) {
    document.write(" Percentage : " + percentage.toFixed(2) + "%<br>")
    document.write(" Grade : A-One <br>")
    document.write(" Remarks : Excellent")
} else if (percentage >= 70) {
    document.write(" Percentage : " + percentage.toFixed(2) + "%<br>")
    document.write(" Grade : A <br>")
    document.write(" Remarks : Good")
} else if (percentage >= 60) {
    document.write(" Percentage : " + percentage.toFixed(2) + "%<br>")
    document.write(" Grade : B <br>")
    document.write(" Remarks : You Need to improve")
} else if (percentage > 60) {
    document.write(" Percentage : " + percentage.toFixed(2) + "%<br>")
    document.write(" Grade : Fail <br>")
    document.write(" Remarks : Sorry")
}