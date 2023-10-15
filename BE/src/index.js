const express = require('express')
const app = express()
const db = require("./config/")
const routers = require('./routers')
var bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors")

routers(app)
//cau hinh file env
require('dotenv').config()
db.connect();

//size file json nhận
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ origin: "*" }));




app.listen(process.env.PORT,() => {
    console.log(`server is running on port http://${process.env.HOST}:${process.env.PORT}`)
})

