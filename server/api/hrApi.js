const mysql = require('../public/mysqlPool')
const express = require('express');
const app = express.Router();
const url = require('url')
const session = require("express-session");

const publicFun = require("../public/publicFun")
const loginCall = publicFun.loginCallback
const jsonWrite = publicFun.jsonWrite
const login = publicFun.login

const ase = require('../public/aes')



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

//HR注册
app.post('/register', (req, res) => {

    let data = req.body;

    //console.log(data)
    if (data.name.length != 0 && data.pwd.length > 5) {

        let sql = `select hrName from hr where hrName='${data.name}'`

        mysql(sql, (err, vals, fields) => {

            //console.log('查到的', vals, fields)

            if (vals == 0) {

                let pwd = ase.encryption(`${data.pwd}`)

                let sql2 = `insert into hr(hrName,pwd,email,companyName,juridical,city,creditCode) values('${data.name}','${pwd}','${data.email}','${data.companyname}','${data.juridical}','${data.city}','${data.credit_code}')`;

                mysql(sql2, (err2, vals2, fields2) => {
                    if (err2) {

                        let obj = {
                            'success': false,
                            'code': -1,
                            'msg': "注册失败",
                            err2
                        };
                        jsonWrite(req, res, obj);
                    } else {
                        let obj = {
                            'success': true,
                            'code': 0,
                            'msg': "注册成功" + vals2
                        };
                        //console.log("注册成功")
                        jsonWrite(res, obj);
                    }

                })

            } else if (err) {
                let obj = {
                    'success': false,
                    'code': -1,
                    'msg': "注册失败",
                    'data': err
                };
                jsonWrite(res, obj);
            } else {
                let obj = {
                    'success': false,
                    'code': -1,
                    'msg': "注册失败,用户已存在"
                };
                jsonWrite(res, obj);
            }
        })
    } else {
        let obj = {
            'success': false,
            'code': -1,
            'msg': "用户名或密码为空"
        };
        jsonWrite(res, obj);

    }
})

//hr登录
app.get('/login', (req, res) => {

    let data = req.query;
    let account = data.hrName;

    //console.log('data', data)

    if (account.length != 0 && data.pwd.length > 5) {

        let pwd = ase.encryption(`${data.pwd}`);

        let sql = `select hrName,pwd from hr where hrName='${account}' and pwd = '${pwd}'`;

        mysql(sql, (err, vals, fields) => {

            console.log("vals", vals.length)
            if (vals == 0 || err) {

                let obj = {
                    'success': false,
                    'code': -1,
                    'msg': "用户名或密码错误",

                };
                jsonWrite(res, obj)

            } else {
                let obj = {
                    'success': true,
                    'code': 0,
                    'msg': "登录成功",
                    'data': vals,

                };
                req.session.cookie.maxAge = 9000000; //单位为妙
                req.session.userName = account;
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

//HR查询人才
app.get('/rencai', (req, res) => {

    loginCall(req, res, (userName) => {

        let sql = `select * from job_seeker`

        mysql(sql, (err, vals, fields) => {
            if (err) {
                let obj = {
                    'success': false,
                    'code': -1,
                    'msg': "查询失败"
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
})

//查询我发布的信息
app.get('/hrfabu', (req, res) => {
    let data = req.body;

    loginCall(req, res, (userName) => {

        console.log("当前登录的是", userName)
        let sql = `select * from post where hrName='${userName}'`
        mysql(sql, (err, vals, fields) => {
            if (err) {
                let obj = {
                    'success': false,
                    'code': -1,
                    'msg': "查询失败"
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

})


//HR查询个人中心
app.get('/gongsixinxi', (req, res) => {

    loginCall(req, res, (userName) => {

        let sql = `select * from hr where hrName='${userName}'`
        mysql(sql, (err, vals, fields) => {
            if (err) {
                let obj = {
                    'success': false,
                    'code': -1,
                    'msg': "查询失败"
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

})

//HR修改信息
app.post('/HRxiugai', (req, res) => {

    loginCall(req, res, (userName) => {

        let data = req.body;
        let sql = `update hr set hrName='${data.name}',QQ='${data.QQ}',pwd='${data.pwd}',email='${data.email}',city='${data.city}',juridical='${data.juridical}' where hrName = '${userName}' `

        mysql(sql, (err, vals, fields) => {
            if (err) {
                let obj = {
                    'success': false,
                    'code': -1,
                    'msg': "查询失败"
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

})


// HR发布招聘
app.post('/HRzhaopin', (req, res) => {

    loginCall(req, res, (userName) => {

        let data = req.body;
        console.log(data);


        let sql = `insert into post(hrName,post,ask,pay,city,workExperience,education,type) values('${userName}',${data.post}','${data.ask}','${data.pay}','${data.city}','${data.work_experienc}','${data.education}','${data.type}')`

        mysql(sql, (err, vals, fields) => {

            if (err) {
                let obj = {
                    'success': false,
                    'code': -1,
                    'msg': "查询失败"
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
})

module.exports = app;