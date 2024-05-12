import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Arret } from "../Arret";

const Map = () => {
  const [arrets, setArrets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/arrets")
      .then((response) => response.json())
      .then((data) => setArrets(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des arrêts :", error)
      );
  }, []);

  return (
    <MapContainer
      center={[18.070258, -63.079368]}
      zoom={13}
      style={{ height: "100vh", width: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Array.isArray(arrets) &&
        arrets.map((arret) => (
          <Arret
            key={arret.id_arret}
            latitude={arret.latitude}
            longitude={arret.longitude}
            nom={arret.nom_arret}
            id_arret={arret.id_arret}
          />
        ))}
    </MapContainer>
  );
};

export default Map;
