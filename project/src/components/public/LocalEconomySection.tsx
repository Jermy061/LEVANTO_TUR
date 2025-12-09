import { useState } from 'react';
import { Milk, Award, Heart, Sparkles } from 'lucide-react';
import FilterableGallery from '../shared/FilterableGallery';
import Lightbox from '../shared/Lightbox';

export default function LocalEconomySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const productImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Queso Fresco Artesanal',
      category: 'Quesos',
      description: 'Queso fresco elaborado diariamente con leche de vaca de altura',
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mantequilla Artesanal',
      category: 'Lácteos',
      description: 'Mantequilla cremosa producida con métodos tradicionales',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Licor de Leche',
      category: 'Bebidas',
      description: 'Destilado único y cremoso de Levanto, bebida de celebración',
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/5737436/pexels-photo-5737436.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Yogurt Natural',
      category: 'Lácteos',
      description: 'Yogurt cremoso sin conservantes, receta ancestral',
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Manjar Blanco',
      category: 'Postres',
      description: 'Postre tradicional de leche evaporada y caramelo',
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Queso Madurado',
      category: 'Quesos',
      description: 'Queso añejado en cuevas naturales por método ancestral',
    },
  ];

  const lightboxImages = productImages.map((item) => ({
    id: item.id,
    src: item.src,
    title: item.title,
    description: item.description,
  }));

  return (
    <section id="economia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-amber-50 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#FFD166]" />
            <span className="text-sm font-medium text-[#FF6B35]">
              Sabores Auténticos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sabores Puros:{' '}
            <span className="text-[#FF6B35]">
              Quesos y Lácteos Artesanales
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La tradición láctea de Levanto es reconocida en toda la región por
            su calidad excepcional y sabor único
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Quesos artesanales de Levanto"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-[#FFD166] text-gray-900 p-6 rounded-xl shadow-xl max-w-xs">
              <Milk className="w-8 h-8 mb-2" />
              <p className="text-sm font-bold">
                100% Artesanal
                <br />
                Producción Local
              </p>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2 animate-slide-in-right">
            <p className="text-lg text-gray-700 leading-relaxed">
              Levanto es famoso en toda la región de Chachapoyas por su{' '}
              <span className="font-bold text-[#FF6B35]">
                producción artesanal de quesos y lácteos
              </span>
              , elaborados con métodos tradicionales transmitidos de generación
              en generación.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Los pastos naturales de altura y el clima privilegiado de la zona
              otorgan a la leche características únicas que se reflejan en
              productos de{' '}
              <span className="font-semibold">calidad excepcional</span>: quesos
              frescos, madurados, mantequilla, yogurt y manjar blanco.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              El <span className="font-bold text-[#0077B6]">licor de leche</span>{' '}
              es la bebida tradicional por excelencia de Levanto, un destilado
              artesanal cremoso y aromático que forma parte de celebraciones y
              reuniones familiares desde tiempos ancestrales.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Nuestros Productos
            </h3>
            <p className="text-gray-600">
              Filtra por categoría para explorar toda nuestra línea de productos
            </p>
          </div>
          <FilterableGallery
            items={productImages}
            categories={['Quesos', 'Lácteos', 'Bebidas', 'Postres']}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-[#FFD166] rounded-lg flex items-center justify-center mb-4">
              <Milk className="w-7 h-7 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Quesos Artesanales
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Quesos frescos y madurados elaborados con leche de vaca de altura,
              siguiendo recetas tradicionales que garantizan un sabor
              inigualable.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border border-orange-100 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Licor de Leche
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Bebida tradicional única de Levanto, un destilado cremoso y
              aromático que es símbolo de hospitalidad y celebración local.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-[#0077B6] rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Lácteos Frescos
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Mantequilla, yogurt, manjar blanco y otros derivados lácteos
              producidos diariamente con los más altos estándares de calidad.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Visita a Productores Locales
              </h3>
              <p className="text-gray-700">
                Conoce de cerca el proceso artesanal y adquiere productos
                frescos directamente de las familias productoras de Levanto.
              </p>
            </div>
            <button className="px-8 py-4 bg-[#FF6B35] text-white rounded-lg font-semibold hover:bg-[#E55A2B] transition-colors duration-200 shadow-lg hover:shadow-xl whitespace-nowrap">
              Contactar Productores
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
