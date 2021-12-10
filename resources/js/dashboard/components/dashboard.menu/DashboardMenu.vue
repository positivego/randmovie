<template>
    <div class="dashboard__menu">
        
        <div class="menu__group">

            <div class="group__title"><p>Основное</p></div>
        
            <div class="group__item" :class="{active: $store.state.menu.activelink === 'dashboard.index'}">
                <div class="item__title">
                    <div class="item__image"><img src="/storage/dashboard/home.svg"></div>
                    <router-link to="/auth/dashboard" @click="changeActiveLink('dashboard.index')">Основная</router-link>
                </div>
            </div>

            <div class="group__item" :class="{active: $store.state.menu.activelink === 'dashboard.movies'}">
                <div class="item__title">
                    <div class="item__image"><img src="/storage/dashboard/home.svg"></div>
                    <router-link to="/auth/dashboard/movies" @click="changeActiveLink('dashboard.movies')">Кино</router-link>
                </div>
            </div>

            <div class="group__item" :class="{active: $store.state.menu.activelink === 'dashboard.selections'}">
                <div class="item__title">
                    <div class="item__image"><img src="/storage/dashboard/home.svg"></div>
                    <router-link to="/auth/dashboard/users" @click="changeActiveLink('dashboard.selections')">Подборки</router-link>
                </div>
            </div>

            <div class="group__item" :class="{active: $store.state.menu.activelink === 'dashboard.users'}">
                <div class="item__title">
                    <div class="item__image"><img src="/storage/dashboard/home.svg"></div>
                    <router-link to="/auth/dashboard/users" @click="changeActiveLink('dashboard.users')">Пользователи</router-link>
                </div>
            </div>

            <div class="group__item" :class="{active: $store.state.menu.activelink === 'dashboard.comments'}">
                <div class="item__title">
                    <div class="item__image"><img src="/storage/dashboard/home.svg"></div>
                    <router-link to="/auth/dashboard/users" @click="changeActiveLink('dashboard.comments')">Комментарии</router-link>
                </div>
            </div>

            <div class="group__item" :class="{active: $store.state.menu.activelink === 'dashboard.ratings'}">
                <div class="item__title">
                    <div class="item__image"><img src="/storage/dashboard/home.svg"></div>
                    <router-link to="/auth/dashboard/users" @click="changeActiveLink('dashboard.ratings')">Оценки</router-link>
                </div>
            </div>

        </div>

        <div class="menu__group">

            <div class="group__title"><p>Составное</p></div>
        
            <div class="group__item">

                <div class="item__title" :class="[{active: $store.state.menu.activelink === 'dashboard.genres'}, {open: checkList('list.genres') ? true : ''}]">
                    <div class="item__image" @click="openOrCloseList('list.genres')">
                        <img src="/storage/dashboard/triangle.svg">
                    </div>
                    <router-link to="/auth/dashboard" @click="changeActiveLink('dashboard.genres')">Жанры</router-link>
                </div>
                <div class="links__list" :class="{open: checkList('list.genres') ? true : ''}">
                    <div class="link"><p>Ужасы</p></div>
                    <div class="link"><p>Комедия</p></div>
                    <div class="link"><p>Боевик</p></div>
                </div>

            </div>

            <div class="group__item">

                <div class="item__title" :class="[{active: $store.state.menu.activelink === 'dashboard.actors'}, {open: checkList('list.actors') ? true : ''}]">
                    <div class="item__image" @click="openOrCloseList('list.actors')">
                        <img src="/storage/dashboard/triangle.svg">
                    </div>
                    <router-link to="/auth/dashboard" @click="changeActiveLink('dashboard.actors')">Актеры</router-link>
                </div>
                <div class="links__list" :class="{open: checkList('list.actors') ? true : ''}">
                    <div class="link"><p>Актер №1</p></div>
                    <div class="link"><p>Актер №2</p></div>
                    <div class="link"><p>Актер №3</p></div>
                </div>

            </div>

            <div class="group__item">

                <div class="item__title" :class="[{active: $store.state.menu.activelink === 'dashboard.directors'}, {open: checkList('list.directors') ? true : ''}]">
                    <div class="item__image" @click="openOrCloseList('list.directors')">
                        <img src="/storage/dashboard/triangle.svg">
                    </div>
                    <router-link to="/auth/dashboard" @click="changeActiveLink('dashboard.directors')">Режиссеры</router-link>
                </div>
                <div class="links__list" :class="{open: checkList('list.directors') ? true : ''}">
                    <div class="link"><p>Режиссер №1</p></div>
                    <div class="link"><p>Режиссер №2</p></div>
                    <div class="link"><p>Режиссер №3</p></div>
                </div>

            </div>

            <div class="group__item">

                <div class="item__title" :class="[{active: $store.state.menu.activelink === 'dashboard.countries'}, {open: checkList('list.countries') ? true : ''}]">
                    <div class="item__image" @click="openOrCloseList('list.countries')">
                        <img src="/storage/dashboard/triangle.svg">
                    </div>
                    <router-link to="/auth/dashboard" @click="changeActiveLink('dashboard.countries')">Страны</router-link>
                </div>
                <div class="links__list" :class="{open: checkList('list.countries') ? true : ''}">
                    <div class="link"><p>Страна №1</p></div>
                    <div class="link"><p>Страна №2</p></div>
                    <div class="link"><p>Страна №3</p></div>
                </div>

            </div>

        </div>

        <div class="menu__group">

            <div class="group__title"><p>Настройки</p></div>
        
            <div class="group__item" :class="{active: $store.state.menu.activelink === 'dashboard.settings'}">
                <div class="item__title">
                    <div class="item__image"><img src="/storage/dashboard/home.svg"></div>
                    <router-link to="/auth/dashboard" @click="changeActiveLink('dashboard.settings')">Основные настройки</router-link>
                </div>
            </div>

        </div>

        <div class="menu__group">

            <div class="group__title"><p>Ссылки</p></div>
        
            <div class="group__item">
                <div class="item__title">
                    <div class="item__image"><img src="/storage/dashboard/home.svg"></div>
                    <a href="/">На главную</a>
                </div>
            </div>

            <div class="group__item">
                <div class="item__title">
                    <div class="item__image"><img src="/storage/dashboard/home.svg"></div>
                    <a href="">Выйти</a>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {

    name: 'dashboard-menu',

    methods: {

        ...mapActions({
            changeActiveLink: 'menu/changeActiveLink',
            openOrCloseList: 'menu/openOrCloseList',
        }),

        checkList(listName)
        {
            return this.$store.state.menu.activeLists.find(el => el === listName)
        }

    },

}
</script>