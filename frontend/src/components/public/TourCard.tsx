import { Clock, TrendingUp, Sparkles } from 'lucide-react';

interface Site {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  difficulty: string;
  duration: string;
  highlights: string[];
}

interface TourCardProps {
  site: Site;
}

export default function TourCard({ site }: TourCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.includes('Fácil')) return 'bg-green-100 text-green-700';
    if (difficulty.includes('Difícil')) return 'bg-red-100 text-red-700';
    return 'bg-amber-100 text-amber-700';
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#0077B6]/30 h-full flex flex-col">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={site.imageUrl}
          alt={site.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(
              site.difficulty
            )}`}
          >
            {site.difficulty}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0077B6] transition-colors">
          {site.name}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed flex-1">
          {site.description}
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-700">
            <Clock className="w-4 h-4 mr-2 text-[#0077B6]" />
            <span className="font-medium">Duración:</span>
            <span className="ml-2">{site.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <TrendingUp className="w-4 h-4 mr-2 text-[#0077B6]" />
            <span className="font-medium">Dificultad:</span>
            <span className="ml-2">{site.difficulty}</span>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-start mb-2">
            <Sparkles className="w-4 h-4 mr-2 text-[#FFD166] mt-0.5 flex-shrink-0" />
            <span className="text-sm font-semibold text-gray-900">
              Destacados:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {site.highlights.map((highlight, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-50 text-[#0077B6] text-xs rounded-md font-medium"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <button className="mt-6 w-full px-4 py-3 bg-[#0077B6] text-white rounded-lg font-semibold hover:bg-[#005F8F] transition-colors duration-200 shadow-md hover:shadow-lg">
          Más Información
        </button>
      </div>
    </div>
  );
}
