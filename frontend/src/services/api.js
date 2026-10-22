const API_BASE_URL = 'https://atlas-de-la-memoria.onrender.com/api/v1';

export const sucesoService = {
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

  obtenerDetalle: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/sucesos/${id}`);
      if (!response.ok) throw new Error('No se pudo obtener el expediente histórico.');
      return await response.json();
    } catch (error) {
      console.error(`Error en sucesoService.obtenerDetalle(${id}):`, error);
      throw error;
    }
  },

  crearSuceso: async (data) => {
    try {
      const response = await fetch(`${API_BASE_URL}/sucesos/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error del servidor:", errorData);
        throw new Error(errorData.detail?.[0]?.msg || 'Error al crear el suceso.');
      }

      return await response.json();
    } catch (error) {
      console.error('Error en sucesoService.crearSuceso:', error);
      throw error;
    }
  }
};
