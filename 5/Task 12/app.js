// Q.The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


document.write("<h1>The Geometrizer</h1>")
var π = 3.142,
    r = prompt("Enter Radius Of Circle ")
circumference = 2 * π * r
area = π * (r * r)

document.write("<br>" + "The Circumference of a circle is: " + circumference + "m")
document.write("<br>" + "The Area of a circle is: " + area + "m" + "<sup>2</sup>")