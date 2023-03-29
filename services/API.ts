import axios from 'axios';

const API = axios.create({
    baseURL: process.env.API_BASE,
    headers: {
        'Content-Type': 'application/json',
    },
});

API.interceptors.request.use((config) => {
    const token = localStorage.token || sessionStorage.token;
    if (token) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${localStorage.token || sessionStorage.token}`;
        // config.headers.common.Authorization = `Bearer ${localStorage.token || sessionStorage.token}`;
    }

    return config;
});

export default API;