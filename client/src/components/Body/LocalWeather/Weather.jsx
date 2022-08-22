import Temperature from "../Temperature";
import styled from "styled-components";
import WeatherItem from "./components/WeatherItem";
import CelsiusConversion from "../../../api/CelsiusConversion";

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

const Weather = ({ data }) => {
  return (
    <Wrapper>
      <StyledTemperature value={CelsiusConversion(data.main.temp)} />
      <MainWeather>{data.weather[0].main}</MainWeather>
      <WeatherItemWarpper>
        <WeatherItem title="HUMIDITY">{data.main.humidity}%</WeatherItem>
        <VerticalDivider />
        <WeatherItem title="WIND">{data.wind.speed} K/M</WeatherItem>
      </WeatherItemWarpper>
    </Wrapper>
  );
};
export default Weather;
