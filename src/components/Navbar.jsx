import React, {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";

export default function Navbar() {
  const context = useContext(ThemeContext);

  const {isLightTheme, light, dark} = context;

  const theme = isLightTheme ? light : dark;

  return (
    <div style={{background: theme.ui, color: theme.syntax}}>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
