import styled from "styled-components";
import CelsiusConversion from "../../../../api/CelsiusConversion";
import Temperature from "../../Temperature";
import WeatherIcon from "../../WeatherIcon";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & {
    margin-right: 1.5rem;
  }

  & + div:last-child {
    margin-right: 1.5rem;
  }
`;

const Day = styled.div`
  margin: 15px 0 30px;
`;

const StyledTemperature = styled(Temperature)`
  margin-top: 35px;
`;

const DailyWeather = ({ day, temperature, weather }) => (
  <Wrapper>
    <Day>{day}</Day>
    <WeatherIcon value={weather.icon} description={weather.description} />
    <StyledTemperature value={CelsiusConversion(temperature)} />
  </Wrapper>
);

export default DailyWeather;
