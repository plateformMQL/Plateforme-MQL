class Laureate extends Student{


    constructor(id, firstName, lastName, email, city,previousFormation,  cne, cin, jobs) {
        super(id, firstName, lastName, email, city,previousFormation,  cne, cin);
        this.jobs = jobs;
    }
}
