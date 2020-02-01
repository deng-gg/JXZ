<template>
  <el-row class="bg">
    <el-col :span="24">
      <el-col :offset="3" :xs="15" :sm="13" :md="10" :lg="10" :xl="10" class="bg-li">
        <div class="demo-input-suffix">
          <el-input placeholder="请输入账号" v-model="account"></el-input>
        </div>
        <div class="demo-input-suffix">
          <el-input placeholder="请输入密码" v-model="psw"></el-input>
        </div>
        <el-button type="primary" @click="HRlogin">登录</el-button>
      </el-col>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      account: "",
      psw: ""
    };
  },
  methods: {
    HRlogin() {
      let account = this.account;
      let psw = this.psw;
      var cip = returnCitySN["cip"]
      let city = returnCitySN["cname"]
      console.log(cip,city)
      if (account.length == 0 || psw.length == 0) {
        alert("用户名或密码为空");
      } else if (psw.length < 6) {
        alert("密码低于六位数");
      } else {
        this.$http
          .post("/api/user/IPlogin", {
            account: account,
            psw: psw,
            cip: cip,
            city: city
          })
          .then(response => {
            console.log(response);
            if (response.data.code == -1) {
              alert("登录失败！");
              return
            }
            alert("登录成功");
            
            return
          })
          .catch(function(error) {
            alert("登录失败！");
          });
      }
    }
  }
};
</script>
<style>
.bg {
  margin-top: 3em;
}
.demo-input-suffix .el-input__inner {
  width: 20em;
  margin-top: 2em;
}

.bg .el-button {
  margin-top: 2em;
}
</style>