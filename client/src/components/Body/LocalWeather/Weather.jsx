import Temperature from "../Temperature";
import styled from "styled-components";
import WeatherItem from "./components/WeatherItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTemperature = styled(Temperature)`
  color: white;
  font-size: 5rem;
`;

const MainWeather = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  letter-spacing: 5px;
  margin-top: 0.25rem;
`;

const VerticalDivider = styled.div`
  width: 2px;
  margin: 0 2rem;
  background-color: rgba(0, 0, 0, 0.15);
`;

const WeatherItemWarpper = styled.div`
  display: flex;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 3rem;
`;

const Weather = ({ temperature, mainWeather, humidity, windSpeed }) => {
  return (
    <Wrapper>
      <StyledTemperature value={temperature} />
      <MainWeather>{mainWeather}</MainWeather>
      <WeatherItemWarpper>
        <WeatherItem title="HUMIDITY">{humidity}%</WeatherItem>
        <VerticalDivider />
        <WeatherItem title="WIND">{windSpeed} K/M</WeatherItem>
      </WeatherItemWarpper>
    </Wrapper>
  );
};
export default Weather;
