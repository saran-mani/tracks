import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://3cc1-2409-40f4-37-359-f0be-cb96-48ac-ffc1.ngrok-free.app",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
