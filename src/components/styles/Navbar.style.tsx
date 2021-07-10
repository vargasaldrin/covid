import styled from "styled-components";

export const Container = styled.nav`
  font-size: 2rem;
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
    color: black;
  }
`;
