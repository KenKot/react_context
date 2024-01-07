import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import ThemeToggle from "./components/ThemeToggle";

import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <AuthContextProvider>
          <ThemeToggle />
          <Navbar />
          <Booklist />
        </AuthContextProvider>
      </ThemeContextProvider>
      <h1>hello</h1>
    </>
  );
}

export default App;
