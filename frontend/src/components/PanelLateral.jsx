import React from 'react';
import { Shield, Clock, BookOpen, Film, AlertTriangle, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function PanelLateral({ sucesoSeleccionado, error }) {
  const tipoLabels = {
    pin: { texto: 'Hecho individual', color: 'bg-blue-100 text-blue-800 border-blue-800' },
    proceso: { texto: 'Proceso histórico', color: 'bg-purple-100 text-purple-800 border-purple-800' },
    ruta: { texto: 'Ruta / Múltiples puntos', color: 'bg-green-100 text-green-800 border-green-800' },
    capa: { texto: 'Capa territorial', color: 'bg-orange-100 text-orange-800 border-orange-800' },
  };

  return (
    <div className="w-1/3 h-screen bg-[#F4F1EA] border-r-2 border-[#1A1A1A] flex flex-col z-20 shadow-2xl overflow-y-auto font-serif">
      
      {/* CABECERA DEL PANEL */}
      <div className="p-6 border-b-2 border-[#1A1A1A] bg-[#F4F1EA] sticky top-0 z-10">
        <Link to="/" className="text-xs uppercase tracking-widest font-bold flex items-center space-x-1 text-gray-600 hover:text-black mb-4">
          <ArrowLeft className="w-3 h-3" />
          <span>Volver al inicio</span>
        </Link>
        <div className="flex items-center space-x-2 text-[#1A1A1A] mb-1">
          <Shield className="w-5 h-5 text-amber-700" />
          <h1 className="text-xl font-bold tracking-tighter uppercase">Cartografía de la Memoria</h1>
        </div>
        <p className="text-xs text-gray-500 uppercase tracking-widest font-sans">Conflicto Armado en Colombia</p>
      </div>

      <div className="flex-1 p-6 space-y-6">
        {error && (
          <div className="p-4 bg-red-100 border border-red-800 rounded-none text-red-800 text-xs flex items-center space-x-2 font-sans">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {!sucesoSeleccionado ? (
          <div className="h-full flex flex-col justify-center items-center text-center p-8 border border-dashed border-gray-400 rounded-none bg-[#E8E4D9]">
            <BookOpen className="w-8 h-8 text-gray-400 mb-3" />
            <p className="text-sm text-gray-600 font-sans">Seleccione un marcador en el mapa geográfico para desplegar el expediente histórico documentado.</p>
          </div>
        ) : (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] border-b border-[#1A1A1A] pb-2 leading-tight tracking-tighter mb-3">
                {sucesoSeleccionado.titulo}
              </h2>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {sucesoSeleccionado.tipo_representacion && (
                  <span className={`inline-block px-2 py-0.5 text-xs font-bold uppercase tracking-widest border ${tipoLabels[sucesoSeleccionado.tipo_representacion]?.color || 'bg-gray-200 text-gray-800 border-gray-800'}`}>
                    {tipoLabels[sucesoSeleccionado.tipo_representacion]?.texto || sucesoSeleccionado.tipo_representacion}
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-4 text-xs text-[#333] bg-[#E8E4D9] p-2 border border-gray-300 font-sans">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>{sucesoSeleccionado.fecha}</span>
                </div>
                <div>
                  <span className="text-gray-500 uppercase tracking-widest">Ubicación:</span> {sucesoSeleccionado.municipio} ({sucesoSeleccionado.departamento})
                </div>
              </div>
            </div>

            {/* ACTORES */}
            {sucesoSeleccionado.actores && sucesoSeleccionado.actores.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-[#1A1A1A] font-bold flex items-center space-x-1 font-sans border-b border-[#1A1A1A] pb-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>Actores involucrados</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {sucesoSeleccionado.actores.map((actor) => (
                    <span
                      key={actor.id}
                      className="px-2 py-1 text-xs bg-white border border-[#1A1A1A] text-[#1A1A1A] font-sans"
                    >
                      {actor.nombre} <span className="text-gray-500">({actor.tipo})</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* RELATO */}
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-widest text-[#1A1A1A] font-bold flex items-center space-x-1 font-sans border-b border-[#1A1A1A] pb-1">
                <span>📄 Relato de los hechos</span>
              </h3>
              <p className="text-sm text-[#222] leading-relaxed bg-transparent p-1 max-h-60 overflow-y-auto font-sans">
                {sucesoSeleccionado.descripcion}
              </p>
            </div>

            {/* VIDEO */}
            {sucesoSeleccionado.video_url && (
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-[#1A1A1A] font-bold flex items-center space-x-1 font-sans border-b border-[#1A1A1A] pb-1">
                  <Film className="w-3.5 h-3.5" />
                  <span>Registro audiovisual</span>
                </h3>
                <div className="relative w-full aspect-video rounded-none border-2 border-[#1A1A1A] overflow-hidden bg-black">
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

            {/* FUENTES */}
            {sucesoSeleccionado.fuentes && sucesoSeleccionado.fuentes.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-[#1A1A1A] font-bold font-sans border-b border-[#1A1A1A] pb-1">📚 Investigaciones y fuentes</h3>
                <div className="space-y-2">
                  {sucesoSeleccionado.fuentes.map((fuente, index) => (
                    <a
                      key={index}
                      href={fuente.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 text-sm bg-transparent border-b border-gray-300 hover:bg-[#E8E4D9] transition-all text-[#1A1A1A] font-sans"
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
