import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Collect from '../views/Collect.vue'
import Care from '../views/Care.vue'
import My from '../views/My.vue'
import Detail from '../views/Detail.vue'
import Selfpage from '../views/Selfpage.vue'
import Editprofile from '../views/Editprofile.vue'
import Setup from '../views/Setup.vue'
import Search from '../views/Search.vue'
import Video from "../views/video.vue"
import All from "../views/all.vue"
Vue.use(Router);

const routes = [{
        path: '/home',
        component: Home,
        name: 'home',
        children:[
            {
                path:"/home/all",
                name:"All",
                component:All
            }
        ]
    },
    {
        path: '/collect/:kind',
        component: Collect,
        name: 'collect'
    },
    {
        path:'/video',
        component:Video,
        name:'video'
    },
    {
        path: '/care',
        component: Care,
        name: 'care'
    },
    {
        path: '/my',
        component: My,
        name: 'my'
    },
    {
        path: '/newsDetail/:id',
        component: Detail,
        name: 'newsdetail'
    },
    {
        path: '/selfpage',
        component: Selfpage,
        name: 'selfpage'
    },
    {
        path: '/editprofile',
        component: Editprofile,
        name: 'editprofile'
    },
    {
        path: '/setup',
        component: Setup,
        name: 'setup'
    },
    {
        path: '/search',
        component: Search,
        name: 'search'
    },
    {
        path: '*',
        redirect: '/home/all'
    },
    {
        path: '',
        redirect: '/home/all'
    }
];
const scrollBehavior = (to, from, savedPosition) => {
    if(savedPosition){
        return savedPosition
    }else{
        return { x: 0, y: 0 }
    }
}

const router = new Router({
    mode: 'history',
    routes,
    scrollBehavior
})

export default router
