import type { ReactNode } from 'react';

interface ZigzagItem {
  id: number;
  image: string;
  title: string;
  content: ReactNode;
}

interface ZigzagSectionProps {
  items: ZigzagItem[];
}

export default function ZigzagSection({ items }: ZigzagSectionProps) {
  return (
    <div className="space-y-16 md:space-y-24">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
            index % 2 === 1 ? 'md:grid-cols-2' : 'md:grid-cols-2'
          }`}
        >
          <div
            className={`${
              index % 2 === 1 ? 'md:order-2' : 'md:order-1'
            } animate-slide-in-left`}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div
            className={`${
              index % 2 === 1 ? 'md:order-1' : 'md:order-2'
            } space-y-4 animate-slide-in-right`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {item.title}
            </h3>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
