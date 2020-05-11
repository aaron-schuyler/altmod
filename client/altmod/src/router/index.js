import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Blog from '../components/blog.vue'

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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
