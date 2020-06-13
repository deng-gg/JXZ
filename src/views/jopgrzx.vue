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
                  :model="geXinxi"
                >
                  <el-form label-position="top" label-width="80px">
                    <el-form-item label="名称">
                      <el-input v-model="geXinxi.account"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                      <el-input v-model="geXinxi.pwd" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="email">
                      <el-input v-model="geXinxi.email"></el-input>
                    </el-form-item>
                    <el-form-item label="微信">
                      <el-input v-model="geXinxi.WX"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄">
                      <el-input v-model="geXinxi.age"></el-input>
                    </el-form-item>
                  </el-form>
                </el-col>
                <el-col :offset="1" :xs="12" :sm="12" :md="9" :lg="9" :xl="9" class="xinxi_">
                  <el-form label-position="top" label-width="80px">
                    <el-form-item label="期望职位">
                      <el-input v-model="geXinxi.post"></el-input>
                    </el-form-item>
                    <el-form-item label="期望城市">
                      <el-input v-model="geXinxi.city"></el-input>
                    </el-form-item>

                    <el-form-item label="学历">
                      <el-input v-model="geXinxi.education"></el-input>
                    </el-form-item>
                    <el-form-item label="自我评价">
                      <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="geXinxi.selfAssessment"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="期望薪资">
                      <el-input
                        type="textarea"
                        :rows="2"
                        placeholder=""
                        v-model="geXinxi.pay"
                      ></el-input>
                    </el-form-item>
                    <el-alert :title="xgcg" type="success"></el-alert>
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
      geXinxi: {
        account:"",
        pwd:"",
        email:"",
        WX:"",
        age:"",
        post:"",
        city:"",
        education:"",
        selfAssessment:"",
        pay:""
      },
      xgcg:""
    };
  },
  mounted() {
    this.houtai();
    this.jopgrzx();
  },
  methods: {
    houtai() {
      this.$http.get("/api/houtai").then(response => {
        //console.log("登录状态", response);
        if (response.data.code == 1) {
          this.dl = "登录";
          alert("登录超时");
        } else {
          this.dl = response.data.msg;
        }
      });
    },
   
    jopgrzx() {
      this.$http.get("/api/job/jopgrzx").then(res => {
        //console.log("请求到的个人信息", res);
        if(res.data.code == 0){
          this.geXinxi = res.data.msg[0];
        }      

      });
    },
     xiugai() {
      let xinxi = this.geXinxi;

      this.$http.post("/api/job/xiugai",{
            params: {
              xinxi:xinxi
            }}).then(res => {
        console.log("请求到的个人信息", res);
        
        if(res.data.code == 0){
           this.xgcg = "修改成功"
        }      

      });
    },
    handleSelect(key, keyPath) {
      //console.log(key, keyPath);
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
      this.$router.push({ path: "/hrLogin" });
    },
    joplogin() {
      this.$router.push({ path: "/joplogin" });
    },
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