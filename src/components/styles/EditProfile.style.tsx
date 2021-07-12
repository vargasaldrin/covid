import styled from "styled-components";

interface ITheme {
  toggleTheme: boolean;
}

export const Container = styled.form<ITheme>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 10%;

  & label {
    margin-bottom: 25px;
    font-family: "Merriweather Sans", sans-serif;
    color: ${(props) => (props.toggleTheme ? "#ffffff" : "000000")};
  }
`;

export const Submit = styled.input<ITheme>`
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  width: 150px;
  height: 50px;
  border-color: ${(props) => (props.toggleTheme ? "#ffffff" : "000000")};
  background-color: ${(props) => props.toggleTheme && "#000000"};
  color: ${(props) => (props.toggleTheme ? "#ffffff" : "000000")};
`;
