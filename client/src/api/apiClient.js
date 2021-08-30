import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000/api",
  // always send credentials for every http request in form of cookie containing jwt
  withCredentials: true
});
