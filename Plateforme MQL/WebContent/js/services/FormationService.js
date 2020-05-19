class FormationService {

    constructor(db) {
        this.formations = [];
        this.load(db);
    }

    load(db) {
        for (let i = 0; i < db.length; i++) {
            this.add(
                db[i]);
        }
    }

    add(db) {
        let formation = new Formation(
            db.id, db.title, db.subTitle, db.description, db.dateFondation
        );
        if (db.events != null && db.activities != null) {
            formation.events = this.addEvents(db.events);
            formation.activities = this.addActivities(db.activities);
            formation.actualities = this.addActualities(db.actualities);
            formation.jobs = this.addJobs(db.jobs);
            formation.partners = this.addPartners(db.partners);
            formation.professors = this.addProfessors(db.professors);
            formation.students = this.addStudents(db.students);
        }
        this.formations.push(formation);
    }

    getAllFormations() {
        return this.formations;
    }

    getOneFormation(id) {
        for (let i = 0; i < this.formations.length; i++) {
            if (this.formations[i].id == id) {
                return this.formations[i];
            }
        }
        return null;
    }

    addActivities(activities) {
        let table = [];
        for (let i = 0; i < activities.length; i++) {
            table.push(
                new Activity(
                    activities[i].id,
                    activities[i].title,
                    activities[i].subtitle,
                    activities[i].photo,
                    activities[i].concept,
                    activities[i].description
                ));
        }

        return table;
    }

    addActualities(actualities) {
        let table = [];
        for (let i = 0; i < actualities.length; i++) {
            table.push(
                new Actuality(
                    actualities[i].id,
                    actualities[i].title,
                    actualities[i].subtitle,
                    actualities[i].description,
                    actualities[i].event
                ));
        }

        return table;
    }

    addEvents(events) {
        let table = [];
        for (let i = 0; i < events.length; i++) {
            table.push(
                new Event(
                    events[i].id,
                    events[i].title,
                    events[i].subTitle,
                    events[i].concept,
                    events[i].photo,
                    events[i].video,
                    events[i].date,
                    events[i].description
                ));
        }

        return table;
    }


    addJobs(jobs) {
        let table = [];
        for (let i = 0; i < jobs.length; i++) {
            table.push(
                new Job(
                    jobs[i].id,
                    jobs[i].title,
                    jobs[i].beginDate,
                    jobs[i].endDate,
                    jobs[i].duration,
                    jobs[i].subject,
                    jobs[i].partner,
                    jobs[i].type
                ));
        }

        return table;
    }

    addPartners(partners) {
        let table = [];
        for (let i = 0; i < partners.length; i++) {
            table.push(
                new Partner(
                    partners[i].id,
                    partners[i].name,
                    partners[i].address,
                    partners[i].activity,
                    partners[i].photo,
                    partners[i].description,
                    partners[i].phone,
                    partners[i].email,
                    partners[i].webSite
                ));
        }

        return table;
    }


    addStudents(students) {
        let table = [];
        for (let i = 0; i < students.length; i++) {
            table.push(
                new Student(
                    students[i].id,
                    students[i].firstName,
                    students[i].lastName,
                    students[i].email,
                    students[i].city,
                    students[i].previousFormation,
                    students[i].cne,
                    students[i].cin
                ));
        }

        return table;
    }

    addProfessors(professors) {
        let table = [];
        for (let i = 0; i < professors.length; i++) {
            table.push(
                new Professor(
                    professors[i].id,
                    professors[i].firstName,
                    professors[i].lastName,
                    professors[i].tel,
                    professors[i].email,
                    professors[i].subject,
                    professors[i].grade,
                    professors[i].type
                ));
        }

        return table;
    }
}
