var user = {
    firstName : "Divya",
    lastName : "Sree",
    role : "user",
    loginCount : 32,
    facebookSignedIn: true,
}

console.log(user.firstName);
console.log(user["lastName"]); //not a preferable way to access

user.loginCount = 50;
console.log(user.loginCount);

console.log(user);
console.table(user)