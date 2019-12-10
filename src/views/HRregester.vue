<template>
  <el-row>
    <el-row>
      <el-col :span="24" class="re_border">
        <el-col :offset="2" :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
          <div class="re_header" style="margin-left:0em !important">
            <el-image style="width: 200px; height: 75px" :src="url"></el-image>
          </div>
        </el-col>
        <el-col :offset="9" :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
          <div class="re_header">
            <p>找人才，到聚贤！</p>
          </div>
        </el-col>
      </el-col>
    </el-row>
    <el-row class="re_color" style="margin-top:1em;">
      <el-col :offset="2" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <el-carousel style="margin-top:4em;" height="400px" direction="vertical" :autoplay="false">
          <el-carousel-item v-for="item in abc_img" :key="item">
            <h3 class="medium">
              <img :src="item.src" class="lunbotu" alt="轮播图" />
            </h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :offset="2" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form label-position="top" label-width="80px" :model="HR">
          <el-form-item label="用户名">
            <el-input v-model="HR.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input
              v-model="HR.pwd"
               
              :type="pwdType"
            
              placeholder="请输入密码，六位数以上"
              @keyup.enter.native="login"
            >
              <i slot="suffix" class="el-icon-view ispan" @click="showPwd"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="HR.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="公司名称">
            <el-input v-model="HR.company_name" placeholder="请输入公司名称"></el-input>
          </el-form-item>

          <el-form-item label="信用代码">
            <el-input v-model="HR.credit_code" placeholder="请你输入统一信用代码"></el-input>
          </el-form-item>
          <el-button type="primary" @click="onregester" class="regester">注册</el-button>
        </el-form>
      </el-col>
    </el-row>
    <el-row class="bottom">
      <el-col>
        <p>服务热线：15074850577 Email：1912504939@qq.com</p>
        <p>dengruo.com.cn(桂ICP备******) 聚贤工作网版权所有©2019</p>
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      url: require("@/assets/logo1.png"), //logo
      abc_img: [
        //轮播图
        { src: require("@/assets/man.jpg") },
        { src: require("@/assets/girl.jpg") },
        { src: require("@/assets/jxz4.jpg") }
      ],
      HR: {
        name: "",
        pwd: "",
        email: "",
        company_name: "",
        credit_code: ""
      },
      pwdType: "password"
    };
  },
  mounted() {},

  methods: {
    showPwd() {
      this.pwdType === "password"
        ? (this.pwdType = "")
        : (this.pwdType = "password");
      let e = document.getElementsByClassName("el-icon-view")[0];
      this.pwdType == ""
        ? e.setAttribute("style", "color: #409EFF")
        : e.setAttribute("style", "color: #c0c4cc");
    },
    onregester() {
      var HR = this.HR;
      var name = HR.name;
      var pwd = HR.pwd;
      var email = HR.email;
      var company_name = HR.company_name;
      var credit_code = HR.credit_code;

      //注册时间
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();

      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate; //注册时间

      if (name.length == 0 || pwd.length == 0) {
        alert("用户名或密码为空");
      } else if (pwd.length < 6) {
        alert("密码低于六位数");
      } else {
        this.$http
          .post("/api/user/HRadd", {
            currentdate: currentdate,
            name: name,
            pwd: pwd,
            email: email,
            companyname: company_name,
            credit_code: credit_code
          })
          .then(response => {
            console.log("上传成功", response);
            alert("注册成功");
            this.$router.push({ path: "/" });
          })
          .catch(function(error) {
            alert("用户名已存在！");
          });
      }
    }
  }
};
</script>
<style>
.re_color label {
  color: black !important;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  float: left !important;
}

.re_header {
  float: left;
}
.re_header p {
  margin-left: 0em;
  line-height: 2.5em;
  font-size: 2em;
}

.re_border {
  border-bottom: 5px solid rgb(43, 59, 75);
}

.re_color i {
  margin-left: 0em !important;
}
.re_color div {
  margin-bottom: 0px !important;
}

.regester {
  width: 5em !important;
  height: 10% !important;
  font-size: 1em !important;
  margin-top: 0.5em !important;
  background-color: rgb(43, 59, 75) !important;
  border: 0px !important;
}

.regester:hover {
  background-color: rgb(117, 127, 136) !important;
}

/*走马灯 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/*底部 */

.bottom {
  margin-top: 3em !important;
}
.bottom p:nth-child(2) {
  margin-top: 1em;
  margin-bottom: 3em;
  font-family: "microsoft yahei" !important;
}
</style>