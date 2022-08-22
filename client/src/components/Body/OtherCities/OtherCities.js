import { useEffect, useState } from "react";
import { getGroupWeathers } from "../../../api/getGroupWeathers";
import Section from "../Section";
import CityWeather from "./component/CityWeather";

const OtherCities = ({ currentCityId, setCityId }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const otherCitiesId = [2174003, 2147714, 2158177, 1668341].filter(
      (id) => id !== currentCityId
    );
    getGroupWeathers(otherCitiesId).then(({ data }) => {
      setData(data);
      setLoading(false);
    });
  }, [currentCityId]);

  if (loading) {
    return;
  }

  return (
    <Section title="Other Cities">
      {data.list.map(({ id, name, main: { temp }, weather: [weather] }) => (
        <CityWeather
          key={id}
          id={id}
          setCityId={setCityId}
          name={name}
          temperature={temp}
          weather={weather}
        />
      ))}
    </Section>
  );
};

export default OtherCities;
