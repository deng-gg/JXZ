// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(username, password,email,birthday) values (?,?,?,?)',
        selects: 'select * from user',
        selectimg: 'select img from userimg',
        jop_regester: 'select * from job_seeker',
        insert_jop: 'insert into job_seeker(date,name,pwd,email,post,city) values(?,?,?,?,?,?)',
        insert_HR: 'insert into hr(date,HR_name,pwd,email,company_name,credit_code) values(?,?,?,?,?,?)',
        position: 'select * from post',
        HRxiugai: 'update hr set HR_name=?',
        hrlogins: 'select HR_name,pwd from hr',


    }
}

module.exports = sqlMap;