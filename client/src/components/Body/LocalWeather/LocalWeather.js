import { useEffect, useState } from "react";
import styled from "styled-components";
import CityName from "./CityName";
import Weather from "./Weather";
import axios from "axios";
import { getWeathers } from "../../../api/Weathers";
import CelsiusConversion from "../../../api/CelsiusConversion";

const Layout = styled.div`
  display: flex;
  background: linear-gradient(
    to bottom,
    #445766 25%,
    #4f7b9e 55%,
    #ffffff 103%
  );
  padding: 50px 96px;
  justify-content: space-between;
`;

const LocalWeather = () => {
  const [cityName, setCityName] = useState("");
  const [temperature, setTemperature] = useState("");
  const [mainWeather, setMainWeather] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");

  useEffect(() => {
    getWeathers("2174003").then(({ data }) => {
      setCityName(data.name);
      setTemperature(CelsiusConversion(data.main.temp));
      setMainWeather(data.weather[0].main);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
    });
  }, []);

  return (
    <Layout>
      <Weather
        temperature={temperature}
        mainWeather={mainWeather}
        humidity={humidity}
        wind={wind}
      />
      <CityName name={cityName} />
    </Layout>
  );
};

export default LocalWeather;
