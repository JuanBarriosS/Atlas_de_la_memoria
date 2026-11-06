import React, { useState } from 'react';
import Mapa from './components/Mapa';
import PanelLateral from './components/PanelLateral';
import { useSucesos } from './hooks/useSucesos';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

function App() {
  const { pines, sucesoSeleccionado, error, seleccionarPin } = useSucesos();
  const [mostrarPanelMovil, setMostrarPanelMovil] = useState(false);

  // Cuando se selecciona un pin, abrimos el panel automáticamente en móvil
  const handleSeleccionarPin = (id) => {
    seleccionarPin(id);
    setMostrarPanelMovil(true);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-[#F4F1EA] text-[#1A1A1A] overflow-hidden font-serif">
      
      {/* NAVBAR IDÉNTICA A LA LANDING (La que te gustaba) */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-[#F4F1EA]/95 backdrop-blur-sm border-b-2 border-[#1A1A1A] shrink-0">
        
        {/* LOGO INTACTO */}
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Atlas de la Memoria" 
            className="h-12 md:h-14 w-auto object-contain grayscale mix-blend-multiply" 
          />
        </Link>
        
        {/* ENLACES INTACTOS */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-bold text-[#1A1A1A]">
          <Link to="/" className="hover:text-amber-700 transition-colors">Inicio</Link>
          <Link to="/mapa" className="border-b-2 border-amber-600 pb-1">Atlas</Link>
          <Link to="#" className="hover:text-amber-700 transition-colors">Cronología</Link>
          <Link to="#" className="hover:text-amber-700 transition-colors">Documentos</Link>
          <Link to="#" className="hover:text-amber-700 transition-colors">Sobre el proyecto</Link>
        </div>

        {/* BUSCADOR INTACTO */}
        <div className="flex items-center">
          <Search className="w-5 h-5 text-[#1A1A1A] cursor-pointer hover:text-amber-700 transition-colors" />
        </div>
      </nav>

      {/* CONTENEDOR PRINCIPAL (Ajustado para la barra fija) */}
      <div className="flex flex-1 overflow-hidden pt-[88px] relative">
        
        {/* PANEL LATERAL: 
            En escritorio es estático (w-1/3). 
            En móvil es una capa que sube desde abajo */}
        <div className={`
          absolute md:relative z-40 bg-[#F4F1EA] h-full
          transition-transform duration-300 ease-in-out
          w-full md:w-1/3 border-r-2 border-[#1A1A1A]
          ${mostrarPanelMovil ? 'translate-y-0' : 'translate-y-full md:translate-y-0'}
        `}>
          <PanelLateral 
            sucesoSeleccionado={sucesoSeleccionado} 
            error={error} 
            onCerrar={() => setMostrarPanelMovil(false)}
          />
        </div>

        {/* MAPA: Ocupa el resto del espacio */}
        <div className="flex-1 h-full w-full relative z-0">
          <Mapa 
            pines={pines} 
            onSeleccionarPin={handleSeleccionarPin} 
          />
        </div>

      </div>
    </div>
  );
}
export default App;
