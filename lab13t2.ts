class Student {
    public name: string;
    private rollNo: number;

    constructor(name: string, rollNo: number) {
        this.name = name;
        this.rollNo = rollNo;
    }

    showRollNo(): void {
        console.log("Roll No:", this.rollNo);
    }
}
const student1 = new Student("Swapna", 101);
console.log(student1.name);
student1.showRollNo();
