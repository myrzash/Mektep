<template>
        <div>
            <div id="admins"></div>
            <v-layout row text-xs-center>
                <v-flex xs12 md8 offset-md2>
                    <h1 class="blue-grey--text text--darken-2"><b>Мектеп әкімшілігі</b></h1>
                    <v-divider/>
                </v-flex>
            </v-layout>
            <v-container grid-list-xl text-xs-center>

                <v-layout row wrap>
                    <v-flex xs6 md3 offset-md3>
                        <v-card v-apparate:fadeIn="{y:200}" height="400px" flat
                                style="display: flex; flex-direction: row; align-items: center">
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">{{headmaster.name}}</div>
                                    <span class="grey--text">{{headmaster.post}}</span>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 md3>
                        <v-card v-apparate:fadeIn="{y:200}">
                            <v-card-media :src="headmaster.photo" height="400px"></v-card-media>
                            <!--<v-card-title class="justify-center">-->
                            <!--<span class="title">{{headmaster.name}}</span>-->
                            <!--<span class="title"></span>-->
                            <!--</v-card-title>-->
                        </v-card>
                    </v-flex>
                </v-layout>

                <v-layout row wrap>
                    <v-flex xs6 md3 v-for="(item, key) in items" :key="key">
                        <v-card v-apparate:fadeIn="{y:200}">
                            <v-card-media :src="item.photo" height="400px"></v-card-media>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">{{item.name}}</div>
                                    <span class="grey--text">{{item.post}}</span>
                                </div>
                            </v-card-title>
                            <!--<v-card-title class="justify-center">-->
                            <!--<span class="title">{{item.name}}</span>-->
                            <!--</v-card-title>-->
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>


            <div id="psyholog" class="part"></div>
            <v-layout row text-xs-center>
                <v-flex xs12 md8 offset-md2>
                    <h1 class="blue-grey--text text--darken-2"><b>Психолог</b></h1>
                    <v-divider/>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 md8 offset-md2>
                    <iframe src="public/structure/psyholog.html" frameborder="0" width="800" height="1700"></iframe>
                </v-flex>
            </v-layout>

            <div id="med" class="part"></div>
            <v-layout row text-xs-center>
                <v-flex xs12 md8 offset-md2>
                    <h1 class="blue-grey--text text--darken-2"><b>Медицина</b></h1>
                    <v-divider/>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="mt-5">
                <v-flex xs12 md10 offset-md1>
                    <img src="public/structure/med.png" style="width: 100%"/>
                </v-flex>
            </v-layout>

            <div id="kasipodak" class="part"></div>
            <v-layout row text-xs-center>
                <v-flex xs12 md8 offset-md2>
                    <h1 class="blue-grey--text text--darken-2"><b>Кәсіподақ</b></h1>
                    <v-divider/>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 md8 offset-md2>
                    <iframe src="public/structure/kasipodak/converted_file_390433e4.html" frameborder="0" width="800" height="1200"></iframe>
                </v-flex>
            </v-layout>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                headmaster: {
                    name: 'Нұрмағанбетов Қайыржан Ракымжанович',
                    photo: './public/structure/01.jpg',
                    post: 'мектеп директоры'
                },
                items: [
                    {
                        photo: './public/structure/02.jpg',
                        name: 'Шайкибекова Айткуль Поезовна',
                        post: 'мектеп директорының оқу-тәрбие жөніндегі орынбасары',
                    },
                    {
                        photo: './public/structure/04.jpg',
                        name: 'Абилдаева Малика Алиевна',
                        post: 'мектеп директорының АХЧ жөніндегі орынбасары'
                    },
                    {
                        photo: './public/structure/05.jpg',
                        name: 'Аманбаева Жұлдыз Көшебаевна',
                        post: 'мектеп директорының тәрбие жөніндегі орынбасары'
                    },
                    {
                        photo: './public/structure/03.jpg',
                        name: 'Заитова Даметкен Калибековна',
                        post: 'мектеп директорының бастауыш сыныптар жөніндегі орынбасары'
                    },
                    {
                        photo: './public/structure/07.jpg',
                        name: 'Сагинбаева Жанар Талгатовна',
                        post: 'мектеп директорының оқу-тәрбие жөніндегі орынбасары'
                    },
                    {
                        photo: './public/structure/06.jpg',
                        name: 'Өміржан Қалибек Кәукенұлы',
                        post: 'мектеп директорының НВП орынбасары'
                    },
                    {
                        photo: './public/structure/08.jpg',
                        name: 'Махатова Жанар Жұмашевна',
                        post: 'мектеп директорының оқу-тәрбие жөніндегі орынбасары'
                    },
                    {
                        photo: './public/structure/09.jpg',
                        name: 'Кудесова Гульдира Максутовна',
                        post: 'мектеп директорының оқу-тәрбие жөніндегі орынбасары'
                    }
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
            this.scrollTo('admins')
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