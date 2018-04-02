import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueRouter from 'vue-router'

Vue.use(Vuetify, {
    theme: {
        primary: '#3943B5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
    }
})
Vue.use(VueRouter)

require('vue-apparate');
VueApparate.init(Vue);

function load (component) {
    // '@' is aliased to src/components
    return () => import(`/${component}.vue`)
}

const router = new VueRouter({
    routes: [
        {path: '/main', component: load('pages/Main')},
        {path: '/about', component: load('pages/About')},
        {path: '/concurse', component: load('pages/Concurse')},
        {path: '/structure', component: load('pages/Structure')},
        {path: '/contacts', component: load('pages/Contacts')}

        // Always leave this last one
        // {path: '*', component: load('Error')} // Not found
    ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {
    return false;
};