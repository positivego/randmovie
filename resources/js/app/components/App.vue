<template>
    <index-menu/>
    <router-view></router-view>
</template>

<script>

import IndexMenu from './menu/IndexMenu.vue'

export default {

    components: {
        IndexMenu,
    },

}

</script>