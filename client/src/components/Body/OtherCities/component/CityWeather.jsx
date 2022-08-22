import styled from "styled-components";
import CelsiusConversion from "../../../../api/CelsiusConversion";
import Temperature from "../../Temperature";
import WeatherIcon from "../../WeatherIcon";

const Button = styled.button`
  border: 0;
  background-color: transparent;
  text-align: left;
  display: flex;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;

  :hover {
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }
`;

const CityName = styled.div`
  width: 100px;
  margin-right: 1rem;
`;

const StyledTemperature = styled(Temperature)`
  width: 4rem;
  margin-right: 2rem;
`;

const CityWeather = ({ id, setCityId, name, temperature, weather }) => (
  <Button onClick={() => setCityId(id)}>
    <CityName>{name}</CityName>
    <StyledTemperature value={CelsiusConversion(temperature)} />
    <WeatherIcon value={weather.icon} description={weather.description} />
  </Button>
);

export default CityWeather;
