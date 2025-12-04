// src/layouts/PublicFooter.tsx
import React from 'react';
import { Mountain } from 'lucide-react';

const PublicFooter: React.FC = () => {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm sm:flex-row">
        <div className="flex items-center gap-2">
          <Mountain className="h-5 w-5 text-primary" />
          <span className="font-bold">LevantoTur</span>
        </div>
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} · Una plataforma para el turismo vivencial en Levanto.
        </p>
        <p className="text-muted-foreground">
          Proyecto en desarrollo.
        </p>
      </div>
    </footer>
  );
};

export default PublicFooter;
