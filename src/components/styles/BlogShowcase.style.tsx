import styled from "styled-components";

interface ITheme {
  toggleTheme: boolean;
}

export const Container = styled.div`
  margin: 100px 10%;
  text-align: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Button = styled.button<ITheme>`
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  width: 150px;
  height: 50px;
  border-color: ${(props) => (props.toggleTheme ? "#ffffff" : "000000")};
  background-color: ${(props) => props.toggleTheme && "#000000"};
  color: ${(props) => (props.toggleTheme ? "#ffffff" : "000000")};
`;
