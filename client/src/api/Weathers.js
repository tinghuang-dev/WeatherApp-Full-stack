import axios from "axios";

export const getWeathers = async (id) => {
  const data = await axios.post("http://localhost:8000/api/v1/weathers", {
    id,
  });

  return data;
};
