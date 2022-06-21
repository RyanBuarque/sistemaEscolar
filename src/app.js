//import {openDb} from "./configDB.js";
import {createTable, insertPessoa} from "./controler/pessoa.js";


import express from "express";
const app = express();
app.use(express.json());

createTable();

app.get('/', function(req, res){
    res.send("hello word")
});
 
app.post('/pessoa', function(req, res){
    insertPessoa(req.body)
    res.json({
        "statusCode":200 
    })
});
app.listen(3000, ()=>console.log("Api Rodando"))