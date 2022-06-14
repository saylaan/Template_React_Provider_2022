import axios from "axios";
import authHeader from "./Auth/auth-header";

export default () => {
  return axios.create({
    baseURL: "http://localhost:8080/",
    headers: authHeader(),
  });
};
