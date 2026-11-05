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
      
      {/* NAVBAR PARA EL MAPA */}
      <nav className="h-16 bg-[#F4F1EA] border-b-2 border-[#1A1A1A] flex items-center justify-between px-6 z-50 shrink-0">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Atlas" className="h-10 w-auto object-contain grayscale mix-blend-multiply" />
        </Link>
        
        <div className="hidden md:flex space-x-6 text-xs uppercase tracking-widest font-bold text-[#1A1A1A]">
          <Link to="/" className="hover:text-amber-700">Inicio</Link>
          <Link to="/mapa" className="border-b-2 border-amber-600 pb-1">Atlas</Link>
          <Link to="/admin" className="hover:text-amber-700">Admin</Link>
        </div>

        <div className="flex items-center space-x-4">
           <Search className="w-4 h-4 text-[#1A1A1A]" />
        </div>
      </nav>

      {/* CONTENEDOR DEL MAPA Y PANEL */}
      <div className="flex flex-1 overflow-hidden">
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
