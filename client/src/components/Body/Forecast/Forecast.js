import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { getForecast } from "../../../api/getForecast";
import Section from "../Section";
import DailyWeather from "./component/DailyWeather";
import { getDay } from "date-fns";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Forecast = ({ cityId }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getForecast(cityId).then(({ data }) => {
      setData(data);
      setLoading(false);
    });
  }, [cityId]);

  if (loading) {
    return;
  }

  return (
    <Section title="Forecast">
      <Wrapper>
        {data.map(({ dt, main: { temp }, weather: [weather] }) => (
          <DailyWeather
            key={dt}
            day={DAYS[getDay(new Date(dt * 1000))]}
            weather={weather}
            temperature={temp}
          />
        ))}
      </Wrapper>
    </Section>
  );
};

export default Forecast;
