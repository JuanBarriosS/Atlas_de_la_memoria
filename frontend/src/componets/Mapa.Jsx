import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

function Mapa({ pines, onSeleccionarPin }) {
  return (
    <div className="flex-1 h-full bg-zinc-950 relative">
      <MapContainer
        center={[4.5709, -74.2973]}
        zoom={6}
        minZoom={5}
        maxBounds={[
          [-4.5, -82.0],
          [13.5, -66.0]
        ]}
        maxBoundsViscosity={1.0}
        className="w-full h-full z-0"
        zoomControl={false}
      >
        <TileLayer
          url="https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png?key=cb1_4pbe_1_9908e41efa8cf38fb047b15c"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        
        {pines.map((pin) => (
          <Marker
            key={pin.id}
            position={[parseFloat(pin.latitud), parseFloat(pin.longitud)]}
            eventHandlers={{
              click: () => onSeleccionarPin(pin.id)
            }}
          >
            <Popup>
              <span className="font-mono font-bold text-xs">{pin.titulo}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Mapa;