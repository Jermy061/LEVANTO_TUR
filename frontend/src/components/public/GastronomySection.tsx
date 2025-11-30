// src/components/public/GastronomySection.tsx
import React from 'react';

const GastronomySection: React.FC = () => {
  return (
    <section className="bg-slate-950 px-4 py-16 text-slate-100" id="gastronomia">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-sky-300 sm:text-3xl">
            Productos Lcteos de Levanto: Sabores Puros y Artesanales.
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Levanto es reconocido por su produccin de leche fresca y quesos artesanales de Chachapoyas. 
            Pequeos productores transforman diariamente la leche en quesos maduros, mantequilla y derivados 
            que conservan tcnicas tradicionales heredadas de generacin en generacin.
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Entre las bebidas ms singulares destaca el licor de leche, preparado de forma casera para 
            compartir en festividades y encuentros familiares. Estos productos se complementan con platos 
            tpicos sencillos pero profundos en sabor.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm">
            <h3 className="mb-1 text-base font-semibold text-sky-200">Quesos artesanales</h3>
            <p className="text-xs text-slate-300 sm:text-sm">
              Quesos frescos y maduros elaborados con leche de vacas criadas en las lomas y andenes de Levanto.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm">
            <h3 className="mb-1 text-base font-semibold text-sky-200">Licor de leche</h3>
            <p className="text-xs text-slate-300 sm:text-sm">
              Bebida tradicional, suave y dulce, que acompaa fiestas patronales y reuniones familiares.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm">
            <h3 className="mb-1 text-base font-semibold text-sky-200">Platos tpicos</h3>
            <p className="text-xs text-slate-300 sm:text-sm">
              Mote, sango y preparaciones sencillas a base de cereales andinos, tubrculos y productos lcteos locales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GastronomySection;
