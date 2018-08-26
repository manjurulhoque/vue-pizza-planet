<template>
    <div id="app">
        <div class="container">
            <pp-header></pp-header>
        </div>
        <div class="container">
            <!-- <home></home> -->
            <pp-menu></pp-menu>
        </div>
        <div class="container">
            <pp-footer></pp-footer>
        </div>
    </div>
</template>

<script>
import Home from './components/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
export default {
    name: 'app',
    components: {
        ppHeader: Header,
        Home,
        ppFooter: Footer,
        ppMenu: Menu
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
