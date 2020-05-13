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
        color: #ccc;
        font-weight: 400;
    }


    @media only screen and (min-width: 600px) {
        #app {
            width: 600px !important;
            margin: auto !important;
        }
    }

    #site-title {
        font-size: 40px;
    }

    #nav {

        font-weight: bold;
        border-left: 2px solid #ccc;
        padding: 20px;

    }

    #nav a {
        font-family: sans-serif;
        font-weight: bold;
        color: #ccc;
        text-decoration: none !important;
    }

    #nav a.router-link-exact-active {
        color: yellow;
    }

    article {
        margin-bottom: 50px;
    }

    h2 a {
        color: inherit;
        text-decoration: none;
    }

    .tags span {
        color: yellow;
        font-family: sans-serif;
        font-size: 10px;
        margin-right: 10px;
        background: #333;
        padding: 4px 10px;
        border-radius: 10px;
    }

    .author {
        font-size: 10px;
    }

    .date-time {
        font-size: 12px;
        margin-top: 5px;
    }

</style>
