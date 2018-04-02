<template>
    <div>
        <v-layout row wrap text-xs-center class="mb-5">
            <v-flex xs12 md8 offset-md2>
                <h1 class="blue-grey--text text--darken-2"><b>Үйірме</b></h1>
                <v-divider/>
            </v-flex>
        </v-layout>

        <v-layout row wrap text-xs-center justify-center>
            <v-flex xs12 md6 v-for="(img, index) in images" :key="index" class="pa-5 mb-5">
                <img :src="img.src" alt="" style="width: 100%">
                <!--<v-card flat style="width:100%; min-width: 300px; min-height: 200px;">-->
                <!--<v-card-media :src="img.src" height="200px">-->
                <!--</v-card-media>-->
                <!--</v-card>-->
            </v-flex>
            <v-flex xs12 md8 class="mb-5">
                <img src="public/sections/02.jpg" alt="" style="width: 100%">
                <iframe src="public/sections/_2018_.html" frameborder="0" width="900" height="1400"></iframe>
            </v-flex>
            <v-flex xs12 md8 class="mb-5">
                <iframe src="public/sections/_2016_.html" frameborder="0" width="900" height="3000"></iframe>
            </v-flex>
            <v-flex xs12 md8 class="mb-5">
                <iframe src="public/sections/converted_file_b8244ccf.html" frameborder="0" width="700"
                        height="8300"></iframe>
            </v-flex>
            <v-flex xs12 md8 class="mb-5">
                <iframe src="public/sections/converted_file_bb5bbaa9.html" frameborder="0" width="700"
                        height="800"></iframe>
            </v-flex>
            <v-flex xs12 md8 class="mb-5">
                <iframe src="public/sections/converted_file_c238075f.html" frameborder="0" width="700"
                        height="900"></iframe>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                images: [
                    {src: 'public/sections/03.jpg'},
                    {src: 'public/sections/04.jpg'},
                ]
            }
        }
    }
</script>