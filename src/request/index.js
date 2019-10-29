import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'

const http = axios.create({
    responseType:'json'
})

http.interceptors.request.use((config) => {
    config.url = 'http://118.178.118.28:7080/JudicialZjjzFx' + config.url
    return config
})

http.interceptors.response.use(function(data){
    if (data.data.state === '-1' && !data.config.url.includes('getuserinfo')) {
        Toast(data.data.message)
    }
    return data.data;   //只有return data后才能完成响应
})


export default {
    get: (url, data) => {
        return http.get(url, {
            params: data
        })
    },
    post: (url, data) => {
        return http.post(url, {
            data: qs.stringify(data)
        })
    }
}
