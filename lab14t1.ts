class Student {
    public name: string;
    private rollNo: number;
    readonly id: number;

    constructor(id: number, name: string, rollNo: number) {
        this.id = id;
        this.name = name;
        this.rollNo = rollNo;
    }

    showRollNo(): void {
        console.log("Roll No:", this.rollNo);
    }
}

const student1 = new Student(1, "Swapna", 101);
console.log(student1.id);
console.log(student1.name);
