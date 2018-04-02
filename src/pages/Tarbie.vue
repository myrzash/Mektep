<template>
    <div class="text-xs-center ma-0 pa-0">
        <div id="mektepiis"></div>
        <v-layout row wrap class="mb-5">
            <v-flex xs12 md8 offset-md2>
                <h1 class="blue-grey--text text--darken-2"><b>Мектепішілік іс-шаралар</b></h1>
                <v-divider/>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex  v-apparate:fadeIn="{y:0}" xs12 md6 lg4 v-for="(img, index) in imagesMIIS" :key="index" class="pa-5">
                <img :src="img.src" alt="" style="width: 100%">
                <!--<v-card flat style="width:100%; min-width: 300px; min-height: 200px;">-->
                <!--<v-card-media :src="img.src" height="200px">-->
                <!--</v-card-media>-->
                <!--</v-card>-->
            </v-flex>
        </v-layout>

        <div id="konildi_jaz" class="part"></div>
        <v-layout  v-apparate:fadeIn="{y:0}" row wrap class="mb-5">
            <v-flex xs12 md8 offset-md2 lg6 offset-lg3>
                <h1 class="blue-grey--text text--darken-2"><b>Көңілді жаз</b></h1>
                <v-divider/>
            </v-flex>
        </v-layout>
        <img src="public/konildi_jaz.jpg" alt="">

        <div id="kamkorshylyk" class="part"></div>
        <v-layout  v-apparate:fadeIn="{y:0}" row wrap class="mb-5">
            <v-flex xs12 md8 offset-md2 lg6 offset-lg3>
                <h1 class="blue-grey--text text--darken-2"><b>Қамқоршылық кеңесі</b></h1>
                <v-divider/>
            </v-flex>
        </v-layout>
        <img src="public/kamkorshylyk_kenesi.jpg" alt="">

        <div id="kogamdastyk" class="part"></div>
        <v-layout  v-apparate:fadeIn="{y:0}" row wrap class="mb-5">
            <v-flex xs12 md8 offset-md2 lg6 offset-lg3>
                <h1 class="blue-grey--text text--darken-2"><b>Оқушылар қоғамдастығы</b></h1>
                <v-divider/>
            </v-flex>
        </v-layout>
        <div>
            <v-layout row wrap>
                <v-flex xs12 md6 v-for="i in 2"  v-apparate:fadeIn="{y:0}">
                   <v-card flat class="ma-5">
                       <v-card-media :src="`public/aibyn/0${i}.jpg`" height="500px"></v-card-media>
                   </v-card>
                </v-flex>
                <v-flex xs12 md-8 offset-md2 lg6 offset-lg3 class="mt-5"  v-apparate:fadeIn="{y:0}">
                    <img src="public/zhasulan/00.jpg" alt="">
                    <v-card flat class="pa-5 mt-5">
                        <iframe src="public/zhasulan/erezhe.html" frameborder="0" width="600" height="600"></iframe>
                    </v-card>
                </v-flex>
            </v-layout>
        </div>

        <div id="atameken" class="part"></div>
        <v-layout row wrap class="mb-5"  v-apparate:fadeIn="{y:0}">
            <v-flex xs12 md8 offset-md2 lg6 offset-lg3>
                <h1 class="blue-grey--text text--darken-2"><b>Атамекен</b></h1>
                <v-divider/>
            </v-flex>
        </v-layout>
        <div>
            <v-parallax src="public/atameken1.jpg" height="900"></v-parallax>
            <img src="public/atameken4.jpg" alt="" class="mt-3">
            <img src="public/atameken3.jpg" alt="" class="mt-3">
            <img src="public/atameken2.jpg" alt="" class="mt-3">
            <!--<img src="public/atameken1.jpg" alt="">-->
        </div>

        <div id="rukhani" class="part"></div>
        <img src="public/rukhani.jpg" alt="" style="max-width: 960px">
        
        <div id="komek" class="part"></div>
        <iframe src="public/tarbie_sagattary.html" frameborder="0" width="1000" height="1700"></iframe>

        <div id="corruption" class="part"></div>
        <img  v-apparate:fadeIn="{y:0}" src="public/zhemkorlyk/01.jpg" alt="" class="mb-5">
        <img  v-apparate:fadeIn="{y:0}" src="public/zhemkorlyk/02.jpg" alt="" class="mb-5">
          <!--<div class="pa-5" >-->
              <iframe  v-apparate:fadeIn="{y:0}" src="public/zhemkorlyk/bayandama.html" frameborder="0" width="900" height="1300"></iframe>
          <!--</div>-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imagesMIIS: [
                    {src: 'public/mektepiish/Рисунок1.jpg'},
                    {src: 'public/mektepiish/Рисунок2.jpg'},
                    {src: 'public/mektepiish/Рисунок3.jpg'},
                    {src: 'public/mektepiish/Рисунок4.jpg'},
                    {src: 'public/mektepiish/Рисунок5.jpg'},
                    {src: 'public/mektepiish/Рисунок6.jpg'},
                ]
            }
        },
        created() {
            let part = this.$route.params.part
            if (part !== 0) {
                setTimeout(() => {
                    this.scrollTo(part)
                }, 100)
            }
        },
        destroyed() {
            this.scrollTo('mektepiis')
        },
        watch: {
            '$route.params.part'(val) {
                if (val !== 0) {
                    this.scrollTo(val)
                }
            }
        },
        methods: {
            scrollTo(elemId) {
                var e = document.getElementById(elemId);
                if (!!e && e.scrollIntoView) {
                    e.scrollIntoView();
                }
            }
        }
    }
</script>