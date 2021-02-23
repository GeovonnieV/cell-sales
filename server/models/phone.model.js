const mongoose = require("mongoose");

const PhonesSchema = new mongoose.Schema({
   title: {
       type: String,
       required: true,
   },
   price: {
       type: Number,
       required: true
   },
   color: {
       type: String,
       required: [true, "select a phone color"]
   }

}, {
    timestamps: true
});

const Phone = mongoose.model("Phone", PhonesSchema);

module.exports = Phone;