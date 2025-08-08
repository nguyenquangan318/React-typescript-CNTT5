//B1: Xây dựng các kiểu dữ liệu cần thiết
type Student = {
    readonly studentId: string;
    name: string;
    email: string;
    hasCompleted: boolean;
    finalScore?: number
}
type Course = {
    courseId: string;
    title: string;
    instructor: string;
    students: Student[];
    isActive: boolean
}
type CourseManager = {
    schoolName: string;
    year: number;
    course: Course[]
}
//B2: Xây dựng các hàm
function getCompletedStudents(course: Course): Student[] {
    //Trả về mảng các sinh viên đã hoàn thành khóa học
    // let students: Student[] = course.students;
    // let finishStudent: Student[] = students.filter((student) => student.hasCompleted)
    // {
    // if (student.hasCompleted === true) {
    //     return true;
    // }
    // return false;
    // }
    return course.students.filter((student) => student.hasCompleted);
}
function calculateAverageScore(course: Course): number | null {
    //B1: Lọc ra các sinh viên có điểm
    let studentsWithScore: Student[] = course.students.filter(
        (student) => typeof student.finalScore === "number"
    )
    //B2: Nếu không có sinh viên nào thì trả về null
    if (studentsWithScore.length === 0) {
        return null;
    }
    //B3: Tính tổng điểm của toàn bộ sinh viên có điểm
    let total = studentsWithScore.reduce((total, student) => {
        if (typeof student.finalScore === "number") {
            return total + student.finalScore;
        }
        return total
    }, 0)
    //B4: tính điểm trung bình và trả về kết quả
    return total / course.students.length;
}
function printCourseReport(manager: CourseManager): void {
    manager.course.forEach((course, index) => {
        console.log(`${index + 1}. Khóa: ${course.title} (GV: ${course.instructor})`);
        console.log(` Tổng học viên: ${course.students.length}`);
        console.log(`Hoàn thành: ${getCompletedStudents(course).length}`);
        console.log(` Trung bình điểm: ${calculateAverageScore(course)}`);
        console.log(` Trạng thái: ${course.isActive ? "Đang mở" : "Đã đóng"}`);
    });
}