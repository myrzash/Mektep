<template>
    <v-app class="application">
        <!--<v-toolbar fixed app dark class="deep-purple accent-2">-->
        <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
        <!--<v-toolbar-title v-text="title"></v-toolbar-title>-->
        <!---->
        <!--<v-spacer></v-spacer>-->

        <!--</v-toolbar>-->
        <v-toolbar dark class="primary" style="position: relative" fixed>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-for="page in pages" flat :to="page.route">
                <v-icon class="mr-2">{{page.icon}}</v-icon>
                {{page.title}}
            </v-btn>
            <!--<v-menu open-on-hover bottom offset-y>-->
            <!--<v-btn color="white" dark slot="activator" flat>-->
            <!--<v-icon class="mr-2">home</v-icon>-->
            <!--Dropdown-->
            <!--<v-icon>arrow_drop_down</v-icon>-->
            <!--</v-btn>-->
            <!--<v-list>-->
            <!--<v-list-tile v-for="item in 4" :key="item" @click="">-->
            <!--<v-list-tile-title>Title {{item}}</v-list-tile-title>-->
            <!--</v-list-tile>-->
            <!--</v-list>-->
            <!--</v-menu>-->
            <v-spacer></v-spacer>
            <!--<v-progress-linear style="position: absolute; top:100%;" class="ma-0 mt-1" v-bind:indeterminate="true"></v-progress-linear>-->
        </v-toolbar>
        <div class="bg"></div>

        <!--<v-tabs fixed centered v-model="currentTab">-->
        <!--<v-tabs-bar color="primary" dark>-->
        <!--<v-tabs-slider color="white"></v-tabs-slider>-->
        <!--<v-tabs-item-->
        <!--v-for="(page,i) in pages"-->
        <!--:key="i"-->
        <!--:href="'#'+page.route"-->
        <!--@click.stop="$router.push(page.route)"-->
        <!--&gt;-->
        <!--<v-icon v-if="page.icon" class="mr-2">{{page.icon}}</v-icon>-->
        <!--<h4>{{page.title}}</h4>-->
        <!--</v-tabs-item>-->
        <!--</v-tabs-bar>-->
        <!--&lt;!&ndash;<v-tabs-items>&ndash;&gt;-->
        <!--&lt;!&ndash;<v-tabs-content&ndash;&gt;-->
        <!--&lt;!&ndash;v-for="i in 3"&ndash;&gt;-->
        <!--&lt;!&ndash;:key="i"&ndash;&gt;-->
        <!--&lt;!&ndash;:id="'tab-' + i"&ndash;&gt;-->
        <!--&lt;!&ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;<v-card flat>&ndash;&gt;-->
        <!--&lt;!&ndash;<v-card-text>{{ text}} {{i}}</v-card-text>&ndash;&gt;-->
        <!--&lt;!&ndash;</v-card>&ndash;&gt;-->
        <!--&lt;!&ndash;</v-tabs-content>&ndash;&gt;-->
        <!--&lt;!&ndash;</v-tabs-items>&ndash;&gt;-->
        <!--</v-tabs>-->
        <v-content class="mb-5 pt-4">
            <v-container fluid>
                <v-slide-y-transition mode="out-in">
                    <v-layout column align-center>
                        <router-view/>
                    </v-layout>
                </v-slide-y-transition>
            </v-container>
        </v-content>
        <v-footer fixed dark color="primary pa-2">
            <span style="color:white;">{{footerText}}</span>
            <v-spacer></v-spacer>
            <span style="color:white;">&copy; {{copyright}}</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                title: '№15 орта мектебі',
                footerText: 'Рудный қаласы әкімдігінің "№15 орта мектебі" КММ',
                copyright: '2017 жыл',
                pages: [
                    {
                        title: 'Басты бет',
                        icon: 'home',
                        route: '/main'
                    },
                    {
                        title: 'Біз туралы',
                        icon: 'school',
                        route: '/about'
                    },
                    {
                        title: 'Құрылым',
                        icon: 'device_hub',
                        route: '/structure'
                    },
                    {
                        title: 'Конкурс',
                        icon: 'star',
                        route: '/concurse'
                    },
                    {
                        title: 'Байланыс',
                        icon: 'feedback',
                        route: '/contacts'
                    }
                ]
            }
        },
        computed: {},
        created() {
            document.title = this.title
            this.$router.push('/main')
        }
    }
</script>

<style lang="stylus">
    /*@import '../stylus/main'*/
    @import './../node_modules/vue2-animate/dist/vue2-animate.min.css'

    .apparate
        opacity: 0

    .bg {
        width: 100%;
        height: 100%;
        position fixed;
        background: $grey;
        background-image: url(../public/uzor.png);
        background-size: 200px 200px;
        opacity: 0.04;
        background-repeat: repeat;
    }

</style>