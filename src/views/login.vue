<template>
  <div class="hello">
    <div class="admin_box">
      <input type="file" @change="changeFile" name="avatar" id />
      <p>已上传{{rate}}%</p>
      <br />
      <input type="button" @click="uploadImg" value="提交" />
    </div>
    <router-link to="/">首页</router-link>
    <form>
      用户名：
      <input type="text" name="username" v-model="username" />
      <br />密码
      <input type="password" name="password" v-model="password" />
      <br />邮箱
      <input type="e-mail" name="email" v-model="email" />
      <br />出生日期
      <input type="text" name="birthday" v-model="birthday" />
      <br />

      <br />
      <a href="javascript:;" @click="addUser">提交</a>
    </form>
    <li v-for="(item,index) in goodsList" :key="index">
      <div>
        <h3>{{item.username}}</h3>
      </div>
    </li>
    <li>
      <div v-for="(img,number) in geti" :key="number">
        <img :src="geti[number].img" alt />
      </div>
    </li>
    <li>
      
      <div>
        hello
        <img :src="usertx" alt="" />
      </div>
    </li>
  </div>
</template>

<script>

const xhr = new XMLHttpRequest();

export default {
  computed: {},
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      username: "",
      password: "",
      email: "",
      birthday: "",
      goodsList: "",
      geti: "",
      file: {},
      rate: 0,
      previewImage: "",
      name: 'hello' +".jpg",
      usertx: ""

    };
  },
  mounted() {
    //this.getGoodsList();
    this.getimg();
    //this.gettx();
    this.getImgCodeApi();
    
  },
  //进度数
  methods: {
    changeFile(e) {
      this.file = e.target.files[0];
    },

    //上传图片
    uploadImg() {
      let formData = new FormData();
      formData.append("avatar", this.file); //注意，这里必须上传文件的name为avatar要和服务端接收的保持一致
      this.$http.post("/api/user/upload", formData, {
        //我这里请求地址是用的proxy代理跨域，可根据自己的地址进行更改
        onUploadProgress: progressEvent => {
          //这里要用箭头函数
          //不然这个this的指向会有问题
          this.rate = parseInt(
            (progressEvent.loaded / progressEvent.total) * 100
          );
        }
      });
    },
    //注册
    addUser() {
      var name = this.username;
      var password = this.password;
      var email = this.email;
      var birthday = this.birthday;
      this.$http
        .post("/api/user/addUser", {
          name: name,
          password: password,
          email: email,
          birthday: birthday
        })
        .then(response => {
          console.log("上传成功", response);
          alert("注册成功");
          this.$router.push({path: '/index'})
        })
        .catch(function(error) {
          alert("注册失败");
        });
    },
    //数据库的base64图片
    getimg() {
      this.$http.get("/api/user/getimg").then(response => {
        let res = response.data;
        if (res !== 0) {
          // 创建blob链接

          this.geti = res;
          console.log("imgok");
        } else {
          console.log("从服务器请求数据失败！");
        }
      });
    },
    //查询头像
    gettou(){
      this.$http.get("/api/user/tou").then(response => {
        console.log(response)
      });
    },
    getImgCodeApi() {
       var name = this.username;
      this.$http
        .get("/api/user/setx", {
         name: name,
        })
        .then(response => {
          console.log("图片路径",response.data)
          this.usertx = response.data
          /*if (response !== 0) {
            //将从后台获取的图片流进行转换

            this.usertx =
              "data:image/jpeg;base64," +
              btoa(
                new Uint8Array(response.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ""
                )
              );
          } else {
            console.log("从服务器请求头像数据失败！");
          }*/
        });
    }
  }
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>