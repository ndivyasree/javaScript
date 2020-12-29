var testArray = [2,4,6,3,1,5,9,8];
//console.log(testArray.fill("D"));//fills everything with D
console.log(testArray.fill("D", 2, 5));//it fills d starting from index 2 to index 5

const myNumbers = [24,86,46,46,42,74,222226,633333,7,87,432,97];

const result = myNumbers.filter((num) => (num <= 46));
console.log(result);


var users = ["ted", "tim", "sid", "rio", "el", "dustin"];

//slice
console.log(users.slice(1,4));//index 1 is inclusive and 4 is exclusive
console.log(users.slice(1));//slices off first index value(removes only that particular value)
console.log(users.slice(users.length -1));//prints last value

//splice
// users.splice(1, 3, "hi");//1 is starting index, 3 is count from position number 1,delete them all and hi is the value that gonna be placed one time inplace of all 3
// console.log(users);

// users.splice(1, 1, "hi", "bye");
// console.log(users);
users.splice(2, 3 , "hi", "bye");
console.log(users);