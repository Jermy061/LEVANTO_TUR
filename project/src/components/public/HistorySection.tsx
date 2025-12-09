import { Crown, Users, Landmark, ScrollText } from 'lucide-react';
import Timeline from '../shared/Timeline';
import BeforeAfterSlider from '../shared/BeforeAfterSlider';

export default function HistorySection() {
  const timelineEvents = [
    {
      id: 1,
      year: '1538',
      title: 'Fundación de San Juan de la Frontera',
      description:
        'Levanto es designada como la primera sede de Chachapoyas, convirtiéndose en epicentro político y administrativo de la región.',
      image:
        'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      year: '1600s',
      title: 'Era del Curacazgo',
      description:
        'Levanto mantiene su importancia como centro cultural del Curacazgo de Tayta Lóloc, preservando tradiciones ancestrales.',
      image:
        'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      year: 'Actualidad',
      title: 'Patrimonio Vivo',
      description:
        'Levanto se posiciona como destino de turismo cultural, conservando la fusión entre tradiciones prehispánicas y coloniales.',
      image:
        'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="historia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
            <ScrollText className="w-4 h-4 text-[#0077B6]" />
            <span className="text-sm font-medium text-[#0077B6]">
              Nuestra Historia
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            La Primera Capital:{' '}
            <span className="text-[#0077B6]">
              San Juan de la Frontera de Levanto
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un legado ancestral que marcó el inicio de la historia colonial en
            Chachapoyas
          </p>
        </div>

        <div className="mb-16">
          <Timeline events={timelineEvents} />
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Comparativa: Levanto en el Tiempo
            </h3>
            <p className="text-gray-600">
              Desliza para ver la transformación del Camino Inca
            </p>
          </div>
          <BeforeAfterSlider
            beforeImage="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800"
            afterImage="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800"
            beforeLabel="Camino Inca Original"
            afterLabel="Estado Actual"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in">
            <div className="w-12 h-12 bg-[#0077B6] rounded-lg flex items-center justify-center mb-4">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Primera Capital
            </h3>
            <p className="text-gray-600 text-sm">
              Sede fundacional de San Juan de la Frontera en 1538, marcando el
              inicio de la era colonial.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in">
            <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-4">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Curacazgo Ancestral
            </h3>
            <p className="text-gray-600 text-sm">
              Territorio del legendario Tayta Lóloc, líder del curacazgo que
              gobernaba estas tierras.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in">
            <div className="w-12 h-12 bg-[#FFD166] rounded-lg flex items-center justify-center mb-4">
              <ScrollText className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Camino Inca
            </h3>
            <p className="text-gray-600 text-sm">
              Ruta original del Qhapaq Ñan que conectaba el imperio incaico con
              la selva amazónica.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in">
            <div className="w-12 h-12 bg-[#0077B6] rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Cultura Viva
            </h3>
            <p className="text-gray-600 text-sm">
              Tradiciones ancestrales que perduran en la comunidad local hasta
              nuestros días.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
