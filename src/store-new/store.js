import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

export const store = new Vuex.Store({
    state: {
        menuItems: [
            {
                'name': 'Pepperoni',
                'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
                'options': [{
                    'size': 9,
                    'price': 7.95
                }, {
                    'size': 12,
                    'price': 12.95
                }]
            },
            {
                'name': 'Maghre',
                'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
                'options': [{
                    'size': 5,
                    'price': 7.95
                }, {
                    'size': 2,
                    'price': 12.95
                }]
            }
        ],
        orders: [],
        currentUser: null
    },
    getters,
    mutations,
    actions
})