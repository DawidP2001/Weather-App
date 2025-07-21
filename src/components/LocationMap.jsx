import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect, useState } from "react";
import 'leaflet/dist/leaflet.css';

function MapFocus({ cords }) {
  const map = useMap();
  useEffect(() => {
    map.setView(cords, map.getZoom(), { animate: true });
  }, [cords, map]);
  return null;
}

export default function LocationMap({ place }) {
  const [cords, setCords] = useState([53.349805, -6.26031]);

  useEffect(() => {
    const fetchCoords = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
        );
        const data = await response.json();
        if (data && data.length > 0) {
          setCords([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoords();
  }, [place]);

  return (
    <div className='z-1'>
      <MapContainer 
        center={cords} 
        zoom={13} 
        className="rounded-lg shadow-lg"
      >
        <MapFocus cords={cords} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={cords}>
          <Popup>Hello from here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
