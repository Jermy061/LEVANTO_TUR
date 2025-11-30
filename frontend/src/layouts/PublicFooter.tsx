// src/layouts/PublicFooter.tsx
import React from 'react';

const PublicFooter: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} Levantoconncta · Propuesta de plataforma de turismo para Levanto, Chachapoyas.
        </p>
        <p>
          Contenido en construcción. Imágenes y datos finales serán integrados con el panel administrativo.
        </p>
      </div>
    </footer>
  );
};

export default PublicFooter;
