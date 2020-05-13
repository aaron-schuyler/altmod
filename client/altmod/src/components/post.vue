<template>
    <div class="blog-post">
        <article>
            <h2>
                {{post.title}}{{post.title}}
            </h2>
            <div class="author">written by {{post.author}}</div>
            <div class="date-time">{{formatDate(post.date)}}</div><br>
            <div class="tags"><span v-for="tag in post.tags" :key="tag">{{tag}} </span></div>
            <hr>
            <p v-html="post.postBody"></p>
            <div class="symbols">* * *</div>
        </article>

    </div>

</template>

<script>
    import Api from '../api.js'
    export default {
        name: 'Blog',
        data() {
            return {
                post: {}

            }
        },
        mounted() {
            this.getPost()
        },
        methods: {
            async getPost() {
                const res = await Api.getPostBySlug({
                    slug: this.$route.params.slug
                })
                this.post = res.data[0]
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
