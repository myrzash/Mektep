<template>
    <v-card flat style="width:90%;" class="pa-5">
        <v-layout row wrap class="mt-3">
            <v-flex xs12 md8>
                <v-card v-apparate:fadeIn="{y:200}" flat>
                    <v-card-media class="mt-3" :src="location" height="460"></v-card-media>
                </v-card>
            </v-flex>
            <v-flex xs12 md4>
                <v-card v-apparate:fadeIn="{y:200}" class="pa-3 blue-grey--text text--darken-2"  flat>
                    <!--<v-card-title primary-title>-->
                    <div v-for="item in items" class="mt-3 ml-5 pl-5">
                        <p>
                            <v-icon>{{item.icon}}</v-icon>
                            <span class="headline ml-1">{{item.prop}}</span>
                        </p>
                        <h2 class="blue-grey--text text--darken-1" style="font-weight: 300;" v-html="item.value"></h2>
                        <!--<h4 class="">{{item.value}}</h4>-->
                    </div>
                    <!--</v-card-title>-->
                </v-card>
            </v-flex>
        </v-layout>

    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                location: './public/location.png',
                items: [{
                    prop: 'Адрес',
                    value: 'Рудный қаласы<br>Ленин даңғылы, 99',
                    icon: 'my_location'
                }, {
                    prop: 'Телефон',
                    value: '4-08-37<br>4-49-50<br>4-30-96',
                    icon: 'phone'
                }, {
                    prop: 'Жұмыс уақыты',
                    value: 'Дүйсенбі-Жұма: 09:00-18:00<br>Түскі ас: 13:00-14:00<br>Сенбі: 09:00-13:00<br>Жексенбі: демалыс.',
                    icon: 'av_timer'
                }],
                contacts: ''
            }
        },
    }
</script>