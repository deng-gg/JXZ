<template>
  <div id="app">
    <div>{{username}}</div>
    <button class="buttons" @click="change">更改我的昵称</button>
  </div>
</template>
<script>
export default {
  data() {
    //data存放组件的私有数据，store存放共有数据
    return {
      msg: "hello store"
    };
  },

  mounted() {
    // this.$store.state.msg 获取仓库的数据
    console.log(this.$store.state.name);
    this.msg = this.$store.state.name;

    // console.log(this.$store.getters.getName);
  },
  methods:{
      change(){
          //第一个参数为函数，第二个为要传入的值。
        //   this.$store.commit("changName","jkb...");
         this.$store.dispatch("changName","jkb...");
      }
  },
  computed:{
      username(){
          return this.$store.getters.getName;
      }
  }
};
</script>
<style>
.buttons{
    margin: 10px auto;
}
</style>