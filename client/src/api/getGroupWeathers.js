import OpenWeatherMapAxios from "../libs/OpenWeatherMap";

export const getGroupWeathers = async (id) => {
  const data = await OpenWeatherMapAxios.post("/group", {
    id,
  });

  return data;
};
