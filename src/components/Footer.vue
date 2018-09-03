<template>
    <footer class="row">
        <nav class="navbar navbar-toggleable-md navbar-light">
        <ul class="navbar-nav">
            <router-link :to="{ name: 'home' }" tag="li"><a class="nav-link">home</a></router-link>
            <router-link :to="{ name: 'about' }" tag="li"><a class="nav-link">about</a></router-link>
            <router-link :to="{ name: 'admin' }" tag="li"><a class="nav-link">admin</a></router-link>
        </ul>
        </nav>
    </footer>
</template>