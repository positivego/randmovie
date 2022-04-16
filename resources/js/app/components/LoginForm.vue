<template>
    <p>Авторизация</p>
    <div class="login">
        <input v-model="email" type="email" name="email" placeholder="Емайл">
        <input v-model="password" type="password" name="password" placeholder="Пароль">
        <input @click.prevent="login" type="submit">
    </div>
    <input @click.prevent="logout" type="submit" value="Выйти">

    <p style="margin-top: 50px;">Регистрация</p>
    <div class="login">
        <input v-model="rName" type="text" name="name" placeholder="Имя">
        <input v-model="rEmail" type="email" name="email" placeholder="Емайл">
        <input v-model="rPass" type="password" name="password" placeholder="пароль">
        <input v-model="rcPass" type="password" name="password_confirmation" placeholder="подтвердите пароль">
        <input @click.prevent="registration" type="submit">
    </div>

    <p style="margin-top: 50px;">Выход</p>
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
            rName: null,
            rEmail: null,
            rPass: null,
            rcPass: null,
        }
    },

    methods: {

        registration()
        {
            let credentials = {
                name: this.rName,
                email: this.rEmail, 
                password: this.rPass,
                password_confirmation: this.rcPass,
            }

            axios.post('/api/auth/registration', {credentials: credentials}).then(response => {

                console.log(response.data)

            }).catch(error => {

                console.log(error)

            })
        },

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