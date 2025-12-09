import { useState } from 'react';
import { MapPin } from 'lucide-react';

interface MapPin {
  id: number;
  name: string;
  lat: number;
  lng: number;
  image: string;
  description: string;
  category: string;
}

interface InteractiveMapProps {
  pins: MapPin[];
  mapImage: string;
  onPinClick?: (pin: MapPin) => void;
}

export default function InteractiveMap({
  pins,
  mapImage,
  onPinClick,
}: InteractiveMapProps) {
  const [hoveredPin, setHoveredPin] = useState<number | null>(null);
  const [selectedPin, setSelectedPin] = useState<MapPin | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Arqueológico':
        return 'bg-[#FF6B35]';
      case 'Naturaleza':
        return 'bg-green-500';
      case 'Hospedaje':
        return 'bg-[#0077B6]';
      case 'Transporte':
        return 'bg-purple-500';
      default:
        return 'bg-[#FFD166]';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 relative rounded-xl overflow-hidden shadow-2xl">
        <img
          src={mapImage}
          alt="Mapa de Levanto"
          className="w-full h-96 object-cover"
        />

        <div className="absolute inset-0 bg-transparent">
          {pins.map((pin) => (
            <div key={pin.id} className="relative w-full h-full">
              <button
                onClick={() => {
                  setSelectedPin(pin);
                  onPinClick?.(pin);
                }}
                onMouseEnter={() => setHoveredPin(pin.id)}
                onMouseLeave={() => setHoveredPin(null)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  hoveredPin === pin.id || selectedPin?.id === pin.id
                    ? 'scale-150'
                    : 'scale-100'
                }`}
                style={{
                  left: `${pin.lng}%`,
                  top: `${pin.lat}%`,
                }}
              >
                <div
                  className={`${getCategoryColor(
                    pin.category
                  )} w-6 h-6 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl`}
                >
                  <MapPin className="w-4 h-4 text-white" />
                </div>
              </button>

              {(hoveredPin === pin.id || selectedPin?.id === pin.id) && (
                <div
                  className="absolute transform -translate-x-1/2 -translate-y-full mt-12 bg-white rounded-lg shadow-xl p-4 w-48 z-20 animate-fade-in"
                  style={{
                    left: `${pin.lng}%`,
                    top: `${pin.lat}%`,
                  }}
                >
                  <div className="aspect-video rounded-lg overflow-hidden mb-3">
                    <img
                      src={pin.image}
                      alt={pin.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{pin.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">{pin.description}</p>
                  <span className={`inline-block ${getCategoryColor(pin.category)} text-white text-xs px-2 py-1 rounded-full font-semibold`}>
                    {pin.category}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 overflow-y-auto max-h-96">
        <h3 className="font-bold text-gray-900 text-lg sticky top-0 bg-white py-2">
          Puntos de Interés
        </h3>
        {pins.map((pin) => (
          <button
            key={pin.id}
            onClick={() => {
              setSelectedPin(pin);
              setHoveredPin(pin.id);
            }}
            className={`w-full text-left p-4 rounded-lg transition-all duration-300 border-2 ${
              selectedPin?.id === pin.id
                ? 'bg-blue-50 border-[#0077B6]'
                : 'bg-gray-50 border-transparent hover:border-gray-200'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div
                className={`${getCategoryColor(
                  pin.category
                )} w-5 h-5 rounded-full mt-1 flex-shrink-0`}
              ></div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{pin.name}</h4>
                <p className="text-gray-600 text-sm">{pin.description}</p>
                <span className="text-xs font-medium text-[#0077B6] mt-1 block">
                  {pin.category}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
