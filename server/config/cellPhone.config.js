const mongoose = require("mongoose");

const dbName = "phones"

mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the DB ${dbName}`))
    .catch((err) => console.log(`there was an error loading db`, err))