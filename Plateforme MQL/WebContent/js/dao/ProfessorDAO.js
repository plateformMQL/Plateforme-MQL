class ProfessorDAO {

    value = 0;

    constructor() {
        this.professors = [];
    }


    getAllProfessors() {
        return this.professors;
    }

    getOneProfessor(id) {
        for (let i = 0; i < this.professors.length; i++) {
            if (this.professors[i].id == id) {
                return this.professors[i];
            }
        }
        return null;
    }

    addProfessor(professor) {
        this.value++;
        professor.id = this.value;
        this.professors.push(professor);
    }


    updateProfessor(id, professor) {
        for (let i = 0; i < this.professors.length; i++) {
            if (this.professors[i].id == id) {
                this.professors[i] = professor;
                this.professors[i].id = id;
            }
        }
    }

    removeProfessor(id) {
        for (let i = 0; i < this.professors.length; i++) {
            console.log(this.professors[i]);
        }
    }

}
