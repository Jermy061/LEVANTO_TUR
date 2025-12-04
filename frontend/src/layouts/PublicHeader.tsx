// src/layouts/PublicHeader.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Mountain } from 'lucide-react';

const PublicHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neon-cyan/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-neon-cyan" />
          <span className="font-bold text-lg text-neon-cyan text-shadow-neon-cyan">LevantoTur</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#historia" className="text-muted-foreground transition-colors hover:text-neon-cyan hover:text-shadow-neon-cyan">
            Historia
          </a>
          <a href="#sitios-turisticos" className="text-muted-foreground transition-colors hover:text-neon-cyan hover:text-shadow-neon-cyan">
            Sitios Turísticos
          </a>
          <a href="#gastronomia" className="text-muted-foreground transition-colors hover:text-neon-cyan hover:text-shadow-neon-cyan">
            Gastronomía
          </a>
          <a href="#planifica-tu-viaje" className="text-muted-foreground transition-colors hover:text-neon-cyan hover:text-shadow-neon-cyan">
            Planifica tu Viaje
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="inline-flex h-9 items-center justify-center rounded-md bg-neon-electric-green/10 px-4 py-2 text-sm font-medium text-neon-electric-green shadow-sm transition-colors hover:bg-neon-electric-green/20"
          >
            <Building className="mr-2 h-4 w-4" />
            Acceso Municipal
          </Link>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;
