import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function LocationMap() {
  return (
    <div className='z-1'>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%", zindex: 0 }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>Hello from here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
