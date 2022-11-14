// Q.Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default

num = prompt("Enter Number")
b = document.write("Table of " + num + ":" + "<br>" + "<br>")

function myTable() {
    for (var i = 1; i <= 10; i++) {
        document.write(num + " x " + i + " = " + i * num + "<br>")
    }
}

myTable();