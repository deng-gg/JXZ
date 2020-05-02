const mysql = require('../public/mysqlPool')
const express = require('express');
const app = express.Router();
const url = require('url')
const session = require("express-session");
const publicFun = require("../public/publicFun")
const loginCall = publicFun.loginCallback
const jsonWrite = publicFun.jsonWrite

//var fs = require('fs'); // 读取目录
//const multer = require('multer') //实现文件上传
// var upload = multer({ //multer中间件的使用方法可以看官网
//     dest: '../tx'
// })

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    // 可以随便写。 一个 String 类型的字符串，作为服务器端生成 session 的签名
    secret: 'keyboard cat',
    //强制保存 session 即使它并没有变化,。默认为 true
    resave: true,
    //过期时间
    cookie: { maxAge: 90000 }, //单位为妙
    //强制将未初始化的 session 存储。  默认值是true  建议设置成true
    saveUninitialized: true
}))

//首页职位
app.get('/position', (req, res) => {

    let sql = 'select * from post';

    //console.log(req.query)

    mysql(sql, (err, vals, fields) => {

        if (err) {
            let obj = {
                'success': false,
                'code': -1,
                'msg': "查询失败！" + err
            };

            jsonWrite(res, obj)
        }

        let obj = {
            'success': true,
            'code': 0,
            'msg': vals
        };

        jsonWrite(res, obj)
    })

})

//根据类型查询职位
app.get('/se', (req, res) => {

    let data = req.query;
    let sql = `select * from post where type = '${data.type}'`;

    mysql(sql, (err, vals, fields) => {

        if (err) {
            let obj = {
                'success': false,
                'code': -1,
                'msg': "查询失败！" + err
            };

            jsonWrite(res, obj)
        }

        let obj = {
            'success': true,
            'code': 0,
            'msg': vals
        };

        jsonWrite(res, obj)
    })

})

module.exports = app;