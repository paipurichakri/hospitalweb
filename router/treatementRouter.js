let express = require("express");

let Treatement = require ("../modal/treatementModel");

let treatementRouting = express.Router();

treatementRouting.get("/", async(req,res)=>{
    let treatement =await Treatement.find();
    res.send(treatement);
})

    treatementRouting.post("/", async(req,res)=>{
    let treatement =new Treatement(req.body);
    let result = await treatement.save();
    res.send(result);
})

treatementRouting.get("/:id", async(req,res)=>{
    let id = req.params.id; 
    let treatement =await Treatement.findOne({_id:id});
    res.send(treatement);
})

treatementRouting.put("/:id", async(req,res)=>{
    let id = req.params.id;
    let treatement = await Treatement.updateOne({_id:id},{$set:req.body});
    res.send(treatement);
})

treatementRouting.delete("/:id", async(req,res)=>{
    let id = req.params.id;
    let treatement = await Treatement.deleteOne({_id:id},{$set:req.body});
    res.send(treatement);
})

module.exports = treatementRouting;