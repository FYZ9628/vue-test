<template>
  <div>
    <el-container>
      <!-- 侧边导航菜单 -->
      <el-aside style="height: 100%" width="400px">
        <el-row style="height: 20%">
          <el-col :span="24" class="grid-a-contentWidth">

            <el-row  type="flex">
              <el-col :span="23" align="middle"><div class="grid-content bg-purple">
                <h3 class="login_title">文件上传</h3>
              </div></el-col>
            </el-row>
            <el-row  type="flex">
              <el-col :span="23"><div class="grid-content bg-purple">
                <el-button type="primary" @click="handleOpenUpload">上传<i class="el-icon-upload el-icon--right"></i></el-button>
              </div></el-col>
            </el-row>

          </el-col>
          <el-divider></el-divider>
        </el-row>
        <el-row style="height: 20%">
          <el-col :span="24" class="grid-a-contentWidth">
            <el-row type="flex">
              <el-col :span="23" align="middle"><div class="grid-content bg-purple">
                <h3 class="login_title">图表选择</h3>
              </div></el-col>
            </el-row>
            <el-row  type="flex">
              <el-col :span="23"><div class="grid-content bg-purple">
                <el-radio-group v-model="radio" @change="changeType">
                  <el-radio v-model="radio" label="0">柱状图</el-radio>
                  <el-radio v-model="radio" label="1">饼图</el-radio>
                </el-radio-group>
              </div></el-col>
            </el-row>
          </el-col>
          <el-divider></el-divider>
        </el-row>
        <el-row style="height: 50%">
          <el-col :span="24" class="grid-a-contentWidth">
            <el-row  type="flex" style="margin-top: 10px">
              <el-col :span="6" :offset="15">
                <el-button type="primary">确定</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-aside>
      <!-- 内容 -->
      <el-main style="height: 100%">
        <div >
          <el-row style="height: 30%;">
            <el-col :span="24" class="grid-a-contentWidth">
              <el-row type="flex" style="margin-top: 10px">
                <el-col :span="24" align="middle"><div class="grid-content bg-purple">
                  <h3 class="login_title">词云</h3>
                </div></el-col>
              </el-row>
              <el-row  type="flex">
                <el-col :span="24"><div class="grid-content bg-purple">
                  <ve-wordcloud :data="chartData"></ve-wordcloud>
                </div></el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <!-- 第二列布局 -->
        <div style="margin-top: 20px" >
          <el-row style="height: 60%">
            <el-col :span="24" class="grid-a-contentWidth">
              <el-row  type="flex" style="margin-top: 10px">
                <el-col :span="24" align="middle"><div class="grid-content bg-purple">
                  <h3 class="login_title">图表显示</h3>
                </div></el-col>
              </el-row>
              <el-row type="flex">
                <el-col :span="24" align="middle">
                  <div class="grid-content bg-purple">
                    <ve-chart :data="chartData"
                              :settings="chartSettings"
                              :extend="extend"
                    ></ve-chart>
                  </div></el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
    <el-dialog
      title="上传文件"
      :visible.sync="uploadVisible"
      width="30%"
      :before-close="handleClose">
      <span>
        <el-upload
          class="upload-demo"
          ref="upload"
          drag
          action="http://localhost:8000/api/handle_word_txt/"
          :on-exceed="handleExceed"
          :on-success="handleSuccess"
          :on-change="handleChange"
          multiple
          limit="1"
          accept=".txt,.doc,.docx"
          :auto-upload="false">
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
</el-upload>
      </span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="uploadVisible = false">取 消</el-button>
    <el-button type="primary"
               :loading="loading"
               @click=handleSubmit>确认上传</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'woAndTx',

    data () {
      this.extend = {
        series: {
          label: { show: true, position: "top" }
        }
      },
      this.typeArr = ['histogram','pie']
      this.index = 0
      return {
        checkboxGroup1: [],
        checkboxGroup2: [],
        uploadVisible: false,
        radio: '0',
        // chartData: {
        //   columns: ['日期', '访问用户', '下单用户', '下单率'],
        //   rows: [
        //     { '日期': '05-01', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
        //     { '日期': '05-02', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
        //     { '日期': '05-03', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
        //     { '日期': '05-04', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
        //     { '日期': '05-05', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
        //     { '日期': '05-06', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        //   ]
        // },
        chartData: {},
        chartSettings: { type: this.typeArr[this.index],
          }
      }
    },
    methods: {
      changeType: function () {
        this.chartSettings = { type: this.typeArr[this.radio] }
      },

      //打开上传组件框
      handleOpenUpload:function(){
        this.uploadVisible = true
      },
      //处理上传
      handleSubmit(filelist){
        this.$refs.upload.submit();
      },

      //上传成功回调
      handleSuccess(response,file,filelist){
        this.uploadVisible =false
        console.log(file.response)
        this.chartData = file.response
        this.$refs.upload.clearFiles()//清除上一次上传的文件列表
      },

      //超出最大上传文件数量时的处理方法
      handleExceed(){
        this.$message({
          type:'warning',
          message:'超出最大上传文件数量的限制！'
        })
        return;
      },

      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: white;
  }
  .el-footer {
    background-color: #909399;
    color: black;
    text-align: center;
  }
  .el-aside {
    background-color: white;
  }
  .el-main {
    background-color: #bdb9ae;
  }
  .col1 {
    /*background-color: teal;*/
  }
  .col2 {
    background-color: tomato;
  }
  .col3 {
    background-color: thistle;
  }
  .el-row {
    display: flex;
    flex-wrap: wrap
  }

  .yulan{
    margin-top: 10px;
    margin-bottom: 30px;

  }


  .grid-a-contentWidth {

    /*background-color: rgb(44, 143, 121);*/
    background-color: white;

    border-radius: 4px;

    min-height: 100px;

  }



</style>
