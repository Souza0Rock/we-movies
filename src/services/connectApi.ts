import axios from "axios";

export const localInstance = axios.create({
  baseURL: "http://localhost:3000/",
});
