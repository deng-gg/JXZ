<template>
  <el-row>
    <el-col :offset="3" :xs="10" :sm="3" :md="3" :lg="3" :xl="3">
      <div class="demo-image">
        <div class="block" v-for="fit in fits" :key="fit">
          <el-image style="width: 200px; height: 75px" :src="url" :fit="fit"></el-image>
        </div>
      </div>
    </el-col>
    <el-col :offset="3" :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入职位关键字" v-model="input3" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="选择城市">
            <el-option label="长沙" value="1"></el-option>
            <el-option label="成都" value="2"></el-option>
            <el-option label="北京" value="3"></el-option>
            <el-option label="深圳" value="4"></el-option>
            <el-option label="广州" value="5"></el-option>
            <el-option label="上海" value="6"></el-option>
            <el-option label="南宁" value="7"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" style="background:#2b3b4b;color:white;"></el-button>
        </el-input>
      </div>
    </el-col>
  </el-row>

</template>
<script>
// @ is an alias to /src
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: true,
      fits: ["fill"],
      url: require("../assets/logo.png"),
      input3: "",
      select: "",
      drawer: false,
      innerDrawer: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>