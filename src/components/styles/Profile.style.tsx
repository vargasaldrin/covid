import styled from "styled-components";

interface ITheme {
  toggleTheme: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 10%;
`;

export const Image = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 25px;
`;

export const Text = styled.div<ITheme>`
  font-family: "Merriweather Sans", sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${(props) => (props.toggleTheme ? "#ffffff" : "#000000")};
  margin-top: 25px;

  & span {
    font-family: "Oswald", sans-serif;
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

export const Button = styled.button<ITheme>`
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  margin-top: 25px;
  width: 150px;
  height: 50px;
  border-color: ${(props) => (props.toggleTheme ? "#ffffff" : "000000")};
  background-color: ${(props) => props.toggleTheme && "#000000"};
  color: ${(props) => (props.toggleTheme ? "#ffffff" : "000000")};
`;
