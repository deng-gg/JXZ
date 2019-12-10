<template>
  <el-row>
    <el-col :span="24">
      <el-row class="bg">
        <el-col
          :offset="3"
          :xs="9"
          :sm="9"
          :md="9"
          :lg="9"
          :xl="9"
          class="bg-li"
          style="color:white;font-size:1.8em;line-height: 2em;"
        >个人中心</el-col>
        <el-col :offset="3" :xs="9" :sm="5" :md="5" :lg="5" :xl="5" class="bg-li">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="rgb(43, 59, 75)"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item class="shouye" @click="home">首页</el-menu-item>
            <el-submenu index="5">
              <template slot="title">{{dl}}</template>
              <el-menu-item index="5-1" class="login" @click="hrlogin">我是HR</el-menu-item>
              <el-menu-item index="5-2" class="login" @click="joplogin">我是人才</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">注册</template>
              <el-menu-item index="6-1" @click="hrre" class="login">我是HR</el-menu-item>
              <el-menu-item index="6-2" @click="jopre" class="login">我是人才</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
      <el-row style="margin-top:2em;">
        <el-col
          :offset="3"
          :xs="18"
          :sm="18"
          :md="18"
          :lg="18"
          :xl="18"
          class="bg-li"
          style="font-size:1.8em;line-height: 2em;"
        >
          <el-tabs tab-position="left" style="height:100%;">
            <el-tab-pane label="个人信息" class="xinxi">
              <el-row>
                <el-col
                  :offset="1"
                  :xs="12"
                  :sm="12"
                  :md="9"
                  :lg="9"
                  :xl="9"
                  class="xinxi_"
                  :model="HRxinxi"
                >
                  <el-form label-position="top" label-width="80px">
                    <el-form-item label="名称">
                      <el-input v-model="HRxinxi.HR_name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                      <el-input v-model="HRxinxi.pwd" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="email">
                      <el-input v-model="HRxinxi.email"></el-input>
                    </el-form-item>
                    <el-form-item label="QQ/微信">
                      <el-input v-model="HRxinxi.QQ_WX"></el-input>
                    </el-form-item>
                    <el-form-item label="生日">
                      <el-input v-model="HRxinxi.juridical_person"></el-input>
                    </el-form-item>
                  </el-form>
                </el-col>
                <el-col :offset="1" :xs="12" :sm="12" :md="9" :lg="9" :xl="9" class="xinxi_">
                  <el-form label-position="top" label-width="80px">
                    <el-form-item label="期望职位">
                      <el-input v-model="HRxinxi.company_name"></el-input>
                    </el-form-item>
                    <el-form-item label="期望城市">
                      <el-input v-model="HRxinxi.credit_code"></el-input>
                    </el-form-item>

                    <el-form-item label="学历">
                      <el-input v-model="HRxinxi.company_city"></el-input>
                    </el-form-item>
                    <el-form-item label="自我评价">
                      <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="zhaopin.ask"></el-input>
                    </el-form-item>
                    <el-button plain @click="xiugai">点击修改</el-button>
                  </el-form>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      dl: "",
      activeIndex: "1",
      activeIndex2: "1",
      HRxinxi: {
        HR_name: "",
        pwd: "",
        email: "",
        QQ_WX: "",
        company_name: "",
        credit_code: "",
        juridical_person: "",
        company_city: ""
      },
      zhaopin: {
        post: "",
        pay: "",
        city: "",
        ask: "",
        work_experience: "",
        education: ""
      },

      post: "",
      jop: ""
    };
  },
  mounted() {
    
    this.houtai();
  },
  methods: {
    houtai() {
      this.$http.get("/api/user/houtai").then(response => {
        //console.log("获取到的", response.data);
        this.dl = response.data;
        console.log("shahsha", this.dl);
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    hrre() {
      this.$router.push({ path: "/HRregester" });
    },
    jopre() {
      this.$router.push({ path: "/regester" });
    },
    home() {
      this.$router.push({ path: "/" });
    },
    hrlogin() {
      this.$router.push({ path: "/logins" });
    },
    joplogin() {
      this.$router.push({ path: "/joplogin" });
    },

    gongsixinxi() {
      this.$http.get("/api/user/gongsixinxi").then(response => {
        console.log("获取到的", response);
        this.HRxinxi = response.data[0];
        console.log("gongsixinxi:", this.HRxinxi);
      });
    },
    xiugai() {
     /* let HR = this.HRxinxi;
      let HR_name = HR.HR_name;
      let pwd = HR.pwd;
      let email = HR.email;
      let QQ_WX = HR.QQ_WX;
      let company_name = HR.company_name;
      let credit_code = HR.credit_code;
      let juridical_person = HR.juridical_person;
      let company_city = this.company_city;

      this.$http
        .post("/api/user/HRxiugai", {
          HR_name: HR_name,
          pwd: pwd,
          email: email,
          QQ_WX: QQ_WX,
          company_name: company_name,
          credit_code: credit_code,
          juridical_person: juridical_person,
          company_city: company_city
        })
        .then(response => {
          console.log("上传成功", response);
          alert("修改成功");
          this.$router.push({ path: "/grzx" });
        })
        .catch(function(error) {
          alert("修改失败！");
        });*/
    },
    examine() {
      console.log(this.jop_length);
    },
    //登录状态
    houtai() {
      this.$http.get("/api/user/houtai").then(response => {
        //console.log("获取到的", response.data);
        this.dl = response.data;
        console.log("shahsha", this.dl);
      });
    },
    hrdelete() {}
  }
};
</script>
<style>
.xinxi label {
  color: black !important;
  height: 100%;
  float: left !important;
}

.xinxi input {
  width: 18em !important;
  float: left !important;
  border-radius: 0px !important;
}
.xinxi button {
  background: rgb(43, 59, 75);
  color: white;
}
.xinxi button:hover {
  background: rgb(34, 47, 60) !important;
  color: #fff !important;
}

.xinxi_ div {
  margin-bottom: 0px !important;
}

.jopp:hover {
  background: rgb(248, 246, 246) !important;
  cursor: pointer;
}
</style>