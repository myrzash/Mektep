<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" max-width="380" transition="slide-y-reverse-transition">
            <!--<v-btn color="primary" dark>Open Dialog</v-btn>-->
            <v-btn fab fixed dark style="right:0; bottom:0;" class="mb-5 mr-3" color="amber"  slot="activator" large>
                <v-tooltip left>
                    <v-icon dark slot="activator">feedback</v-icon>
                    <span>Кері байланыс</span>
                </v-tooltip>
            </v-btn>
            <v-card class="pa-3">
                <v-card-title class="headline blue-grey--text text--darken-2">Кері байланыс</v-card-title>
                <v-layout row wrap class="pa-2">
                    <v-flex xs12>
                        <v-text-field label="Электрондық поштаңыз " placeholder="example@gmail.com"></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-text-field multi-line label="Сұрағыңыз "></v-text-field>
                    </v-flex>
                </v-layout>
                <!--<v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>-->
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn primary flat @click.native="dialog = false">Жіберу</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    export default {
        data () {
            return {
                dialog: false
            }
        }
    }
</script>