import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import { store } from './store/store';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        // return { x: 0, y: 0 }
        return { selector: '.btn' }
    }
});

// router.beforeEach((to, from, next) => {
//     console.log(to);
//     next();
// })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
