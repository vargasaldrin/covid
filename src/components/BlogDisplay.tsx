import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { Container } from "./styles/BlogDisplay.style";
import { ThemeContext } from "../context/Context";

interface LocationState {
  title: string;
  content: string;
}

export default function BlogDisplay() {
  const location = useLocation<LocationState>();
  const { content, title } = location.state;
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Container toggleTheme={toggleTheme}>
      <div className="banner_img"></div>
      <h1>{title}</h1>
      <p>{content}</p>
    </Container>
  );
}
