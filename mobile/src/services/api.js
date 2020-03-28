import axios from 'axios';

const api = axios.create({
    //change to your ip address
    baseURL: 'http://192.168.15.6:3333'
});

export default api;

