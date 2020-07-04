<template>
  <el-row class="bg">
    <el-col :span="24" class="bg box">
      <el-col :xs="24" :sm="10" :md="10" :lg="5" :xl="10" class="bg-li item1">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo item_1_1"
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
      <el-col :xs="24" :sm="10" :md="5" :lg="5" :xl="5" class="bg-li item2">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="rgb(43, 59, 75)"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item style v-if="isUsername">Hi! {{username}}</el-menu-item>
          <el-submenu index="6" v-if="islogin">
            <template slot="title">登录</template>
            <el-menu-item index="6-1" class="login" @click="hrlogin">我是HR</el-menu-item>
            <el-menu-item index="6-2" class="login" @click="joplogin">我是人才</el-menu-item>
          </el-submenu>

          <el-submenu index="7" v-if="isregister">
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
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      dl: "登录",
      islogin: true,
      username: "123",
      isUsername: false,
      isregister: true
    };
  },
  mounted() {
    this.houtai();
    console.log("nav里的coookie", this.$cookies.isKey("cookieName"));
  },
  methods: {
    houtai() {
      if (this.$cookies.isKey("cookieName") == true) {
        this.islogin = false;
        this.username = this.$cookies.get("cookieName");
        this.isUsername = true; // 显示用户名
        this.isregister = false; // 隐藏登录注册
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    username() {
      return this.$store.getters.getName;
    },
    shouye() {
      this.$router.push({ path: "/" });
    },
    rencai() {
      this.$router.push({ path: "/rencai" });
      
      // if (this.$cookies.isKey("cookieName") == true) {
      //   this.$router.push({ path: "/rencai" });
      // } else {
      //   var truthBeTold = window.confirm(
      //     "您还未登录不能查询人才，请点击确定登录"
      //   );
      //   if (truthBeTold) {
      //     this.$router.push({ path: "/hrLogin" });
      //   } else {
      //   }
      // }
    },
    zhiwei() {
      console.log("zhiwei");
      this.$router.push({ path: "/zhiwei" });
    },
    hrre() {
      if (this.dl !== "登录") {
        var truthBeTold = window.confirm("您已注册，是否重新注册？");
        if (truthBeTold) {
          this.$router.push({ path: "/HRregester" });
        } else {
        }
      } else {
        this.$router.push({ path: "/HRregester" });
      }
    },
    jopre() {
      if (this.dl !== "登录") {
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
      if (this.dl !== "登录") {
        var truthBeTold = window.confirm("您已经登录是否重新登录");
        if (truthBeTold) {
          this.$router.push({ path: "/hrLogin" });
        } else {
        }
      } else {
        this.$router.push({ path: "/hrLogin" });
      }
    },

    joplogin() {
      if (this.dl !== "登录") {
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
    }
    // houtai() {

    // if(this.$cookies.isKey("cookieName") == false){
    //   this.islogin = false;
    //   this.username = this.$cookies.get("cookieName");
    //   this.isUsername = true;
    //   return
    // }
    // this.$http.get("/api/houtai").then(response => {
    //   if (response.data.code == 1) {
    //     this.dl = "登录";
    //     return;
    //   } else {
    //     //console.log("获取到的", response.data);
    //     this.dl = response.data.msg;
    //     //console.log("shahsha", this.dl);
    //   }
    // });
    //}
  }
};
</script>
<style>
.box {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.bg {
  /* margin: 0px; */
  background: rgb(43, 59, 75) !important;
}
/* .el-menu::after {
    clear:none !important;
} */
.item2 {
  display: flex;
  justify-content: space-around;
  /* flex-start; */
}
.item_1_1 {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
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

.el-submenu:hover {
  background: rgb(34, 47, 60) !important;
}
</style>