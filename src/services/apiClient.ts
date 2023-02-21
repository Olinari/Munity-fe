import axios from 'axios';

export const baseUrl = (import.meta as any).env.VITE_BASE_URL;
export const client = axios;
