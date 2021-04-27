import axios, {AxiosResponse} from 'axios';
import {Config} from '../config';
import {storage} from './storage';

const httpClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});

httpClient.interceptors.request.use(
  async config => {
    const token = await storage.getToken();
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

httpClient.interceptors.response.use(
  response => response,
  ({message, response: {data, status}}) => {
    return handleError({message, data, status});
  },
);

const handleError = (args: {message: string; data?: any; status?: number}) => {
  return Promise.reject(args);
};

const auth = {
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

const columns = {
  getColumns: async () => {
    const response: AxiosResponse = await httpClient.get('/columns');

    return response.data;
  },
  renameColumn: async (columnId: number, title: string) => {
    const response: AxiosResponse = await httpClient.put(
      `/columns/${columnId}`,
      {
        title,
      },
    );

    return response.data;
  },
  addColumn: async () => {
    const response: AxiosResponse = await httpClient.post('/columns', {
      title: '',
    });

    return response.data;
  },
};

const prayers = {
  getPrayers: async () => {
    const response: AxiosResponse = await httpClient.get('/prayers');

    return response.data;
  },

  createPrayer: async (title: string, column: string) => {
    const response: AxiosResponse = await httpClient.post('/prayers', {
      title,
      column: +column,
      description: '',
      checked: false,
    });

    return response.data;
  },

  getPrayerById: async (prayerId: number) => {
    const response: AxiosResponse = await httpClient.get(
      `/prayers/${prayerId}`,
    );

    return response.data;
  },

  updatePrayerById: async (
    prayerId: number,
    title: string,
    checked: string,
  ) => {
    const response: AxiosResponse = await httpClient.put(
      `/prayers/${prayerId}`,
      {
        title,
        checked,
        description: '',
      },
    );

    return response.data;
  },

  deletePrayerById: async (prayerId: number) => {
    const response: AxiosResponse = await httpClient.delete(
      `/prayers/${prayerId}`,
    );

    return response.data;
  },
};

const comments = {
  getComments: async () => {
    const response: AxiosResponse = await httpClient.get('/comments');

    return response.data;
  },
  addComment: async (text: string, prayerId: string) => {
    const response: AxiosResponse = await httpClient.post(
      `​/prayers​/${prayerId}​/comments`,
      {
        body: text,
      },
    );

    return response.data;
  },
  editComment: async (text: string, commentId: string) => {
    const response: AxiosResponse = await httpClient.put(
      `/comments/${commentId}`,
      {
        body: text,
      },
    );

    return response.data;
  },
  deleteComment: async (commentId: string) => {
    const response: AxiosResponse = await httpClient.delete(
      `/comments/${commentId}`,
    );

    return response.data;
  },
};

export const Api = {
  auth,
  columns,
  prayers,
  comments,
};
