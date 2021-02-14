const Phone = require("../models/phone.model");

module.exports = {

    getAll: (req,res) => {
        Phone.find()
        .then((allPhones) => res.json(allPhones))
        .catch((err) => res.json(err))
    }

}