import axios from 'axios';

// url pointing to backend route
const url = 'http://localhost:2000/posts';

export const fetchPosts = () => axios.get(url);