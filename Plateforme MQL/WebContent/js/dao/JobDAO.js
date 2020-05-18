class JobDAO {

    value = 0;

    constructor() {
        this.jobs = [];
    }

    getAllJob() {
        return this.jobs;
    }

    getOneJob(id) {
        for (let i = 0; i < this.jobbs.length; i++) {
            if (this.jobs[i].id == id) {
                return this.jobs[i];
            }
        }
        return null;
    }

    addJob(job) {
        this.value++;
        job.id = this.value;
        this.jobs.push(job);
    }

    updateJob(id, job) {
        for (let i = 0; i < this.jobs.length; i++) {
            if (this.jobs()[i].id == id) {
                //this.activities[i].update(activity);
                this.jobs[i] = job;
                this.jobs[i].id = id;
            }
        }
    }


    removeJob() {
        for (let i = 0; i < this.jobs.length; i++) {
            if (this.jobs[i].id == id) {
                this.jobs.splice(i, 1);
            }
        }
    }

    showJob() {

        for (let i = 0; i < this.jobs.length; i++) {
            console.log(this.jobs[i]);
        }
    }


}
