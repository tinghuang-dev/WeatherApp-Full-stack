import styled from "styled-components";
import Temperature from "../../Temperature";
import WeatherIcon from "../../WeatherIcon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CityName = styled.div`
  width: 100px;
  margin-right: 1rem;
`;

const StyledTemperature = styled(Temperature)`
  width: 3rem;
  margin-right: 3rem;
`;

const CityWeather = ({ name, temperature, weather }) => (
  <Wrapper>
    <CityName>{name}</CityName>
    <StyledTemperature value={temperature} />
    <WeatherIcon value={weather.icon} description={weather.description} />
  </Wrapper>
);

export default CityWeather;
