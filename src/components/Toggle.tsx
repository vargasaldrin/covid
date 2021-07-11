import { useContext } from "react";

import { ThemeContext } from "../context/Context";
import { Wrapper } from "./styles/Toggle.style";

export default function Toggle() {
  const { toggleTheme, setToggleTheme } = useContext(ThemeContext);
  let displayText;

  if (toggleTheme) {
    displayText = <span>☀️ Light Mode</span>;
  } else {
    displayText = <span>🌙 Dark Mode</span>;
  }

  const handleClick = () => {
    setToggleTheme(!toggleTheme);
  };

  return (
    <Wrapper onClick={handleClick} toggleTheme={toggleTheme}>
      {displayText}
    </Wrapper>
  );
}
