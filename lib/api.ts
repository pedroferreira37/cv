import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { Education, Experience, Resume } from "./reducer";

export const API = axios.create({
  baseURL: "http://localhost:3000/api",
});
