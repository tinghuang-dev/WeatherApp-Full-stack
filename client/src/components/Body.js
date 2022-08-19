import styled from "styled-components";
import Forecast from "./Body/Forecast/Forecast";
import LocalWeather from "./Body/LocalWeather/LocalWeather";
import OtherCities from "./Body/OtherCities/OtherCities";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 820px;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 4px 11px 20px 8px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const Layout = styled.div`
  display: flex;
  padding: 36px 0;
`;

const VerticalDivider = styled.div`
  width: 2px;
  background-color: rgba(0, 0, 0, 0.15);
`;

const Body = () => {
  return (
    <Container>
      <LocalWeather />
      <Layout>
        <OtherCities />
        <VerticalDivider />
        <Forecast />
      </Layout>
    </Container>
  );
};

export default Body;
