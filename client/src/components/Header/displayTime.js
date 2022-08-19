import { useEffect } from "react";
import { getWeathers } from "../../api/Weathers";

export function getCurrentDate(separator = "") {
  let time = new Date().toLocaleString();
  return `${time}`;
}

const LocalTime = () => {
  useEffect(() => {
    getWeathers("1668341").then(({ data }) => {
      const sunrise = new Date((data.sys.sunrise + data.timezone) * 1000);
      console.log(sunrise);
      return sunrise;
    });
  }, []);
  return <></>;
};

export default LocalTime;
