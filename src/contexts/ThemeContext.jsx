import React, {createContext, useState} from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {syntax: "#555", ui: "#ddd", bg: "#eee"},
    dark: {syntax: "#ddd", ui: "#333", bg: "#555"},
  });

  const toggleTheme = () => {
    setTheme((prev) => ({...prev, isLightTheme: !prev.isLightTheme}));
  };

  return (
    <ThemeContext.Provider value={{...theme, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}
