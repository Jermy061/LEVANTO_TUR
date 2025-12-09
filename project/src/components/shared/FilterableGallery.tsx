import { useState } from 'react';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  description?: string;
}

interface FilterableGalleryProps {
  items: GalleryItem[];
  categories: string[];
  onImageClick?: (item: GalleryItem) => void;
}

export default function FilterableGallery({
  items,
  categories,
  onImageClick,
}: FilterableGalleryProps) {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredItems =
    activeCategory === 'Todos'
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {['Todos', ...categories].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category
                ? 'bg-[#0077B6] text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onImageClick?.(item)}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-64"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-lg mb-1">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-gray-200 text-sm">{item.description}</p>
              )}
              <div className="mt-3 inline-block bg-[#0077B6] text-white px-3 py-1 rounded-full text-xs font-semibold w-fit">
                {item.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
