import axios from 'axios';
import {Config} from '../config';

const instance = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});

export const handleError = (message: string, data: any, status: number) => {
  return Promise.reject({message, data, status});
};

instance.interceptors.response.use(
  response => response,
  ({message, response: {data, status}}) => {
    return handleError(message, data, status);
  },
);

export default instance;
