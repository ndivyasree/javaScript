//PART 1: FOR THIS KEYWORD
//this keyword gives access to the global context
console.log(this);//empty scope

var game = "BasketBall";

function sayName(){
    var name ="Divya";
    console.log(this);
}

sayName();
//when we copy paste this code in console in browser then both ime swe will be getting the windows object
