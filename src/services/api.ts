import axios, {AxiosResponse} from 'axios';
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
    return handleError({message, data, status});
  },
);

const handleError = (args: {message: string; data?: any; status?: number}) => {
  return Promise.reject(args);
};

export const Auth = {
  signUp: async (name: string, email: string, password: string) => {
    const response = await httpClient.post('/auth/sign-up', {
      name,
      email,
      password,
    });

    if (!response.data?.token) {
      return handleError({message: 'User is already exist.'});
    }

    return response.data;
  },
  signIn: async (email: string, password: string) => {
    const response: AxiosResponse = await httpClient.post('/auth/sign-in', {
      email,
      password,
    });

    if (!response.data?.token) {
      return handleError({message: 'Incorrect email or password.'});
    }

    return response.data;
  },
};
