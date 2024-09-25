let express = require("express");

let Appointments = require ("../modal/appointmentModel");

let appointmentRouting = express.Router();

appointmentRouting.get("/", async(req,res)=>{
    let appointment =await Appointments.find();
    res.send(appointment);
})

appointmentRouting.post("/", async(req,res)=>{
    let appointment =new Appointments(req.body);
    let result = await appointment.save();
    res.send(result);
})

appointmentRouting.get("/:id", async(req,res)=>{
    let id = req.params.id; 
    let appointment =await Appointments.findOne({_id:id});
    res.send(appointment);
})

appointmentRouting.put("/:id", async(req,res)=>{
    let id = req.params.id;
    let appointment = await Appointments.updateOne({_id:id},{$set:req.body});
    res.send(appointment);
})

appointmentRouting.delete("/:id", async(req,res)=>{
    let id = req.params.id;
    let appointment = await Appointments.deleteOne({_id:id},{$set:req.body});
    res.send(appointment);
})

module.exports = appointmentRouting;