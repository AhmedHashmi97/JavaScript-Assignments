// Q.Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:


var signal = prompt("Enter Traffic Signal Color").toLowerCase()

function trafficSignal() {
    if (signal === "red") {
        document.write("Must Stop")
    } else if (signal === "yellow") {
        document.write("Ready to move")
    } else if (signal === "green") {
        document.write("Move now")
    }
}
trafficSignal();