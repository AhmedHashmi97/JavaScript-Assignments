// Q What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

document.write("a = 2" + "<br>" + "b = 1" + "<br>" + "--a - --b + ++b + b-- = " + result);
c = --a;
document.write("<br>" + "<br>" + "a = 1" + "<br>" + "--a = " + c);
d = --a - --b;
document.write("<br>" + "<br>" + "a = 0" + "<br>" + "b = 2" + "<br>" + "--a - --b = " + d);
e = --a - --b + ++b;
document.write("<br>" + "<br>" + "a = -1" + "<br>" + "b = 1" + "<br>" + "--a - --b + ++b = " + e);
f = --a - --b + ++b + b--;
document.write("<br>" + "<br>" + "a = -2" + "<br>" + "b = 1" + "<br>" + "--a - --b + ++b + b-- = " + f);