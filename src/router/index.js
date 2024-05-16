import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '@/views/Home.vue';
import WhoWeAreView from '@/views/ChiSiamo.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/views/ChiSiamo.vue', component: WhoWeAreView },
]

const router = createRouter ({
    history: createMemoryHistory(),
    routes,
})

export default router