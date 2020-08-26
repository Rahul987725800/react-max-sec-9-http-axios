import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
// this will create instance of axios

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'
instance.interceptors.response.use(response => {
    console.log(response)
    return response
}, error => {
    console.log(error)
    return Promise.reject(error);
})
export default instance;