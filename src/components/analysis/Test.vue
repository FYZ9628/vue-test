<template>

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
              <el-button type="primary" icon="el-icon-search" @click="hanldePreview">预览</el-button>
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
                <el-radio v-model="radio" label="1">折线图</el-radio>
                <el-radio v-model="radio" label="2">饼图</el-radio>
              </el-radio-group>
            </div></el-col>
          </el-row>
        </el-col>
        <el-divider></el-divider>
      </el-row>
      <el-row style="height: 50%">
        <el-col :span="24" class="grid-a-contentWidth">
          <el-row type="flex" style="height:40px;">
            <el-col :span="23" align="middle"><div class="grid-content bg-purple">
              <h3 class="login_title">数据项选择</h3>
            </div></el-col>
          </el-row>
          <el-row type="flex" style="height:30px; margin-top: 2px">
            <el-col :span="23" align="right"><div class="grid-content bg-purple">
              <el-button type="primary" @click=resetCheckBoxSettings>重置</el-button>
            </div></el-col>
          </el-row>
          <el-row  type="flex" style="height:30px;">
            <el-col :span="3">
              <h3 class="login_title">维度:</h3>
            </el-col>
          </el-row>
          <el-row type="flex" style="margin-top: 5px;margin-bottom: 5px">
            <el-col :span="24"><div class="grid-content bg-purple">
              <el-checkbox-group
                v-model="checkboxGroup1">
                <el-checkbox-button v-for="option in checkboxOptions" :label="option" :key="option">{{option}}</el-checkbox-button>
              </el-checkbox-group>
            </div></el-col>
          </el-row>
          <el-row  type="flex" style="height:30px;">
            <el-col :span="3">
              <h3 class="login_title">指标:</h3>
            </el-col>
          </el-row>
          <el-row style="margin-top: 5px;margin-bottom: 5px">
            <el-col :span="24"><div class="grid-content bg-purple">
              <el-checkbox-group v-model="checkboxGroup2">
                <el-checkbox-button v-for="option in checkboxOptions" :label="option" :key="option">{{option}}</el-checkbox-button>
              </el-checkbox-group>
            </div></el-col>
          </el-row>
        </el-col>

      </el-row>
      <el-divider></el-divider>
      <el-row style="height: 20%">
        <el-col :span="24" class="grid-a-contentWidth">
          <el-row type="flex">
            <el-col :span="23" align="middle"><div class="grid-content bg-purple">
              <h3 class="login_title">处理方式选择</h3>
            </div></el-col>
          </el-row>
          <el-row  type="flex">
            <el-col :span="6" :offset="2">
              <el-button type="primary" @click="primaryHandle">常规</el-button>
            </el-col>
            <el-col :span="6" >
              <el-button type="primary" @click="sumHandle">求和</el-button>
            </el-col>
            <el-col :span="6" >
              <el-button type="primary" @click="averageHandle">求平均</el-button>
            </el-col>
          </el-row>
          <el-row  type="flex" style="margin-top: 10px">
            <el-col :span="6" :offset="2">
              <el-button type="primary"  @click="statisticalHandle">统计</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-aside>
    <el-main style="height: 100%">
      <!-- 第一列栅格布局 -->
      <div>
        <el-row style="height: 35%">
          <el-col :span="24" class="grid-a-contentWidth">
            <el-row type="flex">
              <el-col :span="24" align="middle"><div class="grid-content bg-purple">
                <h3 class="login_title">文件预览</h3>
              </div></el-col>
            </el-row>
            <el-row  type="flex">
              <el-col :span="24"><div class="grid-content bg-purple">
                <el-table
                  fit="true"
                  stripe="true"
                  :data="initialChartData.rows"
                  max-height="350"
                  border
                  v-if="tableShow"
                  style="width: 100%">
                <el-table-column v-for="item in initialChartData.columns" :key="item.value"
                :prop="item"
                :label="item">
                </el-table-column>
                </el-table>
              </div></el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <!-- 第二列布局 -->
      <div style="margin-top: 20px">
        <el-row style="height: 60%">
          <el-col :span="24" class="grid-a-contentWidth">
            <el-row  type="flex">
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
          action="http://localhost:8000/api/upload_excel/"
          :on-exceed="handleExceed"
          :on-success="handleSuccess"
          :on-change="handleChange"
          multiple
          limit="1"
          accept=".xls,.xlsx,.csv"
          :file-list="fileList"
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
  </el-container>

