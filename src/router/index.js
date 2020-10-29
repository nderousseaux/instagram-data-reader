import Vue from 'vue'
import Router from 'vue-router'
import Conversation from '@/components/Conversation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Conversation',
      component: Conversation
    }
  ]
})
