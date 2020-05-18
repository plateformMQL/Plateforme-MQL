class LaureateDAO {

    value = 0;

    constructor() {
       this.laureates = [];
    }

    getAllLaureates() {
        return this.laureates;
    }


    getOneLaureate(id) {
        for (let i = 0; i < this.laureates.length; i++) {
            if(this.laureates[i].id == id ){
                return this.laureates[i];
            }
        }
        return null;
    }

    addLaureate(laureate) {
        this.value++;
        laureate.id = this.value;
        this.laureates.push(laureate);
    }

    updateLaureate(id, laureate) {
        for (let i = 0; i < this.laureates.length; i++) {
            if(this.laureates[i].id == id){
                this.laureates[i] = laureate;
                this.laureates[i].id = id;
            }
        }
    }

    removeActivity(id) {
        for (let i = 0; i < this.laureates.length; i++) {
            if(this.laureates[i].id == id){
                this.laureates.splice(i, 1);
            }
        }
    }


    showLaureate(){
        for (let i = 0; i <this.laureates.length ; i++) {
            console.log(this.laureates[i]);
        }
    }
}
