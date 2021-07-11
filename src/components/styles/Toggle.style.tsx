import styled from "styled-components";

interface IBtn {
  toggleTheme: boolean;
}

export const Wrapper = styled.button<IBtn>`
  border: none;
  background-color: ${(props) => (props.toggleTheme ? "#ffffff" : "#828485")};
  color: ${(props) => (props.toggleTheme ? "#000000" : "#ffffff")};
  padding-right: 8px;
  border-radius: 15px;
`;
