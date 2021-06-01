import axios from 'axios';

/*
Exposing your API key like this is not recommended. Best
practice for this project is to store your API key in an environment
variable.
*/
const KEY = "AIzaSyCtOTJuVGOamsl-Lpt9mCeUIvuwUmzze4M"

const request = axios.create({ //Nice work formatting your Axios request
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10, // Nice use of this feature to limit fetched results
        key:  KEY,
    },

    headers: {}

})


export default request;
