import axios from "axios";

const api = axios.create({
    baseURL: 'https://backend-circulando.onrender.com/api'
})

export default api;