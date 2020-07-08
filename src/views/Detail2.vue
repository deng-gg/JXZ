<template>
  <el-container>
    <el-header>
      <div class="box1">
        <h2>{{msg[0].account}}</h2>
      </div>
    </el-header>
    <el-main>
      <div class="box2">
        <ul v-for="(item,index) in msg" :key="index">
          <li>{{item.post}}</li>
          <li>{{item.email}}</li>
          <li>{{item.city}}</li>
          <li>{{item.selfAssessment}}</li>
        </ul>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      msg: ""
    };
  },

  mounted() {
    this.details2();
    console.log("传过来的参数", this.$route.params.id);
  },
  methods: {
    details2() {
      let id = this.$route.params.id;
      this.$http
        .get("/api/hr/detail2", {
          params: {
            id
          }
        })
        .then(response => {
          if (response.data.code != 0) {
            alert("无法查看");
          } else {
            this.msg = response.data.msg;
            //console.log("详情", response.data);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.box1 {
  width: 700px;
  margin: 1em auto;
}
.box2 {
  width: 600px;
  margin: 100px auto;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
