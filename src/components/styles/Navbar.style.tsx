import styled from "styled-components";

export const Container = styled.nav`
  font-size: 2rem;
  width: 100%;

  & > ul {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    list-style-type: none;
  }

  & a {
    text-decoration: none;
    color: black;
  }
`;
