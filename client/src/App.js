import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import bgImage from "./assets/background.jpg";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
`;

const BackgruondImage = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <BackgruondImage>
      <GlobalStyle />
      <Header />
      <Body />
    </BackgruondImage>
  );
}

export default App;
