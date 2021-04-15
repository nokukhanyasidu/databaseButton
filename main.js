
var button = document.getElementById('btn');

button.onclick = function(){
const express = require('express'); 
const app = express();
const mssql = require('mssql');

app.get('/', function(req, res){

const config = {
    user: "kevroAD\Nokukhanya.Sidu",
    password: '',
    server: "localhost",
    database: "infinity customers"
};


    mssql.connect(config, function(err){
        var request = new mssql.Request();
        request.query('select * from customers' ,function(err, records) {
            if (err) console.log(err)
            re.send(records);
        });
    }); 
    var server = app.listen(3000, function(){
        console.log("server is listening to 3000...");
    })


});
};
