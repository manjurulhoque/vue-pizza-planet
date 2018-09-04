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
        orders: [],
        currentUser: null
    },
    getters: {
        getMenuItems: state => state.menuItems,
        numberOfOrders: state => state.orders.length,
        getCurrentUser: state => state.currentUser
    },
    mutations: {
        addOrder: (state, orders) => state.orders.push(orders),
        userStatus: (state, user) => {
            if(user) {
                state.currentUser = user;
            }else{
                state.currentUser = null
            }
        }
    },
    actions: {
        setUser(context, user) {
            context.commit('userStatus', user)
        }
    }
})