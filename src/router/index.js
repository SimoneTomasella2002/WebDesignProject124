// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ChiSiamo from "@/views/ChiSiamo.vue";
import TermsOfService from "@/views/TermsOfService.vue";

const routes = [
  { path: "/", name: "Home", component: Home, 
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
