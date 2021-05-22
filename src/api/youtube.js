import axios from 'axios';

const KEY = "AIzaSyCtOTJuVGOamsl-Lpt9mCeUIvuwUmzze4M"

const request = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key:  KEY,
    },

    headers: {}

})

export default request;
