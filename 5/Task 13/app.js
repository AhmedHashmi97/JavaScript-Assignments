// Q. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN


document.write("<h1>The Lifetime Supply Calculator</h1>")
var snack = "Potato Chips",
    age = 15,
    max_age = 65,
    estimated_amount = 3
document.write("Favorite Snack : " + snack + "<br>")
document.write("Current age : " + age + "<br>")
document.write("Estimated Maximum Age : " + max_age + "<br>")
document.write("Amount of snacks per day: " + estimated_amount + "<br>")
document.write(`You will need ${estimated_amount*age} ${snack} to last you until the RIP old age of ${max_age} `)