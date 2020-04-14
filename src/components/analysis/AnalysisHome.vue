<template>

  <el-container style="height: 100%;width: 100%">
    <!-- 顶栏 -->
    <el-header height="80px">
      <home-header></home-header>
    </el-header>
    <!-- 嵌套容器 -->
    <el-container >
      <el-header>
        <navigation></navigation>
      </el-header>
      <el-main >
        <h2>提供如下类型文件的处理，点击选择</h2>
        <!-- 3*3模式 -->
        <div style="height:100%;width:100%" >
          <el-row :gutter="10" type="flex" class="bg" justify="center" style="height: 30%;">
            <el-col :span="6"><div class="grid-a-contentWidth">
              <a href="http://localhost:8080/exAndcs">
              <el-card :body-style="{ padding: '5px' }">
                <img src="../../assets/Excel_csv.png" class="image" width="250px">
              </el-card>
              </a>
            </div></el-col>
            <el-col :span="6"><div class="grid-a-contentWidth">
              <a href="woAndTx">
              <el-card :body-style="{ padding: '0px' }">
                <img src="../../assets/world_txt.png" class="image" width="250px">
              </el-card>
              </a>
            </div></el-col>
            <el-col :span="6"><div class="grid-a-contentWidth"></div></el-col>
            <el-col :span="6"><div class="grid-a-contentWidth"></div></el-col>
          </el-row>
          <br>
          <el-row :gutter="10" type="flex" class="bg" justify="center" style="height: 30%">
            <el-col :span="6"><div class="grid-a-contentWidth"></div></el-col>
            <el-col :span="6"><div class="grid-a-contentWidth"></div></el-col>
            <el-col :span="6"><div class="grid-a-contentWidth"></div></el-col>
            <el-col :span="6"><div class="grid-a-contentWidth"></div></el-col>
          </el-row>
          <br>
          <el-row :gutter="10" type="flex" class="bg" justify="center" style="height: 30%">
            <el-col :span="6"><div class="grid-a-contentWidth"></div></el-col>
            <el-col :span="6"><div class="grid-a-contentWidth"></div></el-col>
            <el-col :span="6"><div class="grid-a-contentWidth"></div></el-col>
            <el-col :span="6"><div class="grid-a-contentWidth"></div></el-col>
          </el-row>
        </div>




<!--            <el-row :gutter="10" type="flex" class="row-bg" justify="center">-->

<!--              <el-col :span="6"><div class="grid-a-contentWidth"></div></el-col>-->

<!--              <el-col :span="6"><div class="grid-a-contentWidth"></div></el-col>-->

<!--              <el-col :span="6"><div class="grid-a-contentWidth"></div></el-col>-->

<!--              <el-col :span="6"><div class="grid-a-contentWidth"></div></el-col>-->

<!--            </el-row>-->


      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import HomeHeader from '@/components/analysis/HomeHeader'
  import Navigation from '@/components/analysis/Navigation'
  export default {
    name: 'AnalysisHome',
    components: {Navigation, HomeHeader},
    methods: {

    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  el-aside {
    color: #333;
  }
  .el-row {
    margin-bottom: 20px;
  }

  .bg{
    background-color: white;
  }
  .bg2{
    background-color: rgb(143, 75, 129);
  }
  .grid-a-contentWidth {

    background-color: rgb(44, 143, 121);

    border-radius: 4px;

  }


</style>
