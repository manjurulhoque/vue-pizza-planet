<template>
    <div class="row">
        <div class="col-sm-12 col-md-6">
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Add to basket</th>
                    </tr>
                </thead>
                <tbody v-for="(item, index) in MenuItems" :key="index">
                    <tr>
                        <td><strong>{{ item.name }}</strong></td>
                    </tr>
                    <tr v-for="(option, i) in item.options" :key="i">
                        <td>{{ option.size }}</td>
                        <td>{{ option.price }}</td>
                        <td>
                            <button class="btn btn-sm btn-outline-success" type="button" @click="addToBasket(item, option)">+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-sm-12 col-md-6">
            <div v-if="basket.length > 0">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>Quantity</th>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody v-for="(item, index) in basket" :key="index">
                        <tr>
                        <td><button class="btn btn-sm" 
                                    type="button"
                                    @click="decreaseQuantity(item)">-</button>
                            <span>{{ item.quantity }}</span>
                            <button class="btn btn-sm" 
                                    type="button"
                                    @click="increaseQuantity(item)">+</button>
                        </td>
                        <td>{{ item.name}} {{ item.size }}</td>
                        <td>{{ item.price * item.quantity | currency }}</td>
                        </tr>
                    </tbody>
                </table>
                <p>Order total: {{ total | currency }}</p>
                <button class="btn btn-success btn-block" @click="addNewOrder">Place Order</button>
            </div>
            <div v-else>
                Your basket is empty!
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            basket: [],
            MenuItems: [
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
                }
            ]
        }
    },
    computed: {
        total() {
            var totalCost = 0;
            for( var items in this.basket ) {
            var individualItem = this.basket[items];
            totalCost += individualItem.quantity * individualItem.price;
            }
            return totalCost
        }
    },
    methods: {
        addToBasket(item, option) {
            this.basket.push({
                name: item.name,
                price: option.price,
                size: option.size,
                quantity: 1
            });
        },
        addNewOrder() {

        },
        removeFromBasket(item){
            this.basket.splice(this.basket.indexOf(item), 1);
        },
        decreaseQuantity(item) {
            item.quantity--;
            if(item.quantity === 0){
                this.removeFromBasket(item);
            }
        },
        increaseQuantity(item) {
            item.quantity++;
        }
    }
}
</script>

