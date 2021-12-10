import { createRouter, createWebHistory } from "vue-router"

import DashboardContent from '../components/dashboard.content/DashboardContent.vue'

const routes = [
    {
        path: '/auth/dashboard',
        name: 'dashboard.index',
        component: DashboardContent,
        props: { type: 'table1', title: 'Основная' }
    },
    {
        path: '/auth/dashboard/movies',
        name: 'dashboard.movies',
        component: DashboardContent,
        props: { type: 'table2', title: 'Кино' }
    },
    {
        path: '/auth/dashboard/users',
        name: 'dashboard.users',
        component: DashboardContent,
        props: { type: 'table3', title: 'Пользователи' }
    }
]

export default createRouter ({
    routes,
    history: createWebHistory()
})