const Phone = require("../models/phone.model");

module.exports = {

    getAll: (req,res) => {
        Phone.find()
        .then((allPhones) => res.json(allPhones))
        .catch((err) => res.json(err))
    },
    create: (req,res) => {
          console.log(req.body)
          Phone.create(req.body)
              .then((newPhoneObj) => res.json(newPhoneObj))
              .catch((err) => {
                  console.log("Error creating a phone document: " + err);
                  res.json(err);
              })
    },
    delete: (req,res) => {
        Phone.findByIdAndDelete(req.params.id)
            .then((deleted) => res.json(deleted))
            .catch((err) => res.json(err))
    },
    update: (req,res) => {
        Phone.findByIdAndUpdate(req.params.id, {new: true})
            .then((updatedPhone) => res.json(updatedPhone))
            .catch((err) => res.json(err))
    }

}