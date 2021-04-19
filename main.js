import express from "express";
import pkg from 'mssql';
import sql from 'mssql/msnodesqlv8.js'




const { connect, Request } = pkg;
const pool = new sql.ConnectionPool({
    database: 'infinity customers',
    server : 'localhost',
    driver : 'msnodesqlv8',
    options : {
        trustedConnection : true
    }
})
pool.connect().then(() => {
    let queryString = "select * from customers";
    pool.request().query(queryString, (err, result) => {
        if(err)
        console.log(err)
        else
        console.dir(result)
    })
})

  
   const config = {
         user: "kevroAD\Nokukhanya.Sidu",
         password: 'tyo41YGE',
         server: 'SQLEXPRESS.database.windows.net',
         port : 1433,
         database: "infinity customers",
       options : {
           encrypt: true
       }
     }
     let conn = new sql.ConnectionPool(config);
     conn.connect()
     .then(function () {
         let req = new sql.Request(conn);
         req.query('select 1 as number')
         .then(function(recordset) {
             console.dir(recordset);
             conn.close();
         })
         .catch(function (err) {
             console.log(err);
             conn.close();
         })
     })
     .catch(function (err){
         console.log(err);
         conn.close();
     });
    
    
var app = express();
var server = app.listen(8080, function(){
    var port = server.address().port;

console.log("app now running on port", port);
console.log(server)
})

 