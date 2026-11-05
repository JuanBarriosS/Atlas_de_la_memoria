import React from 'react';
import Mapa from './components/Mapa';
import PanelLateral from './components/PanelLateral';
import { useSucesos } from './hooks/useSucesos';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

function App() {
  const { pines, sucesoSeleccionado, error, seleccionarPin } = useSucesos();

  return (
    <div className="flex flex-col h-screen w-screen bg-[#F4F1EA] text-[#1A1A1A] overflow-hidden font-serif">
      
      {/* NAVBAR IDÉNTICA A LA LANDING */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-[#F4F1EA]/95 backdrop-blur-sm border-b-2 border-[#1A1A1A] shrink-0">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Atlas de la Memoria" 
            className="h-12 md:h-14 w-auto object-contain grayscale mix-blend-multiply" 
          />
        </Link>
        
        {/* ENLACES */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-bold text-[#1A1A1A]">
          <Link to="/" className="hover:text-amber-700 transition-colors">Inicio</Link>
          <Link to="/mapa" className="border-b-2 border-amber-600 pb-1">Atlas</Link>
          <Link to="#" className="hover:text-amber-700 transition-colors">Cronología</Link>
          <Link to="#" className="hover:text-amber-700 transition-colors">Documentos</Link>
          <Link to="#" className="hover:text-amber-700 transition-colors">Sobre el proyecto</Link>
        </div>

        {/* SOLO EL BUSCADOR (Sin el botón negro) */}
        <div className="flex items-center">
          <Search className="w-5 h-5 text-[#1A1A1A] cursor-pointer hover:text-amber-700 transition-colors" />
        </div>
      </nav>

      {/* CONTENEDOR DEL MAPA Y PANEL */}
      {/* El pt-20 compensa la altura de la navbar fija */}
      <div className="flex flex-1 overflow-hidden pt-[88px]"> 
        <PanelLateral 
          sucesoSeleccionado={sucesoSeleccionado} 
          error={error} 
        />

        <Mapa 
          pines={pines} 
          onSeleccionarPin={seleccionarPin} 
        />
      </div>

    </div>
  );
}
export default App;
