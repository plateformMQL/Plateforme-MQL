class EventDAO {

    constructor() {
        this.events = [];
    }

    getAllEvents() {
         return this.events;
    }

    getOneEvent(id) {
        for (let i = 0; i < this.events.length; i++) {
            if(this.events[i].id == id ){
                return this.events[i];
            }
        }
        return null;
    }

    addEvent(event) {
        this.events.push(event);
    }

    updateEvent(id, event) {
        for (let i = 0; i < this.events.length; i++) {
            if(this.events[i].id == id){
                //this.activities[i].update(activity);
                this.events[i].value = event.value;
    }
        } }

    removeEvent(id){
        for (let i = 0; i < this.events.length; i++) {
            if(this.events[i].id == id){
                this.events.splice(i, 1);
            }
        }
    }


    showEvents(){
        for (let i = 0; i <this.events.length ; i++) {
            console.log(this.events[i]);
        }
    }
}
