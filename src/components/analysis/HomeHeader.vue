<template>
  <div style="height: 80px; line-height: 40px; padding: 20px 10px; min-width: 600px;">
    <a href="http://localhost:8080/home">
      <img src="../../assets/DA_logo.png" alt="" width="55px" style="float: left;margin-top: -5px;">
    </a>
    <span style="font-size: 32px; font-weight: bold; position:absolute;left: 100px">欢迎使用数据分析系统</span>
    <el-dropdown style="float: right; padding-right: 10px">
      <!--      show-timeout="10" hide-timeout="100"-->
      <div class="el-dropdown-link" >
        <span>
          你好，王小虎
<!--          {{$store.getters.name}}-->
        </span>
        <span style="float: right; margin-left: 10px">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item divided="true"@click="dialogFormVisible = true">修改密码</el-dropdown-item>
          <el-dropdown-item divided="true" @click.native="logOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>

        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader',
    data(){
      return{
        dialogFormVisible: false,
      }
    }
  }
</script>

<style scoped>
</style>
