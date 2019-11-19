import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
    render: h => h(App),
    router,
    template: '<App/>'
}).$mount('#app');

