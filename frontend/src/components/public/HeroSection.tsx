// src/components/public/HeroSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#38bdf8,_transparent_60%),_radial-gradient(circle_at_bottom,_#22c55e,_transparent_60%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
        <div className="flex-1 space-y-6">
          <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
            Levantoconncta · Turismo vivencial
          </p>
          <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Levanto: Cuna Histrica de Chachapoyas y Hogar del Curacazgo Ancestral.
          </h1>
          <p className="max-w-xl text-pretty text-sm text-sky-100 sm:text-base">
            Descubre la historia viva de Levanto: su Camino Inca original, sus casonas coloniales y 
            la calidez de su gente. Planifica tu visita a este pueblo histrico en la ruta a Kulap.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/sitios-turisticos"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
            >
              Explorar Sitios Locales
            </Link>
            <a
              href="#planifica-tu-viaje"
              className="inline-flex items-center justify-center rounded-full border border-sky-300/70 bg-white/5 px-5 py-2 text-sm font-semibold text-sky-100 backdrop-blur transition hover:bg-white/10"
            >
              Planifica tu Viaje
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto h-64 max-w-md overflow-hidden rounded-3xl border border-sky-100/10 bg-slate-900/60 shadow-2xl shadow-sky-900/60 md:h-80">
            <div className="absolute inset-0 bg-[url('/images/levanto-hero-placeholder.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-xs text-sky-50/90">
              <p className="font-semibold">Plaza principal de Levanto (placeholder)</p>
              <p className="text-[11px] text-sky-100/80">
                Sustituye esta imagen por una panormica real de Levanto o del entorno del Curacazgo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
