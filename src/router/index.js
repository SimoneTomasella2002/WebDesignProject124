import { createRouter, createWebHistory } from "vue-router";
const ChiSiamo = () => import("@/views/ChiSiamo.vue");
const TermsOfService = () => import("@/views/TermsOfService.vue");
const MainContent = () => import("@/views/MainContent.vue");

const routes = [
  { path: "/", name: "Home", component: MainContent, 
    meta: { 
      enterClass: 'animate__animated animate__fadeInLeft',
      leaveClass: 'animate__animated animate__fadeOutRight'
    } 
  },
  { path: "/about", name: "About", component: ChiSiamo, 
    meta: { 
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate__fadeOutLeft'
    }
  },
  { path: "/terms", name: "TermsOfService", component: TermsOfService, 
    meta: { 
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate__fadeOutLeft'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
