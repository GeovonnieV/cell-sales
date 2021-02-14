const mongoose = require("mongoose");

const PhonesSchema = new mongoose.Schema({

   title: {
       type: String,
       required: true,
   },
   price: {
       type: Number,
       required: true
   } 

}, {
    timestamps: true
});