var students = [];
//B2: Xay dung cac ham
//Thêm mới
function addStudent(student) {
    students.push(student);
}
function updateStudent(name, newName, newAge) {
    //Tìm đến sinh viên cần sửa
    var student = students.find(function (student) { return student.name === name; });
    //Ghi đè thông tin cũ
    if (student) {
        student.name = newName;
        student.age = newAge;
    }
    else {
        console.log("Không tìm thấy sinh viên");
    }
}
function deleteStudent(name) {
    //Tìm đến sinh viên cần xóa
    var deleteIndex = students.findIndex(function (student) { return student.name === name; });
    //xóa sinh viên
    if (deleteIndex != -1) {
        students.splice(deleteIndex, 1);
    }
    else {
        console.log("Không tìm thấy sinh viên");
    }
}
function convert(score) {
    switch (score) {
        case "A":
            return 10;
        case "B":
            return 8;
        case "C":
            return 6;
        case "D":
            return 4;
        default:
            return 0;
    }
}
function avg(student) {
    //Tính tổng điểm của tất cả các môn
    var total = student.subjects.reduce(function (acc, subject) {
        if (typeof subject.score === "number") {
            return acc + subject.score;
        }
        else {
            return acc + convert(subject.score);
        }
    }, 0);
    //Trả về điểm trung bình
    return total / student.subjects.length;
}
function rank(student) {
    var avgScore = avg(student);
    if (avgScore >= 8.5) {
        return "Giỏi";
    }
    if (avgScore >= 6.5) {
        return "Khá";
    }
    if (avgScore >= 5) {
        return "Trung bình";
    }
    return "Yếu";
}
function showStudents() {
    students.forEach(function (student) {
        var avgScore = avg(student);
        var studentRank = rank(student);
        console.log("T\u00EAn: ".concat(student.name, ", Tu\u1ED5i: ").concat(student.age, "\n            \u0110TB: ").concat(avgScore, ", X\u1EBFp lo\u1EA1i: ").concat(studentRank));
    });
}
//B3: Gọi và kiểm tra
addStudent({
    name: "Nguyen Van A",
    age: 20,
    subjects: [
        { subjectName: "Math", score: 9 },
        { subjectName: "English", score: "A" },
    ]
});
addStudent({
    name: "Nguyen Van B",
    age: 21,
    subjects: [
        { subjectName: "Math", score: "C" },
        { subjectName: "English", score: 7 },
    ]
});
showStudents();
