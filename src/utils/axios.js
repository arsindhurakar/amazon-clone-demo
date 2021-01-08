import axios from 'axios';

const axiosInstance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'http://localhost:5001/clone-a0f8e/us-central1/api'
})

export default axiosInstance;