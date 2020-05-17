class PartnerDAO {

    constructor() {
        this.partners = [];
    }

    getAllPartners() {
        return this.partners;
    }

    getOnePartner(id) {
        for (let i = 0; i < this.partners.length; i++) {
            if (this.partners[i].id == id) {
                return this.partners[i];
            }
        }
        return null;
    }


    addPartner(partner) {
        this.partners.push(partner);
    }


    updatePartner(id, partner) {
        for (let i = 0; i < this.partners.length; i++) {
            if (this.partners[i].id == id) {
                this.partners[i].value = partner.value;
            }
        }
    }


    removePartner(id) {
        for (let i = 0; i < this.partners.length; i++) {
            if (this.partners[i].id == id) {
                this.partners.splice(i, 1);
            }
        }
    }
}
