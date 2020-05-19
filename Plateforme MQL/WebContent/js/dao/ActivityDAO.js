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

    addActivity(activity) {
        this.value++;
        activity.id = this.value;
        this.activities.push(activity);
    }

    updateActivity(id, activity) {
        for (let i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id == id) {
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
