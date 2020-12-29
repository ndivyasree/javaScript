function isEven(element) 
{
    // if(element % 2 == 0) {
    //     return true;
    // }
    // return false;

    return element % 2 === 0;
}
console.log(isEven(3));

var isOdd = (element) => {//arrow function syntax
    return element % 2 != 0;
}
console.log(isOdd(3));


// var result = [2,3,4,5,6,7].every(isEven);//is even is a rference to isEven function //.every => runs the function on every element inside the given array and returns true only if all the elements returns true,even if one number returns false then false is stored into result
// console.log(result);
// var result = [2,4,6].every(isEven);
// console.log(result);


// var result = [2,4,6].every((e) => { //when we use curly braces then we need to write return 
//     return e%2===0;
// });
// console.log(result);

var result = [2,4,6].every((e) => (e%2===0));//when we use  () no need of return //easy way to remember these call back functions is (() => ())
console.log(result);
