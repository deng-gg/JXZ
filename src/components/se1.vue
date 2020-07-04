<template>
  <el-row>
    <el-row style="margin-top:20px;">
      <el-col :span="24">
        <el-row class="box_se">
          <el-col :xs="10" :sm="3" :md="3" :lg="3" :xl="3" class="item_se">
            <div class="demo-image">
              <el-image style="width: 200px; height: 75px" :src="url"></el-image>
            </div>
          </el-col>
          <el-col :offset="1" :xs="20" :sm="20" :md="10" :lg="10" :xl="10" class="item_se">
            <div style="margin-top: 15px;">
              <el-input placeholder="请输入职位关键字" class="input-with-select" v-model="input3">
                <el-select v-model="select" slot="prepend" class="se_select" placeholder="选择城市">
                  <el-option label="长沙" value="1"></el-option>
                  <el-option label="成都" value="2"></el-option>
                  <el-option label="北京" value="3"></el-option>
                  <el-option label="深圳" value="4"></el-option>
                  <el-option label="广州" value="5"></el-option>
                  <el-option label="上海" value="6"></el-option>
                  <el-option label="南宁" value="7"></el-option>
                </el-select>
                <el-button
                  slot="append"
                  icon="el-icon-search"
                  style="background:#2b3b4b;color:white;"
                ></el-button>
              </el-input>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      url: require("@/assets/logo1.png"),
      input3: "",
      select: "",
      msg: "hello store"
    };
  },
  created() {
    //this.creat();
    //console.log(this.$store.state.name);
  },
  mounted() {
    //this.creat();
    //console.log(this.$store.state.name);
  },
  methods: {
    creat() {
      this.$store.commit("showPeople", this.msg);
      console.log(this.$store.state.name);
    },
  }
};
</script>
<style>
.input-with-select {
  min-width: 100% !important;
  margin-bottom: 1em !important;
}
.se_select {
  width: 102px !important;
}
.box_se {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.item_se {
}
</style>