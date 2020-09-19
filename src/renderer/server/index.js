import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
const service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    crossDomain: true
  });

// 响应拦截器
service.interceptors.response.use(
    response => {
    if (response.status === 200) {            
        return Promise.resolve(response);        
    } else {            
        return Promise.reject(response);        
    } 
},
    error => {

}
);


export default service