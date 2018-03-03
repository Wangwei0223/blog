import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Message from '@/components/Message'
import Toggle from '@/components/Toggle'
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
    }
  ]
})
