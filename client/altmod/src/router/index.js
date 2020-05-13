import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Blog from '../components/blog.vue'
import Post from '../components/post.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
  },
    {
        path: "/blog",
        name: "Blog",
        component: Blog
    },
    {
        path: "/blog/:slug",
        name: "Post",
        component: Post
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
