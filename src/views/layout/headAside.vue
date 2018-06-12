<template>
  <div class="headAside">
    <el-row type="flex" justify="end">
      <el-col :span="6">
        <div class="" style="font-size: 14px;" v-if="!currentUser.userName" @click="dialogVisible=true">您好，请登录</div>
        <el-dropdown trigger="click" v-else @command="userExit">
          <span class="el-dropdown-link">
            个人信息<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="ceshi">
              <div class="userPhoto" :style="style"></div>
            </el-dropdown-item>
            <el-dropdown-item>
              昵称：{{currentUser.userName}}
            </el-dropdown-item>
            <el-dropdown-item>
              性别：{{currentUser.gender | filterGender}}
            </el-dropdown-item>
            <el-dropdown-item divided command="exit">
              退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <!--登录对话框-->
    <el-dialog title="登录" :visible.sync="dialogVisible" width="20%">
      <login @closeLogin="closeLogin"></login>
    </el-dialog>
  </div>
</template>

<script>
  import login from './login'
  import bg1 from '../../assets/images/bg1.jpg'
  import bg2 from '../../assets/images/bg2.jpg'
  import userimg from '../../assets/images/userimg.png'
  export default {
    name: "headAside",
    data(){
      return{
        bg1,
        bg2,
        userimg,
        currentUser:{},
        dialogVisible:false,
        style:""
      }
    },
    mounted(){
      let currentUser = localStorage.getItem("currentUser");
      this.currentUser = JSON.parse(currentUser);
      if(this.currentUser.userName){
        this.style=`width: 60px;height: 60px;border-radius: 30px;margin:0 auto;background-size: 100%;background-image: url(${this[this.currentUser.photo]})`;
      }
    },
    filters: {
      filterGender(gender) {
        let res = "";
        switch (gender) {
          case "male":
            res = "男";
            break;
          case "female":
            res = "女";
            break;
          default:
            break;
        }
        return res;
      },
    },
    components:{
      login,
    },
    methods:{
      closeLogin(data){
        this.dialogVisible = data.flag;
        this.currentUser = data.currentUser;
        this.style=`width: 60px;height: 60px;border-radius: 30px;margin:0 auto;background-size: 100%;background-image: url(${this[this.currentUser.photo]})`;
      },
      userExit(val){
        if(val === 'exit'){
          this.currentUser = {};
          localStorage.setItem("currentUser","{}");
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.headAside /deep/{
  width: 100vw;
  height: 80px;
  line-height: 80px;
  cursor: pointer;
  background-color: beige;
  .userPhoto{
    width: 100px;
    height: 100px;
    border-radius: 30px;
    background-size: 100%;
    background-color: pink;
  }
  .el-dialog__header{
    padding-bottom: 0;
    line-height: 20px;
  }
  .el-dialog__body{
    padding: 10px 20px;
  }
}
</style>
