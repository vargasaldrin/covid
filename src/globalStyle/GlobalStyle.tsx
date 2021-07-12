import { createGlobalStyle } from "styled-components";

interface IGbl {
  toggleTheme: boolean;
}

export const GlobalStyle = createGlobalStyle<IGbl>`
body {
  margin: 0;
  font-family: -apple-system, Bl  inkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${(props) => (props.toggleTheme ? "#5B5C5D" : "#ffffff")}
}
`;
