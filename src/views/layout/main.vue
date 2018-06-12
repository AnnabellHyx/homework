<template>
  <div class="mainHome">
    <head-aside></head-aside>
    <div>
      由于没有数据库，我用store模拟了两个用户，name:zhangsan pwd:zs123456 ; name:lisi pwd:ls123456
      用传值模拟了登陆状态，用localStorage做了登陆记录，有些粗糙，有问题望指出。
    </div>
  </div>
</template>

<script>
  import headAside from './headAside'
  export default {
    name: "mainHome",
    data(){
      return {

      }
    },
    components:{
      headAside ,
    }
  }
</script>

<style scoped>

</style>
