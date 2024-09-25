let mongoose = require("mongoose");

let appointmentSchema = new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
   time:{
    type:String,
    required:true
   },
   name:{
    type:String,
    required:true
   },
   number:{
    type:Number,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   subject:{
    type:String,
    required:true
   },
   msg:{
    type:String,
    required:true
   },
//    status:{
//     type:String,
//     required:true
//    }
})

module.exports = mongoose.model("appointments",appointmentSchema );