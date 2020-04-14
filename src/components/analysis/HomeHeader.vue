<template>

  <el-row :gutter="1" style="height: 100%">
    <el-col :span="6">
      <div class="grid-content bg-purple">
      <el-col :span="6"><div class="grid-content  bg-purple-dark">
        <img src="../../assets/DA_logo.png" width="50px" style="margin-top: 8px">
      </div></el-col>
      <el-col :span="16"><div class="grid-content  bg-purple-dark">
        <h1>欢迎使用数据分析系统</h1>
      </div>
      </el-col>
    </div>
    </el-col>


    <el-col :span="6" offset="18"><div class="grid-content bg-purple">
      <el-dropdown  show-timeout="10" hide-timeout="50" style="float: right;padding-right: 10px;">
        <div class="el-dropdown-link" >
        <span >
          你好，王小虎
<!--          你好，{{$store.getters.name}}-->
        </span>
          <span style="float: right;margin-left: 10px">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" size="80"></el-avatar>
        </span>

          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item divided="true"@click="dialogFormVisible = true">修改密码</el-dropdown-item>
            <el-dropdown-item divided="true" @click.native="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>

          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
      </el-dropdown>

    </div>

    </el-col>

  </el-row>

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
  /*.bg-purple {*/
  /*  background: #d3dce6;*/
  /*}*/
  /*.bg-purple-dark {*/
  /*  background: #99a9bf;*/
  /*}*/
  /*.grid-content {*/
  /*  border-radius: 4px;*/
  /*  min-height: 36px;*/
  /*}*/
</style>
