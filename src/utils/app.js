
// 调用app方法

export default {
    // 人脸登陆
    face_login: (cb) => {
        ZLJNativeApi.facelogin({callback: cb})
    },
    // 获取经纬度
    get_location (cb) {
       ZLJNativeApi.getlocation({callback: cb})
    },
    // 跳转
    open_new_url (url) {
        ZLJNativeApi.push({urlStr: 'https://beitafive.github.io/sss/#' + url})
    },
    // 传给app uuid
    send_uuid (uuid) {
        ZLJNativeApi.sendloginInfo({uuid: uuid})
    }
}
