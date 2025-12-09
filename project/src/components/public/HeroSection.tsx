import { Mountain, Footprints, Sparkles } from 'lucide-react';
import ParallaxCarousel from '../shared/ParallaxCarousel';

export default function HeroSection() {
  const carouselSlides = [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Levanto: Cuna Histórica de Chachapoyas',
      description: 'Descubre el Camino Inca original y el curacazgo ancestral',
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Naturaleza Exuberante',
      description: 'Bosques nubosos, lagunas glaciares y biodiversidad única',
    },
    {
      id: 3,
      image:
        'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Patrimonio Cultural Vivo',
      description: 'Tradiciones ancestrales que perduran en la comunidad',
    },
  ];

  return (
    <section id="inicio" className="pt-24 md:pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ParallaxCarousel slides={carouselSlides} autoPlay={true} />

        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-[#0077B6]/20">
            <Sparkles className="w-4 h-4 text-[#FFD166]" />
            <span className="text-sm font-medium text-gray-700">
              Patrimonio Cultural de Chachapoyas
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Levanto: Cuna Histórica de
            <br />
            <span className="text-[#0077B6]">Chachapoyas</span> y Hogar del
            <br />
            <span className="text-[#FF6B35]">Curacazgo Ancestral</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre el Camino Inca original, la historia viva y la gastronomía
            local en el corazón de los Andes amazónicos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() =>
                document
                  .getElementById('sitios')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group px-8 py-4 bg-[#0077B6] text-white rounded-lg font-semibold text-lg hover:bg-[#005F8F] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <Mountain className="w-5 h-5" />
              <span>Explorar Sitios</span>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById('historia')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group px-8 py-4 bg-white text-[#0077B6] border-2 border-[#0077B6] rounded-lg font-semibold text-lg hover:bg-[#0077B6] hover:text-white transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2"
            >
              <Footprints className="w-5 h-5" />
              <span>Conoce la Historia</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-[#0077B6] mb-2">1538</div>
              <div className="text-gray-700 font-medium">
                Primera Capital de Chachapoyas
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-[#FF6B35] mb-2">500+</div>
              <div className="text-gray-700 font-medium">
                Años de Historia Viva
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-[#FFD166] mb-2">
                Único
              </div>
              <div className="text-gray-700 font-medium">
                Camino Inca Original
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
