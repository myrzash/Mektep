<template>
    <div>
        <v-layout row wrap class="mb-5">
            <v-flex xs12>
                <h1  v-apparate:fadeIn="{y:0}" class="blue-grey--text text--darken-2 text-xs-center">Ұлттық бірыңғай тестілеу</h1>
                <v-divider/>
                <v-card flat class="pa-5 mt-5 mb-5"  v-apparate:fadeInUp="{y:0}">
                    <iframe src="public/ubt/ent.html" frameborder="0" width="800" height="1200"></iframe>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>