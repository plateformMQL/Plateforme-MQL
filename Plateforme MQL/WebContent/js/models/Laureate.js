class Laureate extends Student{


    constructor(firstName, lastName, email, city,previousFormation,  cne, cin) {
        super(firstName, lastName, email, city,previousFormation,  cne, cin);
        this.jobs = [];
    }
}
