import React from 'react';
import { Shield, Clock, BookOpen, Film, AlertTriangle, Users } from 'lucide-react';

function PanelLateral({ sucesoSeleccionado, error }) {

  // Mapeo de tipos de representación a etiquetas y colores
  const tipoLabels = {
    pin: { texto: 'Hecho individual', color: 'bg-blue-900/50 text-blue-300 border-blue-800' },
    proceso: { texto: 'Proceso histórico', color: 'bg-purple-900/50 text-purple-300 border-purple-800' },
    ruta: { texto: 'Ruta / Múltiples puntos', color: 'bg-green-900/50 text-green-300 border-green-800' },
    capa: { texto: 'Capa territorial', color: 'bg-orange-900/50 text-orange-300 border-orange-800' },
  };

  return (
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
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-xl font-bold text-zinc-100 border-b border-zinc-800 pb-3 flex-1">{sucesoSeleccionado.titulo}</h2>
              </div>
              {sucesoSeleccionado.tipo_representacion && (
                <span className={`inline-block px-2 py-0.5 text-xs rounded border ${tipoLabels[sucesoSeleccionado.tipo_representacion]?.color || 'bg-zinc-800 text-zinc-300'}`}>
                  {tipoLabels[sucesoSeleccionado.tipo_representacion]?.texto || sucesoSeleccionado.tipo_representacion}
                </span>
              )}
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

            {/* SECCIÓN DE ACTORES INVOLUCRADOS */}
            {sucesoSeleccionado.actores && sucesoSeleccionado.actores.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-bold flex items-center space-x-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>ACTORES INVOLUCRADOS</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {sucesoSeleccionado.actores.map((actor) => (
                    <span
                      key={actor.id}
                      className="px-2 py-1 text-xs bg-zinc-950 border border-zinc-800 rounded text-zinc-300"
                    >
                      {actor.nombre} <span className="text-zinc-500">({actor.tipo})</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-bold flex items-center space-x-1">
                <span>📄 RELATO DE LOS HECHOS</span>
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-950/30 p-4 border border-zinc-800/60 rounded max-h-60 overflow-y-auto">
                {sucesoSeleccionado.descripcion}
              </p>
            </div>

            {sucesoSeleccionado.video_url && (
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-bold flex items-center space-x-1">
                  <Film className="w-3.5 h-3.5" />
                  <span>REGISTRO AUDIOVISUAL</span>
                </h3>
                <div className="relative w-full aspect-video rounded border border-zinc-800 overflow-hidden bg-black">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={
                      sucesoSeleccionado.video_url?.includes('watch?v=')
                        ? sucesoSeleccionado.video_url.replace('watch?v=', 'embed/').split('&')[0]
                        : sucesoSeleccionado.video_url
                    }
                    title="Registro documental"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {sucesoSeleccionado.fuentes && sucesoSeleccionado.fuentes.length > 0 && (
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
  );
}

export default PanelLateral;
