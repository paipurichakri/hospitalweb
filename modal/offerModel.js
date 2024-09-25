let mongoose = require("mongoose");

let offerSchema = new mongoose.Schema({
    offname:{
        type:String,
        required:true
    },
    offdes:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("offers",offerSchema);