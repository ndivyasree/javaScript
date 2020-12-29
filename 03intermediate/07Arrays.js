var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Rajasthan", "Delhi", "Mumbai");

console.log(states[2]);

console.log(states.length);

states[0] = "Andhra";
console.log(states);

var user = ["Divya" , "123@dev.in" , "India",34, 3 , true];
console.log(user);

user.pop();
console.log(user);

user.unshift("new value")//to add a new value at the beginning
console.log(user);
user.shift()//if we dont clearly mention what to shift when we give it empty then the first element from the array is removed
console.log(user);

console.log(user.indexOf(3));
console.log(user.indexOf("India"));
console.log(user.indexOf("rio"));//which is not in the array gives output as -1


console.log(Array.from("Divya"));