</template>
<script>
  export default {
    name: 'Test',
    data () {
      this.extend = {
        series: {
          label: { show: true, position: "top" }//显示柱状图的顶部数字
        }
      },
      this.typeArr = ['histogram','line','pie']
      this.index = 0
      return {
        checkboxGroup1: [],//维度复选框组选中内容
        checkboxGroup2: [],//指标复选框组选中内容
        radio: '0',//单选框组绑定，设置默认显示柱状图
        uploadVisible: false,//上传组件框是否显示
        loading: false,
        checkboxOptions:[],//复选框内容
        fileList:'',
        tableShow:false,//设置预览表格显示
        chartShow:false,//设置图表显示
        initialChartData:'',//用于保存初始返回的数据，预览、常规处理方式需要使用
        chartData: {},//用于保存不同处理方式返回的数据
        chartSettings: {
           type: this.typeArr[this.index],
        }
      }
    },
    methods: {

      //打开上传组件框
      handleOpenUpload:function(){
        this.uploadVisible = true
      },

      //设置预览是否显示
      hanldePreview:function(){
        if(this.tableShow == false){
          this.tableShow = true
        }else {
          this.tableShow = false
        }
      },

      //改变图表类型
      changeType: function () {
        this.chartSettings = { type: this.typeArr[this.radio] }
      },

      //点击常规处理
      primaryHandle: function () {
        if(this.checkboxGroup1.length>1) {
          this.$message({
            type: 'warning',
            message: '只允许选择一个维度！'
          })
          return
        }else if(this.checkboxGroup2.length ==0){
          this.$message({
            type: 'warning',
            message: '请选择指标项！'
          })
          return
        }else {
          this.chartData = this.initialChartData
          this.chartSettings = {
            metrics:this.checkboxGroup2,
            dimension:this.checkboxGroup1
        }
        }
      },

      //点击求和处理
      sumHandle: function () {
        // this.clearChartSettings()
        if(this.checkboxGroup2.length>0){
          this.$message({
            type:'warning',
            message:'请不要选择指标项！'
          })
          return
        }else {
          let _this = this;
          let formData=new FormData();
          formData.append('type','sum')
          formData.append('checklist',this.checkboxGroup1)
          formData.append('file',this.fileList)
          this.$axios.post('/handle_sum_average/',formData,{
            'Content-Type':'multipart/form-data'
          }).then(res=>{
            this.chartSettings = {
              dimension:['属性名']
            }
            console.log("返回的数据")
            console.log(res.data)
            this.chartData = res.data

            console.log("改变后的表格数据")
            console.log(this.chartData)
          })
        }

      },

      //点击求平均处理
      averageHandle: function () {
        if(this.checkboxGroup2.length>0){
          this.$message({
            type:'warning',
            message:'请不要选择指标项！'
          })
          return
        }else {
          let _this = this;
          let formData=new FormData();
          formData.append('type','average')
          formData.append('checklist',this.checkboxGroup1)
          formData.append('file',this.fileList)
          this.$axios.post('/handle_sum_average/',formData,{
            'Content-Type':'multipart/form-data'
          }).then(res=>{
            this.chartSettings = {
              dimension:['属性名']
            }
            console.log(res.data)
            this.chartData = res.data
            console.log(this.chartData)
          })
        }

      },

      //点击统计处理
      statisticalHandle: function () {
        if(this.checkboxGroup1.length > 1){
          this.$message({
            type:'warning',
            message:'选择列数超出限制！'
          })
          return
        }else if(this.checkboxGroup1.length ==0){
          this.$message({
            type:'warning',
            message:'选择列数不能为空！'
          })
          return
        }
        else if(this.checkboxGroup2.length>0){
          this.$message({
            type:'warning',
            message:'请不要选择指标项！'
          })
          return
        }
        else {
          let _this = this;
          let formData=new FormData();
          formData.append('type','statistical')
          formData.append('checklist',this.checkboxGroup1)
          formData.append('file',this.fileList)
          this.$axios.post('/handle_statistical/',formData,{
            'Content-Type':'multipart/form-data'
          }).then(res=>{
            this.chartSettings = {
              dimension:['属性名']
            }
            console.log(res.data)
            this.chartData = res.data
            console.log(this.chartData)
          })
        }
      },

      //处理上传
      handleSubmit(filelist){
        this.$refs.upload.submit();
        this.uploadVisible =false
        this.chartShow = false
        this.clearChartSettings()
        this.checkboxGroup1 = []
        this.checkboxGroup2 = []
      },

      //初次上传成功处理
      handleSuccess(response,file,filelist){
        this.fileList = filelist[0].raw   //将所上传的文件保存，以供求和、求平均、统计等功能使用，删去会使功能失效
        this.initialChartData = file.response
        this.chartData = file.response
        this.checkboxOptions = this.chartData.columns
        this.$refs.upload.clearFiles()//清除上一次上传的文件列表
      },

      //清除图表维度设置
      clearChartSettings(){
        this.chartSettings = {
          metrics:'',
          dimension:''
        }
      },
      //清除图表维度设置
      resetCheckBoxSettings(){
        this.checkboxGroup1 = []
        this.checkboxGroup2 = []
      },
      //超出最大上传文件数量时的处理方法
      handleExceed(){
          this.$message({
            type:'warning',
            message:'超出最大上传文件数量的限制！'
          })
          return;
        },
      //关闭上传时的处理方法
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
