<template>
    <div class="text-xs-center pa-0">

        <div id="nkb"></div>
        <v-layout row wrap class="mb-5">
            <v-flex xs12 md8 offset-md2>
                <h1 class="blue-grey--text text--darken-2"><b>Нормативтік құқықтық база</b></h1>
                <v-divider/>
            </v-flex>
        </v-layout>
        <iframe src="public/pedetika.html" frameborder="0" width="800" height="2000"></iframe>


        <div id="mmk" class="part"></div>
        <v-layout row wrap class="mb-5">
            <v-flex xs12 md8 offset-md2>
                <h1 class="blue-grey--text text--darken-2"><b>Мемлекеттік қызмет көрсету</b></h1>
                <v-divider/>
            </v-flex>
        </v-layout>
        <iframe src="public/memlekettik_kyzmet_korsetu.html" frameborder="0" width="800" height="4200"></iframe>
    </div>
</template>


<script>
    export default {
        created() {
            let part = this.$route.params.part
            if (part !== 0) {
                setTimeout(() => {
                    this.scrollTo(part)
                }, 100)
            }
        },
        destroyed() {
            this.scrollTo('nkb')
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