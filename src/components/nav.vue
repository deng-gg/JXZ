<template>
  <el-row class="bg">
    <el-col :span="24">
      <el-col :offset="3" :xs="15" :sm="13" :md="10" :lg="10" :xl="10" class="bg-li">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="rgb(43, 59, 75)"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="2" class="shouye" @click="shouye">首页</el-menu-item>
          <el-menu-item index="3" class="zhiwei" @click="zhiwei">职位</el-menu-item>
          <el-menu-item index="4" class="rencai" @click="rencai">人才</el-menu-item>

          <el-submenu index="5" id="geren">
            <template slot="title">个人中心</template>
            <el-menu-item index="5-1" class="login" @click="grzx">我是HR</el-menu-item>
            <el-menu-item index="5-2" class="login" @click="jopgrzx">我是人才</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
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
          <el-submenu index="6">
            <template slot="title">{{dl}}</template>
            <el-menu-item index="6-1" class="login" @click="hrlogin">我是HR</el-menu-item>
            <el-menu-item index="6-2" class="login" @click="joplogin">我是人才</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">注册</template>
            <el-menu-item index="7-1" @click="hrre" class="login">我是HR</el-menu-item>
            <el-menu-item index="7-2" @click="jopre" class="login">我是人才</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-col>
  </el-row>
</template>
<script>
//import func from "../../vue-temp/vue-editor-bridge";
//import { writeFileSync } from "fs";
export default {
  data() {
    
    return {
      activeIndex: "1",
      activeIndex2: "1",
      dl: ""
    };
  },
  mounted() {
    this.houtai();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    shouye() {
      this.$router.push({ path: "/" });
    },
    rencai() {
      if (this.dl !== "未登录！") {
        this.$router.push({ path: "/rencai" });
        
      } else {
        var truthBeTold = window.confirm("您还未登录不能查询人才，请点击确定登录");
        if (truthBeTold) {
          this.$router.push({ path: "/logins" });
        } else {

        }
        
      }
     
    },
    zhiwei() {
      this.$router.push({ path: "/zhiwei" });
    },
    hrre() {
      if (this.dl !== "未登录！") {
        var truthBeTold = window.confirm("您已注册，是否重新注册？");
        if (truthBeTold) {
          this.$router.push({ path: "/HRregester" });
        } else {

        }
      } else {
        this.$router.push({ path: "/logins" });
      }
      
    },
    jopre() {
      if (this.dl !== "未登录！") {
        var truthBeTold = window.confirm("您已注册，是否重新注册？");
        if (truthBeTold) {
          this.$router.push({ path: "/regester" });
        } else {

        }
      } else {
        this.$router.push({ path: "/regester" });
      }
      
    },
    grzx() {
      this.$router.push({ path: "/grzx" });
    },
    hrlogin() {
      
      if (this.dl !== "未登录！") {
        var truthBeTold = window.confirm("您已经登录是否重新登录");
        if (truthBeTold) {
          this.$router.push({ path: "/logins" });
        } else {
        }
      } else {
        this.$router.push({ path: "/logins" });
      }
    },

    joplogin() {
      if (this.dl !== "未登录！") {
        var truthBeTold = window.confirm("您已经登录是否重新登录");
        if (truthBeTold) {
          this.$router.push({ path: "/joplogin" });
        } else {
        }
      } else {
        this.$router.push({ path: "/joplogin" });
      }
      
    },
    jopgrzx() {
      this.$router.push({ path: "jopgrzx" });
    },
    houtai() {
      this.$http.get("/api/user/houtai").then(response => {
        //console.log("获取到的", response.data);
        this.dl = response.data;
        console.log("shahsha", this.dl);
      });
    }
  }
};
</script>
<style>
.bg {
  background: rgb(43, 59, 75) !important;
}
.bg-li li:hover {
  background: rgb(34, 47, 60) !important;
}

.bg-li li div:hover {
  background: rgb(34, 47, 60) !important;
}

.login:hover {
  background: rgb(34, 47, 60) !important;
}
</style>