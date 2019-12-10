var http = require("http");
var fs = require("fs");
var url = require("url");
//创建一个server的实例
var server = http.createServer(function(req, res) {

    var pathname = url.parse(req.url).pathname;
    console.log(pathname)
        //当url的ip加端口号的后1到7位为img/png时，返回以该路径下对应的png图片
    if (pathname.substring(1, 7) === 'api/tx') {
        fs.readFile(pathname.substring(1), function(err, data) {
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(data);
            //console.log(data)
        });
    }
    //jpg同上
    if (pathname.substring(1, 7) === 'api/tx') {
        fs.readFile(pathname.substring(1), function(err, data) {
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.end(data);
        });
    }

}).listen(3090); //监听在3010端口 
console.log('服务器已开启......');