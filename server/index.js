const hr = require('./api/hrApi');
const jobApi = require('./api/jobApi');
const publicApi = require('./api/publicApi');
const url = require('url')
const express = require('express');
const app = express();

//配置中间件，是每个请求带上BodyParser，req会增加body参数，获取post请求传过来的数据，
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const ase = require('./public/aes')
const publicFun = require("./public/publicFun")
const loginCall = publicFun.loginCallback
const jsonWrite = publicFun.jsonWrite

const session = require("express-session");

// var data = 123234323
// console.log(ase.encryption(`${data}`))
let date = "LxgyjDX8S7ZRPcDIwM0kfw=="
console.log(ase.decryption(date))

//配置请求头, 跨域， 用了proxy代理服务就不需要该请求头
// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Methods', '*');
//     //res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     next();
// };
// app.use(allowCrossDomain);


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


app.use('/api/hr', hr);
app.use('/api/job', jobApi);
app.use('/api/public', publicApi);

//登录状态
app.get('/api/houtai', (req, res) => {

    console.log(req.query)
    console.log("12323123", req.session.userName)
    loginCall(req, res, (name) => {

        if (name != null) {
            jsonWrite(res, name)
        } else {
            qdl = "未登录！"
            jsonWrite(res, qdl)
        }


    })

})

app.listen(3000); // 监听端口
console.log('success listen at port:3000......');