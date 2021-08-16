import axios from "axios";
import { apiConfig } from "../config";

const instance = axios.create({
  baseURL: apiConfig.baseUrl
});

export default instance;