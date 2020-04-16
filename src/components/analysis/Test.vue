<template>

  <el-container>
    <!-- 侧边导航菜单 -->
    <el-aside style="height: 100%" width="350px">
      <el-row style="height: 20%">
        <el-col :span="24" class="grid-a-contentWidth">

          <el-row  type="flex">
            <el-col :span="23" align="middle"><div class="grid-content bg-purple">
              <h3 class="login_title">文件上传</h3>
            </div></el-col>
          </el-row>
          <el-row  type="flex">
            <el-col :span="23"><div class="grid-content bg-purple">
              <el-button type="primary" @click="dialogVisible = true">上传<i class="el-icon-upload el-icon--right"></i></el-button>
              <el-button type="primary" icon="el-icon-search">预览</el-button>
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
          <el-row type="flex">
            <el-col :span="23" align="middle"><div class="grid-content bg-purple">
              <h3 class="login_title">数据项选择</h3>
            </div></el-col>
          </el-row>
          <el-row  type="flex">
            <el-col :span="3">
              <h4 class="login_title">维度:</h4>
            </el-col>
            <el-col :span="20"><div class="grid-content bg-purple">
              <div style="margin-top: 10px">
                <el-checkbox-group v-model="checkboxGroup1" size="small">
                  <el-checkbox label="日期" border></el-checkbox>
                  <el-checkbox label="访问用户" border ></el-checkbox>
                </el-checkbox-group>
              </div>
              <div style="margin-top: 10px">
                <el-checkbox-group v-model="checkboxGroup2" size="small" >
                  <el-checkbox label="下单用户" border></el-checkbox>
                  <el-checkbox label="下单率" border></el-checkbox>
                </el-checkbox-group>
              </div>
            </div></el-col>
          </el-row>
          <el-row  type="flex" style="margin-top: 30px">
            <el-col :span="3">
              <h4 class="login_title">指标:</h4>
            </el-col>
            <el-col :span="20"><div class="grid-content bg-purple">
              <div style="margin-top: 20px">
                <el-checkbox-group v-model="checkboxGroup3" size="small">
                  <el-checkbox label="日期" border></el-checkbox>
                  <el-checkbox label="访问用户" border ></el-checkbox>
                </el-checkbox-group>
              </div>
              <div style="margin-top: 20px">
                <el-checkbox-group v-model="checkboxGroup4" size="small" >
                  <el-checkbox label="下单用户" border></el-checkbox>
                  <el-checkbox label="下单率" border></el-checkbox>
                </el-checkbox-group>
              </div>
            </div></el-col>
          </el-row>
          <el-row  type="flex" style="margin-top: 30px">
            <el-col :span="6" :offset="15">
              <el-button type="primary">确定</el-button>
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
                  :data="chartData.rows"
                style="width: 100%">
                <el-table-column v-for="item in chartData.columns" :key="item.value"
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
                  <ve-chart :data="chartData" :settings="chartSettings"></ve-chart>
                </div></el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </el-main>
    <el-dialog
      title="上传文件"
      :visible.sync="dialogVisible"
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
          accept=".xls,.xlsx"
          :auto-upload="false">
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
</el-upload>
      </span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary"
               :loading="loading"
               @click=handleSubmit>确认上传</el-button>
  </span>
    </el-dialog>
  </el-container>

</template>
<script>
  import HomeHeader from '@/components/analysis/HomeHeader'
  import Navigation from '@/components/analysis/Navigation'
  export default {
    name: 'Test',
    components: {Navigation, HomeHeader},
    data () {
      this.typeArr = ['histogram','line','pie']
      this.index = 0
      // this.chartSettings = {
      //   metrics: ['访问用户', '下单用户'],
      //   dimension: ['日期']
      // }
      return {
        checkboxGroup1: [],
        checkboxGroup2: [],
        checkboxGroup3: [],
        checkboxGroup4: [],
        checkList: [],
        radio: '0',
        dialogVisible: false,
        loading: false,
        preoutputs: [],
        filelist:[],
        tableData: [{
          date: '05-01',
          access_user_num: '1393',
          order_user_num:'1093',
          order_rate:'0.32'
        },{
          date: '05-02',
          access_user_num: '3530',
          order_user_num:'3230',
          order_rate:'0.26'
        },{
          date: '05-03',
          access_user_num: '2923',
          order_user_num:'2623',
          order_rate:'0.76'
        },{
          date: '05-04',
          access_user_num: '1723',
          order_user_num:'1423',
          order_rate:'0.49'
        },{
          date: '05-05',
          access_user_num: '3792',
          order_user_num:'3492',
          order_rate:'0.323'
        }],
        // chartData: {
        //   columns: ['日期', '访问用户', '下单用户'],
        //   rows: [
        //     { '日期': '05-01', '访问用户': 1393, '下单用户': 1093},
        //     { '日期': '05-02', '访问用户': 3530, '下单用户': 3230},
        //     { '日期': '05-03', '访问用户': 2923, '下单用户': 2623},
        //     { '日期': '05-04', '访问用户': 1723, '下单用户': 1423},
        //     { '日期': '05-05', '访问用户': 3792, '下单用户': 3492},
        //     { '日期': '05-06', '访问用户': 4593, '下单用户': 4293}
        //   ]
        // },
        chartData:{},
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
        chartSettings: {
          type: this.typeArr[this.index],
            // metrics: ['访问用户', '下单用户'],
            // dimension: ['日期']
        }
      }
    },
    // computed:{
    //   myThs:function(){
    //     var ths = [];
    //     for    (var k in chartData){
    //       ths.push(k);
    //       console.log(k)
    //     }
    //     return ths;
    //   }
    // },
    methods: {

      //改变图表类型
      changeType: function () {
        this.chartSettings = { type: this.typeArr[this.radio] }
      },
      //处理上传
      handleSubmit(filelist){
        this.$refs.upload.submit();
        this.dialogVisible = false
        filelist.clearFiles()
      },

      //文件列表组件状态改变时的处理
      //   handleChange(file){
      //   dialogFormVisible = false
      //   },


      handleSuccess(response,file,filelist){
        this.chartData = file.response
        console.log("清空")
        console.log("清空")
        console.log("清空")
        console.log("清空")
        console.log("清空")
        console.log(response.data)
        console.log(chartData)
        filelist.clearFiles()
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
