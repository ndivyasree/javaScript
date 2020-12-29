//create an application with following roles:
//admin - gets full access
//subadmin - gets access to create/delete courses
//testprep - get access to create/delete tests
//user - gets access to consume content

var user = "testprep";

switch (user) {
    case "admin":
        console.log("you get the full access");
        break;
    case "subadmin":
        console.log("you get the access to create/delete courses");
        break;
    case "testprep":
        console.log("you get the access to create/delete tests");
        break;
    case "user":
        console.log("you get the access to consume content");
        break;
        

    default:
        console.log("trail user");
        break;
}