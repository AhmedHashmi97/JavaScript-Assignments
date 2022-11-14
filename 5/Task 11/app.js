// Q. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.


document.write("<h1>Age Calculator</h1>")
var age = prompt("Enter Current Year"),
    birth = prompt("Enter Your of Birth")
modify = age - birth
document.write("Current Year: " + age + " <br> Birth Year: " + birth + "<br>Your Age is: " + modify)