import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Answers from '../views/Answers.vue'
import AddQuestion from '../views/AddQuestion.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Search from '../views/Search.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/questions',
        name: 'questions',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Questions.vue')
    },
    {
        path: '/questions/search',
        name: 'search',
        component: Search
    },
    {
        path: '/answers',
        name: 'answers',
        component: Answers
    },
    {
        path: '/questions/add',
        name: 'addQuestion',
        component: AddQuestion
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    {
        path: '/login',
        name: 'signin',
        component: Signin
    },
    {
        path: '/profile/:id',
        name: 'profile',
        component: Profile
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
