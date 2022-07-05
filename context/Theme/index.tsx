import { createContext, useState } from "react";
import { themeId } from "../../styles/emotion";

interface themeColorProps {
  themeColor: themeId | string;
  toggleThemeColor: Function;
}

const ThemeColorContext = createContext<themeColorProps>({
  themeColor: "light",
  toggleThemeColor: () => {},
});

interface ThemeColorProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ThemeColorProvider = ({ children }: ThemeColorProviderProps) => {
  const [themeColor, setThemeColor] = useState<"light" | "dark">("light");

  const toggleThemeColor = () => {
    if (themeColor === "light") {
      localStorage.setItem("themeColor", "dark");
      setThemeColor("dark");
    } else {
      localStorage.setItem("themeColor", "light");
      setThemeColor("light");
    }
  };

  return (
    <ThemeColorContext.Provider value={{ themeColor, toggleThemeColor }}>
      {children}
    </ThemeColorContext.Provider>
  );
};
export { ThemeColorContext, ThemeColorProvider };
