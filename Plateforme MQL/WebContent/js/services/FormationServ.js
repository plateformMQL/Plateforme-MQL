class FormationServ {

    constructor(ActivityDAO) {
        this.ActivityDAO = ActivityDAO;

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

    /*addEvent(){
      return this.EventDAO.addEvent(new Event("rhita", "essafi", "ddzdzef", "qzdqzdqzd", "dfzefze", "dffzefsfsf", "uiuihliul"))
    }*/

    addPartner() {

    }


}
