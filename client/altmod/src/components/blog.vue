<template>
    <div class="blog">
        <div v-for="post in posts" v-bind:key="post.id">
            <article>
                <h2>{{post.title}}</h2>
                <div class="author">written by {{post.author}}</div>
                <div class="date-time">{{formatDate(post.date)}}</div><br>
                <div class="tags"><span v-for="tag in post.tags" :key="tag">{{tag}} </span></div>
                <hr>
                <p v-html="post.postBody"></p>
                <div class="symbols">&#9913; &#9913; &#9913;</div>
            </article>

        </div>
    </div>
</template>

<script>
    import Api from '../api.js'
    export default {
        name: 'Blog',
        data() {
            return {
                posts: [],

            }
        },
        mounted() {
            this.fetchPosts()
        },
        methods: {
            async fetchPosts() {
                const res = await Api.fetchPosts()
                this.posts = res.data.posts
            },
            formatDate: function(date) {
                const dateTime = new Date(date)
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
                var day = dateTime.getDay() + 1
                var month = months[dateTime.getMonth()]
                var year = dateTime.getYear() + 1900
                return month + " " + day + ", " + year
            }
        }
    }

</script>

<style scoped>
    .symbols {
        text-align: center;
        width: 100%;
        margin: auto;
        font-size: 30px;
        color: yellow;
    }

</style>
