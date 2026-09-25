// Class for a student
class Student {
    constructor(name, age, course, grade) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.grade = grade;
    }

    // Returns tablerow for one student
    printDetails() {
        return `<tr><td>${this.name}</td><td>${this.age}</td><td>${this.course}</td><td>${this.printGrade()}</td></tr>`;
    }

    // Convert grade number to txt
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

// List where students have been saved
const studentList = [];

function addStudent() {
    // Reading input-fields
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;
    const grade = document.getElementById("grade").value;

    // Creating object
    const student = new Student(name, age, course, grade);

    // Adding student to the list
    studentList.push(student);

    let students = "";
    for (let i = 0; i < studentList.length; i++) {
        students += studentList[i].printDetails();
    }

    document.getElementById("studentList").innerHTML = students;
}