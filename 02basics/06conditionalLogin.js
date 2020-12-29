// allow user to access course if he is :
// logged in from email 
// logged in from google
// logged in from facebook


var email = true;
var facebook = false;
var google = true;

if (email || facebook || google) {
    console.log("login sucess");
}

// if (email) {
//     console.log("login successful");
// }
// else if (facebook) {
//     console.log("login successful");
// }
// else if (google)
// {
//     console.log("login successful");
// }