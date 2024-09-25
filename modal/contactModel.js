let mongoose = require("mongoose");

let appointmentSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   phone:{
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
   }
})

module.exports = mongoose.model("contacts",appointmentSchema );