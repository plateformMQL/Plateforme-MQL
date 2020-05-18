class PartnerDAO {

    value = 0;

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
        this.value++;
        partner.id = this.value;
        this.partners.push(partner);
    }


    updatePartner(id, partner) {
        for (let i = 0; i < this.partners.length; i++) {
            if (this.partners[i].id == id) {
                this.partners[i] = partner;
                this.partners[i].id = id;
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
