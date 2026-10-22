import React from 'react';
import Mapa from './components/Mapa';
import PanelLateral from './components/PanelLateral';
import { useSucesos } from './hooks/useSucesos';

function App() {
  const { pines, sucesoSeleccionado, error, seleccionarPin } = useSucesos();

  return (
    <div className="flex h-screen w-screen bg-zinc-950 font-mono text-zinc-100 overflow-hidden">
      
      <PanelLateral 
        sucesoSeleccionado={sucesoSeleccionado} 
        error={error} 
      />

      <Mapa 
        pines={pines} 
        onSeleccionarPin={seleccionarPin} 
      />

    </div>
  );
}
export default App;