import React, {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";

export default function BookList() {
  const context = useContext(ThemeContext);

  const {isLightTheme, light, dark} = context;

  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{background: theme.ui, color: theme.syntax}}
    >
      <ul>
        <li style={{background: theme.ui}}>the way of kings</li>
        <li style={{background: theme.ui}}>the name of the wind</li>
        <li style={{background: theme.ui}}>the final empire</li>
      </ul>
    </div>
  );
}
