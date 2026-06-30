import { create } from "axios";

const api = create({
  baseURL: import.meta.env.VITE_FIREBASE_URL,
});

export default api;
