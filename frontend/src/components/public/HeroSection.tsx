// src/components/public/HeroSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Calendar } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Paisaje-soloco_chachapoyas_amazonas_peru.jpg"
          alt="Paisaje de Chachapoyas"
          className="h-full w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-foreground">
        <div className="container mx-auto max-w-screen-md px-4">
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Levanto: Cuna Histórica de Chachapoyas
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Descubre la historia viva, el Camino Inca y la calidez de su gente en la ruta a Kuélap.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/sitios-turisticos"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <Compass className="mr-2 h-4 w-4" />
              Explorar Sitios
            </Link>
            <a
              href="#planifica-tu-viaje"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background/80 px-8 text-sm font-medium shadow-sm backdrop-blur transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Planifica tu Viaje
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
