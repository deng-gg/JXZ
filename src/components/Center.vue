<template>
  <el-row>
    <el-row style="margin-top:20px;">
      <el-col :span="24">
        <el-row>
          <el-col :offset="0" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-col
              :offset="0"
              :xs="3"
              :sm="3"
              :md="3"
              :lg="3"
              :xl="3"
              class="bg"
              style="height:2.4em;"
            >1</el-col>
            <el-col :offset="0" :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
              <el-tabs class="hangye" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="技术" name="second" class="hello">
                  <el-tabs tab-position="left" style="height:100%;" class="hello">
                    >
                    <el-tab-pane label="前端开发">
                      <el-row>
                        <li v-for="(item,index) in jop" :key="index">
                          <el-col :span="22" class="jop" :data="jop">
                            <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" class="jop_">
                              <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5" prop="zhiwei">
                                  {{item.post}}
                                  <em prop="xinci">{{item.pay}}</em>
                                </el-col>
                                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                                  <p prop="diqu">
                                    {{item.city}}
                                    <em>|</em>经验不限
                                    <em>|</em>大专
                                  </p>
                                </el-col>
                              </el-col>
                              <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                                <el-col
                                  :xs="5"
                                  :sm="5"
                                  :md="5"
                                  :lg="5"
                                  :xl="5"
                                  style="color:black !important;"
                                  prop="gongsi"
                                >{{item.companyName}}</el-col>
                                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                                  <p>发布人：{{item.hrName}}</p>
                                </el-col>
                              </el-col>
                              <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
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
                                  <p>邮箱：1912504939@qq.com</p>
                                </el-col>
                              </el-col>
                              <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                                  <el-button type="success" plain @click="examine">点击查看</el-button>
                                </el-col>
                              </el-col>
                            </el-col>
                          </el-col>
                        </li>
                      </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="后端开发">配置管理</el-tab-pane>
                    <el-tab-pane label="javascript">角色管理</el-tab-pane>
                    <el-tab-pane label="golang">定时任务补偿</el-tab-pane>
                    <el-tab-pane style label="java">角色管理</el-tab-pane>
                    <el-tab-pane label="C++" name="first"></el-tab-pane>
                  </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="产品" name="third" @click="lx">
                  <el-tabs tab-position="left" style="height:100%;" class="hello">
                    >
                    <el-tab-pane label="产品">
                      <el-row>
                        <li v-for="(item,index) in jop" :key="index">
                          <el-col :span="22" class="jop" :data="jop">
                            <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" class="jop_">
                              <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5" prop="zhiwei">
                                  {{item.post}}
                                  <em prop="xinci">{{item.pay}}</em>
                                </el-col>
                                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                                  <p prop="diqu">
                                    {{item.city}}
                                    <em>|</em>经验不限
                                    <em>|</em>大专
                                  </p>
                                </el-col>
                              </el-col>
                              <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                                <el-col
                                  :xs="5"
                                  :sm="5"
                                  :md="5"
                                  :lg="5"
                                  :xl="5"
                                  style="color:black !important;"
                                  prop="gongsi"
                                >{{item.companyName}}</el-col>
                                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                                  <p>发布人：{{item.hrName}}</p>
                                </el-col>
                              </el-col>
                              <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
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
                                  <p>邮箱：1912504939@qq.com</p>
                                </el-col>
                              </el-col>
                              <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                                  <el-button type="success" plain @click="examine">点击查看</el-button>
                                </el-col>
                              </el-col>
                            </el-col>
                          </el-col>
                        </li>
                      </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="产品">配置管理</el-tab-pane>
                    <el-tab-pane label="产品">角色管理</el-tab-pane>
                    <el-tab-pane label="产品">定时任务补偿</el-tab-pane>
                    <el-tab-pane style label="产品">角色管理</el-tab-pane>
                    <el-tab-pane label="产品" name="first"></el-tab-pane>
                  </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="设计" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="运营" name="fourth">定时任务补偿</el-tab-pane>
                <el-tab-pane label="市场" name="fourth">定时任务补偿</el-tab-pane>
                <el-tab-pane label="人事" name="fourth">定时任务补偿</el-tab-pane>
                <el-tab-pane label="销售" name="fourth">定时任务补偿</el-tab-pane>
                <el-tab-pane label="金融" name="fourth">定时任务补偿</el-tab-pane>
              </el-tabs>
            </el-col>
            <el-col
              :offset="0"
              :xs="3"
              :sm="3"
              :md="3"
              :lg="3"
              :xl="3"
              class="bg"
              style="height:2.4em;"
            >1</el-col>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
export default {

  data() {
    return {
      activeName: "second",
      jop: "",
      jop_length: "",
      leixing: "产品"
    };
  },

  mounted() {
    this.position();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    //获取职位信息
    position() {
      this.$http
        .get("/api/public/position")
        .then(response => {
          console.log("获取到的", response.data);
          this.jop = response.data.msg;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    lx() {
      let leixing = this.leixing;

    },
    examine() {}
  }
};
</script>
<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.ulli li {
  float: left;
  margin-left: 2em;
}
.ulli span {
  float: left;
  margin-left: 2em;
}

.jop {
  margin-bottom: 2em;
  border-bottom: 1px #f2f2f5 solid !important;
}

.jop:hover {
  background: rgb(248, 246, 246) !important;
}

.jop_ div {
  width: 12em;
  margin-left: 1em;
}
.jop_ {
}

.hangye div {
  color: #fff !important;
}

.jop_ p,
.jop_ span {
  margin-top: 4px !important;
  font-size: 12px !important;
  color: #9fa3b0;
}
.jop_ em {
  margin: 0px 2px !important;
}
.jop_ button span {
  color: #fff !important;
}
.jop_ button {
  border: 0px !important;
  background: rgb(43, 59, 75) !important;
  color: #fff !important;
}
.jop_ button:hover {
  background: rgb(34, 47, 60) !important;
  color: #fff !important;
}

.jop_ div {
  font-size: 16px;
  color: #12d3c3 !important;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
}
.el-tabs__nav-wrap {
  background: rgb(43, 59, 75) !important;
}
.el-tabs__active-bar {
  background-color: rgb(255, 208, 75) !important;
}
</style>
