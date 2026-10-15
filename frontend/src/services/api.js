const API_BASE_URL = 'http://127.0.0';

export const sucesoService = {
  // 1. Obtiene los pines ligeros para cargarlos en el mapa de Colombia rápidamente
  obtenerPuntosMapa: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/sucesos/mapa`);
      if (!response.ok) throw new Error('Error al conectar con el servidor.');
      return await response.json();
    } catch (error) {
      console.error('Error en sucesoService.obtenerPuntosMapa:', error);
      throw error;
    }
  },

  // 2. Obtiene el expediente pesado (descripción, videos, noticias) de un punto específico
  obtenerDetalle: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/sucesos/${id}`);
      if (!response.ok) throw new Error('No se pudo obtener el expediente histórico.');
      return await response.json();
    } catch (error) {
      console.error(`Error en sucesoService.obtenerDetalle(${id}):`, error);
      throw error;
    }
  }
};
