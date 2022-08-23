import { useEffect, useState } from "react";
import styled from "styled-components";
import CityName from "./CityName";
import Weather from "./Weather";
import { getWeathers } from "../../../api/getWeathers";
import CelsiusConversion from "../../../api/CelsiusConversion";
import CircularIndeterminate from "../../CircularIndeterminate";

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

const LocalWeather = ({ cityId }) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWeathers(cityId, "weathers").then(({ data }) => {
      setData(data);
      setLoading(false);
    });
  }, [cityId]);

  if (loading) {
    return <CircularIndeterminate />;
  }

  return (
    <Layout>
      <Weather
        temperature={CelsiusConversion(data.main.temp)}
        mainWeather={data.weather[0].main}
        humidity={data.main.humidity}
        windSpeed={data.wind.speed}
      />
      <CityName name={data.name} />
    </Layout>
  );
};

export default LocalWeather;
