import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const Map = () => {
  const [busStops, setBusStops] = useState([]);

  useEffect(() => {
    fetchBusStops();
  }, []);

  const fetchBusStops = async () => {
    try {
      const response = await axios.get("/api/bus-stops");
      setBusStops(response.data);
    } catch (error) {
      console.error("Error fetching bus stops:", error);
    }
  };

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
      {busStops.map((busStop) => (
        <Marker
          key={busStop.id}
          position={[busStop.latitude, busStop.longitude]}
        >
          <Popup>{busStop.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
