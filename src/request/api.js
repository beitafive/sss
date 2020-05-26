
export default {
    login: '/pri/userlogin.action',
    check_set: '/pri/equipcheck.action',
    change_pwd: '/pri/userpwd/update.action',
    get_user_info: '/pri/getuserinfo.action',
    team_list: '/pri/prison/grouplist.action',
    learning: '/pri/online/aes.action',
    index: {
        base_info: '/pri/index/corrperstat.action',
        msg_list: '/pri/message/list.action'
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
        mood: '/pri/diarymood/list.action',
        check: '/pri/diary/judge.action'
    }
}
