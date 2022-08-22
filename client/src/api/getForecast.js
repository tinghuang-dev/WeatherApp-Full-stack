import OpenWeatherMapAxios from "../libs/OpenWeatherMap";

export const getForecast = async (id) => {
  const data = await OpenWeatherMapAxios.post("/forecast", {
    id,
  });

  return data;
};
