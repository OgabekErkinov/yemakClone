import Axios , { AxiosInstance } from "axios";

const baseURL : string = 'https://api.yemak-test.uz/'
const token : string = ''



export const privateApi : AxiosInstance = Axios.create({
    baseURL : baseURL,
    timeout : 5000,
    headers : {
        'Content-Type' : "application/json",
        Authorization : `Bearer ${token}`
    }
})

privateApi.interceptors.request.use(function(config){
    return config
}, function(error){
    return Promise.reject(error)
})

privateApi.interceptors.response.use(function(config){
    return config
}, function(error){
    return Promise.reject(error)
})