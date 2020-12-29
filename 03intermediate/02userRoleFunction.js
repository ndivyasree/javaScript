/*Define a function that can answer the role of a user
  A user an be on the following roles:
  admin - with all the access 
  subadmin -with access to create /delete courses
  testprep -with access to create/delete tests
  user -consume all content
  other -trail user
  Input : getUserRole(name, role)
*/

//function getUserRole(name, role) { 
var getUserRole = function (name, role) { //either of these two types can be used
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
           // break;//as we are using return keyword no need of using this break here it automatically breaks and returns 
    
        case "subadmin":
            return `${name} is subadmin with access to create and delete`
           // break;
        case "testprep":
            return `${name} is testprep with access to create and delete`
           // break;
        case "user":
            return `${name} is a user to consume content`
           // break;
    
    
    
        default:
            return `${name} is a trial user`
            break;
    }
}

console.log(getUserRole("Divya sree", "user"));