import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue){
       Vue.prototype.$http = axios.create({
            baseURL:'https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/api',
       })

       Vue.prototype.$http.interceptors.request.use(config => {
            return config
        })
    }
})