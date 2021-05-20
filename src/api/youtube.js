import axios from 'axios';

const request = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        key: REACT_APP_API_KEY,
    },
})

export default request;
