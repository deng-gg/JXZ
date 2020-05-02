var publicFunc = {

    loginCallback(req, res, callback) {

        let data = req.session.userName;

        if (data != null && data != undefined) {

            callback(data);

        } else {

            let obj = {
                'success': false,
                'code': 1,
                'msg': '登录超时'
            }

            res.json(obj);
            res.end();
            return;

        }
    },
    login(req, res) {

        let data = req.session.userName;

        if (data != null && data != undefined) {

            callback(data);

        } else {

            let obj = {
                'success': false,
                'code': 1,
                'msg': '登录超时'
            }

            res.json(obj);
            res.end();
            return;

        }
    },
    jsonWrite(res, ret) {
        if (ret === undefined) {
            res.json({
                code: '1',
                msg: '操作失败'
            });
        } else {
            res.json(ret);
            res.end();
            return;
        }
    }

}

module.exports = publicFunc;