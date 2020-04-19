<template>
  <body id="poster">
  <el-form :model="loginForm" :rules="rules2" ref="loginForm" class="login-container" label-position="left"
           label-width="0px">
    <h3 class="login_title">欢迎使用数据分析系统</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="loginForm.username"
                auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password"
                auto-complete="off" placeholder="密码" v-on:keyup.enter.native="login"></el-input>
    </el-form-item>

<!--    <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>-->

    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;
      border: none" @click.native.prevent="login" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>

  export default {
    name: 'Login',
    data () {
      return {
        logining: false,
        loginForm: {
          username: '',
          password: ''
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        },
        checked: false,
        responseResult: [],
      }
    },
    methods: {
      login(){
        this.logining = false
        this.$router.push("index/home")
      },
      //登录
      // login: function () {
      //   this.$refs.loginForm.validate((valid) => {
      //     if (valid) {
      //         this.logining = true;
      //         this.$axios
      //           .post('/login/', {
      //             username:this.loginForm.username,
      //             password:this.loginForm.password,
      //           }).then(resp => {
      //           if (resp.status === 400){
      //             this.$message({
      //               message: '登录失败',
      //               type: 'failure'
      //             });
      //             this.logining = false;
      //           }
      //           if (resp && resp.status === 200) {
      //             this.logining = false;
      //             this.$message({
      //               message: '添加成功',
      //               type: 'success'
      //             });
      //             this.$router.push("index/home")
      //           }
      //         })
      //
      //     }
      //   })
      // },
    }
  }
</script>

<style>
  #poster {
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 120px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 20px;
  }
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .remember {
    margin: 0px 0px 35px 0px;
  }

</style>
