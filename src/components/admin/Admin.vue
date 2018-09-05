<template>
    <section>
        <div class="row">
            <div class="col-sm-12 col-md-6">
                <new-pizza></new-pizza>
            </div>
            <div class="col-sm-12 col-md-6">
                <h3>Menu:</h3>
                <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                    <th>Item</th>
                    <th>Remove from menu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in getMenuItems" :key="item['.key']">
                        <td>{{ item.name }}</td>
                        <td>
                            <button class="btn btn-outline-danger btn-sm">x</button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <h3>Current orders: 1</h3>
                <table class="table table-sm" v-for="(orders, index) in getOrders" :key="orders['.key']">

                    <thead class="thead-default">
                        <tr>
                            <th>Item</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>

                        <div class="order-number">
                            <strong><em>Order Number: {{ index+1 }}</em></strong>
                            <button class="btn btn-outline-danger btn-sm">x</button>
                        </div>

                        <tr v-for="order in orders['.value']">
                            <td>{{ order.name }}</td>
                            <td>{{ order.size }}</td>
                            <td>{{ order.quantity }}</td>
                            <td>{{ order.price }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-6 col-sm-12">
                <login></login>
            </div>
        </div>
    </section>
</template>

<script>
import NewPizza from './NewPizza'
import Login from '../Login';
import { mapGetters } from 'vuex';

export default {
    components: {
        NewPizza,
        Login
    },
    computed: {
        // getMenuItems() {
        //     return this.$store.state.menuItems;
        // },
        // getNumberOfOrders() {
        //     return this.$store.getters.numberOfOrders;
        // }
        ...mapGetters([
            'getMenuItems',
            'numberOfOrders',
            'getOrders'
        ])
    },
    beforeRouteLeave: (to, from, next) => {
        if(confirm("Did you log out?") == true){
            next();
        }else{
            next(false);
        }
    }
    // beforeRouteEnter: (to, from, next) => {
    //     next();
    // }
}
</script>

