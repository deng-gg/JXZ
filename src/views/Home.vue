<template>
  <el-row>
    <Nav></Nav>
    <SE1 class="see"></SE1>
    <Center class="centerss"></Center>
  </el-row>
</template>
<script>
import Nav from "../components/nav";
import SE1 from "../components/se1.vue";
import Center from "../components/Center.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    Nav,
    SE1,
    Center
  },
  mounted() {
    //sessionStorage.setItem("testKey", "is sessionStrage"); // sessionStorage写入
    
  },
  methods: {
    
  }
};
</script>