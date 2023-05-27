import { AxiosInstance, InternalAxiosRequestConfig } from "axios";

function setAuthToken(config: InternalAxiosRequestConfig) {
  const token = localStorage.getItem(
    process.env.VUE_APP_LS_TOKEN_KEY as string
  );

  const newConfig = { ...config };
  newConfig.headers.authorization = `Bearer ${token}`;

  return newConfig;
}

export default function interceptors(axios: AxiosInstance) {
  axios.interceptors.request.use(setAuthToken);
}
