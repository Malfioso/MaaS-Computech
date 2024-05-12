import React from "react";
import { Marker } from "react-leaflet";
import { ArretPopup } from "../ArretPopup";

const Arret = ({ latitude, longitude, nom, id_arret }) => {
  return (
    <Marker position={[latitude, longitude]}>
      <ArretPopup
        nom={nom}
        id_arret={id_arret}
        position={[latitude, longitude]}
      />
    </Marker>
  );
};

export default Arret;
