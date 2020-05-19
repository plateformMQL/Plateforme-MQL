class FormationServ {


    constructor(activityDAO, eventDAO, formationDAO, jobDAO, laureateDAO, partnerDAO, professorDAO, studentDAO, actualityDAO) {
        this.activityDAO = activityDAO;
        this.eventDAO = eventDAO;
        this.formationDAO = formationDAO;
        this.jobDAO = jobDAO;
        this.laureateDAO = laureateDAO;
        this.partnerDAO = partnerDAO;
        this.professorDAO = professorDAO;
        this.studentDAO = studentDAO;
        this.actualityDAO = actualityDAO;
    }

    addFormation(formation){
        return this.formationDAO.add(formation);
    }
    addActivities(activities, formationId) {
        let formation = this.formationDAO.getOneById(formationId);
        for (let i = 0; i < activities.length; i++) {
            this.activityDAO.addActivity(activities[i]);
        }

        formation.activities = this.activityDAO.getAllActivities();
    }


    addActivities(activities, formationId) {
        let formation = this.formationDAO.getOneById(formationId);
        for (let i = 0; i < activities.length; i++) {
            this.activityDAO.addActivity(activities[i]);
        }

        formation.activities = this.activityDAO.getAllActivities();
    }

    getAllFormation(){
        return this.formationDAO.getAllFormations();
    }
}
