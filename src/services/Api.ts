import axios from 'axios';

const Api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL ?? '',
});

Api.interceptors.request.use(config => {
    const newConfig = config;

    newConfig.params = {
        ...config.params,
        token: process.env.REACT_APP_TOKEN ?? '',
    };
    return newConfig;
});

export default Api;
