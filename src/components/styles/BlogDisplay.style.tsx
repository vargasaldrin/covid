import styled from "styled-components";

interface IContainer {
  toggleTheme: boolean;
}

export const Container = styled.div<IContainer>`
  margin: 100px 10%;
  display: flex;
  flex-direction: column;

  & > .banner_img {
    width: 100%;
    height: 300px;
    background-image: url("../blog_poster.jpeg");
    background-repeat: no-repeat;
    background-position: top;
  }

  & > h1 {
    text-align: center;
    font-family: "Merriweather Sans", sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
    color: ${(props) => (props.toggleTheme ? "#ffffff" : "#000000")};
  }

  & > p {
    font-family: "Oswald", sans-serif;
    font-size: 1.2rem;
    color: ${(props) => (props.toggleTheme ? "#ffffff" : "#000000")};
  }
`;
