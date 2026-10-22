import { useState, useEffect } from 'react';
import { sucesoService } from '../services/api';

export function useSucesos() {
  const [pines, setPines] = useState([]);
  const [sucesoSeleccionado, setSucesoSeleccionado] = useState(null);
  const [error, setError] = useState(null);

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

  async function seleccionarPin(id) {
    try {
      const detalle = await sucesoService.obtenerDetalle(id);
      setSucesoSeleccionado(detalle);
    } catch (err) {
      console.error('Error al cargar el detalle:', err);
    }
  }

  return { pines, sucesoSeleccionado, error, seleccionarPin };
}