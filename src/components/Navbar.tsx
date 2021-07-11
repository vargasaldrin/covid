import { Link } from "react-router-dom";
import { useContext } from "react";

import { Container } from "./styles/Navbar.style";
import { ThemeContext } from "../context/Context";
import Toggle from "./Toggle";

export default function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Container toggleTheme={toggleTheme}>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Toggle />
        </li>
      </ul>
    </Container>
  );
}
