import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

const API: AxiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(
  async (axiosConfig) => {
    return axiosConfig;
  },
  (error: AxiosError) => Promise.reject(error)
);

API.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export { API };
