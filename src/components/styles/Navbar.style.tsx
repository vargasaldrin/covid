import styled from "styled-components";

interface ICtn {
  toggleTheme: boolean;
}

export const Container = styled.nav<ICtn>`
  font-size: 2rem;
  background-color: ${(props) => (props.toggleTheme ? "#272727" : "#B9E2F5")};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

  & > ul {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 25px 0px;
  }

  & a {
    text-decoration: none;
    font-family: "Merriweather Sans", sans-serif;
    font-size: 1.5rem;
    color: ${(props) => (props.toggleTheme ? "#ffffff" : "#000000")};
  }
`;
