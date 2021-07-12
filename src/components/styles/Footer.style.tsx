import styled from "styled-components";

interface IContainer {
  toggleTheme: boolean;
}

export const Container = styled.footer<IContainer>`
  width: 100%;
  height: 300px;
  padding: 50px 25px;
  box-sizing: border-box;
  color: ${(props) => (props.toggleTheme ? "#ffffff" : "#000000")};
  background-color: ${(props) => (props.toggleTheme ? "#272727" : "#B9E2F5")};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;

  & > ul {
    flex-grow: 1;
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: "Oswald", sans-serif;

    & > li:nth-child(1) {
      font-family: "Merriweather", sans-serif;
      font-weight: 700;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
  }
`;

export const Form = styled.form<IContainer>`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > label {
    font-family: "Merriweather", sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  & > input[type="email"] {
    height: 40px;
    width: 200px;
    margin-bottom: 10px;
  }
  & > input[type="submit"] {
    background-color: ${(props) => (props.toggleTheme ? "#B9E2F5" : "#272727")};
    color: ${(props) => (props.toggleTheme ? "#000000" : "#ffffff")};
    height: 30px;
    width: 200px;
    border-radius: 5px;
  }
`;
