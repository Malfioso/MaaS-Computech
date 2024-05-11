import React from "react";
import { Marker, Popup } from "react-leaflet";

const Arret = ({ latitude, longitude, nom }) => {
  return (
    <Marker position={[latitude, longitude]}>
      <Popup>{nom}</Popup>
    </Marker>
  );
};

export default Arret;
