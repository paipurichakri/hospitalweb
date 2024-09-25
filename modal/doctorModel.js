let mongoose=require("mongoose");

let doctorSchema = new mongoose.Schema({
   tname:{
       type:String,
       required:true
   },
   dname:{
    type:String,
    requiured:true
   },
   qualification:{
    type:String,
    required:true
   },
   experience:{
    type:String,
    required:true
   },
   msg:{
    type:String,
    required:true
   }
})
module.exports = mongoose.model("doctors",doctorSchema);