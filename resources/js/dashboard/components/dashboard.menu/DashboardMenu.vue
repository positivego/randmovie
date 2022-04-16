<template>
    <div class="dashboard__menu">
        
        <div class="menu__group">

            <div class="group__title"><p>Основное</p></div>
        
            <div class="group__item" :class="{active: activeLink === 'dashboard.index'}">
                <div class="item__title">
                    <div class="item__image"><img src="/assets/images/dashboard/home.png"></div>
                    <router-link to="/auth/dashboard" @click="changeActiveLink('dashboard.index')">Основная</router-link>
                </div>
            </div>

            <div class="group__item" :class="{active: activeLink === 'dashboard.movies'}">
                <div class="item__title">
                    <div class="item__image"><img src="/assets/images/dashboard/home.png"></div>
                    <router-link to="/auth/dashboard/movies" @click="changeActiveLink('dashboard.movies')">Кино</router-link>
                </div>
            </div>

            <div class="group__item" :class="{active: activeLink === 'dashboard.compilations'}">
                <div class="item__title">
                    <div class="item__image"><img src="/assets/images/dashboard/home.png"></div>
                    <router-link to="/auth/dashboard/compilations" @click="changeActiveLink('dashboard.compilations')">Подборки</router-link>
                </div>
            </div>

            <div class="group__item" :class="{active: activeLink === 'dashboard.users'}">
                <div class="item__title">
                    <div class="item__image"><img src="/assets/images/dashboard/home.png"></div>
                    <router-link to="/auth/dashboard/users" @click="changeActiveLink('dashboard.users')">Пользователи</router-link>
                </div>
            </div>

            <div class="group__item" :class="{active: activeLink === 'dashboard.comments'}">
                <div class="item__title">
                    <div class="item__image"><img src="/assets/images/dashboard/home.png"></div>
                    <router-link to="/auth/dashboard/comments" @click="changeActiveLink('dashboard.comments')">Комментарии</router-link>
                </div>
            </div>

            <div class="group__item" :class="{active: activeLink === 'dashboard.ratings'}">
                <div class="item__title">
                    <div class="item__image"><img src="/assets/images/dashboard/home.png"></div>
                    <router-link to="/auth/dashboard/ratings" @click="changeActiveLink('dashboard.ratings')">Оценки</router-link>
                </div>
            </div>

        </div>

        <div class="menu__group">

            <div class="group__title"><p>Составное</p></div>
        
            <div class="group__item">

                <div class="item__title" :class="[{active: activeLink === 'dashboard.genres'}, {open: checkList('list.genres') ? true : ''}]">
                    <div class="item__image" @click="openOrCloseList('list.genres')">
                        <img src="/assets/images/dashboard/triangle.png">
                    </div>
                    <router-link to="/auth/dashboard/genres" @click="changeActiveLink('dashboard.genres')">Жанры</router-link>
                </div>
                <div class="links__list" :class="{open: checkList('list.genres') ? true : ''}">
                    <div class="link"><p>Ужасы</p></div>
                    <div class="link"><p>Комедия</p></div>
                    <div class="link"><p>Боевик</p></div>
                </div>

            </div>

            <div class="group__item">

                <div class="item__title" :class="[{active: activeLink === 'dashboard.actors'}, {open: checkList('list.actors') ? true : ''}]">
                    <div class="item__image" @click="openOrCloseList('list.actors')">
                        <img src="/assets/images/dashboard/triangle.png">
                    </div>
                    <router-link to="/auth/dashboard/actors" @click="changeActiveLink('dashboard.actors')">Актеры</router-link>
                </div>
                <div class="links__list" :class="{open: checkList('list.actors') ? true : ''}">
                    <div class="link"><p>Актер №1</p></div>
                    <div class="link"><p>Актер №2</p></div>
                    <div class="link"><p>Актер №3</p></div>
                </div>

            </div>

            <div class="group__item">

                <div class="item__title" :class="[{active: activeLink === 'dashboard.directors'}, {open: checkList('list.directors') ? true : ''}]">
                    <div class="item__image" @click="openOrCloseList('list.directors')">
                        <img src="/assets/images/dashboard/triangle.png">
                    </div>
                    <router-link to="/auth/dashboard/directors" @click="changeActiveLink('dashboard.directors')">Режиссеры</router-link>
                </div>
                <div class="links__list" :class="{open: checkList('list.directors') ? true : ''}">
                    <div class="link"><p>Режиссер №1</p></div>
                    <div class="link"><p>Режиссер №2</p></div>
                    <div class="link"><p>Режиссер №3</p></div>
                </div>

            </div>

            <div class="group__item">

                <div class="item__title" :class="[{active: activeLink === 'dashboard.countries'}, {open: checkList('list.countries') ? true : ''}]">
                    <div class="item__image" @click="openOrCloseList('list.countries')">
                        <img src="/assets/images/dashboard/triangle.png">
                    </div>
                    <router-link to="/auth/dashboard/countries" @click="changeActiveLink('dashboard.countries')">Страны</router-link>
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
        
            <div class="group__item" :class="{active: activeLink === 'dashboard.settings'}">
                <div class="item__title">
                    <div class="item__image"><img src="/assets/images/dashboard/home.png"></div>
                    <router-link to="/auth/dashboard/settings" @click="changeActiveLink('dashboard.settings')">Основные настройки</router-link>
                </div>
            </div>

        </div>

        <div class="menu__group">

            <div class="group__title"><p>Ссылки</p></div>
        
            <div class="group__item">
                <div class="item__title">
                    <div class="item__image"><img src="/assets/images/dashboard/home.png"></div>
                    <a href="/">На главную</a>
                </div>
            </div>

            <div class="group__item">
                <div class="item__title">
                    <div class="item__image"><img src="/assets/images/dashboard/home.png"></div>
                    <a href="">Выйти</a>
                </div>
            </div>

        </div>

    </div>
</template>

<script>

export default {

    name: 'dashboard-menu',

    props: {
        mountedLink: String,
    },

    data() {
        return {
            activeLink: null,
            activeLists: [],
        }
    },

    methods: {

        changeActiveLink(link)
        {
            if(this.activelink !== link) this.activeLink = link
        },

        openOrCloseList(list)
        {
            if(!this.activeLists.find(el => el === list)) {

                return this.activeLists.push(list)

            } else {

                return this.activeLists.splice(this.activeLists.indexOf(list), 1)

            }
        },

        checkList(list)
        {
            return this.activeLists.find(el => el === list)
        }

    },

    watch: {
        mountedLink(link)
        {
            this.activeLink = link
        }
    }

}
</script>