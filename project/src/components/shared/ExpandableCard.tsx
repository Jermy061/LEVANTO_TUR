import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ExpandableCardProps {
  image: string;
  title: string;
  description: string;
  details: string;
  features?: string[];
}

export default function ExpandableCard({
  image,
  title,
  description,
  details,
  features,
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div
        className="aspect-video relative overflow-hidden cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <button className="flex items-center space-x-2 text-white font-semibold">
            <span>Ver Detalles</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {isExpanded && (
          <div className="space-y-4 border-t border-gray-200 pt-4 animate-fade-in">
            <p className="text-gray-700 leading-relaxed">{details}</p>

            {features && features.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Características:
                </h4>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-[#0077B6] rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button className="w-full mt-4 px-4 py-3 bg-[#0077B6] text-white rounded-lg font-semibold hover:bg-[#005F8F] transition-colors duration-200 shadow-md hover:shadow-lg">
              Reservar Ahora
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
