let mongoose = require ("mongoose");

let workerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    timing:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
})

module.exports = mongoose.model("workers",workerSchema);

