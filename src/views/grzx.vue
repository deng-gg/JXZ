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
                  </el-form>
                </el-col>
                <el-col :offset="1" :xs="12" :sm="12" :md="9" :lg="9" :xl="9" class="xinxi_">
                  <el-form label-position="top" label-width="80px">
                    <el-form-item label="公司">
                      <el-input v-model="HRxinxi.company_name"></el-input>
                    </el-form-item>
                    <el-form-item label="信用代码">
                      <el-input v-model="HRxinxi.credit_code"></el-input>
                    </el-form-item>
                    <el-form-item label="法人">
                      <el-input v-model="HRxinxi.juridical_person"></el-input>
                    </el-form-item>
                    <el-form-item label="所在地">
                      <el-input v-model="HRxinxi.company_city"></el-input>
                    </el-form-item>
                    <el-button plain @click="xiugai">点击修改</el-button>
                  </el-form>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="发布招聘" class="xinxi">
              <el-row>
                <el-col
                  :offset="1"
                  :xs="12"
                  :sm="12"
                  :md="9"
                  :lg="9"
                  :xl="9"
                  class="xinxi_"
                  :model="zhaopin"
                >
                  <el-form label-position="top" label-width="80px">
                    <el-form-item label="岗位名称">
                      <el-input v-model="zhaopin.post"></el-input>
                    </el-form-item>
                    <el-form-item label="薪资">
                      <el-input v-model="zhaopin.pay"></el-input>
                    </el-form-item>
                    <el-form-item label="工作地点">
                      <el-input v-model="zhaopin.city"></el-input>
                    </el-form-item>
                    <el-form-item label="类型">
                      <el-select v-model="zhaopin.type" placeholder="请选择行业类型" class="selects">
                        <el-option label="技术" value="技术"></el-option>
                        <el-option label="产品" value="产品"></el-option>
                        <el-option label="设计" value="设计"></el-option>
                        <el-option label="运营" value="运营"></el-option>
                        <el-option label="市场" value="市场"></el-option>
                        <el-option label="人事" value="人事"></el-option>
                        <el-option label="销售" value="销售"></el-option>
                        <el-option label="金融" value="金融"></el-option>
                        <el-option label="服务业" value="服务业"></el-option>
                        <el-option label="教育" value="教育"></el-option>
                        <el-option label="其他" value="其他"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                </el-col>
                <el-col :offset="1" :xs="12" :sm="12" :md="9" :lg="9" :xl="9" class="xinxi_">
                  <el-form label-position="top" label-width="80px" :model="post">
                    <el-form-item label="任职要求">
                      <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="zhaopin.ask"></el-input>
                    </el-form-item>
                    <el-form-item label="工作经验">
                      <el-input v-model="zhaopin.work_experience"></el-input>
                    </el-form-item>
                    <el-form-item label="学历">
                      <el-input v-model="zhaopin.education"></el-input>
                    </el-form-item>
                    <el-button plain @click="HRfabu">点击发布</el-button>
                  </el-form>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="我发布的" class="xinxi">
              <el-row>
                <li v-for="(item,index) in jop" :key="index">
                  <el-col :span="22" class="jop" :data="jop">
                    <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" class="jop_ jopp">
                      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5" prop="zhiwei">
                          {{item.post}}
                          <em prop="xinci">{{item.pay}}</em>
                        </el-col>
                        <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                          <p prop="diqu">
                            {{item.city}}
                            <em>|</em>经验不限
                            <em>|</em>大专
                          </p>
                        </el-col>
                      </el-col>
                      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <el-col
                          :xs="5"
                          :sm="5"
                          :md="5"
                          :lg="5"
                          :xl="5"
                          style="color:black !important;"
                          prop="gongsi"
                        >{{item.post}}</el-col>
                        <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                          <p>招聘者：HR</p>
                        </el-col>
                      </el-col>
                      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <el-col
                          :xs="5"
                          :sm="5"
                          :md="5"
                          :lg="5"
                          :xl="5"
                          style="color:black !important;"
                          prop="fabu"
                        >
                          发布于:
                          <span>{{dl}}</span>
                        </el-col>
                        <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                          <p>邮箱：1912504939@qq.com</p>
                        </el-col>
                      </el-col>
                      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                          <el-button type="success" plain @click="examine">点击查看</el-button>
                        </el-col>
                        <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                          <el-button type="success" plain @click="examine">点击删除</el-button>
                        </el-col>
                      </el-col>
                    </el-col>
                  </el-col>
                </li>
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
        education: "",
        type: ""
      },

      post: "",
      jop: "",
    };
  },
  mounted() {
    this.zhuangtai();
    this.gongsixinxi();
  },
  beforeUpdate() {
    this.wfbd();
  },
  methods: {
    houtai() {
      this.$http.get("/api/user/houtai").then(response => {
        //console.log("获取到的", response.data);
        this.dl = response.data;
        console.log("shahshaqisiren", this.dl);
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
        this.HRxinxi = response.data[0];
        console.log("HR公司信息:", this.HRxinxi);
      });
    },
    xiugai() {
      let HR = this.HRxinxi;
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
        });
    },
    HRfabu() {
      var zhaopin = this.zhaopin;
      let dl = this.dl;
      let HRxinxi = this.HRxinxi;
      let HR_name = HRxinxi.HR_name;
      let email = HRxinxi.email;
      let company_name = HRxinxi.company_name;
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
      if (this.dl == "未登录！") {
        alert("请登录后再发表！");
      } else if (this.dl !== "未登录") {
        if (this.zhaopin.post == "" || this.zhaopin.city == "") {
          alert("请输入岗位名称和工作城市");
        } else if (this.zhaopin.type == "") {
          alert("请选择职业类型");
        } else {
          this.$http
            .post("/api/user/HRzhaopin", {
              //hr_name:dl,
              post: zhaopin.post,
              pay: zhaopin.pay,
              city: zhaopin.city,
              ask: zhaopin.ask,
              work_experience: zhaopin.work_experience,
              education: zhaopin.education,
              type: zhaopin.type,
              currentdate: currentdate,
              HR_name: HRxinxi.HR_name,
              email: HRxinxi.email,
              company_name: HRxinxi.company_name
            })
            .then(response => {
              console.log("上传成功", response);
              alert("发布成功");
              this.$router.push({ path: "/grzx" });
            })
            .catch(function(error) {
              alert("发布失败！");
            });
        }
      }
    },

    zhuangtai() {
      this.$http.get("/api/user/houtai").then(response => {
        //console.log("获取到的", response.data);
        this.dl = response.data;
        console.log("获取到登录用户名", this.dl);
      });
    },
    wfbd() {
      console.log("dl:", this.dl);
      let ddl = this.dl
      this.$http
        .get("/api/user/hrfabu",{ddl})
        .then(response => {
          //console.log("获取到的", response.data);
         console.log(response.data)
         this.jop = response.data;

        })
        .catch(function(error) {
          alert("获取失败！");
        });
    }
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

.jopp:hover {
  background: rgb(248, 246, 246) !important;
  cursor: pointer;
}

.selects {
  margin: 0em 10em 0 0 !important;
}
.selects span {
  margin-top: 2.5em !important;
}
</style>