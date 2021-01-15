//for all regular function calls ,this points to window object

console.log(this);


var user = {
    firstName: "Divvvya",
    courseCount: 4,
    getCourseCount: function () {
        console.log("Line 9",this);//here this prints the entire user object here =>object call
        function sayHello(){
            console.log("Hello Mr!!");
            console.log("line 13", this);
        }
        sayHello();//this doesn't prints the entirety of the object just bcoz this is regular function call. as this is a regular function call this in this function points to window object like object global
    },
};

user.getCourseCount(); //not a regular function call bcoz through object we are invoking(calling) that particular function

function sayHello(){
    console.log("Hello !!");
}
sayHello();//this is a regular function call





















