<template>
  <div>
<!--    <el-breadcrumb separator="/" style="font-size: 16px">-->
<!--      <el-breadcrumb-item :to="{ path: '/index/home' }">首页</el-breadcrumb-item>-->
<!--      <el-breadcrumb-item :to="{ path: '/index/exAndcs' }">Excel、Csv</el-breadcrumb-item>-->
<!--      <el-breadcrumb-item :to="{ path: '/index/woAndtx' }">Word、Txt</el-breadcrumb-item>-->
<!--      <el-breadcrumb-item :to="{ path: '/index/test' }">Test</el-breadcrumb-item>-->
<!--      <el-breadcrumb-item :to="{ path: '/index/upload_test' }">upload_test</el-breadcrumb-item>-->
<!--      <el-breadcrumb-item></el-breadcrumb-item>-->
<!--    </el-breadcrumb>-->
<!--    <el-divider></el-divider>-->
    <el-menu
      class="nav-menu"
      router
      :default-active="$route.path"
      mode="horizontal"
      text-color="#000"
      active-text-color="#409eff"
      style="text-align: center; font-size: 16px; font-weight: bolder;"
    >
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name"
                    style="width: 150px; font-size: 20px">
        {{ item.navItem }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data: function () {
      return {
        navList: [
          {name: '/index/home', navItem: '首页'},
          {name: '/index/exAndcs', navItem: 'Excel、Csv'},
          {name: '/index/woAndtx', navItem: 'Word、Txt'},
          {name: '/index/test', navItem: 'Test'},
          {name: '/index/upload_test', navItem: 'upload_test'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
