<template>
    контент
</template>

<script>
export default {

    name: 'dashboard-content',

    props: {
        type: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        }
    },

    emits: [
        'checkMountedLink',
    ],

    mounted()
    {
        this.$emit('checkMountedLink', this.$route.name)
        console.log(this.type, this.title);
    },

    watch: {
        type(value)
        {
            console.log(value, this.title);
        }
    },
    
}
</script>