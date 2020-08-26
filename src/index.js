import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'
// global config
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json'; 
// Content-Type for  post request will be application/json
// although application/json is default

// affect all requests sent from the app
axios.interceptors.request.use(request => {
    console.log(request)
    // here we can edit the requestConfig

    return request // if not returned it will block the request
}, error => {
    console.log(error)
    // error on sending request will be logged to console
    return Promise.reject(error);
    // so that ui can implement its own unique functionality by catching error locally
})

axios.interceptors.response.use(response => {
    console.log(response)
    return response
}, error => {
    console.log(error)
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
