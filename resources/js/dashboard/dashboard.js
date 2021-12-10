import { createApp } from 'vue';
import router from './router/router.js'
import store from './store/store.js'
import Dashboard from './components/Dashboard.vue'

createApp(Dashboard).use(router).use(store).mount('#dashboard')