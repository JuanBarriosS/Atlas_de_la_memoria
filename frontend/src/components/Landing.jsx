import React from 'react';
import { Search, Map, Landmark, Users, FileText, ArrowRight } from 'lucide-react';

function Landing() {
  const heroImage = "https://static.eldiario.es/clip/6adab925-cf7f-4c3c-b295-b8beb5f01b3a_source-aspect-ratio_default_0.webp";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-amber-900 selection:text-white">
      
      {/* --- NAVBAR FIJA --- */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4 text-sm bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-800/50">
        
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Atlas de la Memoria" 
            className="h-12 md:h-14 w-auto object-contain" 
          />
        </a>
        
        {/* ENLACES */}
        <div className="hidden md:flex space-x-8 text-zinc-300">
          <a href="#" className="text-white border-b-2 border-amber-500 pb-1 font-medium">Inicio</a>
          <a href="/mapa" className="hover:text-white transition-colors">Atlas</a>
          <a href="#" className="hover:text-white transition-colors">Cronología</a>
          <a href="#" className="hover:text-white transition-colors">Documentos</a>
          <a href="#" className="hover:text-white transition-colors">Sobre el proyecto</a>
        </div>

        {/* BOTÓN Y BUSCADOR */}
        <div className="flex items-center space-x-6">
          <Search className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-white transition-colors" />
          <a href="/mapa" className="bg-amber-600 hover:bg-amber-500 text-black font-bold py-2 px-6 rounded-sm transition-colors text-xs tracking-wider">
            Explorar el mapa
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      {/* Se agrega 'pt-32' para compensar la barra fija y que el contenido no quede tapado */}
      <header className="relative h-screen flex items-center px-12 md:px-24 pt-32">
        
        {/* Imagen de fondo con overlay oscuro */}
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-0"></div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight mb-6">
            La historia de un país,<br/> contada desde sus territorios.
          </h1>
          <p className="text-lg text-zinc-300 mb-10 leading-relaxed max-w-2xl">
            Explora, consulta y conoce los hechos, actores y territorios que han marcado la historia de Colombia. Un atlas interactivo de memoria histórica, construido a partir de fuentes documentales y registros verificados.
          </p>
          
          {/* Barra de búsqueda del Hero */}
          <div className="flex items-center bg-[#1a1a1a] border border-zinc-700 p-1 rounded-sm max-w-xl shadow-2xl">
            <Search className="w-5 h-5 text-zinc-500 ml-3" />
            <input 
              type="text" 
              placeholder="Buscar municipio, fecha, actor o acontecimiento..." 
              className="flex-1 bg-transparent border-none text-sm px-4 py-3 text-white focus:outline-none placeholder-zinc-500"
            />
            <a href="/mapa" className="bg-amber-600 hover:bg-amber-500 text-black font-bold py-3 px-6 text-sm transition-colors whitespace-nowrap">
              Explorar el mapa
            </a>
          </div>
        </div>
      </header>

      {/* --- SECCIÓN DESCUBRE --- */}
      <section className="px-12 md:px-24 py-20 relative z-10 bg-[#0a0a0a]">
        <div className="flex justify-between items-end mb-10 border-b border-zinc-800 pb-4">
          <h2 className="text-2xl font-serif text-white">Descubre por tema</h2>
          <a href="#" className="text-xs text-amber-500 hover:text-amber-400 flex items-center space-x-1">
            <span>Ver todos los temas</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Tarjeta 1 */}
          <a href="/mapa" className="group bg-[#141414] border border-zinc-800 hover:border-amber-900/50 transition-all cursor-pointer">
            <div className="h-40 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" alt="Mapa" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 text-white mb-3">
                <Map className="w-4 h-4 text-amber-500" />
                <h3 className="font-bold">Atlas del conflicto</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6 h-16">
                Explora los sucesos documentados en el territorio colombiano, desde la escala nacional hasta el municipio.
              </p>
              <span className="text-xs text-amber-500 flex items-center space-x-1 group-hover:text-amber-400">
                <span>Explorar</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>

          {/* Tarjeta 2 */}
          <a href="#" className="group bg-[#141414] border border-zinc-800 hover:border-amber-900/50 transition-all cursor-pointer">
            <div className="h-40 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=1000&auto=format&fit=crop" alt="Politica" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 text-white mb-3">
                <Landmark className="w-4 h-4 text-amber-500" />
                <h3 className="font-bold">Política y Estado</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6 h-16">
                Investiga gobiernos, decisiones institucionales, procesos de paz y transformaciones del conflicto.
              </p>
              <span className="text-xs text-amber-500 flex items-center space-x-1 group-hover:text-amber-400">
                <span>Explorar</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>

          {/* Tarjeta 3 */}
          <a href="#" className="group bg-[#141414] border border-zinc-800 hover:border-amber-900/50 transition-all cursor-pointer">
            <div className="h-40 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop" alt="Sociedad" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 text-white mb-3">
                <Users className="w-4 h-4 text-amber-500" />
                <h3 className="font-bold">Sociedad y territorio</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6 h-16">
                Conoce testimonios, desplazamientos, resistencias y las transformaciones sociales en las comunidades.
              </p>
              <span className="text-xs text-amber-500 flex items-center space-x-1 group-hover:text-amber-400">
                <span>Explorar</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>

          {/* Tarjeta 4 */}
          <a href="#" className="group bg-[#141414] border border-zinc-800 hover:border-amber-900/50 transition-all cursor-pointer">
            <div className="h-40 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?q=80&w=1000&auto=format&fit=crop" alt="Archivo" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 text-white mb-3">
                <FileText className="w-4 h-4 text-amber-500" />
                <h3 className="font-bold">Archivo documental</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6 h-16">
                Accede a informes, sentencias, artículos y archivos históricos de distintas instituciones.
              </p>
              <span className="text-xs text-amber-500 flex items-center space-x-1 group-hover:text-amber-400">
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
