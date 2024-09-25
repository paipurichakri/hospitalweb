let express = require("express");

let Doctors = require("../modal/doctorModel");

let doctorRouting = express.Router();


doctorRouting.get("/", async(req,res)=>{
    let doctor = await Doctors.find();
    res.send(doctor);
})


doctorRouting.post("/", async(req,res)=>{
    let doctor = new Doctors(req.body);
    let result = await doctor.save();
    res.send(result);
})

doctorRouting.put("/:id", async(req,res)=>{
    let id = req.params.id;
    let doctor = await Doctors.updateOne({_id:id},{$set:req.body})
    res.send(doctor);
})


doctorRouting.delete("/:id", async(req,res)=>{
    let id = req.params.id;
    let doctor = await Doctors.deleteOne({_id:id},{$set:req.body})
    res.send(doctor);
})

doctorRouting.get("/:tname", async(req,res)=>{
    let tname = req.params.tname;
    let doctor = await Doctors.find({tname:tname});
    res.send(doctor);
})
module.exports = doctorRouting;