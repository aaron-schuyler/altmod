<template>
    <div class="blog">
        {{posts}}
    </div>
</template>

<script>
    import Api from '../api.js'
    export default {
        name: 'Blog',
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            this.fetchPosts()
        },
        methods: {
            async fetchPosts() {
                const res = await Api.fetchPosts()
                this.posts = res
            }
        }
    }

</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

</style>
