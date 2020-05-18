class ActualityDAO {

    id = 0;

    constructor() {
        this.actualities = [];
    }


    getAllActuality() {
        return this.actualities;
    }


    getOneActuality(id) {
        for (let i = 0; i < this.actualities.length; i++) {
            if (this.actualities[i].id == id) {
                return this.actualities[i];
            }
        }
        return null;
    }

    addActuality(actuality) {
        this.id++;
        actuality.id = this.id;
        this.actualities.push(actuality);
    }

    updateActuality(id, actuality) {
        for (let i = 0; i < this.actualities.length; i++) {
            if (this.actualities[i].id == id) {
                this.actualities[i] = actuality;
                this.actualities[i].id = id;
            }
        }
    }

    removeActuality(id) {
        for (let i = 0; i < this.actualities.length; i++) {
            if (this.actualities[i].id == id) {
                this.actualities.splice(i, 1);
            }
        }
    }


    showActuality() {
        for (let i = 0; i < this.actualities.length; i++) {
            console.log(this.actualities[i]);
        }
    }
}
