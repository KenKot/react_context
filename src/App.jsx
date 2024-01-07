import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
      </ThemeContextProvider>
      <h1>hello</h1>
    </>
  );
}

export default App;
