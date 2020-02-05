import Vue from 'vue'
import App from './App.vue'
import './custom.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
