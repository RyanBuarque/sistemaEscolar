import express from "express";
import fs from "fs";
import https from "https";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors());

import router from "./routes.js";
app.use(router);

app.listen(3000, ()=>console.log("Api Rodando"));

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
}, app).listen(443, ()=> console.log("Rodando em https"));