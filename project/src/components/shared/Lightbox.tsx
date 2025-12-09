import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxImage {
  id: number;
  src: string;
  title: string;
  description?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  isOpen,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <div className="w-full max-w-4xl">
        <div className="aspect-video relative overflow-hidden rounded-lg bg-black">
          <img
            src={current.src}
            alt={current.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{current.title}</h3>
          {current.description && (
            <p className="text-gray-300">{current.description}</p>
          )}
        </div>

        <div className="flex items-center justify-between mt-6">
          <button
            onClick={onPrevious}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="text-white text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>

          <button
            onClick={onNext}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex gap-2 mt-6 overflow-x-auto">
          {images.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => {
                while (currentIndex !== idx) {
                  if (currentIndex < idx) onNext();
                  else onPrevious();
                }
              }}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                idx === currentIndex
                  ? 'border-[#0077B6]'
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
