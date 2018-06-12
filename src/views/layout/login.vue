<template>
  <div class="login">
    <el-form ref="form"  label-width="60px">
      <div class="photo"></div>
      <el-form-item label="用户名">
        <el-input v-model="userName" size="small"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="userPwd" type="password" size="small"></el-input>
      </el-form-item>
      <el-button type="primary" size="small" @click="login" style="width: 100%;">登录</el-button>
    </el-form>
  </div>
</template>

<script>
  //默认头像
  import bg2 from '../../assets/images/bg2.jpg'
  //用户头像
  import bg1 from '../../assets/images/bg1.jpg'
  import userimg from '../../assets/images/userimg.png'
  export default {
    name: "login",
    data(){
      return {
        bg1 ,
        bg2 ,
        userimg ,
        userName:"",
        userPwd:""
      }
    },
    mounted(){
      let dom = document.getElementsByClassName("photo")[0];
      dom.setAttribute('style',`background-image: url(${bg2})`)
    },
    computed:{
      users(){
        return this.$store.state.users.users;
      }
    },
    watch:{
      userName:'updateImg'
    },
    methods:{
      message(title, type){
        this.$message({
          message:title ,
          type:type
        })
      },
      updateImg(val){
        let photoDom = document.getElementsByClassName("photo")[0];
        if(val){
          let users = this.users;
          //获取当前photo得图片地址
          let bgUrl = photoDom.getAttribute("style").split("/");
          let bgName = bgUrl[bgUrl.length-1].split(".")[0];
          //判断是否是输入用户的信息
          let that = this;
          let flag = false;
          users.forEach(function (item, index) {
            if(item.userName.includes(`${val}`)){
              flag = true;
              let photo = item.photo;
              if(bgName !== photo){
                photoDom.setAttribute('style',`background-image: url(${that[photo]})`);
              }
            }
          });
          if(!flag){
            photoDom.setAttribute('style',`background-image: url(${bg2})`)
          }
        }else{
          photoDom.setAttribute('style',`background-image: url(${bg2})`)
        }
      },
      login(){
        let users = this.users;
        let that = this;
        let resUser = users.filter(function (item, index) {
          return item.userName === that.userName;
        });
        let pwdFlag = false;
        let currentUser;
        if(resUser.length){
          for(let i =0; i<resUser.length; i++){
            if(resUser[i].userPwd === this.userPwd){
              pwdFlag = true;
              currentUser = resUser[i];
            }
          }
          if(!pwdFlag){
            this.message("您好，密码错误","error");
          }else{
            this.$store.dispatch("set_currentUser",currentUser );
            localStorage.setItem("currentUser",JSON.stringify(currentUser));
            this.$emit('closeLogin',{
              flag:false,
              currentUser:currentUser
            });
            this.userName = "";
            this.userPwd = "";
          }
        }else{
          this.message("您好，此用户未注册","error");
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.login{
  .photo{
    width: 80px;
    height:80px;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 40px;
    background-size: 100%;
  }
  .el-form-item{
    border-bottom: 12px;
  }
}
</style>
