import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const list = r => require.ensure([], () => r(require('../page/list/list')), 'list')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const recommend = r => require.ensure([], () => r(require('../page/recommend/recommend')), 'recommend')
const myself = r => require.ensure([], () => r(require('../page/myself/myself')), 'myself')
const recommendChild = r => require.ensure([], () => r(require('../page/recommend/recommendChild')), 'recommendChild')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
        //列表页面
        {
            path: '/list',
            component: list
        },
        //登录页面
        {
            path: '/login',
            component: login
        },
        //推荐进展
        {
            path: '/recommend',
            component: recommend,
            children:[
                {
                    path: '',
                    redirect: '/recommend/1', 
                },
                {
                    path: '/recommend/:id',
                    component: recommendChild, 
                }
            ]
        },
        //我
        {
            path: '/myself',
            component: myself
        },
    ]
}]