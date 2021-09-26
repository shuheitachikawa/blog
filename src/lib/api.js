import axios from "axios";

export const axiosInstance = axios.create({
  method: "get",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": process.env.micro_cms_x_api_key,
  },
});
