const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// connect DB
require("./config/cellPhone.config");
// import routes
require("./routes/phone.route")(app);

app.listen(port, () => {
    console.log(`Cell Sells is running on port ${port}`)
})