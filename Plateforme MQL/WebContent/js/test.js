function test(){
/*
//    create formation
    var formation = new Formation("mql");
    formation.description = "this a formation";
    formation.dateFondation = "12/08/2005";
    formation.subTitle = "foemation";

//    set activities to formation
    var activ1 = new Activity("remise", "remise2", "src", "ffggghgg","ddddd");
    formation.activities.push(activ1);

//    set events to formation
     var ev = new Event("rhita", "essafi", "ddzdzef", "qzdqzdqzd", "dfzefze", "dffzefsfsf", "uiuihliul");
     formation.events.push(ev);

//    set partners to formation
    var part = new Partner("capegimin", "adegrege", "develp", "src", "dzdfezfzezef", "dzdazdazdd", "dzddzd");
    formation.partners.push(part);
//    set professors to foramtion

    var prof = new Professor("choucho", "chouchooo", "097464", "chouchou@email.com", "effze", "php", "encadrant");
    var prof2 = new Professor("choucho", "chouchooo", "097464", "chouchou@email.com", "effze", "php", "encadrant");
    formation.professors.push(prof);
    formation.professors.push(prof2);
//    set students to formation

    var student = new Student("rhita", "essafi", "rhita@gmail.com", "fes", "smi", "neffdd", "ddddfds");
    var student2 = new Student("rhita", "essafi", "rhita@gmail.com", "fes", "smi", "neffdd", "ddddfds");


    formation.students.push(student);
    formation.students.push(student2);


    var job = new Job("eeeeee", "fzffzefzef", "zfeezfzefezfq", "zdzdazdaz", "adzdzdz", "sdsddsd", "zdqdqdqd");
    var loreat = new Laureate();
    loreat.firstName = "hhhhhh";
    loreat.lastName = "ddsefsfsjhki";
    loreat.email = "email@gmail.com";
    loreat.city = "mekens";
    loreat.previousFormation ="smi";
    loreat.cne = "hajdzeze";
    loreat.cin = "eeeee";
    loreat.jobs.push(job);
    formation.laureates.push(loreat);

//    display formation
    console.log(formation);


    /////////////////////////////////////////////////

    let activityDao = new ActivityDAO();
    let business = new FormationServ(activityDao);



    let act = business.addActivity(new Activity("c1", "vvvvvv", "ffzfsfef", "ffsdfs", "fsfsfsf"));
    let act2 = business.addActivity(new Activity("c2", "vvvvvv", "ffzfsfef", "ffsdfs", "fsfsfsf"));
    let act3 = business.addActivity(new Activity("c3", "vvvvvv", "ffzfsfef", "ffsdfs", "fsfsfsf"));
    let act4 = new Activity("c4", "vvvvvv", "ffzfsfef", "ffsdfs", "fsfsfsf");


    let activities = business.getAllActivity();
    for (let i = 0; i <activities.length ; i++) {
      console.log(activities[i]);
    }
   let aaa = business.getActivity(1);
    console.log("One Activity >", aaa);
    //update

    business.updateActivity(1, act4);
    console.log("apdating")
    for (let i = 0; i <activities.length ; i++) {
        console.log(activities[i]);
    }

    console.log("removing")
    business.removeActivity(1);

    for (let i = 0; i <activities.length ; i++) {
        console.log(activities[i]);
    }
*/

var laureate = new Laureate("a1", "a2", "a3", "a4", "a5");
laureate.jobs.push(new Job("b1", "b2","b3", "b4", "b5", "b6", "b7"));
console.log(laureate);

}

