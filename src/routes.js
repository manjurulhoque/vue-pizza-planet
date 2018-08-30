import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
export const routes  = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/menu',
        component: Menu,
        name: 'menu'
    },
    { path: '*', redirect: '/' }
]