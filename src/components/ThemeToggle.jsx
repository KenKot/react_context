import React, {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const {toggleTheme} = useContext(ThemeContext);

  const {setTheme} = useContext(ThemeContext);

  // CLEANER WAY:
  //   const toggleTheme = () => {
  //     setTheme((prev) => ({...prev, isLightTheme: !prev.isLightTheme}));
  //   };

  return (
    //CLEANER WAY:
    <button onClick={toggleTheme}>Toggle Theme</button>

    // <button
    //   onClick={() => {
    //     setTheme((prev) => ({...prev, isLightTheme: !prev.isLightTheme}));
    //   }}
    // >
    //   Toggle Theme
    // </button>
  );
}
