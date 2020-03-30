
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
    // 跳转
    replace_new_url (url) {
        ZLJNativeApi.pushReplace({urlStr: 'http://223.4.74.40:7080/#' + url})
    },
    // 传给app uuid
    send_uuid (uuid) {
        ZLJNativeApi.sendloginInfo({uuid: uuid})
    }
}
