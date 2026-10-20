import React, { useState } from 'react';
import { sucesoService } from './services/api';

function Admin() {
  const [formData, setFormData] = useState({
    titulo: '',
    fecha: '',
    latitud: '',
    longitud: '',
    departamento: '',
    municipio: '',
    descripcion: '',
    video_url: '',
    fuentes: ''
  });

  const [mensaje, setMensaje] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje(null);

    try {
      const fuentesParsed = formData.fuentes ? JSON.parse(formData.fuentes) : [];
      
      const payload = {
        ...formData,
        latitud: parseFloat(formData.latitud),
        longitud: parseFloat(formData.longitud),
        fuentes: fuentesParsed
      };

      await sucesoService.crearSuceso(payload);
      
      setMensaje({ tipo: 'exito', texto: '¡Suceso creado exitosamente!' });
      
      setFormData({
        titulo: '', fecha: '', latitud: '', longitud: '',
        departamento: '', municipio: '', descripcion: '', video_url: '', fuentes: ''
      });

    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.message || 'Error al crear el suceso' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8 font-mono">
      <div className="max-w-2xl mx-auto bg-zinc-900 p-6 rounded border border-zinc-800 shadow-xl">
        <h1 className="text-2xl font-bold mb-6 text-red-500">Cargar Nuevo Suceso</h1>
        
        {mensaje && (
          <div className={`p-4 mb-4 rounded ${mensaje.tipo === 'exito' ? 'bg-green-900/50 border border-green-800' : 'bg-red-900/50 border border-red-800'}`}>
            {mensaje.texto}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-zinc-400">Título</label>
            <input type="text" name="titulo" required value={formData.titulo} onChange={handleChange} className="w-full p-2 bg-zinc-950 border border-zinc-700 rounded text-zinc-100" />
          </div>

          <div>
            <label className="block text-sm mb-1 text-zinc-400">Fecha (YYYY-MM-DD)</label>
            <input type="date" name="fecha" required value={formData.fecha} onChange={handleChange} className="w-full p-2 bg-zinc-950 border border-zinc-700 rounded text-zinc-100" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-zinc-400">Latitud</label>
              <input type="number" step="any" name="latitud" required value={formData.latitud} onChange={handleChange} className="w-full p-2 bg-zinc-950 border border-zinc-700 rounded text-zinc-100" />
            </div>
            <div>
              <label className="block text-sm mb-1 text-zinc-400">Longitud</label>
              <input type="number" step="any" name="longitud" required value={formData.longitud} onChange={handleChange} className="w-full p-2 bg-zinc-950 border border-zinc-700 rounded text-zinc-100" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-zinc-400">Departamento</label>
              <input type="text" name="departamento" required value={formData.departamento} onChange={handleChange} className="w-full p-2 bg-zinc-950 border border-zinc-700 rounded text-zinc-100" />
            </div>
            <div>
              <label className="block text-sm mb-1 text-zinc-400">Municipio</label>
              <input type="text" name="municipio" required value={formData.municipio} onChange={handleChange} className="w-full p-2 bg-zinc-950 border border-zinc-700 rounded text-zinc-100" />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1 text-zinc-400">Descripción / Relato</label>
            <textarea name="descripcion" required rows="5" value={formData.descripcion} onChange={handleChange} className="w-full p-2 bg-zinc-950 border border-zinc-700 rounded text-zinc-100" />
          </div>

          <div>
            <label className="block text-sm mb-1 text-zinc-400">URL del Video (YouTube)</label>
            <input type="url" name="video_url" value={formData.video_url} onChange={handleChange} className="w-full p-2 bg-zinc-950 border border-zinc-700 rounded text-zinc-100" />
          </div>

          <div>
            <label className="block text-sm mb-1 text-zinc-400">Fuentes (Formato JSON)</label>
            <textarea name="fuentes" rows="3" placeholder='[{"nombre": "Fuente 1", "url": "https://..."}]' value={formData.fuentes} onChange={handleChange} className="w-full p-2 bg-zinc-950 border border-zinc-700 rounded text-zinc-100" />
            <p className="text-xs text-zinc-500 mt-1">Debe ser un arreglo de objetos con las claves "nombre" y "url".</p>
          </div>

          <button type="submit" className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors">
            Guardar Suceso
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;