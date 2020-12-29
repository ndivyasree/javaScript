function sayHello(name) {
    console.log("hello there, Divya");//hardcoded value
    //console.log("hello there,",name);
    console.log(`Hello there, ${name}.How are you?`);//best choice to use backticks
}


// sayHello("Nallayyagari");
// sayHello("sree");

function namastey() {
    return "hello in India";
}

namastey();//no output bcoz it just returns the value but it's not printed over here

var greetings = namastey();
console.log(greetings);
//other alternative is:
console.log(namastey());