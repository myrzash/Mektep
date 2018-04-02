<template>
    <v-app class="application">


        <div v-if="loading" style="position: fixed; background:white; width:100%; height:100%; z-index: 10;">
            <img src="public/loader2.gif" style="position:absolute; width:400px; height:300px; left: 50%; top: 50%; margin-left: -200px; margin-top: -150px; " alt="">
        </div>  
        <!--<v-toolbar fixed app dark class="deep-purple accent-2">-->
        <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
        <!--<v-toolbar-title v-text="title"></v-toolbar-title>-->
        <!---->
        <!--<v-spacer></v-spacer>-->
        <!--</v-toolbar>-->
        <v-toolbar dark class="primary" style="" fixed>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
            <v-spacer></v-spacer>

            <template v-for="page in pages">
                <v-menu
                        origin="center center"
                        transition="scale-transition"
                        open-on-hover bottom offset-y v-if="page.menu">
                    <v-btn color="white" dark slot="activator" flat :to="page.route" small>
                        <v-icon class="mr-2">{{page.icon}}</v-icon>
                        {{page.title}}
                        <v-icon>arrow_drop_down</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-tile v-for="(item,index) in page.menu" :key="index" :to="item.route">
                            <v-list-tile-title class="grey--text text--darken-2">{{item.title}}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                <v-btn flat :to="page.route" small v-else>
                    <v-icon class="mr-2">{{page.icon}}</v-icon>
                    {{page.title}}
                </v-btn>
            </template>


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
        <v-content class="mb-5 pt-4 mt-5 mr-0 ml-0 pl-0 pr-0">
            <v-container fluid class="mr-0 ml-0 pl-0 pr-0">
                <v-slide-y-transition mode="out-in">
                    <v-layout column align-center>
                        <router-view/>
                    </v-layout>
                </v-slide-y-transition>
            </v-container>
        </v-content>

       <feedback></feedback>
        <v-footer fixed dark color="primary pa-2">
            <span style="color:white;">{{footerText}}</span>
            <v-spacer></v-spacer>
            <span style="color:white;">&copy; {{copyright}}</span>
        </v-footer>

        <!--<div style="position: fixed; background:white; width:100%; height:100%; z-index: 10">-->
        <!--<img id="loading" src="public/loader.jpeg" alt=""-->
        <!--style="position: fixed; left:50%; top:50%; margin-left:-80px; margin-top:-80px;">-->
        <!--</div>-->

    </v-app>
</template>

<script>
    import Feedback from './pages/Feedback.vue'
    export default {
        components: {
          Feedback
        },
        data() {
            return {
                loading: true,
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
                        route: '/about/0',
                        menu: [
                            {
                                title: 'Мектеп паспорты',
                                route: '/about/passport'
                            },
                            {
                                title: 'Мектеп тарихы',
                                route: '/about/history'
                            },
                            {
                                title: 'Лицензия',
                                route: '/about/license'
                            }
                        ],
                    },
//                    {
//                        title: 'Біз туралы',
//                        icon: 'school',
//                        route: '/about'
//                    },
                    {
                        title: 'Құрылым',
                        icon: 'device_hub',
                        route: '/structure/admins',
                        menu: [
                            {
                                title: 'Мектеп әкімшілігі',
                                route: '/structure/admins'
                            },
                            {
                                title: 'Медицина',
                                route: '/structure/med'
                            },
                            {
                                title: 'Психолог',
                                route: '/structure/psyholog'
                            },
                            {
                                title: 'Кәсіподақ',
                                route: '/structure/kasipodak'
                            }
                        ]
                    },
                    {
                        title: 'Құжаттар',
                        icon: 'folder',
                        route: '/docs/nkb',
                        menu: [
                            {
                                title: 'Нормативтік құқықтық база',
                                route: '/docs/nkb'
                            },
                            {
                                title: 'Мемлекеттік қызмет көрсету',
                                route: '/docs/mmk'
                            }
                           /*, {
                                title: 'Тегін тамақтану',
                                route: ''
                            },
                            {
                                title: 'Ақпараттану',
                                route: ''
                            }*/
                        ]
                    },
                    {
                        title: 'Оқу қызметі',
                        icon: 'book',
                        route: '/ok/sho',
                        menu: [
                            {
                                title: 'Шағын орталық',
                                route: '/ok/sho'
                            },/* {
                                title: 'МДС',
                                route: ''
                            },*/ {
                                title: 'Бастауыш',
                                route: '/ok/bastauysh'
                            },/* {
                                title: 'Ортаңғы және жоғарғы буын',
                                route: ''
                            }, {
                                title: 'Үйден оқыту',
                                route: ''
                            },*/ {
                                title: 'Бейінді оқыту',
                                route: '/ok/bo'
                            }
                        ]
                    },
//                    {
//                        title: 'Инновациялық қызметі',
//                        icon: 'highlight',
//                        route: ''
//                    },
                    {
                        title: 'Тәрбие жұмысы',
                        icon: 'accessibility',
                        route: '/tarbie/mektepiis',
                        menu: [
                            {
                                title: 'Мектепішілік іс-шаралар',
                                route: '/tarbie/mektepiis'
                            }, {
                                title: 'Сынып жетекшілеріне көмек',
                                route: '/tarbie/komek'
                            }, {
                                title: 'Оқушылар қоғамдастығы',
                                route: '/tarbie/kogamdastyk'
                            }, {
                                title: 'Атамекен',
                                route: '/tarbie/atameken'
                            }, {
                                title: 'Рухани жаңғыру',
                                route: '/tarbie/rukhani'
                            }, {
                                title: 'Көңілді жаз',
                                route: '/tarbie/konildi_jaz'
                            }, {
                                title: 'Қамқоршылық кеңесі',
                                route: '/tarbie/kamkorshylyk'
                            }, {
                                title: 'Жемқорлық',
                                route: '/tarbie/corruption'
                            }
                        ]
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
        },
         mounted () {
             setTimeout(() => {
                 this.loading = false;
                 this.$router.push('/main')
             }, 2400)
         }
    }
</script>

<style lang="stylus">
    /*@import '../stylus/main'*/
    @import './../node_modules/vue2-animate/dist/vue2-animate.min.css'

    .apparate
        opacity: 0

    .bg
        width: 100%;
        height: 100%;
        position fixed;
        background: $grey;
        background-image: url(../public/uzor.png);
        background-size: 200px 200px;
        opacity: 0.08;
        background-repeat: repeat;

    #loading
        -webkit-animation: rotation 2s infinite linear

    .part
        margin-bottom: 100px
</style>

<style>
    @-webkit-keyframes rotation {

        from {
            -webkit-transform: rotate(0deg)
        }
        to {
            -webkit-transform: rotate(359deg)
        }
    }
</style>