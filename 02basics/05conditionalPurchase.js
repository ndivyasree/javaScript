//user is only allowed to  make a purchase when he is:
//logged in
//email verified
//cardInfo-valid
//if anyone is missing,stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = false;

// if (isLoggedIn) {
//     console.log("Logged In success");
//     if (isEmailVerified) {
//         console.log("email is verified");
//          if(cardInfo) {
//              console.log("you can make a purchase");   
//            }
//     }
      
// }


if (isLoggedIn && isEmailVerified && cardInfo)
{
    console.log("you are all set to go!")
}
else {
    console.log("you are not allowed.. please check all the info provided")
}