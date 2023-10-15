const express = require('express')
const app = express()
const db = require("./config/")
const routers = require('./routers')
var bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors")

routers(app)
//cấu hình file env
require('dotenv').config()
//kết nối db 
db.connect();

//size file json nhận

//gửi dữ liệu dạng json, giới hạn dữ liẹu json
app.use(bodyParser.json({ limit: '50mb' })); 
//phân tích url gửi dữ liệu json dạng endcode
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
// nhận dữ liệu phức tạp
app.use(express.urlencoded({ extended: true }));
//gửi dữ liệu dạng json
app.use(express.json());
//phục vụ các tệp file tĩnh 
app.use(express.static(path.join(__dirname, "public")));
//xử lí vấn đề các nguồn web truy cập vào và chấp nhận
app.use(cors({ origin: "*" }));

app.listen(process.env.PORT1,() => {
    console.log(`server is running on port http://${process.env.HOST1}:${process.env.PORT1}`)
})

