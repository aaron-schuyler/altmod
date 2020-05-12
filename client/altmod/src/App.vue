<template>
    <div id="app">
        <div id="nav">
            <span id="site-title">altmod.net</span><br>
            <router-link to="/">Home</router-link> |
            <router-link to="/blog">Blog</router-link>
        </div>
        <router-view />
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap');

    body {
        background: #000;
    }

    #app {
        font-family: Merriweather, serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #fff;
        width: 600px;
        margin: auto;
    }

    #site-title {
        font-weight: bold;
        font-size: 40px;
    }

    #nav {
        font-weight: bold;
        border-left: 2px solid #fff;
        padding: 20px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

</style>
