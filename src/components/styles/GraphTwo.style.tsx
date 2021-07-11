import styled from "styled-components";

interface IInfoText {
  toggleTheme: boolean;
}

export const Container = styled.div`
  display: flex;
  margin: 100px 10% 100px 10%;
`;
export const InfoText = styled.div<IInfoText>`
  color: ${(props) => (props.toggleTheme ? "#ffffff" : "#000000")};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 10%;

  & h2 {
    font-family: "Merriweather Sans", sans-serif;
  }

  & p {
    font-family: "Oswald", sans-serif;
  }
`;
