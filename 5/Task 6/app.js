// Q.. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


var celsius = 25

function fahConvert() {
    fahrenheit = (celsius * 9 / 5) + 32
    document.write(celsius + "<sup>0</sup>C is " + fahrenheit + "<sup>o</sup>F<br>")
}
fahConvert();

function celConvert() {
    var fahrenheit = 70
    celsius = (fahrenheit - 32) * 5 / 9
    document.write(fahrenheit + "<sup>0</sup>F is " + celsius + "<sup>o</sup>C <br>")
}

celConvert();