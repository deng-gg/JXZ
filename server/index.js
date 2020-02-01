const userApi = require('./api/userApi');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/uploads', express.static(__dirname + ''))

app.use('/api/user', userApi); // api路由


app.listen(3000); // 监听端口
console.log('success listen at port:3000......');