import { useContext, useState } from "react";

import { Container, Wrapper, Form } from "./styles/Footer.style";
import { ThemeContext } from "../context/Context";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toggleTheme } = useContext(ThemeContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container toggleTheme={toggleTheme}>
      <h2>COVID-19 Statistics</h2>
      <Wrapper>
        <ul>
          <li>Services</li>
          <li>Graphs</li>
          <li>Surveys</li>
          <li>Statistics</li>
        </ul>
        <ul>
          <li>About</li>
          <li>Our Story</li>
          <li>Team</li>
          <li>Careers</li>
        </ul>
        <ul>
          <li>Legal</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
        <Form toggleTheme={toggleTheme} onSubmit={handleSubmit}>
          <label htmlFor="emailFooter">Subscribe Now</label>
          <input
            type="email"
            id="emailFooter"
            placeholder="Email Address"
            value={email}
            onChange={handleChange}
          />
          <input type="submit" value="Send" />
        </Form>
      </Wrapper>
    </Container>
  );
}
