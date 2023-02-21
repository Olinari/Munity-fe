import { baseUrl, client } from '@/services/apiClient';
import { toast } from 'react-toastify';

export const registerUser = async data => {
  try {
    const response = await client.post(`${baseUrl}/register`, { user: data });

    return response.data;
  } catch ({ response: { data } }) {
    console.log(data);
    toast.error(data?.error);
  }
};
