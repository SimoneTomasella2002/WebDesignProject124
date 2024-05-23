// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ChiSiamo from '@/views/ChiSiamo.vue'
import TermsOfService from '@/views/TermsOfService.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: ChiSiamo },
  { path: '/terms', name: 'TermsOfService', component: TermsOfService }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
