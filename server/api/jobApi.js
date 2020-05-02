var mysql = require('../public/mysqlPool')
var express = require('express');
var app = express();
const url = require('url')
var session = require("express-session");
const publicFun = require("../public/publicFun")
const loginCall = publicFun.loginCallback
const jsonWrite = publicFun.jsonWrite
const ase = require("../public/aes")

app.use(session({
    // 可以随便写。 一个 String 类型的字符串，作为服务器端生成 session 的签名
    secret: 'keyboard cat',
    //强制保存 session 即使它并没有变化,。默认为 true
    resave: true,
    //过期时间
    cookie: { maxAge: 9000 }, //单位为妙,此处为个小时
    //强制将未初始化的 session 存储。  默认值是true  建议设置成true
    saveUninitialized: true
}))

//求职者注册
app.post('/register', (req, res) => {

    let data = req.body;

    ////console.log("data", data)
    if (data.account.length != 0 && data.pwd.length > 5) {

        let sql = `select account from job_seeker where account='${data.account}'`

        mysql(sql, (err, vals, fields) => {

            ////console.log('查到的', err, vals, fields)

            if (vals == 0) {
                let pwd = ase.encryption(`${data.pwd}`)
                let sql2 = `insert into job_seeker(account,pwd,email,post,city,age,education,selfAssessment,pay) values("${data.account}","${pwd}","${data.email}","${data.post}","${data.city}","${data.age}","${data.education}","${data.selfAssessment}","${data.pay}")`;

                mysql(sql2, (err2, vals2, fields2) => {
                    //console.log(err2, vals2)
                    if (err2) {

                        let obj = {
                            'success': false,
                            'code': -1,
                            'msg': "注册失败",
                            "err2": err2
                        };
                        jsonWrite(res, obj);
                    } else {
                        let obj = {
                            'success': true,
                            'code': 0,
                            'msg': "注册成功" + vals2
                        };

                        jsonWrite(res, obj);
                    }

                })

            } else if (err) {
                let obj = {
                    'success': false,
                    'code': -1,
                    'msg': "注册失败" + err
                };
                jsonWrite(res, obj);
            } else {
                let obj = {
                    'success': false,
                    'code': -6,
                    'msg': "注册失败,用户名已存在"
                };
                jsonWrite(res, obj);
            }
        })
    } else {
        let obj = {
            'success': false,
            'code': -5,
            'msg': "用户名或密码为空"
        };
        jsonWrite(res, obj);

    }
})


//求职者登录
app.post('/login', (req, res) => {

    let data = req.body.params;

    let account = data.name

    if (account.length != 0 && data.pwd.length > 5) {

        let pwd = ase.encryption(`${data.pwd}`);
        ////console.log("pwdwe", pwd)
        let sql = `select account,pwd from job_seeker where account = '${account}' or email = '${account}' and pwd = '${(pwd)}'`;

        mysql(sql, (err, vals, fields) => {
            if (err || vals == 0) {

                let obj = {
                    'success': false,
                    'code': -1,
                    'msg': "用户名或密码错误",
                    'data': err
                };

                jsonWrite(res, obj)
            } else {
                let obj = {
                    'success': true,
                    'code': 0,
                    'msg': "登录成功",
                    'data': vals
                };

                req.session.cookie.maxAge = 9000000; //单位为妙
                ////console.log(req.session)
                req.session.userName = account;
                ////console.log("session", req.session.userName)
                ////console.log("登录成功", vals)
                jsonWrite(res, obj)
            }
        })

    } else {

        let obj = {
            'success': false,
            'code': -1,
            'msg': "用户名或密码为空"
        };

        jsonWrite(res, obj)

    }

})


module.exports = app;