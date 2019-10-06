
export default [
    {
        path: '/',
        name: 'home',
        component:  () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
        meta: { title: '首页' }
    },
    {
        path: '/login',
        name: 'login',
        component:  () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
        meta: { title: '登录' }
    },
    {
        path: '/forget',
        name: 'forget',
        component:  () => import(/* webpackChunkName: "login" */ '@/views/login/pages/forget.vue'),
        meta: { title: '忘记密码' }
    },
    {
        path: '/rule',
        name: 'rule',
        component:  () => import(/* webpackChunkName: "rule" */ '@/views/rule/index.vue'),
        meta: { title: '规章制度' }
    },
    {
        path: '/mine',
        name: 'mine',
        component:  () => import(/* webpackChunkName: "mine" */ '@/views/mine/index.vue'),
        meta: { title: '个人中心' }
    },
    {
        path: '/location',
        name: 'location',
        component:  () => import(/* webpackChunkName: "location" */ '@/views/location/index.vue'),
        meta: { title: '位置上报' }
    }
	// {
    //     path: '/messageList',
    //     name: 'messageList',
    //     component:  () => import(/* webpackChunkName: "message" */ '@/views/messageList/index.vue'),
    //     meta: { title: '消息通知' }
	// },
	// {
    //     path: '/messageDetails',
    //     name: 'messageDetails',
    //     component:  () => import(/* webpackChunkName: "message" */ '@/views/messageList/pages/messageDetails.vue'),
    //     meta: { title: '消息通知' }
	// }
	,
	{
	    path: '/ruledetail',
	    name: 'ruledetail',
	    component:  () => import(/* webpackChunkName: "rule" */ '@/views/rule/pages/detail.vue'),
	    meta: { title: '规章制度' }
	},
]