import axios from 'axios';

const api = axios.create({
    baseUrl:'https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/api'
})

export default api;