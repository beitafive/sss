import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './request'
import api from './request/api'
import app from './utils/app'
import Vant from 'vant'
import 'vant/lib/index.css'
import { formatTimeObj, getOverTime } from "./utils/time"
import { getQueryString } from "./utils/common";

Vue.use(Vant)

Vue.prototype.$app = app
Vue.prototype.$api = api
Vue.prototype.$http = http
Vue.prototype.$push = (url) => {
  // if (ZLJNativeApi) {
    app.open_new_url(url)
  // } else {
  //   router.push(url)
  // }
}

Vue.config.productionTip = false


http.get(api.get_user_info, {
    useruuid: getQueryString('uuid') || localStorage.uuid
}).then(res => {
    if (res.state === '1') {
        let times = formatTimeObj(res.data[0].sqjzjsrq)
        res.data[0].overDate = times.year + '年' + times.month + '月' + times.day + '日'
        res.data[0].overTime = getOverTime(res.data[0].sqjzjsrq)
        store.dispatch('setUserInfo', res.data[0])
        localStorage.uuid = res.data[0].userUuid
    }
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


