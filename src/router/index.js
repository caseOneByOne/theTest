import Vue from 'vue'
import Router from 'vue-router'
import banner from '@/components/banner'
import calendar from '@/components/calendar'
import headlines from '@/components/headlines'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'banner',
      component: banner
    },
    {
      path:'/',
      name:'calendar',
      component: calendar
    },
    {
      path:'/',
      name:'headlines',
      component: headlines
    },
  ]
})
