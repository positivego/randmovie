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
        path: '/auth/dashboard/compilations',
        name: 'dashboard.compilations',
        component: DashboardContent,
        props: { type: 'table3', title: 'Подборки' }
    },
    {
        path: '/auth/dashboard/users',
        name: 'dashboard.users',
        component: DashboardContent,
        props: { type: 'table4', title: 'Пользователи' }
    },
    {
        path: '/auth/dashboard/comments',
        name: 'dashboard.comments',
        component: DashboardContent,
        props: { type: 'table5', title: 'Комментарии' }
    },
    {
        path: '/auth/dashboard/ratings',
        name: 'dashboard.ratings',
        component: DashboardContent,
        props: { type: 'table6', title: 'Оценки' }
    },
    {
        path: '/auth/dashboard/genres',
        name: 'dashboard.genres',
        component: DashboardContent,
        props: { type: 'table7', title: 'Жанры' }
    },
    {
        path: '/auth/dashboard/actors',
        name: 'dashboard.actors',
        component: DashboardContent,
        props: { type: 'table8', title: 'Актеры' }
    },
    {
        path: '/auth/dashboard/directors',
        name: 'dashboard.directors',
        component: DashboardContent,
        props: { type: 'table9', title: 'Режиссеры' }
    },
    {
        path: '/auth/dashboard/countries',
        name: 'dashboard.countries',
        component: DashboardContent,
        props: { type: 'table10', title: 'Страны' }
    },
    {
        path: '/auth/dashboard/settings',
        name: 'dashboard.settings',
        component: DashboardContent,
        props: { type: 'table11', title: 'Настройки' }
    }
]

export default createRouter ({
    routes,
    history: createWebHistory()
})