import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Message from '@/components/Message'
import Toggle from '@/components/Toggle'
import Essay from '@/components/Essay'
import Exercise from '@/components/Exercise'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Message',
      name :'Message',
      component: Message
    },
    {
      path: '/Toggle',
      name :'Toggle',
      component: Toggle
    },
    {
      path: '/Essay',
      name: 'Essay',
      component: Essay
    },
    {
      path: '/Exercise',
      name: 'Exercise',
      component: Exercise,
    },
  ]
})
