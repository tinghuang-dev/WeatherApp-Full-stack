import OpenWeatherMapAxios from "../libs/OpenWeatherMap";

export const getWeathers = async (id) => {
  const data = await OpenWeatherMapAxios.post("/weathers", {
    id,
  });

  return data;
};
