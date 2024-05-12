import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Map } from "./components/Map";
import { Navbar } from "./components/Navbar";
import { TicketShop } from "./components/Ticketshop";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const local_theme = localStorage.getItem("local_theme");
  const [theme, setTheme] = useState(local_theme ? local_theme : "light");

  useEffect(() => {
    localStorage.setItem("local_theme", theme);
  }, [theme]);

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>React Leaflet</h1>
                {Map()}
              </>
            }
          />
          <Route path="/Ticketshop" element={<TicketShop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
