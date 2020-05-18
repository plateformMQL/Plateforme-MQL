class FormationServ {

    id = 0;

    constructor(ActivityDAO, EventDAO, FormationDAO, JobDAO, LaureateDAO, PartnerDAO, ProfessorDAO, StudentDAO, ActualityDAO) {
        this.ActivityDAO = ActivityDAO;
        this.EventDAO = EventDAO;
        this.FormationDAO = FormationDAO;
        this.JobDAO = JobDAO;
        this.LaureateDAO = LaureateDAO;
        this.PartnerDAO = PartnerDAO;
        this.ProfessorDAO = ProfessorDAO;
        this.StudentDAO = StudentDAO;
        this.ActualityDAO = ActualityDAO;
    }


    addActivity(activity) {
        this.id++;
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

    addFormation(formation) {
        return this.FormationDAO.add(formation);
    }

    getAllFormations() {
        return this.FormationDAO.getAll();
    }

    getOneFormation(id) {
        return this.FormationDAO.getOneById(id);
    }


    addEvent(event) {
        return this.EventDAO.addEvent(event)
    }

    addPartner(partner) {
        return this.PartnerDAO.addPartner(partner);
    }

    addJob(job) {
        return this.JobDAO.addJob(job);
    }

    addProfessor(professor) {
        return this.ProfessorDAO.addProfessor(professor);
    }

    addStudent(student) {
        return this.StudentDAO.addStudent(student);
    }


    addLaureate(laureate) {
        return this.LaureateDAO.addLaureate(laureate);
    }

    addActuality(actuality) {
        return this.ActualityDAO.addLaureate(actuality);
    }
}
