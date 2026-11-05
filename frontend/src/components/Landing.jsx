import React from 'react';
import { Search, Map, Landmark, Users, FileText, ArrowRight } from 'lucide-react';

function Landing() {
  // 🖼️ AQUÍ PUEDES CAMBIAR LA IMAGEN DE FONDO DEL HERO
  const heroImage = "https://static.eldiario.es/clip/6adab925-cf7f-4c3c-b295-b8beb5f01b3a_source-aspect-ratio_default_0.webp";

  return (
    // Fondo principal: Gris carbón cálido, no negro puro.
    <div className="min-h-screen bg-[#12110F] text-[#B8B5AC] font-sans selection:bg-amber-900 selection:text-white">
      
      {/* --- NAVBAR FIJA --- */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4 text-sm bg-[#12110F]/90 backdrop-blur-md border-b border-[#2A2824]">
        
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Atlas de la Memoria" 
            className="h-12 md:h-14 w-auto object-contain" 
          />
        </a>
        
        {/* ENLACES */}
        <div className="hidden md:flex space-x-8 text-[#B8B5AC]">
          <a href="#" className="text-[#F5F2EB] border-b-2 border-amber-600 pb-1 font-medium tracking-wide">Inicio</a>
          <a href="/mapa" className="hover:text-[#F5F2EB] transition-colors">Atlas</a>
          <a href="#" className="hover:text-[#F5F2EB] transition-colors">Cronología</a>
          <a href="#" className="hover:text-[#F5F2EB] transition-colors">Documentos</a>
          <a href="#" className="hover:text-[#F5F2EB] transition-colors">Sobre el proyecto</a>
        </div>

        {/* BOTÓN Y BUSCADOR */}
        <div className="flex items-center space-x-6">
          <Search className="w-5 h-5 text-[#B8B5AC] cursor-pointer hover:text-[#F5F2EB] transition-colors" />
          <a href="/mapa" className="bg-amber-600 hover:bg-amber-500 text-[#12110F] font-bold py-2 px-6 rounded-sm transition-colors text-xs tracking-wider">
            Explorar el mapa
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex items-center px-12 md:px-24 pt-32 border-b border-[#2A2824]">
        
        {/* Imagen de fondo con overlay oscuro cálido */}
        <div 
          className="absolute inset-0 z-0 opacity-30 bg-cover bg-center mix-blend-luminosity"
          style={{ backgroundImage: `url('${heroImage}')` }}
        ></div>
        {/* Degradado que mezcla el gris carbón con la imagen */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#12110F] via-[#12110F]/90 to-transparent z-0"></div>

        <div className="relative z-10 max-w-3xl">
          {/* Título estilo periódico (Serif grande y grueso) */}
          <h1 className="text-5xl md:text-7xl font-serif text-[#F5F2EB] leading-[1.1] mb-8">
            La historia de un país,<br/> 
            <span className="text-[#D4C4A8] italic">contada desde</span><br/>
            sus territorios.
          </h1>
          
          <p className="text-lg text-[#A8A59C] mb-10 leading-relaxed max-w-2xl font-light">
            Explora, consulta y conoce los hechos, actores y territorios que han marcado la historia de Colombia. Un atlas interactivo de memoria histórica, construido a partir de fuentes documentales y registros verificados.
          </p>
          
          {/* Barra de búsqueda del Hero (Estilo editorial) */}
          <div className="flex items-center bg-[#1A1815] border border-[#3A3833] p-1 rounded-sm max-w-xl shadow-2xl">
            <Search className="w-5 h-5 text-[#6E6B63] ml-3" />
            <input 
              type="text" 
              placeholder="Buscar municipio, fecha, actor o acontecimiento..." 
              className="flex-1 bg-transparent border-none text-sm px-4 py-3 text-[#F5F2EB] focus:outline-none placeholder-[#6E6B63]"
            />
            <a href="/mapa" className="bg-amber-600 hover:bg-amber-500 text-[#12110F] font-bold py-3 px-6 text-sm transition-colors whitespace-nowrap">
              Explorar el mapa
            </a>
          </div>
        </div>
      </header>

      {/* --- SECCIÓN DESCUBRE (Fondo ligeramente más claro para contraste) --- */}
      <section className="px-12 md:px-24 py-24 relative z-10 bg-[#151411]">
        <div className="flex justify-between items-end mb-12 border-b border-[#2A2824] pb-4">
          <h2 className="text-3xl font-serif text-[#F5F2EB]">Descubre por tema</h2>
          <a href="#" className="text-xs text-amber-500 hover:text-amber-400 flex items-center space-x-1 uppercase tracking-widest font-bold">
            <span>Ver todos los temas</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Tarjeta 1 */}
          <a href="/mapa" className="group bg-[#1A1815] border border-[#2A2824] hover:border-amber-700/50 transition-all cursor-pointer flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" alt="Mapa" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 grayscale" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1815] to-transparent"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 text-[#F5F2EB] mb-3">
                <Map className="w-4 h-4 text-amber-600" />
                <h3 className="font-bold font-serif text-lg">Atlas del conflicto</h3>
              </div>
              <p className="text-xs text-[#A8A59C] leading-relaxed mb-6 flex-1">
                Explora los sucesos documentados en el territorio colombiano, desde la escala nacional hasta el municipio.
              </p>
              <span className="text-xs text-amber-600 flex items-center space-x-1 group-hover:text-amber-500 uppercase tracking-widest font-bold">
                <span>Explorar</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>

          {/* Tarjeta 2 */}
          <a href="#" className="group bg-[#1A1815] border border-[#2A2824] hover:border-amber-700/50 transition-all cursor-pointer flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=1000&auto=format&fit=crop" alt="Politica" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 grayscale" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1815] to-transparent"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 text-[#F5F2EB] mb-3">
                <Landmark className="w-4 h-4 text-amber-600" />
                <h3 className="font-bold font-serif text-lg">Política y Estado</h3>
              </div>
              <p className="text-xs text-[#A8A59C] leading-relaxed mb-6 flex-1">
                Investiga gobiernos, decisiones institucionales, procesos de paz y transformaciones del conflicto.
              </p>
              <span className="text-xs text-amber-600 flex items-center space-x-1 group-hover:text-amber-500 uppercase tracking-widest font-bold">
                <span>Explorar</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>

          {/* Tarjeta 3 */}
          <a href="#" className="group bg-[#1A1815] border border-[#2A2824] hover:border-amber-700/50 transition-all cursor-pointer flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop" alt="Sociedad" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 grayscale" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1815] to-transparent"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 text-[#F5F2EB] mb-3">
                <Users className="w-4 h-4 text-amber-600" />
                <h3 className="font-bold font-serif text-lg">Sociedad y territorio</h3>
              </div>
              <p className="text-xs text-[#A8A59C] leading-relaxed mb-6 flex-1">
                Conoce testimonios, desplazamientos, resistencias y las transformaciones sociales en las comunidades.
              </p>
              <span className="text-xs text-amber-600 flex items-center space-x-1 group-hover:text-amber-500 uppercase tracking-widest font-bold">
                <span>Explorar</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>

          {/* Tarjeta 4 */}
          <a href="#" className="group bg-[#1A1815] border border-[#2A2824] hover:border-amber-700/50 transition-all cursor-pointer flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?q=80&w=1000&auto=format&fit=crop" alt="Archivo" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 grayscale" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1815] to-transparent"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 text-[#F5F2EB] mb-3">
                <FileText className="w-4 h-4 text-amber-600" />
                <h3 className="font-bold font-serif text-lg">Archivo documental</h3>
              </div>
              <p className="text-xs text-[#A8A59C] leading-relaxed mb-6 flex-1">
                Accede a informes, sentencias, artículos y archivos históricos de distintas instituciones.
              </p>
              <span className="text-xs text-amber-600 flex items-center space-x-1 group-hover:text-amber-500 uppercase tracking-widest font-bold">
                <span>Explorar</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>

        </div>
      </section>
    </div>
  );
}

export default Landing;
