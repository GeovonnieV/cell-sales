const PhoneController = require("../controllers/phone.controller");

module.exports = (app) => {
    app.get("/api/phones",PhoneController.getAll);
    app.post("/api/phones",PhoneController.create);
}