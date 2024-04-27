import axios from "axios";
import { BASE_URL } from "../utils/constatns";

export const api = axios.create({
  baseURL: BASE_URL,
});
