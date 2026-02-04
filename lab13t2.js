var Student = /** @class */ (function () {
    function Student(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    Student.prototype.showRollNo = function () {
        console.log("Roll No:", this.rollNo);
    };
    return Student;
}());
var student1 = new Student("Swapna", 101);
console.log(student1.name);
student1.showRollNo();
