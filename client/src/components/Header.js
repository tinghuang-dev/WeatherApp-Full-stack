import styled from "styled-components";
import { getCurrentDate } from "./Header/displayTime";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: black;
  color: white;
  padding: 0 10px;
  position: fixed;
  top: 0;

  & > p {
    font-weight: 700;
  }
`;
const DIV = styled.div`
  & > input {
    margin-right: 40px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 3px solid white;
    background-color: black;
    position: relative;

    :focus {
      outline: none;
    }

    :hover {
      cursor: pointer;
    }
  }

  ::before {
    content: "";
    height: 3px;
    width: 18px;
    background: white;
    position: absolute;
    top: 30px;
    right: 40px;
    transform: rotate(35deg);
    border-radius: 20px;
  }
`;

const LocalTime = styled.p`
  padding-left: 20px;
`;

const Header = () => {
  return (
    <Container>
      <LocalTime>Local Time</LocalTime>
      <p>{getCurrentDate()}</p>
      <DIV>
        <input />
      </DIV>
    </Container>
  );
};

export default Header;
