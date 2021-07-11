import React, { ReactNode, useState } from "react";

interface ThemeContextType {
  toggleTheme: boolean;
  setToggleTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = React.createContext<ThemeContextType>(undefined!);

function Provider({ children }: { children: ReactNode }) {
  const [toggleTheme, setToggleTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ toggleTheme, setToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, Provider };
