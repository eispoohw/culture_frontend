import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'products',
            component: () => import('../views/Products.vue')
        },
        {
            path: '/product/',
            name: 'product',
            component: () => import('../views/Product.vue')
        },
        {
            path: '/order/',
            name: 'order',
            component: () => import('../views/Order.vue')
        }
    ]
})

export default router