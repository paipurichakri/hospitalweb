let express = require ("express");

let workers = require ("../modal/workerModel");

let workerRouting = express.Router();

workerRouting.get("/", async (req,res)=>{
    let worker = await workers.find();
    if(worker==0){
        res.send("there is no data have");
    }
    res.send(worker);
});

workerRouting.post("/", async (req,res)=>{
    let worker = new workers(req.body);
    let result = await worker.save();
    res.send(result);
});

workerRouting.delete("/:id",async (req,res)=>{
    let id = req.params.id;
    let worker =await workers.deleteOne({_id:id});
    res.send(worker);
});

workerRouting.put("/:id", async(req,res)=>{
    let id = req.params.id;
    let worker = await workers.updateOne({_id:id},{$set:req.body});
    res.send(worker);
});

workerRouting.get("/:id", async(req,res)=>{
    let id = req.params.id;
    let worker = await workers.findOne({_id:id});
    res.send(worker);
});

module.exports = workerRouting;


