// Q. Write a script to display multiplication table of any 
// number in your browser. E.g


var table = prompt("Enter a Number:")
document.write("Table of " + table + "<br>")
for (var i = 1; i <= 10; i++) {

    document.write(table + " x " + i + " = " + i * table + "<br>")
}