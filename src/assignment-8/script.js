class Student {
    constructor(name, age, course, grade) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.grade = grade;
    }

    printDetails() {
        return `<tr><td>${this.name}</td><td>${this.age}</td><td>${this.course}</td><td>${this.printGrade()}</td></tr>`;
    }

    printGrade() {
        const grade = parseInt(this.grade);
        if (grade === 1) {
            return "Failed";
        } else if (grade === 2) {
            return "Approved";
        } else if (grade === 3) {
            return "Good";
        } else if (grade === 4) {
            return "Very good";
        } else if (grade === 5) {
            return "Excellent";
        }
        return "Error!";
    }
}

const studentList = [];

function addStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;
    const grade = document.getElementById("grade").value;

    const student = new Student(name, age, course, grade);

    studentList.push(student);

    let students = "";
    for (let i = 0; i < studentList.length; i++) {
        students += studentList[i].printDetails();
    }

    document.getElementById("studentList").innerHTML = students;
}