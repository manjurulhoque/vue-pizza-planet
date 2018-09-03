<template>
    <div id="app">
        <div class="container">
            <pp-header></pp-header>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <router-view name="delivery"></router-view>
                </div>
                <div class="col-sm-12 col-md-6">
                    <router-view name="history"></router-view>
                </div>
            </div>
        </div>
        <div class="container">
            <pp-footer></pp-footer>
        </div>
    </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
export default {
    name: 'app',
    components: {
        ppHeader: Header,
        ppFooter: Footer,
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
