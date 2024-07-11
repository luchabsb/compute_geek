import axios from 'axios';
import { baseURL } from '../config';
const axiosInstance = axios.create({
  baseURL: `${baseURL.baseURL.url}`, 
  timeout: 10000
});

axiosInstance.interceptors.response.use(
  (response) => response
);

export default axiosInstance;
