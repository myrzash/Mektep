<template>
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
                <v-flex xs6 md3 v-for="item in items">
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
                        photo: './public/structure/03.jpg',
                        name: 'Заитова Даметкен Калибековна',
                        post: 'мектеп директорының бастауыш сыныптар жөніндегі орынбасары'
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
                        photo: './public/structure/06.jpg',
                        name: 'Өміржан Қалибек Кәукенұлы',
                        post: 'мектеп директорының НВП орынбасары'
                    },
                    {
                        photo: './public/structure/07.jpg',
                        name: 'Сагинбаева Жанар Талгатовна',
                        post: 'мектеп директорының оқу-тәрбие жөніндегі орынбасары'
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
    }
</script>