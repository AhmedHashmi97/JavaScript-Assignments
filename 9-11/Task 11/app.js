// Q.Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user

var a = +prompt("Enter First number");
var b = +prompt("Enter Second number");
operator = prompt("Enter  Operation ( + , - , * , / , % )")
if (operator == "+") {
    c = a + b
    document.write("Result : " + c + "<br>")
} else if (operator == "-") {
    c = a - b
    document.write("Result : " + c + "<br>")
} else if (operator == "*") {
    c = a * b
    document.write("Result : " + c + "<br>")
} else if (operator == "/") {
    c = a / b
    document.write("Result : " + c + "<br>")
} else if (operator == "%") {
    c = a % b
    document.write("Result : " + c + "<br>")
}