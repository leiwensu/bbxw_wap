import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search'
import Event from '@/components/Event'
import Article from '@/components/Article'
import MapVue from '@/components/MapVue'
import TagVue from '@/components/Tag'
import Details from '@/components/Details'
Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes: [
        {
            path: '/',
            redirect: '/home'
        },{
            path:'/home/',
            name:'Home',
            component: Home
        },{
            path:'/search/',
            name:'Search',
            component:Search
        },{
            path:'/event/',
            name:'Event',
            component:Event
        },{
            path:'/article/',
            name:"Article",
            component:Article
        },{
            path:'/map/',
            name:'MapVue',
            component:MapVue
        },{
            path:'/tag/',
            name:'TagVue',
            component:TagVue
        },{
            path:'/details/:id',
            name:'Details',
            component:Details
        }
    ]
})
