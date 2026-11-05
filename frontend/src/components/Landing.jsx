import React from 'react';
import { Search, Map, Landmark, Users, FileText, ArrowRight } from 'lucide-react';

function Landing() {
  // 🖼️ AQUÍ PUEDES CAMBIAR LA IMAGEN DE FONDO DEL HERO
  // Intenta usar una foto en blanco y negro o sepia para que combine con el periódico
  const heroImage = "https://static.eldiario.es/clip/6adab925-cf7f-4c3c-b295-b8beb5f01b3a_source-aspect-ratio_default_0.webp";

  return (
    // Fondo general color papel (crema)
    <div className="min-h-screen bg-[#F4F1EA] text-[#1A1A1A] font-serif selection:bg-[#D4C4A8] selection:text-[#1A1A1A]">
      
      {/* --- NAVBAR TIPO CABECERA DE PERIÓDICO --- */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-[#F4F1EA]/95 backdrop-blur-sm border-b-2 border-[#1A1A1A]">
        
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Atlas de la Memoria" 
            className="h-12 md:h-14 w-auto object-contain grayscale mix-blend-multiply" 
          />
        </a>
        
        {/* ENLACES CON ESTILO DE TITULARES */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-bold text-[#1A1A1A]">
          <a href="#" className="border-b-2 border-amber-600 pb-1">Inicio</a>
          <a href="/mapa" className="hover:text-amber-700 transition-colors">Atlas</a>
          <a href="#" className="hover:text-amber-700 transition-colors">Cronología</a>
          <a href="#" className="hover:text-amber-700 transition-colors">Documentos</a>
          <a href="#" className="hover:text-amber-700 transition-colors">Sobre el proyecto</a>
        </div>

        {/* BOTÓN Y BUSCADOR */}
        <div className="flex items-center space-x-6">
          <Search className="w-5 h-5 text-[#1A1A1A] cursor-pointer hover:text-amber-700" />
          <a href="/mapa" className="bg-[#1A1A1A] hover:bg-amber-700 text-[#F4F1EA] font-bold py-2 px-6 rounded-none transition-colors text-xs uppercase tracking-widest">
            Explorar el mapa
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION TIPO PORTADA --- */}
      <header className="relative h-screen flex items-center px-12 md:px-24 pt-32 border-b-2 border-[#1A1A1A]">
        
        {/* Imagen de fondo con overlay sepia para efecto vintage */}
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center grayscale"
          style={{ backgroundImage: `url('${heroImage}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F1EA] via-[#F4F1EA]/80 to-transparent z-0"></div>

        <div className="relative z-10 max-w-4xl mt-12">
          
          {/* Cabecera del periódico */}
          <div className="flex items-center space-x-4 mb-6 border-b border-[#1A1A1A] pb-2">
            <span className="text-xs uppercase tracking-widest font-bold">Edición Especial</span>
            <span className="text-xs text-gray-500 italic">Memoria Histórica de Colombia</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-[#1A1A1A] leading-[1.05] mb-8 tracking-tighter">
            La historia de un país, contada desde sus territorios.
          </h1>
          
          <p className="text-lg md:text-xl text-[#333] mb-10 leading-relaxed max-w-2xl font-light">
            Explora, consulta y conoce los hechos, actores y territorios que han marcado la historia de Colombia. Un atlas interactivo de memoria histórica, construido a partir de fuentes documentales y registros verificados.
          </p>
          
          {/* Barra de búsqueda estilo archivo */}
          <div className="flex items-center bg-white border-2 border-[#1A1A1A] p-1 max-w-2xl shadow-[4px_4px_0px_rgba(26,26,26,1)]">
            <Search className="w-5 h-5 text-[#1A1A1A] ml-3" />
            <input 
              type="text" 
              placeholder="Buscar municipio, fecha, actor o acontecimiento..." 
              className="flex-1 bg-transparent border-none text-sm px-4 py-3 text-[#1A1A1A] focus:outline-none placeholder-gray-500 font-sans"
            />
            <a href="/mapa" className="bg-[#1A1A1A] hover:bg-amber-700 text-[#F4F1EA] font-bold py-3 px-6 text-sm transition-colors whitespace-nowrap uppercase tracking-widest">
              Explorar
            </a>
          </div>
        </div>
      </header>

      {/* --- SECCIÓN DESCUBRE TIPO SECCIONES DE PERIÓDICO --- */}
      <section className="px-12 md:px-24 py-20 relative z-10 bg-[#F4F1EA]">
        <div className="flex justify-between items-end mb-10 border-b-2 border-[#1A1A1A] pb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] uppercase tracking-tight">Descubre por tema</h2>
          <a href="#" className="text-xs text-[#1A1A1A] hover:text-amber-700 flex items-center space-x-1 uppercase tracking-widest font-bold">
            <span>Ver todos los temas</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Tarjeta 1 */}
          <a href="/mapa" className="group flex flex-col border-t-4 border-[#1A1A1A] pt-4 cursor-pointer">
            <div className="h-48 overflow-hidden relative mb-4 border border-gray-300">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" alt="Mapa" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
            </div>
            <div className="flex items-center space-x-2 text-[#1A1A1A] mb-2">
              <Map className="w-4 h-4 text-amber-700" />
              <h3 className="font-bold text-xl uppercase tracking-tighter">Atlas del conflicto</h3>
            </div>
            <p className="text-sm text-[#444] leading-relaxed mb-4 flex-1 font-sans">
              Explora los sucesos documentados en el territorio colombiano, desde la escala nacional hasta el municipio.
            </p>
            <span className="text-xs text-[#1A1A1A] flex items-center space-x-1 group-hover:text-amber-700 uppercase tracking-widest font-bold border-b border-[#1A1A1A] pb-1 w-max">
              <span>Explorar</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>

          {/* Tarjeta 2 */}
          <a href="#" className="group flex flex-col border-t-4 border-[#1A1A1A] pt-4 cursor-pointer">
            <div className="h-48 overflow-hidden relative mb-4 border border-gray-300">
              <img src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=1000&auto=format&fit=crop" alt="Politica" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
            </div>
            <div className="flex items-center space-x-2 text-[#1A1A1A] mb-2">
              <Landmark className="w-4 h-4 text-amber-700" />
              <h3 className="font-bold text-xl uppercase tracking-tighter">Política y Estado</h3>
            </div>
            <p className="text-sm text-[#444] leading-relaxed mb-4 flex-1 font-sans">
              Investiga gobiernos, decisiones institucionales, procesos de paz y transformaciones del conflicto.
            </p>
            <span className="text-xs text-[#1A1A1A] flex items-center space-x-1 group-hover:text-amber-700 uppercase tracking-widest font-bold border-b border-[#1A1A1A] pb-1 w-max">
              <span>Explorar</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>

          {/* Tarjeta 3 */}
          <a href="#" className="group flex flex-col border-t-4 border-[#1A1A1A] pt-4 cursor-pointer">
            <div className="h-48 overflow-hidden relative mb-4 border border-gray-300">
              <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop" alt="Sociedad" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
            </div>
            <div className="flex items-center space-x-2 text-[#1A1A1A] mb-2">
              <Users className="w-4 h-4 text-amber-700" />
              <h3 className="font-bold text-xl uppercase tracking-tighter">Sociedad y territorio</h3>
            </div>
            <p className="text-sm text-[#444] leading-relaxed mb-4 flex-1 font-sans">
              Conoce testimonios, desplazamientos, resistencias y las transformaciones sociales en las comunidades.
            </p>
            <span className="text-xs text-[#1A1A1A] flex items-center space-x-1 group-hover:text-amber-700 uppercase tracking-widest font-bold border-b border-[#1A1A1A] pb-1 w-max">
              <span>Explorar</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>

          {/* Tarjeta 4 */}
          <a href="#" className="group flex flex-col border-t-4 border-[#1A1A1A] pt-4 cursor-pointer">
            <div className="h-48 overflow-hidden relative mb-4 border border-gray-300">
              <img src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?q=80&w=1000&auto=format&fit=crop" alt="Archivo" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
            </div>
            <div className="flex items-center space-x-2 text-[#1A1A1A] mb-2">
              <FileText className="w-4 h-4 text-amber-700" />
              <h3 className="font-bold text-xl uppercase tracking-tighter">Archivo documental</h3>
            </div>
            <p className="text-sm text-[#444] leading-relaxed mb-4 flex-1 font-sans">
              Accede a informes, sentencias, artículos y archivos históricos de distintas instituciones.
            </p>
            <span className="text-xs text-[#1A1A1A] flex items-center space-x-1 group-hover:text-amber-700 uppercase tracking-widest font-bold border-b border-[#1A1A1A] pb-1 w-max">
              <span>Explorar</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>

        </div>
      </section>
    </div>
  );
}

export default Landing;
