import { useState } from 'react';
import { MapPin } from 'lucide-react';
import FilterableGallery from '../shared/FilterableGallery';
import Lightbox from '../shared/Lightbox';
import TourCard from './TourCard';

export default function ArchaeologicalSites() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const sites = [
    {
      id: 1,
      name: 'Yalape',
      description:
        'Complejo arqueológico pre-inca con impresionantes construcciones circulares de piedra, considerado uno de los sitios más importantes de la cultura Chachapoyas.',
      imageUrl:
        'https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=800',
      difficulty: 'Moderada',
      duration: '3-4 horas',
      highlights: ['Arquitectura circular', 'Vistas panorámicas', 'Cultura Chachapoyas'],
    },
    {
      id: 2,
      name: 'Molino Huayco',
      description:
        'Sitio arqueológico que combina construcciones prehispánicas con elementos coloniales, ofreciendo un fascinante testimonio de la fusión cultural en Levanto.',
      imageUrl:
        'https://images.pexels.com/photos/2422964/pexels-photo-2422964.jpeg?auto=compress&cs=tinysrgb&w=800',
      difficulty: 'Fácil',
      duration: '2-3 horas',
      highlights: ['Fusión cultural', 'Molino colonial', 'Naturaleza'],
    },
    {
      id: 3,
      name: 'Laguna Tilacancha',
      description:
        'Hermosa laguna de origen glaciar rodeada de bosques nubosos, considerada sagrada por las culturas ancestrales. Un paraíso natural para el ecoturismo.',
      imageUrl:
        'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=800',
      difficulty: 'Moderada-Difícil',
      duration: '5-6 horas',
      highlights: ['Laguna glaciar', 'Bosque nuboso', 'Avistamiento de aves'],
    },
  ];

  const galleryItems = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Yalape',
      category: 'Arqueológico',
      description: 'Complejo arqueológico pre-inca con arquitectura circular',
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Laguna Tilacancha',
      category: 'Naturaleza',
      description: 'Laguna glaciar sagrada rodeada de bosque nuboso',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/2422964/pexels-photo-2422964.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Molino Huayco',
      category: 'Arqueológico',
      description: 'Fusión de arquitectura prehispánica y colonial',
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Camino Inca',
      category: 'Cultura',
      description: 'Ruta original del Qhapaq Ñan ancestral',
    },
  ];

  const lightboxImages = galleryItems.map((item) => ({
    id: item.id,
    src: item.src,
    title: item.title,
    description: item.description,
  }));

  return (
    <section id="sitios" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-[#0077B6]" />
            <span className="text-sm font-medium text-[#0077B6]">
              Descubre Levanto
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sitios Arqueológicos y{' '}
            <span className="text-[#0077B6]">Naturales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora los tesoros arqueológicos y paisajes naturales que hacen de
            Levanto un destino único en Chachapoyas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sites.map((site, index) => (
            <div
              key={site.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <TourCard site={site} />
            </div>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Galería de Sitios
            </h3>
            <p className="text-gray-600">
              Filtra por categoría y haz clic para ver detalles amplificados
            </p>
          </div>
          <FilterableGallery
            items={galleryItems}
            categories={['Arqueológico', 'Naturaleza', 'Cultura']}
            onImageClick={(item) => {
              const index = lightboxImages.findIndex((img) => img.id === item.id);
              setLightboxIndex(index);
              setLightboxOpen(true);
            }}
          />
        </div>

        <Lightbox
          images={lightboxImages}
          isOpen={lightboxOpen}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrevious={() =>
            setLightboxIndex((prev) =>
              prev === 0 ? lightboxImages.length - 1 : prev - 1
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev === lightboxImages.length - 1 ? 0 : prev + 1
            )
          }
        />

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Camino Inca Original
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Levanto forma parte del{' '}
                <span className="font-semibold text-[#0077B6]">
                  Qhapaq Ñan
                </span>
                , el legendario sistema de caminos incas que conectaba todo el
                imperio. Este tramo original atraviesa paisajes espectaculares y
                sitios arqueológicos únicos.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Caminar por estas rutas es experimentar la historia en primera
                persona, siguiendo las huellas de los antiguos chasquis y
                descubriendo la ingeniería ancestral que desafió las montañas.
              </p>
              <button className="px-6 py-3 bg-[#0077B6] text-white rounded-lg font-semibold hover:bg-[#005F8F] transition-colors duration-200 shadow-md hover:shadow-lg">
                Planifica tu Visita
              </button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Camino Inca"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
