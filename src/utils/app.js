
// 调用app方法

export default {
    // 人脸登陆
    face_login: () => {
        ZLJNativeApi.facelogin()
    },
    // 获取经纬度
    get_location (cb) {
       ZLJNativeApi.getlocation({callback: cb})
    },
    // 跳转
    open_new_url (url) {
        ZLJNativeApi.push({urlStr: 'www.baidu.com' + url})
    },
    // 传给app uuid
    send_uuid () {
        ZLJNativeApi.sendloginInfo()
    }
}
