class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
const student1 = new Student("Swapna", 20);
console.log(student1.name, student1.age);
