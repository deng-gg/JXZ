<template>
  <el-row>
    <Nav></Nav>
    <el-row style="margin-top:2em;">
      <el-col
        :offset="3"
        :xs="18"
        :sm="18"
        :md="18"
        :lg="18"
        :xl="18"
        class="bg-li"
        style="font-size:1.8em;line-height: 2em;"
      >
        <el-tabs tab-position="left" style="height:100%;">
          <el-tab-pane label="技术" class="xinxi">
            <el-row>
              <li v-for="(item,index) in rc" :key="index">
                <el-col :span="22" class="jop" :data="rc">
                  <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" class="jop_ jopp">
                    <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5" class="JOP">
                      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5" prop="zhiwei">
                        {{item.account}}
                        <em prop="xinci">期望{{item.pay}}</em>
                      </el-col>
                      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <p prop="diqu">
                          {{item.city}}
                          <em>|</em>
                          {{item.pay}}
                          <em>|</em>
                          {{item.education}}
                        </p>
                      </el-col>
                    </el-col>
                    <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5" class="JOP">
                      <el-col
                        :xs="5"
                        :sm="5"
                        :md="5"
                        :lg="5"
                        :xl="5"
                        style="color:black !important;"
                        prop="gongsi"
                      >期望职位:{{item.post}}</el-col>
                      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <p>邮箱：{{item.email}}</p>
                      </el-col>
                    </el-col>
                    <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5" class="JOP">
                      <el-col
                        :xs="5"
                        :sm="5"
                        :md="5"
                        :lg="5"
                        :xl="5"
                        style="color:black !important;"
                        prop="fabu"
                      >
                        发布于:
                        <span>{{item.createTime}}</span>
                      </el-col>
                      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <p>年龄:{{item.age}}</p>
                      </el-col>
                    </el-col>
                    <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <el-button type="success" plain @click="examine" class="JOPbutton">点击查看</el-button>
                      </el-col>
                    </el-col>
                  </el-col>
                </el-col>
              </li>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="产品" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="设计" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="运营" name="fourth">定时任务补偿</el-tab-pane>
          <el-tab-pane label="市场" name="fourth">定时任务补偿</el-tab-pane>
          <el-tab-pane label="人事" name="fourth">定时任务补偿</el-tab-pane>
          <el-tab-pane label="销售" name="fourth">定时任务补偿</el-tab-pane>
          <el-tab-pane label="金融" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
import Nav from "../components/nav.vue";

export default {
  components: {
    Nav
  },
  data() {
    return {
      dl: "",
      activeIndex: "1",
      activeIndex2: "1",
      rc: ""
    };
  },
  mounted() {
    this.rencai();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    //获取职位信息
    rencai() {
      this.$http.get("/api/hr/rencai").then(response => {
          this.rc = response.data.msg;
          console.log(rc);
      });
    },
    examine() {}
  }
};
</script>
<style>
.el-tabs__active-bar {
  background: white !important;
}
.el-tabs__nav div {
  color: white !important;
}
.el-tabs__nav div:hover {
  color: rgb(255, 208, 75) !important;
}
.el-tabs__nav div:focus {
  color: rgb(255, 208, 75) !important;
}

.JOP div {
  height: 2.3em !important;
  padding-top: 0em !important;
  margin-top: 0em !important;
  width: 12em !important;
}

.JOP p,
.JOP span {
  padding-top: 0em !important;
  margin-top: 0em !important;
}

.JOPbutton {
  margin-top: 1.5em;
}
</style>