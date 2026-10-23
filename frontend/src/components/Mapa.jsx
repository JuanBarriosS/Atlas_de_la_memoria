import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Ícono por defecto (azul)
let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Íconos por tipo de representación (colores de leaflet-color-markers)
const iconosPorTipo = {
  pin: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  proceso: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  ruta: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  capa: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
};

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
            icon={iconosPorTipo[pin.tipo_representacion] || DefaultIcon}
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
