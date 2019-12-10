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
        <el-tabs tab-position="left" style="height:100%;" class="hello">
          <el-tab-pane label="前端开发">
            <el-row>
              <li v-for="(item,index) in post" :key="index">
                <el-col :span="22" class="jop" :data="post">
                  <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" class="jop_">
                    <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5" class="JOP">
                      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5" prop="zhiwei">
                        {{item.post}}
                        <em prop="xinci">{{item.pay}}</em>
                      </el-col>
                      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <p prop="diqu">
                          {{item.city}}
                          <em>|</em>
                          {{item.work_experience}}
                          <em>|</em>
                          学历{{item.education}}
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
                      >{{item.company_name }}</el-col>
                      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5" class="JOP">
                        <p>HR：{{item.HR_name}}</p>
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
                        <span>{{item.release_time}}</span>
                      </el-col>
                      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <p>邮箱：{{item.email}}</p>
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
          <el-tab-pane label="后端开发">配置管理</el-tab-pane>
          <el-tab-pane label="javascript">角色管理</el-tab-pane>
          <el-tab-pane label="python">定时任务补偿</el-tab-pane>
          <el-tab-pane style label="java">角色管理</el-tab-pane>
          <el-tab-pane label="C++" name="first"></el-tab-pane>
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
      jop: "",
      dl: "",
      activeIndex: "1",
      activeIndex2: "1",
      post: "" //职位
    };
  },
    mounted() {
    this.position();
  },
  methods: {
    //获取职位信息
    position() {
      this.$http.get("/api/user/position").then(response => {
        console.log("获取到的", response.data);
        this.post = response.data;
      });
    },
    examine() {
      alert("id:");
    }
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