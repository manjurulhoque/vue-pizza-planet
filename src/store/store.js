import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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
        orders: []
    },
    getters: {
        getMenuItems: state => state.menuItems,
        numberOfOrders: state => state.orders.length
    }
})