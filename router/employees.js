let Students=require("../modal/studentModel1");

// let employeesRoute = require('express').Router();  alternate way to below 2 steps we can write in one step

let express = require("express");

let employeesRoute = express.Router();

employeesRoute.get("/homeminister", async (req,res)=> {

    let student=await Students.find();
 
    if(student.length==0){
       res.send("no data found in student");
    }
    res.send(student); 
 });

 employeesRoute.post("/homeminister", async (req,res)=>{
    let student = new Students(req.body);
    let result = await student.save();
    res.send(result);
 });

 employeesRoute.put("/homeminister/:id", async (req,res)=>{
    let id = req.params.id;
    let student = await Students.updateOne({_id:id},{$set:req.body});
    res.send(student);
});

 employeesRoute.delete("/homeminister/:id", async (req,res)=>{
    let id = req.params.id;
    let student = await Students.deleteOne({_id:id});
    res.send(student);
   });

   employeesRoute.get("/homeminister/:id", async (req,res)=>{
    let id = req.params.id;
    let student = await Students.findOne({_id:id});
    res.send(student);
   });

 module.exports = employeesRoute;


