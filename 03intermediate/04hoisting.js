//function declarations are scanned and made available
//variable declarations are scanned and made undefined

var num = 2;


function sayMe() {
    console.log("say me");

}

sayMe();

tipper ("60");//even though we call the function before its declaration it's totally fine bcoz global execution context scans the entire code and make it available to us if they are declared.If they are not declared anywhere then it throws an error. 

function tipper(a) {
    var bill = parseInt(a);//parseint converts the string form of number into integer
    console.log(bill + 5);

}

// bigTipper("200");

// function bigTipper(a) {
//     var bill = parseInt(a);//parseint converts the string form of number into integer
//     console.log(bill + 15);
// }

//bigTipper("200");//if this is called after the declaration then no error occurs

var bigTipper = function (a) {
    var bill = parseInt(a);//parseint converts the string form of number into integer
    console.log(bill + 15);
}//throws an error bcoz here we are storing the function into a variable object

bigTipper("200");//this doesn't throw any error bcoz the function is already declared.


console.log(name);// undefined is displayed =>refer 2nd point on top
var name = "Divya";//if this line is not present in this code then the above statement throws an error as it is present now its showing undefined.

function sayName(){
    var name = "NDS"
    console.log(name);
}
sayName();

console.log(name);