const state = {
    orders: []
}

const mutations = {
    addOrder: (state, orders) => state.orders.push(orders)
}

const getters = {
    getOrders: state => state.orders,
    numberOfOrders: state => state.orders.length
}

const actions = {
    
}

export default {
    state,
    mutations,
    getters,
    actions
}