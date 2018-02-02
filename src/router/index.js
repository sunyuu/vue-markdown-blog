import Vue from 'vue'
import vueRouter from 'vue-router'
import data from '../utils/data.html'
import archive from '../components/archive'
const post = resolve => require(['../components/post.vue'], resolve)

console.log(data)

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
            console.log(title)
            return {postData: data.markdown[title]}
        }
    }
]

const router = new vueRouter({
    mode: 'history',
    routes
})

export default router