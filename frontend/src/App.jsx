import React, { useState } from 'react';
import Mapa from './components/Mapa';
import PanelLateral from './components/PanelLateral';
import { useSucesos } from './hooks/useSucesos';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

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
      
      {/* NAVBAR (Responsive) */}
      <nav className="h-16 bg-[#F4F1EA] border-b-2 border-[#1A1A1A] flex items-center justify-between px-4 md:px-6 z-50 shrink-0">
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="Atlas" className="h-8 md:h-10 w-auto object-contain grayscale mix-blend-multiply" />
        </Link>
        
        <div className="hidden md:flex space-x-6 text-xs uppercase tracking-widest font-bold text-[#1A1A1A]">
          <Link to="/" className="hover:text-amber-700">Inicio</Link>
          <Link to="/mapa" className="border-b-2 border-amber-600 pb-1">Atlas</Link>
          <Link to="/admin" className="hover:text-amber-700">Admin</Link>
        </div>

        <div className="flex items-center space-x-4">
           <Search className="w-5 h-5 text-[#1A1A1A]" />
           {/* Botón para abrir el panel en móvil */}
           <button 
             className="md:hidden text-[#1A1A1A]"
             onClick={() => setMostrarPanelMovil(!mostrarPanelMovil)}
           >
             {mostrarPanelMovil ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
        </div>
      </nav>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* PANEL LATERAL: 
            En escritorio es un w-1/3 estático. 
            En móvil es una capa absoluta que sube desde abajo (bottom sheet) */}
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

        {/* MAPA: Ocupa todo el espacio restante */}
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
