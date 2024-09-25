let express = require("express");

let Offers = require ("../modal/offerModel");

let offerRouting = express.Router();

offerRouting.get("/", async(req,res)=>{
    let offer =await Offers.find();
    res.send(offer);
})

    offerRouting.post("/", async(req,res)=>{
    let offer =new Offers(req.body);
    let result = await offer.save();
    res.send(result);
})

offerRouting.get("/:id", async(req,res)=>{
    let id = req.params.id; 
    let offer =await Offers.findOne({_id:id});
    res.send(offer);
})

offerRouting.put("/:id", async(req,res)=>{
    let id = req.params.id;
    let offer = await Offers.updateOne({_id:id},{$set:req.body});
    res.send(offer);
})

offerRouting.delete("/:id", async(req,res)=>{
    let id = req.params.id;
    let offer = await Offers.deleteOne({_id:id},{$set:req.body});
    res.send(offer);
})

module.exports = offerRouting;