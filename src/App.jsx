import { useState } from "react";
import { Map } from "./components/Map";
import { Navbar } from "./components/Navbar";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="cointainer">
        <Navbar />
        <h1>React Leaflet</h1>
        {Map()}
      </div>
    </>
  );
}

export default App;
