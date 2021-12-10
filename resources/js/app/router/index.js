import { createRouter, createWebHistory } from "vue-router"

import LoginForm from '../components/LoginForm.vue'

const routes = [
    {
        path: '/',
        name: 'page.login',
        component: LoginForm
    }
]

export default createRouter ({
    routes,
    history: createWebHistory()
})