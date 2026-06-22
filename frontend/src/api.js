import axios from 'axios';

// In local dev: VITE_API_URL is not set, so baseURL is '' and
// Vite's proxy (vite.config.js) forwards /api/* calls to localhost:5000
// In production (Vercel): VITE_API_URL is set to the Render backend URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
});

export default api;
