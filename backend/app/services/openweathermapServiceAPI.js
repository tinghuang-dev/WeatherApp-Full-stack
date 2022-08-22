const { default: axios } = require("axios");
const openweathermapConfing = require("../config/openweathermapAPI");

exports.getWeather = (id) => {
  return axios.post(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${openweathermapConfing.apikey}`
  );
};

exports.getWeathers = (id) => {
  return axios.post(
    `https://api.openweathermap.org/data/2.5/group?id=${id}&appid=${openweathermapConfing.apikey}`
  );
};

exports.getForecast = (id) => {
  return axios.post(
    `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${openweathermapConfing.apikey}`
  );
};
