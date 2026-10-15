import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { sucesoService } from './services/api';
import { Shield, Clock, BookOpen, Film, AlertTriangle } from 'lucide-react';
import L from 'leaflet';
import { sucesoService } from './services/api';



// Corrección obligatoria para que los íconos de Leaflet no se vean rotos en React
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],     // Dimensiones estándar del pin de Leaflet
  iconAnchor: [12, 41]    // Punto de anclaje en el mapa geográfico
});
L.Marker.prototype.options.icon = DefaultIcon;

function App() {
  const [pines, setPines] = useState([]);
  const [sucesoSeleccionado, setSucesoSeleccionado] = useState(null);
  const [error, setError] = useState(null);

  // Cargar los puntos ligeros del mapa al iniciar la aplicación
  useEffect(() => {
    async function cargarPuntos() {
      try {
        const datos = await sucesoService.obtenerPuntosMapa();
        setPines(datos);
      } catch (err) {
        setError('No se pudo conectar con el servidor de Cartografía de la Memoria.');
      }
    }
    cargarPuntos();
  }, []);

  // Función para manejar el clic en un pin y cargar su expediente pesado
  async function manejarSeleccionPin(id) {
    try {
      const detalle = await sucesoService.obtenerDetalle(id);
      setSucesoSeleccionado(detalle);
    } catch (err) {
      console.error('Error al cargar el detalle:', err);
    }
  }

  return (
    <div className="flex h-screen w-screen bg-zinc-950 font-mono text-zinc-100 overflow-hidden">
      
      {/* PANEL LATERAL IZQUIERDO: Control e información histórica */}
      <div className="w-1/3 h-full bg-zinc-900 border-r border-zinc-800 flex flex-col z-10 shadow-2xl overflow-y-auto">
        <div className="p-6 border-b border-zinc-800 bg-zinc-950">
          <div className="flex items-center space-x-2 text-red-500 mb-1">
            <Shield className="w-5 h-5" />
            <h1 className="text-xl font-bold tracking-wider">CARTOGRAFÍA DE LA MEMORIA</h1>
          </div>
          <p className="text-xs text-zinc-500 uppercase tracking-widest">Conflicto Armado en Colombia</p>
        </div>

        <div className="flex-1 p-6 space-y-6">
          {error && (
            <div className="p-4 bg-red-950/40 border border-red-900/60 rounded text-red-400 text-xs flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {!sucesoSeleccionado ? (
            <div className="h-full flex flex-col justify-center items-center text-center p-8 border border-dashed border-zinc-800 rounded bg-zinc-950/20">
              <BookOpen className="w-8 h-8 text-zinc-700 mb-3" />
              <p className="text-sm text-zinc-400">Seleccione un marcador en el mapa geográfico para desplegar el expediente histórico documentado.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Título y metadatos */}
              <div>
                <h2 className="text-xl font-bold text-zinc-100 border-b border-zinc-800 pb-3">{sucesoSeleccionado.titulo}</h2>
                <div className="flex items-center space-x-4 text-xs text-zinc-400 mt-3 bg-zinc-950/40 p-2 border border-zinc-800 rounded">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{sucesoSeleccionado.fecha}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">UBICACIÓN:</span> {sucesoSeleccionado.municipio} ({sucesoSeleccionado.departamento})
                  </div>
                </div>
              </div>

              {/* Narrativa Histórica */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-bold flex items-center space-x-1">
                  <span>📄 RELATO DE LOS HECHOS</span>
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-950/30 p-4 border border-zinc-800/60 rounded max-h-60 overflow-y-auto">
                  {sucesoSeleccionado.descripcion}
                </p>
              </div>

              {/* Video Documental Incrustado */}
              {sucesoSeleccionado.video_url && (
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-bold flex items-center space-x-1">
                    <Film className="w-3.5 h-3.5" />
                    <span>REGISTRO AUDIOVISUAL</span>
                  </h3>
                  <div className="relative w-full aspect-video rounded border border-zinc-800 overflow-hidden bg-black">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={sucesoSeleccionado.video_url}
                      title="Registro documental"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Matriz de Fuentes y Noticias */}
              {sucesoSeleccionado.fuentes && sucesoseleccionado.fuentes.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-bold">📚 INVESTIGACIONES Y FUENTES</h3>
                  <div className="space-y-2">
                    {sucesoSeleccionado.fuentes.map((fuente, index) => (
                      <a
                        key={index}
                        href={fuente.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-2 text-xs bg-zinc-950 border border-zinc-800 hover:border-red-900/60 hover:bg-zinc-900 rounded transition-all text-zinc-300 hover:text-red-400 truncate"
                      >
                        {fuente.nombre} →
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* MAPA INTERACTIVO (Ocupa el resto de la pantalla) */}
      <div className="flex-1 h-full bg-zinc-950 relative">
        <MapContainer
          center={[4.5709, -74.2973]} // Centro geográfico de Colombia
          zoom={6}
          className="w-full h-full z-0"
          zoomControl={false}
        >
          {/* Estilo de mapa oscuro minimalista de CartoDB */}
          <TileLayer
            url="https://{s}://{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors &copy; <a href="https://carto.com">CARTO</a>'
          />
          
          {/* Pintar los marcadores que entrega la API ligera */}
          {pines.map((pin) => (
            <Marker
              key={pin.id}
              position={[parseFloat(pin.latitud), parseFloat(pin.longitud)]}
              eventHandlers={{
                click: () => manejarSeleccionPin(pin.id)
              }}
            >
              <Popup>
                <span className="font-mono font-bold text-xs">{pin.titulo}</span>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

    </div>
  );
}

export default App;
