const students = [
    {
        id: 1,
        name: "Nguyễn A"
    },
    {
        id: 2,
        name: "Trần B"
    }
];
students.map((student, index) => {
    console.log(`${index + 1}. Xin chào ${student.name}! Mã số: ${student.id}.`);
});
