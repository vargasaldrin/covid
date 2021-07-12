import styled from "styled-components";

interface IContainer {
  toggleTheme: boolean;
}

export const Container = styled.form<IContainer>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 100px 10%;

  & > h1 {
    font-family: "Merriweather Sans", sans-serif;
    font-weight: 700;
    color: ${(props) => (props.toggleTheme ? "#ffffff" : "#000000")};
    margin-bottom: 50px;
  }

  & > label {
    font-family: "Merriweather Sans", sans-serif;
    font-size: 1.3rem;
    color: ${(props) => (props.toggleTheme ? "#ffffff" : "#000000")};
    margin-bottom: 35px;
  }

  & > input[type="submit"] {
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    width: 150px;
    height: 50px;
    border-color: ${(props) => (props.toggleTheme ? "#ffffff" : "000000")};
    background-color: ${(props) => props.toggleTheme && "#000000"};
    color: ${(props) => (props.toggleTheme ? "#ffffff" : "000000")};
  }
`;
