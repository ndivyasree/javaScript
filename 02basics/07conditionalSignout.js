//show user a signout button if he is authenticated
//otherwise show him option to login/signup


var authenticated = false;


// if (authenticated) {
//     console.log("show signout button");
// } else {
//     console.log("show login option");
// }

authenticated ? console.log("signout button") : console.log("signin or sign up")