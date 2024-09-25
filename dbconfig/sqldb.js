let mysql = require ("mysql2");

let connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"dbsept",
});

connection.connect((err,res)=>{
    if(err) throw err;
    // console.log("connected");
})

module.exports = connection;

