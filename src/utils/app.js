
// 调用app方法

export default {
    // 人脸登陆
    face_login: () => {
        ZLJNativeApi.facelogin()
    },
    // 获取经纬度
    get_location (cb) {
       ZLJNativeApi.getlocation({callback: cb})
    }
}