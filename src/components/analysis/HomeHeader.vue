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
          <el-dropdown-item divided="true" @click.native="changePasswordFormVisible = true">修改密码</el-dropdown-item>
          <el-dropdown-item divided="true" @click.native="logOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>

        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
    </el-dropdown>
    <!--  -------------------------------------------- 分界线 -------------------------------------------------------  -->
    <!--编辑界面-->
    <el-dialog title="修改密码"
               :visible.sync="changePasswordFormVisible"
               :before-close="changePasswordFormHandleClose"
               width="600px">
      <div style="min-height: 150px; background-color: #ffffff; padding: 0 30px;">
        <el-form :model="changePasswordForm" :rules="changePasswordFormRules" ref="changePasswordForm"
                 label-width="100px" style="width: 400px; margin: 30px 0 0 30px" >
          <el-form-item label="新密码" prop="password">
            <el-input size="small" type="password" v-model="changePasswordForm.password" autocomplete="off" style="margin-left: 20px"></el-input>
          </el-form-item>
          <el-form-item label="确认新密码" prop="checkPassword">
            <el-input size="small" type="password" v-model="changePasswordForm.checkPassword" autocomplete="off" style="margin-left: 20px"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="changePasswordFormVisible = false">取 消</el-button>
        <el-button type="primary" @click.native="changePasswordFormSubmit" :loading="listenLoading">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader',
    data(){
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.changePasswordForm.checkPassword !== '') {
            this.$refs.changePasswordForm.validateField('checkPassword')
          }
          callback()
        }
      }
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.changePasswordForm.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return{
        changePasswordFormVisible: false,
        listenLoading: false,
        changePasswordForm: {
          password: '',
          checkPassword: ''
        },
        changePasswordFormRules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPassword: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        },
      }
    }
  }
</script>

<style scoped>
</style>
