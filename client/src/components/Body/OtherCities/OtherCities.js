import { useState } from "react";
import Section from "../Section";
import CityWeather from "./component/CityWeather";

const OtherCities = () => {
  // eslint-disable-next-line
  const [weathers, setWeathers] = useState([
    {
      id: "2174003",
      name: "Brisbane",
      temperature: "21",
      weather: { icon: "04d", description: "Clouds" },
    },
    {
      id: "2147714",
      name: "Sydney",
      temperature: "21",
      weather: { icon: "04d", description: "Clouds" },
    },
    {
      id: "2158177",
      name: "Melbourne",
      temperature: "21",
      weather: { icon: "04d", description: "Clouds" },
    },
    {
      id: "1668341",
      name: "Teipei",
      temperature: "21",
      weather: { icon: "04d", description: "Clouds" },
    },
  ]);

  // useEffect(() => {
  //   getWeathers("2174003").then(({ data }) => {
  //     setCityName(data.name);
  //     setTemperature(CelsiusConversion(data.main.temp));
  //     setMainWeather(data.weather[0].main);
  //     setHumidity(data.main.humidity);
  //     setWind(data.wind.speed);
  //   });
  // }, []);

  return (
    <Section title="Other Cities">
      {weathers.map(({ id, name, temperature, weather }) => (
        <CityWeather
          id={id}
          name={name}
          temperature={temperature}
          weather={weather}
        />
      ))}
    </Section>
  );
};

export default OtherCities;
