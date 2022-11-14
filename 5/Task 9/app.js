// Q. . Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)



document.write("<h1>Currency in PKR</h1>")

var dol = +prompt("Enter Currency in Dollar $: ")
var riy = +prompt("Enter Currency in Riyal ﷼ : ")
d = dol * 104.80;
r = riy * 28;
total = (dol * 104.80) + (riy * 28);
document.write("Total Currency in PKR is: " + total)