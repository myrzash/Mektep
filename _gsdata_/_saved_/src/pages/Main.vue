<template>
    <div style="width:100%;">
        <v-layout row wrap>
            <v-flex xs12 md2 offset-lg1 lg1 class="pa-4">
                <v-layout column align-center>
                <img :src="logoSchool.src"
                     width="200px"
                />
                </v-layout>
            </v-flex>
            <v-flex xs12 md8 offset-lg1 lg6 class="pa-4">
                <v-carousel hide-controls style="width:100%; min-width: 600px; max-height:400px;" delimiter-icon="school">
                    <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
                </v-carousel>
            </v-flex>
            <v-flex xs12 md2 offset-lg1 lg1 class="pa-4">
                <v-layout column class="align-center white">
                    <v-flex
                            v-apparate:fadeIn="{y:0}"
                            class="mb-5"
                            v-for="(logo, i) in logos"
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
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        src: './public/slider/01.jpg'
                    },
                    {
                        src: './public/slider/02.jpg'
                    },
                    {
                        src: './public/slider/03.jpg'
                    },
                    {
                        src: './public/slider/04.jpg'
                    },
                    {
                        src: './public/slider/05.jpg'
                    }
                ],
                logoSchool: {
                    src: './public/logo_15.png',
                    link: null,
                },
                logos: [{
                    src: './public/logo_zholdau.png',
                    width:'200px',
                    label: 'Президент жолдауы',
                    link: 'http://www.akorda.kz/kz/addresses'
                },{
                    src: './public/logo_symbols.png',
                    label: 'Мемлекеттік рәміздер',
                    marginTop: '-25px',
                    link: 'http://www.akorda.kz/kz/state_symbols/about_state_symbols'
                },{
                    src: './public/logo_goroo.png',
                    width: '140px',
                    link: 'http://rudoo.idhost.kz/'
                },{
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
        }
    }
</script>