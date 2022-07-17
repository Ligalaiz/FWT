import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.BASE_PATH_REMOTE,
});

export { axiosInstance };
