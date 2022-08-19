const WeatherIcon = ({ value, description }) => (
  <img
    alt={description}
    src={`http://openweathermap.org/img/wn/${value}.png`}
  />
);

export default WeatherIcon;
