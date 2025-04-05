import { createRouter, createWebHistory } from 'vue-router'
// import GoldenGatePage from '@/goldengate/pages/GoldenGatePage.vue'
import GoldenGate2Page from '@/goldengate2/pages/GoldenGate2Page.vue'
import TeamPage from '@/team/pages/TeamPage.vue'
import JoinUsPage from '@/join-us/pages/JoinUsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'gg2',
      component: GoldenGate2Page
    },
    {
      path: '/team',
      name: 'team',
      component: TeamPage
    },
    {
      path: '/join-us',
      name: 'join-us',
      component: JoinUsPage
    }
  ]
})

export default router
