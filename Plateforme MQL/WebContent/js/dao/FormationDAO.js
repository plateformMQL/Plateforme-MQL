class FormationDAO {

    value = 0;

    constructor() {
        this.formations = [];
    }


    getAll(){
         return this.formations;
    }

    getOneById(id){
        for (let i = 0; i < this.formations.length; i++) {
            if (this.formations[i].id == id) {
                return this.formations[i];
            }
        }
        return null;
    }


    add(formation){
        this.value++;
        formation.id = this.value;
        this.formations.push(formation);
    }


    update(id, formation){
        for (let i = 0; i < this.formations.length; i++) {
            if (this.formations[i].id == id) {
                this.formations[i] = formation;
                this.formations[i].id = id;
            }
        }
    }

    remove(id){
        for (let i = 0; i < this.formations.length; i++) {
            if (this.formations[i].id == id) {
                this.formations.splice(i, 1);
            }
        }
    }

    show(){
        for (let i = 0; i < this.formations.length; i++) {
            console.log(this.formations[i]);
        }
    }
}
