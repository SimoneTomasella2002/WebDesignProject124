import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '@/views/Home.vue';
import WhoWeAreView from '@/views/ChiSiamo.vue';
import TermsOfServiceView from '@/views/TermsOfService.vue';

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/chi-siamo', name: 'whoWeAre', component: WhoWeAreView },
    { path: '/terms-of-service', name: 'termsOfService', component: TermsOfServiceView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;
