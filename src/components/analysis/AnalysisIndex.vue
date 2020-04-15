<template>
  <el-container>
    <el-header height="80px">
      <home-header></home-header>
    </el-header>
    <el-header>
      <navigation></navigation>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
  import HomeHeader from '@/components/analysis/HomeHeader'
  import Navigation from '@/components/analysis/Navigation'
  export default {
    name: 'AnalysisIndex',
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
