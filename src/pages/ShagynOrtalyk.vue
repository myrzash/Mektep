<template>
    <div>
        <div id="sho"></div>
        <v-layout row wrap text-xs-center class="mb-5">
            <v-flex xs12 md8 offset-md2>
                <h1 class="blue-grey--text text--darken-2">Шағын орталық</h1>
                <v-divider/>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 md6 lg4 v-for="(img, index) in images" :key="index" class="pa-1" v-apparate:fadeInUp="{y:0}">
                <img :src="img.src" alt="" style="width: 100%">
                <!--<v-card flat style="width:100%; min-width: 300px; min-height: 200px;">-->
                <!--<v-card-media :src="img.src" height="200px">-->
                <!--</v-card-media>-->
                <!--</v-card>-->
            </v-flex>
        </v-layout>

        <div id="bastauysh" class="part"></div>
        <v-layout row wrap text-xs-center class="mb-5">
            <v-flex xs12 md8 offset-md2>
                <h1 class="blue-grey--text text--darken-2">Бастауыш</h1>
                <v-divider/>
            </v-flex>
            <v-flex v-apparate:fadeInUp="{y:0}" xs12 md8 offset-md2 v-for="prima in primaryClasses" class="mb-5">
                <v-card flat class="pa-4">
                    <h2 class="blue-grey--text text--darken-1 text-xs-right">
                        {{prima.title}}
                    </h2>
                    <img :src="prima.src" alt="" width="100%">
                </v-card>
            </v-flex>
        </v-layout>

        <div id="bo" class="part"></div>
        <v-layout row wrap text-xs-center class="mb-5">
            <v-flex xs12 md8 offset-md2>
                <h1 class="blue-grey--text text--darken-2">Бейінді оқыту</h1>
                <v-divider/>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 md8 offset-md2>
                <img v-apparate:fadeIn="{y:0}" src="public/beiyndi_okytu/01.jpg" alt="" style="width: 100%" class="mb-5">
                <img v-apparate:fadeIn="{y:0}" src="public/beiyndi_okytu/02.jpg" alt="" style="width: 100%; margin-top: 100px;" class="mb-5">
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                images: [
                    {src: 'public/shagyn_ortalyk/20180205_122507.jpg'},
                    {src: 'public/shagyn_ortalyk/20180205_122514.jpg'},
                    {src: 'public/shagyn_ortalyk/20180205_122524.jpg'},
                    {src: 'public/shagyn_ortalyk/20180205_122544.jpg'},
                    {src: 'public/shagyn_ortalyk/20180205_122559.jpg'},
                    {src: 'public/shagyn_ortalyk/20180205_122607.jpg'},
                    {src: 'public/shagyn_ortalyk/20180205_122616.jpg'},
                    {src: 'public/shagyn_ortalyk/20180205_122649.jpg'},
                    {src: 'public/shagyn_ortalyk/20180205_122653.jpg'},
                    {src: 'public/shagyn_ortalyk/20180205_122708.jpg'},
                    {src: 'public/shagyn_ortalyk/20180205_122718.jpg'},
                    {src: 'public/shagyn_ortalyk/20180205_123116.jpg'},
                    {src: 'public/shagyn_ortalyk/20180205_123126.jpg'}
                ],
                primaryClasses: [
                    {
                        src: 'public/bastauysh/1a.jpg',
                        title: '1 "A" сыныбы'
                    },
                    {
                        src: 'public/bastauysh/1aa.png',
                        title: '1 "Ә" сыныбы'
                    },
                    {
                        src: 'public/bastauysh/1b.jpg',
                        title: '1 "Б" сыныбы'
                    },
                    {
                        src: 'public/bastauysh/2b.jpg',
                        title: '2 "Б" сыныбы'
                    },
                    {
                        src: 'public/bastauysh/4a.jpg',
                        title: '4 "A" сыныбы'
                    },
                    {
                        src: 'public/bastauysh/4b.jpg',
                        title: '4 "Б" сыныбы'
                    },
                    {
                        src: 'public/bastauysh/4v.jpg',
                        title: '4 "В" сыныбы'
                    }]
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
            this.scrollTo('sho')
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