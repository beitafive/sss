
export default [
    {
        path: '/',
        name: 'home',
        component:  () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
        meta: { title: '首页', showNav: true }
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
        meta: { title: '规章制度', showNav: true }
    },
    {
        path: '/mine',
        name: 'mine',
        component:  () => import(/* webpackChunkName: "mine" */ '@/views/mine/index.vue'),
        meta: { title: '个人中心', showNav: true }
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
	    meta: { title: '规章制度详情' }
	},
	{
	    path: '/feedback',
	    name: 'feedback',
	    component:  () => import(/* webpackChunkName: "rule" */ '@/views/feedback/index.vue'),
	    meta: { title: '问题反馈' }
	},
	{
	    path: '/StatisticalCommand',
	    name: 'StatisticalCommand',
	    component:  () => import(/* webpackChunkName: "rule" */ '@/views/StatisticalCommand/index.vue'),
	    meta: { title: '位置上报指令' }
	},{
	    path: '/StatisticalCommands',
	    name: 'StatisticalCommands',
	    component:  () => import(/* webpackChunkName: "rule" */ '@/views/StatisticalCommand/pages/detail.vue'),
	    meta: { title: '位置上报指令' }
	},{
	    path: '/noReport',
	    name: 'noReport',
	    component:  () => import(/* webpackChunkName: "rule" */ '@/views/StatisticalCommand/pages/noReport.vue'),
	    meta: { title: '位置上报指令' }
	}
]