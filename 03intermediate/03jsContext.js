// sayHello();

// function sayHello() {
//     console.log("hello");
// }
var myName = "Divya"
if (myName === myName) {
    console.log("this is a true statement");
}

var myName = "Divya"
if (myName === window.myName) {
    console.log("this is a true statement");//error bcoz of window but when we run this in browser it doesn't show any error
}