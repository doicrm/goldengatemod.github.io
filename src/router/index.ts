import { createRouter, createWebHistory } from 'vue-router'
// import GoldenGatePage from '@/goldengate/pages/GoldenGatePage.vue'
import GoldenGate2Page from '@/goldengate2/pages/GoldenGate2Page.vue'
import TeamPage from '@/team/pages/TeamPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GoldenGate2Page
    },
    {
      path: '/team',
      name: 'team',
      component: TeamPage
    }
    // {
    //   path: '/golden-gate',
    //   name: 'team',
    //   component: GoldenGatePage
    // }
  ]
})

export default router
