import api from '../api';

export const signUp = async (name: string, email: string, password: string) => {
  const response = await api.post('/auth/sign-up', {
    name,
    email,
    password,
  });

  return response;
};
