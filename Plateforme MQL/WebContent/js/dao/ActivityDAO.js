class ActivityDAO {

    value = 0;

    constructor() {
        this.activities = [];
    }

    getAllActivities() {
        return this.activities;
    }


    getOneActivity(id) {
        for (let i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id == id) {
                return this.activities[i];
            }
        }
        return null;
    }

    addActivity(actvity) {
        this.value++;
        actvity.id = this.value;
        this.activities.push(actvity);
    }

    updateActivity(id, activity) {
        for (let i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id == id) {
                //this.activities[i].update(activity);
                this.activities[i] = activity;
                this.activities[i].id = id;
            }
        }
    }

    removeActivity(id) {
        for (let i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id == id) {
                this.activities.splice(i, 1);
            }
        }
    }


    showActivities() {
        for (let i = 0; i < this.activities.length; i++) {
            console.log(this.activities[i]);
        }
    }
}
