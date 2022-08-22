import axios from "axios";

const OpenWeatherMapAxios = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

export default OpenWeatherMapAxios;
