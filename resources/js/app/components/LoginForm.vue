<template>
    <div class="login">
        <input v-model="email" type="email" name="email">
        <input v-model="password" type="password" name="password">
        <input @click.prevent="login" type="submit">
    </div>
    <input @click.prevent="logout" type="submit" value="Выйти">
</template>

<script>

import axios from 'axios';

export default {
    name: 'LoginForm',

    data() {
        return {
            email: null,
            password: null,
        }
    },

    methods: {

        login() 
        {
            let credentials = {
                email: this.email, 
                password: this.password,
            }

            axios.post('/api/auth/login', credentials).then(response => {

                localStorage.setItem('token', response.data.access_token)

            }).catch(error => {

                console.log(error)

            })
        },

        logout()
        {
            let token = localStorage.getItem('token');

            axios.post('/api/auth/logout', {}, {headers: {'Authorization': 'Bearer' + token}}).then(response => {

                localStorage.removeItem('token')

            }).catch(error => {

                console.log(error)

            })
        },

    }
}

</script>