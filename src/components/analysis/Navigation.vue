<template>
  <div>
  <el-breadcrumb separator="/" style="font-size: 16px">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/exAndcs' }">Excel、Csv</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/woAndtx' }">Word、Txt</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/test' }">Test</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/upload_test' }">upload_test</el-breadcrumb-item>
    <el-breadcrumb-item></el-breadcrumb-item>
  </el-breadcrumb>
    <el-divider></el-divider>
  </div>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>

<style scoped>

</style>
