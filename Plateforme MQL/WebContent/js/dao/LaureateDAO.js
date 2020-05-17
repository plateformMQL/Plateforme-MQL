class LaureateDAO {
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
        this.laureates.push(laureate);
    }

    updateLaureate(id, laureate) {
        for (let i = 0; i < this.laureates.length; i++) {
            if(this.laureates[i].id == id){
                //this.laureates[i].update(laureate);
                this.laureates[i].value = laureate.value;
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
