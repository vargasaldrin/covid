import styled from "styled-components";

interface IContainer {
  toggleTheme: boolean;
}

export const Wrapper = styled.div<IContainer>`
  width: 500px;
  margin-bottom: 25px;
  border: solid 2px black;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.toggleTheme ? "#272727" : "#ffffff")};

  & img {
    width: auto;
  }

  & h2 {
    font-family: "Merriweather Sans", sans-serif;
    color: ${(props) => (props.toggleTheme ? "#ffffff" : "#000000")};
    text-align: center;
    margin: 10px 0px;
  }
`;

export const ReadButton = styled.button`
  width: 100%;
  border: none;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
`;

export const UpdateButton = styled.button`
  width: 50%;
  border: none;
  font-family: "Oswald", sans-serif;
  color: #000000;
  background-color: #66de93;
`;

export const DeleteButton = styled.button`
  width: 50%;
  border: none;
  font-family: "Oswald", sans-serif;
  color: #ffffff;
  background-color: #cd113b;
`;
