import { useState } from "react";
import styled from "styled-components";
import Section from "../Section";
import DailyWeather from "./component/DailyWeather";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Forecast = () => {
  const [forecast, setForcast] = useState([
    {
      id: "MON",
      day: "MON",
      weather: { icon: "04d", description: "Clouds" },
      temperature: "21",
    },
    {
      id: " TUE",
      day: "  TUE",
      weather: { icon: "04d", description: "Clouds" },
      temperature: "21",
    },
    {
      id: "WED",
      day: "WED",
      weather: { icon: "04d", description: "Clouds" },
      temperature: "21",
    },
    {
      id: "THU",
      day: "THU",
      weather: { icon: "04d", description: "Clouds" },
      temperature: "21",
    },
    {
      id: "FRI",
      day: "FRI",
      weather: { icon: "01d", description: "Clouds" },
      temperature: "21",
    },
  ]);
  return (
    <Section title="Forecast">
      <Wrapper>
        {forecast.map(({ id, day, weather, temperature }) => (
          <DailyWeather
            id={id}
            day={day}
            weather={weather}
            temperature={temperature}
          />
        ))}
      </Wrapper>
    </Section>
  );
};

export default Forecast;
