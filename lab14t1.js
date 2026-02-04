var Student = /** @class */ (function () {
    function Student(id, name, rollNo) {
        this.id = id;
        this.name = name;
        this.rollNo = rollNo;
    }
    Student.prototype.showRollNo = function () {
        console.log("Roll No:", this.rollNo);
    };
    return Student;
}());
var student1 = new Student(1, "Swapna", 101);
console.log(student1.id);
console.log(student1.name);
