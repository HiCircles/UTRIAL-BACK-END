import axios from 'axios';

export default axios.create({
    baseURL: process.env.API_URL + ':' + process.env.API_PORT + '',

});