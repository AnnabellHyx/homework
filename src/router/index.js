import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mainHome from '@/views/layout/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainHome',
      component: mainHome
    }
  ]
})
