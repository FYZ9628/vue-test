import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import AnalysisHome from '@/components/analysis/AnalysisHome'
import exAndCs from '@/components/analysis/exAndCs'
import woAndTx from '@/components/analysis/woAndTx'
import Test from '@/components/analysis/Test'
import UploadTest from '@/components/analysis/UploadTest'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '/home',
      name: 'Home',
      component: AnalysisHome
    },
    {
      path: '/exAndcs',
      name: 'ExAndcs',
      component: exAndCs
    },
    {
      path: '/woAndtx',
      name: 'WoAndtx',
      component: woAndTx
    },
    {
      path: '/test',
      name: 'Test',
      component:Test,
    },
    {
      path: '/upload_test',
      name: 'upload_test',
      component:UploadTest,
    },
  ]

})
