class EventDAO {

    value = 0;

    constructor(db) {
        this.events = [];
        this.load(db);
    }

    load(db) {
        for (let i = 0; i < db.length; i++) {
            this.add(
                new Event(
                    db[i].id, db[i].title, db[i].subTitle, db[i].concept, db[i].photo, db[i].video, db[i].date, db[i].description,
                    db[i].formation_id
                ));
        }
    }

    getAllEvents() {
        return this.events;
    }

    getOneEvent(id) {
        for (let i = 0; i < this.events.length; i++) {
            if (this.events[i].id == id) {
                return this.events[i];
            }
        }
        return null;
    }

    add(event) {
        this.events.push(event);
    }

    updateEvent(id, event) {
        for (let i = 0; i < this.events.length; i++) {
            if (this.events[i].id == id) {
                this.events[i] = event;
                this.events[i].id = id;
            }
        }
    }

    removeEvent(id) {
        for (let i = 0; i < this.events.length; i++) {
            if (this.events[i].id == id) {
                this.events.splice(i, 1);
            }
        }
    }


    showEvents() {
        for (let i = 0; i < this.events.length; i++) {
            console.log(this.events[i]);
        }
    }

    getEventsByFormation(id) {
        let events = [];
        for (let i = 0; i < this.events.length; i++) {
            if (this.events[i].formation_id == id) {
                events.push(this.events[i]);
            }
        }
        return events;
    }
}
