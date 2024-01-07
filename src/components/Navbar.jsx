import React, {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import {AuthContext} from "../contexts/AuthContext"; // Import AuthContext

export default function Navbar() {
  // Use ThemeContext
  const themeContext = useContext(ThemeContext);
  const {isLightTheme, light, dark} = themeContext;
  const theme = isLightTheme ? light : dark;

  // Use AuthContext
  const authContext = useContext(AuthContext);
  const {isAuthenticated, toggleIsAuthenticated} = authContext; // Destructure the values you need from AuthContext

  return (
    <div style={{background: theme.ui, color: theme.syntax}}>
      <h1>Context App</h1>
      <button onClick={toggleIsAuthenticated}>TOGGLE AUTH</button>
      {isAuthenticated ? ( // Display different content based on the authentication status
        <p>Welcome, User!</p>
      ) : (
        <p>You are not logged in.</p>
      )}
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
