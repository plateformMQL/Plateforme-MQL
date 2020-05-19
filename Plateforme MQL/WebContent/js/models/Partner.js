class Partner {

    constructor( id, name, address, activity, photo, description, phone, email, webSite) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.activity = activity;
        this.photo =  photo;
        this.description =description ;
        this.phone = phone;
        this.email = email;
        this.webSite = webSite;
        this.laureates = [];
    }

    addLaureates(laureate) {
        this.laureates.push(laureate);
    }


}


