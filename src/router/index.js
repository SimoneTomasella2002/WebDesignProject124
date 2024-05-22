import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '@/views/Home.vue';
import WhoWeAreView from '@/views/ChiSiamo.vue';
import TermsOfServiceView from '@/views/TermsOfService.vue';

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/views/ChiSiamo.vue', name: 'whoWeAre', component: WhoWeAreView },
    { path: '/views/TermsOfService.vue', name: 'termsOfService', component: TermsOfServiceView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;
