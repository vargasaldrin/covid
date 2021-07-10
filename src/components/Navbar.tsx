import { Link } from "react-router-dom";

import Toggle from "./Toggle";
import { Container } from "./styles/Navbar.style";

export default function Navbar() {
  return (
    <Container>
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
