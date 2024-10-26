import axios from "axios";

const API_URL = "https://api.cybermines.com"; // Replace with your actual API URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  signIn: async (email: string, password: string) => {
    const response = await api.post("/auth/signin", { email, password });
    return response.data;
  },
  signUp: async (email: string, password: string) => {
    const response = await api.post("/auth/signup", { email, password });
    return response.data;
  },
  getUser: async () => {
    const response = await api.get("/auth/user");
    return response.data;
  },
};

export const game = {
  updateStats: async (betAmount: number, winAmount: number) => {
    const response = await api.post("/game/stats", { betAmount, winAmount });
    return response.data;
  },
  getStats: async () => {
    const response = await api.get("/game/stats");
    return response.data;
  },
};
