<template>

    <dashboard-menu :mountedLink="mountedLink"></dashboard-menu>

    <div class="dashboard">
        <dashboard-breadcrumb></dashboard-breadcrumb>
        <dashboard-head></dashboard-head>
        <router-view @checkMountedLink="setMountedLink"></router-view>
    </div>

</template>

<script>

import DashboardMenu from './dashboard.menu/DashboardMenu.vue'
import DashboardBreadcrumb from './dashboard.breadcrumb/DashboardBreadcrumb.vue'
import DashboardHead from './dashboard.head/DashboardHead.vue'

export default {

    name: 'dashboard',

    components: {
        DashboardMenu,
        DashboardBreadcrumb,
        DashboardHead
    },

    data() {
        return {
            mountedLink: null,
        }
    },

    methods: {
        setMountedLink(link)
        {
            this.mountedLink = link
        }
    }

}

</script>