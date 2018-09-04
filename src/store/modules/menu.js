const state = {
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
    ]
}

const getters = {
    getMenuItems: state => state.menuItems
}

const mutations = {

}

const actions = {
    
}

export default {
    state,
    mutations,
    getters,
    actions
}