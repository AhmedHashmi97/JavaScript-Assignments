// Q. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browse

document.write("<h1> Marks Sheet</h1>")

var total_marks = 980,
    marks_obtained = 804
percentage = (marks_obtained * 100) / total_marks

document.write("Total marks: " + total_marks + "<br>")
document.write("Marks obtained: " + marks_obtained + "<br>")
document.write("Percentage: " + percentage.toFixed(3) + "%")