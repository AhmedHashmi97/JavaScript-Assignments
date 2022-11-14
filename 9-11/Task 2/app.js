// Q.Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.



var gender = prompt("Enter Your Gender").toLowerCase()
if (gender === "male") {
    document.write(" Good Morning Sir")
} else if (gender === "female") {
    document.write("Good Morning Ma’am")
}