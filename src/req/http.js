import axios from 'axios'
import qs from 'qs'

// 环境的切换
if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = '/';
}
else if (process.env.NODE_ENV == 'debug') {    
    axios.defaults.baseURL = '/'
} 
else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = 'https://www.production.com';
}

// timeout
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// interceptors
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}


export function post(url, data) {
    // return new Promise((resolve, reject) => {
    //     axios.post(url, qs.stringify(data))
    //     .then(res => {
    //         console.log(res.data);
    //         resolve(res.data)
    //         return res;
    //     }).catch(err => {
    //         console.log(err);
    //         resolve(err)
    //     })
    // })

    return new Promise((resolve,reject) => {
        axios.post(url,data)
             .then(response => {
                console.log(response.data);
               resolve(response.data);
             },err => {
               reject(err)
             })
      })
}



export default post;
