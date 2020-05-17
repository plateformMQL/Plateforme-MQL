class Partner {

    constructor(  name, address, activity, photo, description, phone,webSite  ) {
        this.id = null;
        this.name = name;
        this.address = address;
        this.activity = activity;
        this.photo =  photo;
        this.description =description ;
        this.phone = phone;
        this.webSite = webSite;
        this.laureates = [];
    }

    addLaureates(laureate) {
        this.laureates.push(laureate);
    }


}


