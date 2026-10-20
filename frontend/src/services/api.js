// Apuntamos al backend local con el prefijo correcto
const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';

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

  // 2. Obtiene el expediente pesado de un punto específico
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

    // 3. Crea un nuevo suceso enviando los datos del formulario al backend
  crearSuceso: async (data) => {
    try {
      const response = await fetch(`${API_BASE_URL}/sucesos/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Le decimos a FastAPI que enviamos JSON
        },
        body: JSON.stringify(data) // Convertimos el objeto JS a texto JSON
      });

      if (!response.ok) {
        // Si el backend devuelve error (ej. 422 por validación), intentamos leerlo
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