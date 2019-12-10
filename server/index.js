// node 后端服务器
const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const multer = require('multer')
const url = require('url')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/uploads', express.static(__dirname + ''))
    // 后端api路由
app.use('/api/user', userApi);
//app.res.sendFile(__dirname + "/" + req.url);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');