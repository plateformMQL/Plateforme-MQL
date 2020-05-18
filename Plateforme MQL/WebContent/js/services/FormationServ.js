class FormationServ {

    constructor( ActivityDAO, EventDAO, FormationDAO, JobDAO, LaureateDAO, PartnerDAO, ProfessorDAO, StudentDAO) {
        this.ActivityDAO = ActivityDAO;
        this.EventDAO = EventDAO;
        this.FormationDAO = FormationDAO;
        this.JobDAO = JobDAO;
        this.LaureateDAO = LaureateDAO;
        this.PartnerDAO = PartnerDAO;
        this.ProfessorDAO = ProfessorDAO;
        this.StudentDAO = StudentDAO;
    }


    addActivity(activity) {
        return this.ActivityDAO.addActivity(activity);
    }

    getActivity(id) {
        return this.ActivityDAO.getOneActivity(id);
    }

    removeActivity(id) {
        return this.ActivityDAO.removeActivity(id);
    }

    updateActivity(id, activity) {
        return this.ActivityDAO.updateActivity(id, activity);
    }

    getAllActivity() {
        return this.ActivityDAO.getAllActivities();
    }

    addFormation(formation){
        return this.FormationDAO.add(formation);
    }


   addEvent(event){
      return this.EventDAO.addEvent(event)
    }

    addPartner(partner) {
        return this.PartnerDAO.addPartner(partner);
    }

    addJob(job){
        return this.JobDAO.addJob(job);
    }

    addProfessor(professor){
        return this.ProfessorDAO.addProfessor(professor);
    }

    addStudent(student){
        return this.StudentDAO.addStudent(student);
    }


    addLaureate(laureate){
            return this.LaureateDAO.addLaureate(laureate);
    }
}
