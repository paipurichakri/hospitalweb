let express = require("express");

let contacts = require ("../modal/contactModel");

let contactRouting = express.Router();

contactRouting.get("/", async(req,res)=>{
    let contact =await contacts.find();
    res.send(contact);
})

contactRouting.post("/", async(req,res)=>{
    let contact =new contacts(req.body);
    let result = await contact.save();
    res.send(result);
})

contactRouting.get("/:id", async(req,res)=>{
    let id = req.params.id; 
    let contact =await contacts.findOne({_id:id});
    res.send(contact);
})

contactRouting.put("/:id", async(req,res)=>{
    let id = req.params.id;
    let contact = await contacts.updateOne({_id:id},{$set:req.body});
    res.send(contact);
})

contactRouting.delete("/:id", async(req,res)=>{
    let id = req.params.id;
    let contact = await contacts.deleteOne({_id:id},{$set:req.body});
    res.send(contact);
})

module.exports = contactRouting;