import Vue from 'vue'
import vueRouter from 'vue-router'
import data from '../utils/data.html'
import archive from '../components/archive'
import post from '../components/post.vue'
import nprogress from 'nprogress'


Vue.use(vueRouter)

const routes = [
    {
        path: '/',
        component: archive,
        props: {
            data
        }
    },
    {
        path: '/posts/:post',
        component: post,
        props: (route) => {
            let title = route.params.post
            return {postData: data.markdown[title]}
        }
    }
]

const router = new vueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    nprogress.start()
    next()
})

router.afterEach((to, form) => {
    nprogress.done()
})

export default router