class ClassRoom {
  constructor(students) {
    this.students = students;
  }

  addStudent(student) {
    this.students.push(student);
  }

  getStudentDetails(studentName) {
    return this.students.find((student) => student.name === studentName);
  }

  showStudentDetails(studentName) {
    const studentFound = this.students.find(
      (student) => student.name === studentName
    );

    console.log(studentFound);
  }
}

class Student {
  constructor(name) {
    this.name = name;
  }

  getStudentName() {
    return this.name;
  }
}

const student1 = new Student("kiran");
