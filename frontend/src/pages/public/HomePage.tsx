// src/pages/public/HomePage.tsx
import React, { useState } from 'react';
import HeroSection from '../../components/public/HeroSection';
import { Landmark, Utensils, Hotel, Map, History } from 'lucide-react';
import { cn } from '../../lib/utils';

// DATA (could be moved to a separate file)
const historyData = {
  prehispanic: {
    title: 'Origen Prehispánico',
    content: 'El pueblo se asienta sobre vestigios del antiguo Curacazgo Chachapoya. La zona fue conquistada por los Incas, quienes establecieron un bastión y utilizaron la ruta del Qhapac Ñan (Camino Inca) que pasa por el distrito.',
  },
  colonial: {
    title: 'Época Colonial',
    content: 'Levanto fue un punto clave en la fundación española. La sede de la ciudad de San Juan de la Frontera de los Chachapoyas se trasladó brevemente a Levanto en 1538, antes de ser reubicada en su emplazamiento actual en 1544.',
  },
  heritage: {
    title: 'Patrimonio Histórico',
    content: 'Declarado Monumento y Ambiente Urbano Monumental. Los principales monumentos son el Templo Matriz y las Cuatro Capillas Posa. También destaca la histórica Casa del Cacique de Levanto (Tayta Lóloc).',
  },
};

const archeologySites = [
  { name: 'Yálape', description: 'Construcción semifortificada Chachapoya con 300 estructuras circulares.', image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dbaa4?q=80&w=870' },
  { name: 'Qhapac Ñan', description: 'Tramo de la Gran Red de Caminos Inca, un vestigio cultural de alto valor.', image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=870' },
  { name: 'Molino Huayco', description: 'Monumento arqueológico donde, según la tradición, se extraía oro.', image: 'https://images.unsplash.com/photo-1628096791611-1da389a41795?q=80&w=870' },
  { name: 'Yurak Urco', description: 'Un mirador natural con vestigios arqueológicos en la ruta hacia Levanto.', image: 'https://images.unsplash.com/photo-1559624922-c827cda47a18?q=80&w=870' },
];

const attractions = [
  { name: 'Fortaleza de Kuélap', description: 'La ciudadela amurallada más famosa de la cultura Chachapoyas.', image: 'https://images.unsplash.com/photo-1613298835391-783451c888d6?q=80&w=870' },
  { name: 'Catarata de Gocta', description: 'Una de las caídas de agua más altas del mundo (771 metros).', image: 'https://images.unsplash.com/photo-1608244795763-7551ab858552?q=80&w=870' },
  { name: 'Sarcófagos de Karajía', description: 'Figuras funerarias de más de 2 metros colgadas en un acantilado.', image: 'https://images.unsplash.com/photo-1613298835391-783451c888d6?q=80&w=870' },
];

const gastronomy = [
    { name: 'Pan de Levanto', description: 'Producto estrella del distrito, horneado en hornos de barro.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=870' },
    { name: 'Locro de Yuca', description: 'Guiso espeso a base de yuca y frijoles, con piel de cerdo.', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=870' },
    { name: 'Cuy Frito', description: 'Plato ceremonial y tradicional de los Andes.', image: 'https://images.unsplash.com/photo-1626202157994-037a76205e4a?q=80&w=871' },
];

const hotels = [
    { name: 'La Xalca Hotel', location: 'Chachapoyas', description: 'Asociado Casa Andina (Casona colonial, cerca de la Plaza).' },
    { name: 'Gocta Andes Lodge', location: 'Cerca de la catarata Gocta', description: 'Lodge con vistas espectaculares a la catarata.' },
    { name: 'Hospedajes en Levanto', location: 'Levanto', description: 'Opciones locales en el pueblo para una experiencia auténtica.' },
];

// SECTIONS
const SectionCard = ({ title, content }: { title: string, content: string }) => (
  <div className="rounded-xl border border-neon-cyan/20 bg-card/80 p-6 backdrop-blur-sm transition-all hover:border-neon-cyan/50 animate-fadeInUp">
    <h3 className="font-serif text-xl font-semibold leading-none tracking-tight text-neon-cyan">{title}</h3>
    <p className="mt-2 text-muted-foreground">{content}</p>
  </div>
);

const ImageCard = ({ name, description, image }: { name:string, description:string, image:string }) => (
    <div className="group relative overflow-hidden rounded-xl border border-neon-cyan/20 transition-all hover:border-neon-cyan/50 hover:shadow-2xl hover:shadow-neon-cyan/20 animate-bounceIn">
        <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
            <h3 className="font-serif text-lg font-bold text-white text-shadow-neon-cyan">{name}</h3>
            <p className="text-sm text-gray-300">{description}</p>
        </div>
    </div>
)

const HistorySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Object.values(historyData).map(item => (
      <SectionCard key={item.title} title={item.title} content={item.content} />
    ))}
  </div>
);

const ArcheologySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {archeologySites.map(site => (
      <ImageCard key={site.name} {...site} />
    ))}
  </div>
);

const AttractionsSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {attractions.map(attraction => (
         <ImageCard key={attraction.name} {...attraction} />
      ))}
    </div>
);

const GastronomySection = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gastronomy.map(dish => (
            <ImageCard key={dish.name} {...dish} />
        ))}
    </div>
);

const HotelsSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map(hotel => (
             <div key={hotel.name} className="rounded-xl border border-neon-cyan/20 bg-card/80 p-6 backdrop-blur-sm transition-all hover:border-neon-cyan/50 animate-fadeInUp">
                <h3 className="font-serif text-lg font-bold text-neon-cyan">{hotel.name}</h3>
                <p className="text-sm font-semibold text-muted-foreground">{hotel.location}</p>
                <p className="text-sm text-muted-foreground mt-2">{hotel.description}</p>
            </div>
        ))}
    </div>
);


const TABS = [
  { name: 'Historia', icon: History, content: <HistorySection /> },
  { name: 'Sitios Arqueológicos', icon: Landmark, content: <ArcheologySection /> },
  { name: 'Atractivos Cercanos', icon: Map, content: <AttractionsSection /> },
  { name: 'Gastronomía', icon: Utensils, content: <GastronomySection /> },
  { name: 'Hoteles', icon: Hotel, content: <HotelsSection /> },
];

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].name);

  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      
      <main className="container mx-auto max-w-screen-2xl px-4 py-16 sm:py-24">
        <div className="text-center animate-fadeInUp">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-neon-cyan text-shadow-neon-cyan sm:text-5xl">Descubre Levanto</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Una guía interactiva para explorar la rica historia, cultura y belleza natural de este pueblo ancestral.
            </p>
        </div>

        <div className="mt-12 animate-fadeInUp">
            <div className="flex flex-wrap justify-center gap-2 border-b border-neon-cyan/20">
                {TABS.map(tab => (
                    <button
                        key={tab.name}
                        className={cn(
                            "flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors focus:outline-none",
                            activeTab === tab.name
                                ? 'border-b-2 border-neon-cyan text-neon-cyan'
                                : 'text-muted-foreground hover:text-neon-cyan'
                        )}
                        onClick={() => setActiveTab(tab.name)}
                    >
                        <tab.icon className="h-4 w-4" />
                        <span>{tab.name}</span>
                    </button>
                ))}
            </div>
            <div className="mt-8">
                {TABS.find(tab => tab.name === activeTab)?.content}
            </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;