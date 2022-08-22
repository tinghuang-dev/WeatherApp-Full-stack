import { useEffect } from "react";
import { getGroupWeathers } from "../../api/getGroupWeathers";

export function getCurrentDate(separator = "") {
  let time = new Date().toLocaleString();
  return `${time}`;
}

const LocalTime = () => {
  useEffect(() => {
    getGroupWeathers("1668341").then(({ data }) => {
      const sunrise = new Date((data.sys.sunrise + data.timezone) * 1000);
      console.log(sunrise);
      return sunrise;
    });
  }, []);
  return <></>;
};

export default LocalTime;
