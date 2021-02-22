const PhoneController = require("../controllers/phone.controller");

module.exports = (app) => {
    app.get("/api/phones",PhoneController.getAll);
    app.post("/api/phones",PhoneController.create);
    app.delete("/api/phones/:id", PhoneController.delete);
}