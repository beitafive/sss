
// 调用app方法
// http://223.4.74.40:7080/#/
//
export default {
    // 人脸登陆
    face_login: () => {
        ZLJNativeApi.facelogin()
    },
    face_location: (cb) => {
        ZLJNativeApi.facelocation({callback: cb})
    },
    // 获取经纬度
    get_location (cb) {
       ZLJNativeApi.getlocation({callback: cb})
    },
    // 跳转
    open_new_url (url) {
        ZLJNativeApi.push({urlStr: 'http://223.4.74.40:7080/#' + url})
    },
    // 返回
    pop () {
        ZLJNativeApi.pop()
    },
    // 跳转
    customPush(url, rightTitle, actionType, actionUrl) {
        ZLJNativeApi.customPush({
            urlStr: url,
            rightTitle,
            actionType,
            actionUrl: 'http://223.4.74.40:7080/#' + actionUrl
        })
    },
    // 跳转
    replace_new_url (url) {
        ZLJNativeApi.pushReplace({urlStr: 'http://223.4.74.40:7080/#' + url})
    },
    // 传给app uuid
    send_uuid (uuid) {
        ZLJNativeApi.sendloginInfo({uuid: uuid})
    },
    // 版本检测
    check_version() {
        ZLJNativeApi.checkupdate()
    },
    // 首页跳转消息通知
    to_msg() {
        ZLJNativeApi.systemnotification()
    },
    // 实时通讯
    to_socket() {
        ZLJNativeApi.im()
    },
    // 获取实时通讯数量
    get_msg_num() {
        return ZLJNativeApi.msgreadnum()
    }
}
