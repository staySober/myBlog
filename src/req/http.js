import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://localhost:83/api';
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
    return axios.post(url, qs.stringify(data), {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    ).then(res => {
        console.log(res);
        //callback(that, res);
    }).catch(err => {
        console.log(err);
    })
}

export default post;
