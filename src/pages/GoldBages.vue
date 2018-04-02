<template>
    <v-layout row wrap class="mt-4">
        <v-flex xs12 md4 v-for="(item, key) in items" :key="key">
            <v-card v-apparate:fadeIn="{y:0}"  flat class="ma-4 blue-grey--text text--darken-2" style="max-width: 400px; height:96%;">
                <v-card-media :src="item.image" height="460px"></v-card-media>
                <v-card-title primary-title  class="pr-5 pl-5 pt-4">
                    <div>
                        <p class="headline ma-0 pa-0">{{item.name}}</p>
                        <p style="text-align: right; font-weight: 500;" class="grey--text">{{item.year}}</p>
                        <v-divider/>
                        <div style="font-size: 1.4em; font-weight: 300;"  class="mt-3" v-html="item.info"></div>
                    </div>
                </v-card-title>
            </v-card>
            <!--<v-card style="max-width: 300px;">-->
                <!--<v-card-media src="public/gold_bages/saltanat.jpg" height="320px"></v-card-media>-->
                <!--<v-card-title primary-title  class="pa-4">-->
                    <!--<div>-->
                        <!--<p class="headline ma-0 pa-0">{{item.name}}</p>-->
                        <!--<p style="text-align: right; font-weight: 500;" class="grey&#45;&#45;text">{{item.year}}</p>-->
                        <!--<v-divider/>-->
                        <!--<div class="mt-3" v-html="item.info"></div>-->
                    <!--</div>-->
                <!--</v-card-title>-->
            <!--</v-card>-->
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    {
                        name: 'Юнусова Салтанат',
                        image: 'public/gold_bages/saltanat.jpg',
                        year: '"Алтын белгі" 2006 жыл',
                        info: '<b>2006 жылы.</b> Алматы қаласы Әл Фараби атындағы ҚазМУ. "Финанс" факультеті. <br><br> <b>2010 жылы.</b> ГДР Миншенский университет. "Экономика" факультеті.'
                    },
                    {
                        name: 'Жолмағанбетов Ернар',
                        image: 'public/gold_bages/ernar.jpg',
                        year: '"Алтын белгі" 2009 жыл',
                        info: '<b>2009 жылы.</b> Астана қаласы Гумилев атындағы Еуразия Ұлттық Университеті. "Ағылшын тілінде аудармашылық ісі" факультеті.'
                    },
                    {
                        name: 'Қожахмет Мырзағали',
                        image: 'public/gold_bages/myrzagali.png',
                        year: '"Алтын белгі" 2012 жыл',
                        info: '<b>2012 жылы.</b> Астана қаласы Гумилев атындағы Еуразия Ұлттық Университеті. "Ақпараттық технологиялар" факультеті.'
                    }
                ]
            }
        }
    }
</script>