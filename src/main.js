import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueRouter from 'vue-router'

Vue.use(Vuetify, {
    theme: {
        primary: '#3943B5',
        secondary: '#b0bec5',
        accent: '#DFB822', //'#DFB822',
        error: '#b71c1c'
    }
})
Vue.use(VueRouter)

require('vue-apparate');
VueApparate.init(Vue);

function load(component) {
    // '@' is aliased to src/components
    return () => import(`/${component}.vue`)
}

const router = new VueRouter({
    routes: [
        {path: '/main', component: load('pages/Main')},
        {path: '/about/:part', component: load('pages/About')},
        {path: '/concurse', component: load('pages/Concurse')},
        {path: '/structure/:part', component: load('pages/Structure')},
        {path: '/contacts', component: load('pages/Contacts')},
        {path: '/tarbie/:part', component: load('pages/Tarbie')},
        {path: '/goldbages', component: load('pages/GoldBages')},
        {path: '/traffic', component: load('pages/Traffic')},
        {path: '/docs/:part', component: load('pages/Docs')},
        {path: '/ok/:part', component: load('pages/ShagynOrtalyk')},
        {path: '/natizhe', component: load('pages/Natizhe')},
        {path: '/zhetistikter', component: load('pages/Zhetistikter')},
        {path: '/tables', component: load('pages/Tables')},
        {path: '/sections', component: load('pages/Sections')},
        {path: '/attestat', component: load('pages/Attestation')},
        {path: '/ubt', component: load('pages/UbtOjsb')},
        {path: '/support', component: load('pages/Support')}

        // Always leave this last one
        // {path: '*', component: load('Error')} // Not found
    ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

// document.onselectstart = noselect;
// document.oncontextmenu = noselect;
//
// function noselect() {
//     return false;
// };