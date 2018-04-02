<template>
    <div>
        <v-parallax src="public/zhetistikter/DSC_2310.jpg" style="position:absolute; width:100%; left:0; top:60px;" height="1100">
            <v-layout column align-center justify-end>
                <h1 font-size class="primary pa-3" style="margin-bottom:200px; border-radius: 5px">Біздің жетістіктер</h1>
            </v-layout>
        </v-parallax>
        <div style="min-height: 900px;"></div>
        <v-layout row wrap justify-space-between>
            <v-flex xs12 md6 v-for="(item, index) in items" :key="index">
                <v-card flat class="ma-5 pa-5" style="height:100%;">
                    <div>
                        <p class="headline text-xs-center">{{item.name}}</p>
                        <v-divider class="ma-1"/>
                        <p style="font-weight: 300; font-size: 1.3em;" class="grey--text text-xs-center">{{item.subtitle}}</p>
                    </div>
                    <div style="font-size: 1.3em;" class="mt-4" v-html="item.info"></div>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        data () {
            return  {
                items: [
                    {
                        name: 'Нұрмұратова Аружан Бауыржанқызы',
                        subtitle: '9 «А» сынып оқушысы',
                        info: 'Республикалық пәндер олимпиадасының облыстық кезеңінің \n' +
                        'тарих пәні бойынша 3 орын иегері \n'
                    },
                    {
                        name: 'Маратова Акжунис Маликовна',
                        subtitle: '11 «А» сынып оқушысы',
                        info: 'Республикалық пәндер олимпиадасының облыстық кезеңінің\n' +
                        'қазақ тілі пәніні бойынша 3 орын иегері'
                    }
                ]
            }
        }
    }
</script>