let mongoose = require("mongoose");

let treatementSchema = new mongoose.Schema({
    tname:{
        type:String,
        required:true
    },
    tdes:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("treatements",treatementSchema);