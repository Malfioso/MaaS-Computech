import React, { useEffect, useState } from "react";
import { Popup } from "react-leaflet";

const ArretPopup = ({ nom, id_arret, position }) => {
  const [horaires, setHoraires] = useState([]);

  useEffect(() => {
    const fetchHoraires = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/Horaires");
        const data = await response.json();
        console.log("Fetched data:", data);
        const filteredHoraires = data.filter(
          (horaire) => horaire.id_arret === id_arret
        );
        console.log("Filtered horaires:", filteredHoraires);
        setHoraires(filteredHoraires);
      } catch (error) {
        console.error("Error fetching horaires:", error);
      }
    };

    fetchHoraires();
  }, [id_arret]);

  return (
    <Popup position={position}>
      <div>
        <h3>{nom}</h3>
        <h4>Horaires:</h4>
        {horaires.length > 0 ? (
          <ul>
            {horaires.map((horaire) => (
              <li key={horaire.id_horaire}>
                {`${horaire.jour_semaine}: ${new Date(
                  horaire.heure_depart
                ).toLocaleTimeString()} - ${new Date(
                  horaire.heure_arrivee
                ).toLocaleTimeString()}`}
              </li>
            ))}
          </ul>
        ) : (
          <p>No horaires available.</p>
        )}
      </div>
    </Popup>
  );
};

export default ArretPopup;
