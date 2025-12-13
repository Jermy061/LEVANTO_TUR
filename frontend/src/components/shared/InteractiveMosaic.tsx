import { useState } from 'react';

interface MosaicItem {
  id: number;
  src: string;
  title: string;
  size: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

interface InteractiveMosaicProps {
  items: MosaicItem[];
}

export default function InteractiveMosaic({ items }: InteractiveMosaicProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4 auto-rows-[250px]">
      {items.map((item) => (
        <div
          key={item.id}
          className={`${getSizeClasses(
            item.size
          )} relative overflow-hidden rounded-xl cursor-pointer group`}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={item.onClick}
        >
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
            </div>
          </div>

          {hoveredId === item.id && (
            <div className="absolute inset-0 border-2 border-[#0077B6] rounded-xl animate-pulse"></div>
          )}
        </div>
      ))}
    </div>
  );
}
