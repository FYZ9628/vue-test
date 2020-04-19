import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import AnalysisHome from '@/components/analysis/AnalysisHome'
import exAndCs from '@/components/analysis/exAndCs'
import woAndTx from '@/components/analysis/woAndTx'
import Test from '@/components/analysis/Test'
import UploadTest from '@/components/analysis/UploadTest'
import AnalysisIndex from '@/components/analysis/AnalysisIndex'
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
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/index',
      name: 'AnalysisIndex',
      redirect: '/index/home',
      component: AnalysisIndex,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: AnalysisHome,
          meta: {
            title: '首页'
          }
        },
        {
          path: 'exAndcs',
          name: 'ExAndcs',
          component: Test,
          meta: {
            title: 'Excel|Csv 文件处理'
          }
        },
        {
          path: 'woAndtx',
          name: 'WoAndtx',
          component: woAndTx,
          meta: {
            title: 'Wrod|Txt 文件处理'
          }
        },
        {
          path: 'test',
          name: 'Test',
          component:Test,
        },
        {
          path: 'upload_test',
          name: 'upload_test',
          component:UploadTest,
        }
      ]
    }
  ]

})
