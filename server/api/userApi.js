var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
var fs = require('fs');
const multer = require('multer')
const url = require('url')
var session = require("express-session");


var upload = multer({ //multer中间件的使用方法可以看官网
    dest: '../tx'
})
router.use(session({
        // 可以随便写。 一个 String 类型的字符串，作为服务器端生成 session 的签名
        secret: 'keyboard cat',
        //强制保存 session 即使它并没有变化,。默认为 true
        resave: true,
        //过期时间
        cookie: { maxAge: 90000 }, //单位为妙
        //强制将未初始化的 session 存储。  默认值是true  建议设置成true
        saveUninitialized: true
    }))
    // 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};



// 增加用户接口

//求职者注册
router.post('/jopAdd', (req, res) => {
    let data = req.body;
    console.log('前端数据', data, data.name.length)

    if (data.name.length != 0 && data.pwd.length > 5) {

        conn.query(`select name from job_seeker where name='${data.name}'`, function(err, rs) {
            console.log('查到的', rs)
            let sql = $sql.user.insert_jop;
            if (rs.length == 0) {
                conn.query(sql, [data.currentdate, data.name, data.pwd, data.email, data.industry, data.city], function(err, result) {
                    if (err) {
                        console.log(err);
                    } else if (result) {
                        //console.log("注册成功")
                        jsonWrite(res, result);
                    }
                })

            } else if (err) {
                console(err)
            } else {
                console.log('用户已存在')
            }
        })
    } else {
        console.log(err, '空')
        jsonWrite(res, result);
    }
})

//HR注册
router.post('/HRadd', (req, res) => {
        let data = req.body;
        console.log('前端数据', data, data.name.length)

        if (data.name.length != 0 && data.pwd.length > 5) {

            conn.query(`select hrName from hr where hrName='${data.name}'`, function(err, rs) {
                //console.log('查到的', rs)
                let sql = $sql.user.insert_HR;
                if (rs.length == 0) {
                    conn.query(sql, [data.currentdate, data.name, data.pwd, data.email, data.companyname, data.credit_code], function(err, result) {
                        if (err) {
                            console.log(err);
                        } else if (result) {
                            //console.log("注册成功")
                            jsonWrite(res, result);
                        }
                    })

                } else if (err) {
                    console(err)
                } else {
                    console.log('用户已存在')
                }
            })
        } else {
            console.log(err, '空')

        }
    })
    //hr登录
router.post('/hrlogin', (req, res) => {
        let data = req.body;
        console.log(data)
        let sql = `select hrName,pwd from hr where hrName = '${data.name}' and pwd = '${(data.pwd)}'`;
        conn.query(sql, (err, rs) => {
            if (err) {
                console.log(err)

            } else if (err || rs.length == 0) {
                console.log("登录失败", rs)

            } else if (rs.length !== 0) {
                req.session.cookie.maxAge = 900000; //单位为妙
                //console.log(req.session)
                req.session.userName = data.name;
                //console.log("session", req.session.userName)
                //console.log("登录成功", rs)
                jsonWrite(res, rs);
            }
        })
    })
    //求职者登录
router.post('/joplogin', (req, res) => {
    let data = req.body;
    console.log(data)
    let sql = `select name,pwd from job_seeker where name = '${data.name}' and pwd = '${(data.pwd)}'`;
    conn.query(sql, (err, rs) => {
        if (err) {
            console.log(err)

        } else if (err || rs.length == 0) {
            console.log("登录失败", rs)

        } else if (rs.length !== 0) {
            req.session.cookie.maxAge = 900000; //单位为妙
            //console.log(req.session)
            var session_jop = req.session.userName = data.name;
            //console.log("session", req.session.userName)
            //console.log("登录成功", rs)
            jsonWrite(res, rs);
        }
    })
})

//登录状态
router.get('/houtai', (req, res) => {
    var hrname = req.session.userName;
    if (hrname != null) {
        jsonWrite(res, hrname)
    } else {
        qdl = "未登录！"
        jsonWrite(res, qdl)
    }

})


//首页查询职位
router.get('/position', (req, res) => {


    let sql = $sql.user.position;

    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result) {
            req.session.userName
            console.log(result)

            jsonWrite(res, result)



        }
    })

})

//HR查询人才
router.get('/rencai', (req, res) => {
    let sql = `select * from job_seeker`
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result) {

            console.log(result)
            jsonWrite(res, result)



        }
    })
})

//查询我发布的信息
router.get('/hrfabu', (req, res) => {
    let data = req.body;
    console.log("dl===", data)
    var fb = req.session.userName;
    console.log("当前登录的是", fb)
    let sql = `select * from post where hrName='${fb}'`
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result) {
            console.log("我发布的职位有", result)
            jsonWrite(res, result)
        }
    })
})

//HR查询个人中心
router.get('/gongsixinxi', (req, res) => {

    req.session.userName
        //console.log(req.session.userName, "当前登录的是")
    let sql = `select * from hr where hrName='${req.session.userName}'`
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            //console.log(res)
            //console.log("查询成功")
            jsonWrite(res, result);
        }
    })
}, )


//HR修改信息
router.post('/HRxiugai', (req, res) => {
    let data = req.body;
    var sessionHR = req.sessison.userName
    let sql = `update hr set hrName='${data.hrName}',QQ='${data.QQ_WX}',pwd='${data.pwd}',email='${data.email}',company_city='${data.company_city}',juridical_person='${data.juridical_person}' `
    console.log(data, sessionHR);
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            //console.log("查询成功")
            jsonWrite(res, result);
        }
    })
}, )

//HR发布招聘
router.post('/HRzhaopin', (req, res) => {

    let data = req.body;
    console.log(data);
    let sql = `insert into post(hrName,release_time,post,ask,pay,city,work_experience,education,type) values('123','${data.currentdate}','${data.post}','${data.ask}','${data.pay}','${data.city}','${data.work_experienc}','${data.education}','${data.type}')`
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            //console.log("查询成功")
            jsonWrite(res, result);
        }
    })
}, )
router.get('/login', (req, res) => {
    console.log(req)
    account = req.body.account;
    psw = req.body.psw;
    let sql = `select account,psw from hr where account='${account}' and psw = '${psw}'`;
    conn.query(sql, (err, rs) => {
        if (err) {
            console.log(err);

            res.json("-1")
            return;
        }
        res.json(rs)


    })
})

module.exports = router;