import axios from 'axios'
import Element from 'element-ui'
import router from '../router'
import store from '../store'

axios.defaults.baseURL = "http://localhost:9999";//设置路由访问

axios.defaults.timeout=30000;//设置超时时间

//前置拦截
axios.interceptors.request.use(config => {
    // if(localStorage.getItem("token")){
        config.headers.token = store.getters.getToken//localStorage.getItem("token");
        config.headers.userId = store.getters.getUserId;
        console.log("axios.interceptors.request:"+config);
    // }
    return config;
})

axios.interceptors.response.use(response => {
        let res = response.data;
        console.log("===================")
        console.log(res)
        console.log("===================")
        if (res.code === 0) {
            return response;
        } else {
            Element.Message.error(response.data.msg, {duration: 3 * 1000});
            return Promise.reject(response.data.msg)
        }
    }, error => {
        console.info(error)
        if (error.response.data) {
            error.message = error.response.data.msg
        }
        if (error.response.status === 401) {
            store.commit('REMOVE_INFO')
            router.push('/login')
        }
        Element.Message.error(error.message, {duration: 3 * 1000});
        return Promise.reject(error)
    }
)