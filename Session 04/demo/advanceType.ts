//array
let numbers: number[];
//object
let student: { id: number, name: string };
//type alias
type Student = { id: number, name: string }
type numbersArr = number[];
let newStudent: Student;
//union type
type scoreType = number | string;
let score: scoreType = 10;
//intersection type
type Subject = {
    subjectName?: string;
    score: number;
}
type StudentWithSubject = Student & Subject;
let st: StudentWithSubject;
st = {
    id: 1,
    name: "An",
    score: 10
}
//type guard
if (typeof score === "number") {
    let total = score + 6;
}
