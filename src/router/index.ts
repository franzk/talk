import { createRouter, createWebHistory } from 'vue-router'
import ListenView from '@/views/ListenView.vue'
import TalkView from '@/views/TalkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/listen',
      name: 'listen',
      component: ListenView,
    },
    {
      path: '/',
      name: 'talk',
      component: TalkView,
    },
  ],
})

export default router
