class Formation {

    constructor(title, subTitle, description, dateFondation) {
        this.id = null;
        this.title = title;
        this.subTitle = subTitle;
        this.description = description;
        this.dateFondation = dateFondation;
        this.events = [];
        this.activities = [];
        this.partners = [];
        this.students = [];
        this.professors = [];
        this.laureates = [];
    }


    addEvent(event) {
        this.events.push(event);
    }


    addActivity(activity) {
        this.activities.push(activity);
    }

    addPartner(partner) {
        this.partners.push(partner);
    }

    addStudent(student) {
        this.students.push(student);
    }

    addStudent(professor) {
        this.professors.push(professor);
    }


    addLaureates(laureate) {
        this.laureates.push(laureate);
    }

}
