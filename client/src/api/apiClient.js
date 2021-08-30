import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000/api",
  // always send credentials for every http request in form of cookie containing jwt
  withCredentials: true
});

// HTTP interceptor to intercept a response
api.interceptors.response.use(response => {
  return response;
}, error => {
  const { status } = error.response;
  switch (status) {
    case 403:
      localStorage.removeItem("user-storage");
      window.location.replace("/login")
      break;

    default:
      break;
  }
  return Promise.reject(error);
})