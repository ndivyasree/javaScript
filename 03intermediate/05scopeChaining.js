//JUST FOR UNDERSTANDING PURPOSE
//if we don't have our own variable then we get the variable values of higher ones ,if we have then we use our own variable value

var name = "Divya";

console.log("Line number 6", name);

function sayName() {
    var name ="mr. D"
    console.log("line number 10", name);

    sayNameTwo();
    function sayNameTwo() {
        console.log("Line no 13", name);//as for this is not having value to name so it's gonna borrow it form the right above guy, if even that guy doesn't have then you ask the higher guy to him and so on but u can't borrow from the guy below u
    }
}

sayName();