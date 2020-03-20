
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
        path: '/user',
        name: 'user',
        component:  () => import(/* webpackChunkName: "login" */ '@/views/user.vue'),
        meta: { title: '用户协议' }
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
    },
    {
        path: '/location/record',
        name: 'locationRecord',
        component:  () => import(/* webpackChunkName: "location" */ '@/views/location/pages/record.vue'),
        meta: { title: '我的记录' }
    },
    {
        path: '/location/detail',
        name: 'locationDetail',
        component:  () => import(/* webpackChunkName: "location" */ '@/views/location/pages/detail.vue'),
        meta: { title: '详情' }
    },
    {
        path: '/ruledetail',
        name: 'ruledetail',
        component:  () => import(/* webpackChunkName: "rule" */ '@/views/rule/pages/detail.vue'),
        meta: { title: '规章制度详情' }
    },
    {
        path: '/feedback',
        name: 'feedback',
        component:  () => import(/* webpackChunkName: "mine" */ '@/views/feedback/index.vue'),
        meta: { title: '问题反馈' }
    },
    {
        path: '/change/password',
        name: 'changePassword',
        component:  () => import(/* webpackChunkName: "mine" */ '@/views/mine/changePwd.vue'),
        meta: { title: '修改密码' }
    },
    {
        path: '/grouplist',
        name: 'groupList',
        component:  () => import(/* webpackChunkName: "mine" */ '@/views/mine/groupList.vue'),
        meta: { title: '矫正小组' }
    },
    {
        path: '/StatisticalCommand',
        name: 'StatisticalCommand',
        component:  () => import(/* webpackChunkName: "rule" */ '@/views/StatisticalCommand/index.vue'),
        meta: { title: '位置上报指令' }
    },
    {
        path: '/StatisticalCommands',
        name: 'StatisticalCommands',
        component:  () => import(/* webpackChunkName: "rule" */ '@/views/StatisticalCommand/pages/detail.vue'),
        meta: { title: '位置上报指令' }
    },
    {
        path: '/noReport',
        name: 'noReport',
        component:  () => import(/* webpackChunkName: "rule" */ '@/views/StatisticalCommand/pages/noReport.vue'),
        meta: { title: '位置上报指令' }
    },
    {
        path: '/diary',
        name: 'diary',
        component: () => import(/* webpackChunkName: "diary" */ '@/views/diary/index.vue'),
        meta: { title: '交心日记' }
    },
    {
        path: '/diary/add',
        name: 'diaryAdd',
        component: () => import(/* webpackChunkName: "diary" */ '@/views/diary/pages/add.vue'),
        meta: { title: '新增' }
    },
    {
        path: '/diary/list',
        name: 'diaryList',
        component: () => import(/* webpackChunkName: "diary" */ '@/views/diary/pages/list.vue'),
        meta: { title: '日记列表' }
    },
    {
        path: '/diary/detail/:id',
        name: 'diary',
        component: () => import(/* webpackChunkName: "diary" */ '@/views/diary/pages/detail.vue'),
        meta: { title: '详情' }
    },

]
