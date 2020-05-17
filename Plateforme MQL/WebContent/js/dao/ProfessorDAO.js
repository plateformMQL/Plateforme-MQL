class ProfessorDAO {
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
        this.professors.push(professor);
    }


    updateProfessor(id, professor) {
       for (let i = 0; i < this.professors.length; i++) {
          if(this.professors[i].id == id){
             //this.activities[i].update(activity);
             this.professors[i].value = professor.value;
          }
       }
    }

    removeProfessor(id) {
       for (let i = 0; i <this.professors.length ; i++) {
          console.log(this.professors[i]);
       }
    }

}
