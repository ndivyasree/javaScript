//falsy values :
//undefined
//null
//0
// ''
//NaN =>not a number
// these are all the falsy values that means these are always evaluated to false

var user = null;
 
if (user) {
    console.log("condition is true");//no output bcoz it is evaluated to false
}

console.log(2 + 2);
console.log(2 + "2");//js doesn't actually know how to add a number and a string so it assumes that 2 is also a string =>o/p ====>22
console.log("2" + "2");

var str = "2";

if (2 == str)
{
    console.log("condition is true");// == loosely checks so it is evauated to true
}

var str2 = "3"

if (3 === str2)
{
    console.log("condition is true"); // === strictly checks
} else {
    console.log("it's not correct");//this gets printed bcoz 3 is a value whereas "3"is a string
}

