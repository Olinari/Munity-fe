import { baseUrl, client } from '@/services/apiClient';
import { toast } from 'react-toastify';

export const registerUser = async (data: { username: string; password: string }) => {
  try {
    const response = await client.post(`${baseUrl}/register`, { user: data });
    toast.success('Welcome! Please login');
    return { ...response.data, ok: true };
  } catch ({
    response: {
      data: { error },
    },
  }) {
    toast.error(error);
  }
};

export const loginUser = async (data: { username: string; password: string }) => {
  console.log(data);
  try {
    const {
      data: { token },
    } = await client.post(`${baseUrl}/login`, { user: data });

    if (token) {
      localStorage.setItem('login-token', token);
      toast.success('Welcome back!');
      return { ok: true };
    }
  } catch (error) {
    console.error(error);
  }
};

export const restoreLogin = async () => {
  const token = localStorage.getItem('login-token');
  const config = {
    headers: { 'x-access-token': token },
  };
  const {
    data: { isLoggedIn },
  } = await client.get(`${baseUrl}/restore-login`, config);
  return isLoggedIn;
};

export const logout = () => {
  localStorage.removeItem('login-token');
};
