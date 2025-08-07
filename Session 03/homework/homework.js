//input
let student = {
    name: "Dev",
    age: 20,
    listSubject: [
        { subject: "Math", score: 9 },
        { subject: "English", score: 7.5 },
        { subject: "Physics", score: 6 },
        { subject: "Literature", score: 8 },
    ]
}

function getStudentSummary(student) {
    //B1: Lay cac thong tin can thiet (Destructuring)
    let { name, age, listSubject } = student;
    let length = listSubject.length;
    //B2: Tinh diem trung binh va luu lai ket qua
    let average = listSubject.reduce((acc, value) => acc + value.score, 0) / length;
    let rank = average >= 8.5 ? "Hoc sinh gioi" :
        average >= 7 ? "Hoc sinh kha" :
            average >= 5 ? "Hoc sinh TB" : "Hoc sinh yeu"
    //B3: Sap xep mang cac mon hoc theo diem
    listSubject.sort((a, b) => a.score - b.score);
    let bestSubject = listSubject[length - 1];
    let weakestSubject = listSubject[0];
    //B4: In ra ket qua
    console.log(`${name} is ${age} years old
    Average score: ${average} -> ${rank}
    Best subject: ${bestSubject.subject} (${bestSubject.score})
    Weakest subject: ${weakestSubject.subject} (${weakestSubject.score})`);
}

getStudentSummary(student)

//output
//Dev is 20 years old
//Average score: 7.75 -> Hoc sinh kha
//Best subject: Math (9)
//Weakest subject: Physics(6)