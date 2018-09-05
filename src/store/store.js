import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from './modules/menu';
import orders from './modules/orders';
import users from './modules/users';
import { firebaseMutations } from 'vuexfire';


export const store = new Vuex.Store({
    mutations: {...firebaseMutations},
    modules: {
        menu,
        orders,
        users
    }
})