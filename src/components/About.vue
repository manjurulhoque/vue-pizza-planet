<template>
    <div>
        <p>Click on the links below for more info:</p>
        <nav class="navbar navbar-toggleable-md navbar-light">
            <ul class="navbar-nav">
                <router-link :to="{ name: 'history' }" tag="li"><a class="nav-link">our history</a></router-link>
                <router-link :to="{ name: 'contact' }" tag="li"><a class="nav-link">contact us</a></router-link>
                <router-link :to="{ name: 'delivery' }" tag="li"><a class="nav-link">delivery</a></router-link>
            </ul>
        </nav> 
        <router-view></router-view>
    </div>
</template>