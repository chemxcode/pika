import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'
import About from '@/pages/about/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/city',
      name: 'city',
      component: City
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }, {
      path: '/about',
      name: 'about',
      component: About
    }],
    // 页面切换始终到顶部 
    scrollBehavior (to, from, savedPosition) {
      return { x:0, y:0 }
    }
})
