import { useContext } from "react";

import { ThemeContext } from "../Context";
import { Wrapper } from "./styles/Toggle.style";

export default function Toggle() {
  const lightMode = <span>🌞 Light Mode</span>;
  const darkMode = <span>🌜 Dark Mode</span>;
  return <Wrapper></Wrapper>;
}
