<template>
  <el-container>
    <el-header>
      <div class="box1">
        <h2>{{msg[0].companyName}}</h2>
      </div>
    </el-header>
    <el-main>
      <div class="box2">
        <ul v-for="(item,index) in msg" :key="index">
          <li>{{item.post}}</li>
          <li>{{item.ask}}</li>
          <li>{{item.pay}}</li>
          <li>{{item.companyName}}</li>
        </ul>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      msg: '',
    };
  },

  mounted() {
    this.details();
    console.log("传过来的参数", this.$route.params.id);
  },
  methods: {
    details() {
      let id = this.$route.params.id;
      this.$http
        .get("/api/public/detail", {
          params: {
            id
          }
        })
        .then(response => {
          if (response.data.code != 0) {
            alert("无法查看");
          } else {
            this.msg = response.data.msg;
            console.log("详情",response.data)
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
.box1{
  width: 700px;
  margin:1em auto;
}
.box2{
  width: 600px;
  margin: 100px auto;
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  
  
</style>
