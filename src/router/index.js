import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '@/views/Home.vue';
import WhoWeAreView from '@/views/ChiSiamo.vue';
import TermsofService from '@/views/TermsOfService.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/views/ChiSiamo.vue', component: WhoWeAreView },
    { path: '/views/TermsOfService.vue', component: TermsofService },
]

const router = createRouter ({
    history: createMemoryHistory(),
    routes,
})

export default router