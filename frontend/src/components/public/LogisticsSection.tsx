import { Bus, Home, Phone, MapPin } from 'lucide-react';
import TransportCard from './TransportCard';
import InteractiveMap from '../shared/InteractiveMap';
import ExpandableCard from '../shared/ExpandableCard';

export default function LogisticsSection() {
  const transportServices = [
    {
      id: 1,
      driverName: 'Juan Rodríguez',
      vehicleType: 'Combi',
      phone: '987654321',
      route: 'Chachapoyas - Levanto',
      schedule: 'Salidas cada hora de 6:00 AM a 6:00 PM',
    },
    {
      id: 2,
      driverName: 'Rosa Mendoza',
      vehicleType: 'Colectivo',
      phone: '987654322',
      route: 'Chachapoyas - Levanto',
      schedule: 'Servicio express disponible',
    },
    {
      id: 3,
      driverName: 'Pedro Vásquez',
      vehicleType: 'Combi',
      phone: '987654323',
      route: 'Chachapoyas - Levanto - Yalape',
      schedule: 'Tours a sitios arqueológicos',
    },
  ];

  const mapPins = [
    {
      id: 1,
      name: 'Yalape',
      lat: 35,
      lng: 45,
      image: 'https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complejo arqueológico pre-inca',
      category: 'Arqueológico',
    },
    {
      id: 2,
      name: 'Molino Huayco',
      lat: 50,
      lng: 60,
      image: 'https://images.pexels.com/photos/2422964/pexels-photo-2422964.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Fusión de arquitectura prehispánica',
      category: 'Arqueológico',
    },
    {
      id: 3,
      name: 'Laguna Tilacancha',
      lat: 25,
      lng: 70,
      image: 'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Laguna glaciar sagrada',
      category: 'Naturaleza',
    },
    {
      id: 4,
      name: 'Hospedaje Central',
      lat: 45,
      lng: 50,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Alojamiento en el centro de Levanto',
      category: 'Hospedaje',
    },
  ];

  const hospedajes = [
    {
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Casa Rural Levanto',
      description: 'Hospedaje familiar tradicional',
      details: 'Casa rural autêntica con todas las comodidades modernas. Disfruta de la calidez del hogar levantino con vistas a las montañas y acceso directo a actividades culturales.',
      features: ['WiFi gratuito', 'Desayuno incluido', 'Guía local', 'Cocina compartida'],
    },
    {
      image: 'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Turismo Comunitario',
      description: 'Experiencia de inmersión cultural',
      details: 'Vive con familias locales y participa en sus actividades diarias. Aprende sobre la producción de lácteos, la gastronomía local y las tradiciones ancestrales de Levanto.',
      features: ['Comidas caseras', 'Actividades tradicionales', 'Intercambio cultural', 'Tours privados'],
    },
    {
      image: 'https://images.pexels.com/photos/1159075/pexels-photo-1159075.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Posada del Inca',
      description: 'Hotel boutique con encanto histórico',
      details: 'Alojamiento con decoración temática que evoca la época inca. Ubicado en el corazón del patrimonio arqueológico, ideal para exploradores y viajeros culturales.',
      features: ['Restaurant local', 'Museo privado', 'Tours guiados', 'Biblioteca histórica'],
    },
  ];

  return (
    <section id="logistica" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-[#0077B6]" />
            <span className="text-sm font-medium text-[#0077B6]">
              Planifica tu Viaje
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Logística y <span className="text-[#0077B6]">Contacto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas saber para llegar y hospedarte en Levanto
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-[#0077B6] rounded-lg flex items-center justify-center">
              <Bus className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Transporte</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {transportServices.map((service, index) => (
              <div
                key={service.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TransportCard service={service} />
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-[#0077B6] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Información de Transporte
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-medium">Desde Chachapoyas:</span> El
                  viaje a Levanto dura aproximadamente 30-40 minutos. Los
                  vehículos salen desde el terminal terrestre y la Plaza de
                  Armas. Tarifa aproximada: S/. 5-7 por persona.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-[#0077B6] rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Ubicación</h3>
          </div>
          <InteractiveMap
            pins={mapPins}
            mapImage="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1200"
          />
        </div>

        <div>
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Hospedaje</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hospedajes.map((hospedaje, index) => (
              <ExpandableCard
                key={index}
                image={hospedaje.image}
                title={hospedaje.title}
                description={hospedaje.description}
                details={hospedaje.details}
                features={hospedaje.features}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-[#0077B6] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                ¿Listo para Visitar Levanto?
              </h3>
              <p className="text-blue-50 leading-relaxed mb-6">
                Contáctanos para obtener más información sobre rutas, hospedaje,
                tours guiados y experiencias personalizadas en Levanto y sus
                alrededores.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Información turística disponible</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Guías locales certificados</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <button className="px-8 py-4 bg-white text-[#0077B6] rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl">
                Contactar Municipalidad
              </button>
              <button className="px-8 py-4 bg-[#FFD166] text-gray-900 rounded-lg font-bold text-lg hover:bg-[#F5C756] transition-colors duration-200 shadow-lg hover:shadow-xl">
                Solicitar Guía Turística
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
