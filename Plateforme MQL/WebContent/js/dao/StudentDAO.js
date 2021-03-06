class StudentDAO {

    value = 0;

    constructor() {
        this.students = [];
    }

    getAllStudents() {
        return this.students;
    }


    getOneStudent(id) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].id == id) {
                return this.students[i];
            }
        }
        return null;
    }


    addStudent(student) {
        this.value++;
        student.id = this.value;
        this.students.push(student);
    }


    updateStudent(id, student) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].id == id) {
                this.students[i] = student;
                this.students[i].id = id;
            }
        }
    }

    removeStudents(id) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].id == id) {
                this.students.splice(i, 1);
            }
        }
    }


    showStudents() {
        for (let i = 0; i < this.students.length; i++) {
            console.log(this.students[i]);
        }
    }
}
