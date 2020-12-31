var user = {
    firstName : "Divya",
    lastName : "Sree",
    role : "user",
    loginCount : 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    Info: function () {
        console.log(this.firstName,this.lastName,this.role,this.loginCount,this.facebookSignedIn,this.courseList,this.getCourseCount());
    }
};


var courseList = true;
// console.log(user.firstName);
// console.log(user.getCourseCount());
user.buyCourse("react js course");
// console.log(user.getCourseCount());
user.Info();