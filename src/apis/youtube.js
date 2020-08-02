import axios from "axios";

const KEY = 'AIzaSyBs8EeEm2T57v73gLIjLTO5PYGxMrFEeyk';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});