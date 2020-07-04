<template>
    <el-row>
        <Nav></Nav>
        <SE1 class="see"></SE1>
        <Center class="centerss"></Center>
    </el-row>
</template>
<script>
import Nav from "../components/nav"
import SE1 from "../components/se1.vue"
import Center from "../components/Center.vue"
export default {
  components: {
      Nav,
      SE1,
      Center
  },
mounted() {
    // this.$cookies.isKey("cookie"); 判断是否存在存在true，不存在false

    console.log("cookie",this.$cookies.get("cookieName")) // 
    console.log("token",this.$cookies.get("token")) // return true or false
},

};
</script>