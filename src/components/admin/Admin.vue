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
                    <tr>
                        <td>Name</td>
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
                <table class="table table-sm">

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
                            <strong><em>Order Number: 1</em></strong>
                            <button class="btn btn-outline-danger btn-sm">x</button>
                        </div>

                        <tr>
                            <td>name</td>
                            <td>size</td>
                            <td>quantity</td>
                            <td>price</td>
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
export default {
    components: {
        NewPizza,
        Login
    }
}
</script>

