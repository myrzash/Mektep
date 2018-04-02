<template>
    <div>
        <v-card class="pa-4">
            <v-card-title>
                <h2>Оқушыларды кешенді тамақтандыруды ұйымдастыру бойынша қызмет көрсету конкурсы</h2>
            </v-card-title>
            <v-layout style="min-width:700px" row wrap>
                <v-flex
                        xs6
                        class="pa-4"
                        v-for="(doc, i) in documents"
                        :key="i"
                >
                    <div style="position: relative">
                        <v-card-media
                                :src="doc.src"
                                width="300px" height="600px"
                        >
                        </v-card-media>
                        <v-btn :href="doc.link" download fab style="position: absolute; right:0; bottom:0;" color="deep-purple accent-2" dark small class="ma-3">
                            <v-icon>file_download</v-icon>
                        </v-btn>
                    </div>
                </v-flex>
            </v-layout>
        </v-card>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                documents:[
                    {
                        src: 'public/doc_kz.png',
                        link: '../public/docs/Конкурс док каз 2018г.docx'
                    },
                    {
                        src: 'public/doc_ru.png',
                        link: '../public/docs/КД питание 717-2018г рус.docx'
                    },
                    {
                        src: 'public/prikaz_kz.png',
                        link: '../public/prikaz_kz.png'
                    },
                    {
                        src: 'public/prikaz_ru.png',
                        link: '../public/prikaz_kz.png'
                    }
                ]
            }
        }
    }
</script>