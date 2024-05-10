import { useEffect, useState } from "react";
import { Map } from "./components/Map";
import { Navbar } from "./components/Navbar";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const local_theme = localStorage.getItem("local_theme");
  const [theme, setTheme] = useState(local_theme ? local_theme : "light");

  useEffect(() => {
    localStorage.setItem("local_theme", theme);
  }, [theme]);

  return (
    <>
      <div className={`cointainer ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <h1>React Leaflet</h1>
        {Map()}
      </div>
    </>
  );
}

export default App;
