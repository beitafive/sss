
export default {
    login: '/pri/userlogin.action',
    get_user_info: '/pri/getuserinfo.action',
    index: {
        base_info: '/pri/index/corrperstat.action'
    },
    rule: {
        list: '/pri/law/list.action',
        detail: '/pri/law/view.action'
    },
    cmd: {
        list: '/pri/lcorder/notlist.action',
        upload: '/pri/lcorder/report.action',
        all: '/pri/lcorder/stalist.action'
    },
    location: {
        list: '/pri/position/reportlist.action',
        upload: '/pri/position/reportadd.action'
    },
    feedback: '/pri/problem/add.action',
    diary: {
        list: '/pri/diary/list.action',
        add: '/pri/diary/add.action',
        detail: '/pri/diary/view.action',
        day_detail: '/pri/diary/calendar/list.action',
        month_detail: '/pri/diary/statistics.action',
        mood: '/pri/diarymood/list.action'
    }
}
