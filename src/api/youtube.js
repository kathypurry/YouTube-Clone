import axios from 'axios';

const YTKEY = 'AIzaSyCe-AABqG4PxfGpdJ8RDjV4XS0NuXg398I';

export default axios.create({
    baseUrl: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: YTKEY

    }
})
