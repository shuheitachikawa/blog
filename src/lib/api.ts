import axios from 'axios';

export const axiosInstance = axios.create({
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371',
  },
});