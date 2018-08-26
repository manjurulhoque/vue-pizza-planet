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
                <tbody v-for="item in MenuItems" v-bind:key="item">
                    <tr>
                        <td><strong>{{ item.name }}</strong></td>
                    </tr>
                    <tr v-for="option in item.options" :key="option">
                        <td>{{ option.size }}</td>
                        <td>{{ option.price }}</td>
                        <td>
                            <button class="btn btn-sm btn-outline-success" type="button">+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
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
    }
}
</script>

