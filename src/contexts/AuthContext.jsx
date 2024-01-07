import React, {createContext, useState} from "react";
export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleIsAuthenticated = () => {
    setIsAuthenticated((prev) => !prev);
  };

  return (
    <AuthContext.Provider value={{isAuthenticated, toggleIsAuthenticated}}>
      {props.children}
    </AuthContext.Provider>
  );
}
