import { useState } from "react";
import { Map } from "./components/Map";

function App() {
  return (
    <>
      <h1>React Leaflet</h1>
      {Map()}
    </>
  );
}

export default App;
