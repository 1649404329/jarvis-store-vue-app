import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GoodsHome from '../views/goods/GoodsHome.vue'
import AccountHome from '../views/account/AccountHome.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/login/Register.vue'
import Help from '../views/login/Help.vue'
import Test from '../views/Test.vue'
import MessageCenter from '../views/MessageCenter.vue'
import BlogHome from '../views/blogs/BlogHome.vue'
import BlogUser from '../views/blogs/BlogUser.vue'
import BlogDetail from '../views/blogs/BlogDetail.vue'
import BlogAdd from '../views/blogs/BlogAdd.vue'
import BlogEdit from '../views/blogs/BlogEdit.vue'
import BlogUserFollowers from '../views/blogs/BlogUserFollowers.vue'
import BlogUserFans from '../views/blogs/BlogUserFans.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect:{name:"BlogDetail"}
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

    //消息中心
  {
    path: '/messageCenter',
    name: 'MessageCenter',
    component: MessageCenter
  },
    // 账号管理
  {
    path: '/accountHome',
    name: 'AccountHome',
    component: AccountHome
  },

    // 商品中心
  {
    path:'/goodsHome',
    name:'GoodsHome',
    component:GoodsHome
  },

    // 博客博文
  {
    path: '/blogHome',
    name: 'BlogHome',
    component: BlogHome
  },
    {
        path:'/blogUser',
        name:'BlogUser',
        component:BlogUser
    },
  {
    path: '/blog/add',
    name: 'BlogAdd',
    component: BlogAdd,
    meta:{
      requireAuth:true
    }
  },
  //博客详情
  {
    path: '/blogs/blog/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/blogs/blog/:blogId/edit',
    name: 'BlogEdit',
    component: BlogEdit,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/help',
    name: '/Help',
    component: Help
  },
  {
    path: '/test',
    name: '/Test',
    component: Test
  },
  {
    path: '/blogUserFollowers',
    name: 'BlogUserFollowers',
    component: BlogUserFollowers
  },
  {
    path: '/blogUserFans',
    name: 'BlogUserFans',
    component: BlogUserFans
  }
]

const router = new VueRouter({
  mode: 'history', // 去掉访问路径后面的#
  base: process.env.BASE_URL,
  routes
})

export default router
