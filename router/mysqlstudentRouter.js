let express = require ("express");

let connection = require("../dbconfig/sqldb");

let mysqlstudentRouting = express.Router();

mysqlstudentRouting.get("/",(req,res)=>{
   let query = `select * from student`;
   connection.query(query,(err,suc)=>{
      if(err) throw err;
      res.send(suc);
   })
})

mysqlstudentRouting.post("/",(req,res)=>{
   let {id,name,subject} = req.body;
   let query=`insert into student(id,name,subject)values('${id}','${name}','${subject}')`;
   connection.query(query,(err,suc)=>{
      if(err) throw err;
      res.send(suc);
   })
});

mysqlstudentRouting.delete("/:id",(req,res)=>{
   let id = req.params.id;
   let query = `delete from student where id='${id}'`;
   connection.query(query,(err,suc)=>{
     if(err) throw err;
     res.send(suc);   
    })
})

mysqlstudentRouting.get("/:id",(req,res)=>{
   let id = req.params.id;
   let query = `select * from student where id='${id}'`;
   connection.query(query,(err,suc)=>{
      if (err) throw err;
      res.send(suc)
   })
})

mysqlstudentRouting.put("/:id",(req,res)=>{
   let id1 = req.params.id;
   let {id,name,subject} = req.body;
   let query = `update student set id='${id}' , name='${name}' , subject='${subject}' where id='${id1}'`;
   connection.query(query,(err,suc)=>{
      if (err) throw err;
      res.send(suc)
   })
})
module.exports = mysqlstudentRouting;


