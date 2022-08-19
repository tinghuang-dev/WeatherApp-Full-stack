const { default: axios } = require("axios");
const openweathermapConfing = require("../config/openweathermapAPI");

exports.getWeather = (id) => {
  return axios.post(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${openweathermapConfing.apikey}`
  );
};
