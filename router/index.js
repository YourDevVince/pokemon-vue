import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ThankYou from '@/views/ThankYou.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/ThankYou',
            name: 'ThankYou',
            component: ThankYou,
        },
    ],
});

export default router;