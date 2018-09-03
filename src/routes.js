import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import History from './components/History.vue';
import Delivery from './components/Delivery.vue';
import Admin from './components/admin/Admin.vue';

export const routes  = [
    {
        path: '/',
        name: 'home',
        components: {
            default: Home,
            "delivery": Delivery,
            "history": History
        }
    },
    {
        path: '/menu',
        component: Menu,
        name: 'menu'
    },
    {
        path: '/admin',
        component: Admin,
        name: 'admin',
        beforeEnter: (to, from, next) => {
            alert('This is restricted area. Please login before entering');
            next();
        }
    },
    {
        path: '/about',
        component: About,
        name: 'about',
        children: [
            { path: '/contact', name: 'contact', component: Contact },
            { path: '/history', name: 'history', component: History },
            { path: '/delivery', name: 'delivery', component: Delivery },
        ]
    },
    { path: '*', redirect: '/' }
]
