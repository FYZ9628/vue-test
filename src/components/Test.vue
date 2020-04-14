<template>
<div>
  <el-container>
  <el-header style="padding-top: 20px;padding-left: 50px;text-align:left;">
    <div >

      <el-input
        @keyup.enter.native="searchClick"
        placeholder="通过用户名搜索..."
        prefix-icon="el-icon-search"
        size="medium"
        style="width: 400px;margin-right: 10px"
        v-model="keywords">
      </el-input>
      <el-button size="medium" type="primary" icon="el-icon-search"
                  @click ="searchClick">搜 索</el-button>

      <!--          <el-input style="width: 300px" v-model="input" placeholder="请输入内容"></el-input>-->
      <!--          <el-button type="primary" style="background-color: #545c64" v-on:click="getUsers">查询</el-button>-->
      <el-button size="medium" type="primary"   @click="addFormVisible = true">新 增</el-button>

    </div>

  </el-header>
    <el-main>
  <el-table
    :data="users"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="username"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="password"
      label="密码">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="medium"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="medium"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-main>
    </el-container>
  <el-dialog title="新增用户" :visible.sync="addFormVisible" :append-to-body='true'
             @close="resetForm('addForm')">
    <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="addForm.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="addForm.password" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="addFormVisible = false">取 消</el-button>
      <el-button type="primary"  @click.native="addSubmit" :loading="listenLoading">提 交</el-button>
    </div>
  </el-dialog>
</div>
</template>

<!--新增界面-->

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: '',
      user:
        {
          id: '',
          username: '',
          password: ''
        },
      keywords: '',
      listenLoading: false,
      addFormVisible: false,//新增界面是否显示
      addFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      //新增界面数据
      addForm: {
        id: '',
        username: '',
        password: '',

      },
      editFormVisible: false,//编辑界面是否显示
      editFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      //编辑界面数据
      editForm: {
        id: '',
        username: '',
        password: '',
      },
    }
  },

  // mounted，组件挂载后，此方法执行后，页面显示
  mounted: function () {
    this.loadUserInfo()
  },

  methods: {
    // 关闭dialog时清数据
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //请求获取所有用户信息
    loadUserInfo: function () {
      let _this = this
      this.$axios.get('/user_list/').then(resp => {
        if (resp && resp.status === 200) {
          _this.users = resp.data
        }
      })
    },

    //显示新增界面
    // handleAdd: function () {
    //   this.addFormVisible = true;
    //   this.addForm = {
    //     id: '',
    //     username: '',
    //     password: '',
    //   };
    // },
    //新增
    addSubmit: function () {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            this.listenLoading = true;

            // this.user.id = 88; id是自增的，所以当没有的时候就会默认地往后排序号
            this.$axios
              .post('/user_list/', {
                // id: 12, id是自增的，所以当没有的时候就会默认地往后排序号
                username:this.addForm.username,
                password:this.addForm.password,
              }).then(resp => {
              if (resp.status === 400){
                this.$message({
                  message: '添加失败',
                  type: 'failure'
                });
                this.listenLoading = false;
                this.addFormVisible = false;
              }
              if (resp && resp.status === 201) {
                this.listenLoading = false;
                this.addFormVisible = false
                this.$message({
                  message: '添加成功',
                  type: 'success'
                });
                this.loadUserInfo()
                  this.$emit('onSubmit')
                }
              })
            })
          }
        })
      },
    // 显示编辑界面
      handleEdit: function (index, row) {
        this.editFormVisible = true
        // this.editForm = Object.assign({}, row);
        this.editForm = {
          id: row.id,
          username: row.username,
          password: row.password
        }
      },
    //查询
    searchClick () {
      let _this = this;
      this.$axios
        .post('/searchClass', {
          keywords: this.keywords
        }).then(resp => {
        if (resp && resp.status === 200) {
          _this.searchResult = resp.data;
          _this.classs = _this.searchResult;
        }
      })
    },
    //删除
    handleDelete: function (index, row) {
      this.$confirm('确认删除该记录吗?', '提示', {
        type: 'warning'
      }).then(() => {
          this.listenLoading = true;
          this.$axios.get('/delete_user/',{
            params:{
              id: row.id
            },
          }).then(resp => {
            if (resp && resp.status === 204) {
              this.listenLoading = false;
              this.$message({
                message: '删除成功',
                type: 'success'
              });
              this.loadUserInfo()
            }else {
              this.$message({
                message: '删除失败',
                type: 'failure'
              });
              this.listenLoading = false;
            }
          })
        }
      ).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
    }
}
</script>

<style scoped>

</style>
