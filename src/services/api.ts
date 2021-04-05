import axios from 'axios';
import {Config} from '../config';

const httpClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});

httpClient.interceptors.response.use(
  response => response,
  ({message, response: {data, status}}) => {
    return handleError(message, data, status);
  },
);

const handleError = (message: string, data: any, status: number) => {
  return Promise.reject({message, data, status});
};

export const Auth = {
  signUp: async (name: string, email: string, password: string) => {
    const response = await httpClient.post('/auth/sign-up', {
      name,
      email,
      password,
    });

    //TODO: error handling

    return response.data;
  },
};
