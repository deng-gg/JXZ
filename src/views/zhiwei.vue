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
                      >{{item.companyName }}</el-col>
                      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5" class="JOP">
                        <p>HR：{{item.hrName}}</p>
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
                        <p>邮箱：{{item.email}}</p>
                      </el-col>
                    </el-col>
                    <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                        <el-popover placement="right" width="400" trigger="click">
                          <div>
                            <div>
                              <h2>
                                {{item.post}}
                                <span class="pay">{{item.pay}}</span>
                              </h2>
                            </div>
                            <div class="ask_wor">
                              <p>{{item.ask}}</p>
                              <h4>经验：{{item.workExperience}}</h4>
                            </div>
                          </div>
                        </el-popover>
                         <router-link :to="'/Detail/'+item.id">
                          <el-button type="success" plain @click="examine" class="JOPbutton">点击查看</el-button>
                         </router-link>
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
    <div>{{this.$store.getters.getData}}</div>
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
      gridData: [
        {
          post: "",
          ask: "",
          pay: "",
          workExperience: "",
          education: "",
          city: "",
          email: "",
          companyName: ""
        }
      ],
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
      if (this.$store.getters.getData.length == 0) {
        this.$http
          .get("/api/public/position")
          .then(response => {
            //sessionStorage.setItem("UserList",JSON.stringify(response.data.msg));
            this.post = response.data.msg;
            this.$store.commit("addData", response.data.msg); // 提交数据，改变stote里的数据
            // this.$store.dispatch("addAsync","1232143123412"); 异步伊调用action里的方法，提交
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        this.post = this.$store.getters.getData; // 获取getters里的数据
      }
    },
    examine() {},
    computed: {}
  }
};
</script>
<style>
.detal {
}
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

.bg-li li div:hover {
  background: rgb(248, 246, 246) !important;
}

.pay {
  font: 10px !important;
  margin-left: 10px;
}

.ask_wor p,
.ask_wor h4 {
  margin-top: 2em;
}
</style>