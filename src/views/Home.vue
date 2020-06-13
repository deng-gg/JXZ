<template>
    <el-row>
        <Nav></Nav>
        <SE1 class="see"></SE1>
        <Center class="centerss"></Center>
    </el-row>
</template>
<script>
import Nav from "../components/nav.vue"
import SE1 from "../components/se1.vue"
import Center from "../components/Center.vue"
export default {
  components: {
      Nav,
      SE1,
      Center
  },
  data() {
    return {
      dl:""
    };
  },
   mounted() {
    
  },
  methods: {
    // houtai(){
    //   this.$http.get("/api/public/houtai").then(response => {
    //     //console.log("获取到的", response.data);
    //     this.dl = response.data;
    //     console.log("shahsha",this.dl)
    //   });
    // }
  }
};
</script>