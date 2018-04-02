<template>
    <div style="width:100%;">
        <v-layout row wrap>
            <v-flex xs12 md2>
                <v-layout column align-center class="pl-5 pt-5 pr-1">
                    <img :src="logoSchool.src"
                         v-apparate:bounceIn="{y:200}"
                         width="200px"
                    />
                    <v-card flat class="mt-5">
                        <!--<v-layout row>-->
                        <!--<v-flex xs11>-->
                        <!--<v-card>-->
                        <v-list class="mylist">
                            <v-list-group v-for="item in leftMenu" :value="item.active"
                                          v-bind:key="item.title">
                                <v-list-tile slot="item" class="pa-2">
                                    <!--<v-list-tile-action>-->
                                    <!--<v-icon>{{ item.action }}</v-icon>-->
                                    <!--</v-list-tile-action>-->
                                    <v-list-tile-avatar>
                                        <img class="pa-1" v-bind:src="item.avatar">
                                    </v-list-tile-avatar>
                                    <v-list-tile-content class="ml-0">
                                        <v-list-tile-title class="blue-grey--text text--darken-2">
                                            {{ item.title.toUpperCase()}}
                                        </v-list-tile-title>
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-icon>keyboard_arrow_down</v-icon>
                                    </v-list-tile-action>
                                </v-list-tile>
                                <v-list-tile v-for="(subItem, key2) in item.items" v-bind:key="key2"
                                             @click="onClickSubItem(subItem)">
                                    <v-list-tile-content>
                                        <!--<v-list-tile-title>{{ subItem.title }}</v-list-tile-title>-->
                                        <v-list-tile-sub-title>{{ subItem.title }}</v-list-tile-sub-title>

                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-divider inset></v-divider>
                                <!--<v-list-tile-action>-->
                                <!--<v-icon>{{ subItem.action }}</v-icon>-->
                                <!--</v-list-tile-action>-->
                            </v-list-group>
                        </v-list>
                        <!--</v-card>-->
                        <!--</v-flex>-->
                        <!--</v-layout>-->
                    </v-card>
                </v-layout>
            </v-flex>
            <v-flex xs12 md8 class="pa-5">
                <v-carousel style="width:100%; min-width: 600px; max-height:500px;" delimiter-icon="stop">
                    <v-carousel-item v-for="(item,i) in slider" v-bind:src="item.src" :key="i"></v-carousel-item>
                </v-carousel>

                <!--<v-card flat class="pa-5 mt-5 blue-grey&#45;&#45;text text&#45;&#45;darken-2" style="min-height: 300px">-->
                <!--<p style="font-size: 1.4em; font-weight: 300">-->
                <!--{{textAnim}}-->
                <!--</p>-->
                <!--</v-card>-->

                <!--ДИРЕКТОР БЛОГЫ-->
                <v-card flat class="pa-5 mt-5 blue-grey--text text--darken-2">
                    <v-layout row wrap align-center>
                        <v-flex xs12 md8 class="pr-5">
                            <p style="font-size: 1.4em; font-weight: 300; text-align: justify"
                               v-apparate:fadeIn="{y:0}">
                                Қымбатты ата-аналар қауымы!
                                <br/>
                                Ұстаздар ұжымы!
                                <br/>
                                Сүйікті біздің оқушыларымыз!
                                <br/>
                                <br/>
                                Рудный қаласы әкімдігінің «№15 орта мектебі» КММ ресми сайты сіздер үшін құрылды.
                                <br/>
                                Біздің мектеп сайтын құрғандағы мақсатымыз сіздермен үнемі тікелей байланыста болғымыз келеді.
                                <br/>
                                <br/>
                                Біз мектебіміздің 1993 жылдан бастап Рудный қаласының тарихындағы алғаш рет ашылған және оның абыроймен алда келе жатқан қазақ мектебі екенін мақтаныш тұтамыз.
                            </p>
                        </v-flex>
                        <v-flex xs12 md4>
                            <v-card flat>
                                <img src="public/structure/01.jpg" style="width:100%;"/>
                            </v-card>
                        </v-flex>
                        <v-flex xs12>
                            <p style="font-size: 1.4em; font-weight: 300; text-align: justify">
                                Сіздер сайт ішінен мектеп өмірі туралы көптеген пайдалы ақпараттарды таба аласыздар және өздеріңіз де ақпараттар мен құттықтаулармен бірге, сұрақтарыңызды да жолдай аласыздар. Сонымен қатар мектеп өмірінде болып жатқан оқиғалар мен өткізілген іс-шаралар туралы да мағлұмат ала аласыздар.
                                <br/>
                                <br/>
                                Мектеп әкімішілігі тарапынан мектеп директоры мен орынбасарлары өздерінің қызметтік міндеттері ретінде сіздердің пікірлеріңізге, сұрақтарыңызға, ұсыныстарыңызға көңіл бөлеміз! Және сіздерге уақытылы жауап беруге тырысамыз! Сіздер де өз жетістіктеріңізбен, жаңалықтарыңызбен бөлісе аласыздар!
                                <br/>
                                <br/>
                                Мектептің педагогикалық ұжымы алдарындағы мақсаттар мен міндеттерін Қазақстан Республикасы болашақ азаматтарын тәрбиелеу, білім беру екенін жақсы түсінеді. Адами құндылықтар сана мен дүниетанымды тірек етіп балалардың сауаттылығын қалыптастыру, өзін-өзі жетілдіру үшін жауапкершілігін дамыту, алған білімдерін күнделікті өмірде қолдана білуге үйрену сияқты күрделі тапсырмаларды бірлескен <b>ынтымақтастықта, бірлікте, түсіністікте</b>
                                орындай алатынымызға сенеді!
                                <br/>
                                <br/>
                                Тек қана осы аталған үштіктің ұстаз – ата-ана – оқушы бірлігі сайт мағынасын ашуға жеткізеді деп сенеміз!!!
                                <br/>
                                <br/>
                                Мұғалімдердің жоғары біліктілігі мен оқушылардың білімге деген құштарлығы - ата-ананың балаға деген қамқорлығы мектеп табысының құпиясы болып табылады!
                                <br/>
                                Ендеше құпия кілті қолымызда.
                            </p>
                        </v-flex>
                    </v-layout>

                    <p style="font-size: 1.4em; font-weight: 500; text-align: right"
                       v-apparate:fadeIn="{y:0}">
                        Мектеп директоры: Нұрмағанбетов Қ.Р.
                    </p>
                </v-card>

            </v-flex>
            <v-flex xs12 md2 class="pa-5">
                <!--<v-card style="width:240px">-->
                <v-layout column class="align-center">
                    <v-flex
                            v-apparate:fadeIn="{y:0}"
                            class="mb-5"
                            v-for="(logo, i) in logos"
                            v-apparate:fadeInRight="{y:200}"
                            :key="i"
                    >
                        <div style="position: relative;" class="text-xs-center">
                            <a :href="logo.link" target="_blank" style="text-decoration: none;">
                                <img
                                        :src="logo.src"
                                        :width="logo.width ? logo.width : '160px'"
                                />
                                <h4 v-if="logo.label"
                                    class="grey--text text--darken-2"
                                    :style="{'margin-top': logo.marginTop ? logo.marginTop : ''}">{{logo.label}}</h4>
                            </a>
                        </div>
                    </v-flex>
                </v-layout>
                <!--</v-card>-->
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items3: [
                    {icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014'},
                    {
                        icon: 'folder',
                        iconClass: 'grey lighten-1 white--text',
                        title: 'Recipes',
                        subtitle: 'Jan 17, 2014'
                    },
                    {icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014'}
                ],
                items2: [
                    {
                        icon: 'assignment',
                        iconClass: 'blue white--text',
                        title: 'Vacation itinerary',
                        subtitle: 'Jan 20, 2014'
                    },
                    {
                        icon: 'call_to_action',
                        iconClass: 'amber white--text',
                        title: 'Kitchen remodel',
                        subtitle: 'Jan 10, 2014'
                    }
                ],
                leftMenu: [
                    {
                        active: false,
                        action: 'home',
                        avatar: 'public/flaticons/png/001-man.png',
                        title: 'Оқушы',
                        items: [
                            {title: 'Біз сендермен мақтанамыз', route: '/goldbages'},
                            {title: 'Сабақ кестесі', route: '/tables'},
                            {title: 'Жолда жүру ережесі', route: '/traffic'},
                            {title: 'Көмек және сенім қызметі', route: '/support'},
                            /*{title: 'Сайыстар'},*/
                            {title: 'ҰБТ, ОЖСБ', route: '/ubt'},
                            /* {title: 'Еңбекке орналасу'},*/
                            {title: 'Біздің жетістіктер', route: '/zhetistikter'},
                            {title: 'Үйірме', route: '/sections'},
                        ]
                    },
                    {
                        action: 'home',
                        title: 'Мұғалім',
                        avatar: 'public/flaticons/png/003-teacher.png',
                        items: [
                            /*{title: 'Жаңалық'},*/
                            {title: 'Сабақ кестесі', route: '/tables'},
                            /* {title: 'Білім жетілдіру курсы'},*/
                            {title: 'Көмек және сенім қызметі', route: '/support'},
                            /*{title: 'Әдістемелік жұмыс'},*/
                            {title: 'Аттестация', route: '/attestat'},
                            {title: 'Нәтиже', route: '/natizhe'}
                        ]
                    },
                    {
                        action: 'restaurant',
                        title: 'Ата-ана',
                        avatar: 'public/flaticons/png/002-couple.png',
                        items: [
                            /*{title: 'Жаңалық'},*/
                            {title: 'Сабақ кестесі', route: '/tables'},
                            /*{title: 'Мектепке қабылдау ережесі'},*/
                            {title: 'Көмек және сенім қызметі', route: '/support'}
                        ]
                    }
                ],
                timerIntervalId: null,
//                textAnimPrimary: 'Бiздiң сайт — бiлiм беретiн үдерістегі барлық қатысушыларға арналған телекоммуникациялық қарым-қатынастың қазiргi құралы болып табылады. Бiздiң мекеме бiртұтас ақпараттық кеңiстiктiң ары қарай дамыту мақсатында жасалған. Сайт қонақтарын бiздiң мектеп өмірімен танысуға шақырамыз. Сiз мұғалiмдер және оқушылардың шығармашылық қызметтері жайлы, табыстар мен дәстүрлер, мектеп және жанұя арасындағы қарым-қатынастарды, мектептегі қызықты адамдармен кездесулер жайлы біле аласыз.',
//                textAnim: '',
                slider: [
                    {src: './public/slider/IMG-20180217-WA0003.jpg'},
                    {src: './public/slider/IMG-20180217-WA0004.jpg'},
                    {src: './public/slider/IMG-20180217-WA0005.jpg'},
                    {src: './public/slider/IMG-20180217-WA0000.jpg'},
                    {src: './public/slider/IMG-20180217-WA0001.jpg'},
                    {src: './public/slider/IMG-20180217-WA0002.jpg'},
                    {src: './public/slider/IMG-20180217-WA0006.jpg'},
//                    {src: './public/slider/IMG-20180217-WA0007.jpg'},
                    {src: './public/slider/IMG-20180217-WA0008.jpg'},
                    {
                        src: './public/slider/01.jpg'
                    },
                    {
                        src: './public/slider/02.jpg'
                    },
                    {
                        src: './public/slider/03.jpg'
                    },
                    /*{
                        src: './public/attestat.jpg'
                    },*/
                    {
                        src: './public/slider/04.jpg'
                    },
                    {
                        src: './public/slider/05.jpg'
                    },
                ],
                logoSchool: {
                    src: './public/logo_15.png',
                    link: null,
                },
                logos: [{
                    src: './public/logo_zholdau.png',
                    width: '200px',
                    label: 'Президент жолдауы',
                    link: 'http://www.akorda.kz/kz/addresses'
                }, {
                    src: './public/logo_symbols.png',
                    label: 'Мемлекеттік рәміздер',
                    marginTop: '-25px',
                    link: 'http://www.akorda.kz/kz/state_symbols/about_state_symbols'
                }, {
                    src: './public/logo_goroo.png',
                    width: '140px',
                    link: 'http://rudoo.idhost.kz/'
                }, {
                    src: './public/logo_kundelik.png',
                    link: 'https://kundelik.kz'
                }, {
                    src: './public/logo_bilimland.png',
                    link: 'https://bilimland.kz/kk',
                    width: '140px'
                }, {
                    src: './public/logo_rukhani.png',
                    link: 'http://ruh.kz/'
                }, {
                    src: './public/logo_2050.png',
                    link: 'https://strategy2050.kz/news/5146'
                }]
            }
        },
//        created() {
//            var i = 0;
//            this.timerIntervalId = setInterval(() => {
//                if (i === this.textAnimPrimary.length) {
//                    clearInterval(this.timerIntervalId);
//                } else {
//                    this.textAnim += this.textAnimPrimary[i++]
//                }
//            }, 20);
//        },
//        beforeDestroy() {
//            if (this.timerIntervalId) {
//                clearInterval(this.timerIntervalId)
//            }
//        },
        methods: {
            onClickSubItem(subItem) {
                if (subItem.route) {
                    this.$router.push(subItem.route)
                }
            }
        }
    }
</script>

<style>
    .mylist .list__tile {
        padding-left: 20px !important;
    }
</style>