import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // NestJS 백엔드 URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
