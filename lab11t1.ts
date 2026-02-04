interface StudentList{
    name:string;
    marks:number;
}
const students:StudentList[]=[
    {name:"Swapna",marks:90},
    {name:"Spurthi",marks:98},
    {name:"Sanjana",marks:95}
];
students.forEach(student => {
    console.log(student.name, student.marks);
});
