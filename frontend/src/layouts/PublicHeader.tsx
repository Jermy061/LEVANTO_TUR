// src/layouts/PublicHeader.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, InfoIcon, MapPinIcon, UtensilsIcon, BusIcon, UserPlusIcon } from '../components/icons';

const PublicHeader: React.FC = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 text-lg font-black">
            LC
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">LEVANTOCONECTA</p>
            <p className="text-[11px] text-slate-300">Turismo · Levanto · Chachapoyas</p>
          </div>
        </Link>

        <nav className="flex items-center gap-4 text-xs sm:text-sm">
          <a href="#historia" className="inline-flex items-center gap-1 text-slate-200 hover:text-sky-300">
            <InfoIcon className="h-3.5 w-3.5" />
            <span>Historia</span>
          </a>
          <a href="#sitios-turisticos" className="inline-flex items-center gap-1 text-slate-200 hover:text-sky-300">
            <MapPinIcon className="h-3.5 w-3.5" />
            <span>Sitios Turisticos</span>
          </a>
          <a href="#gastronomia" className="inline-flex items-center gap-1 text-slate-200 hover:text-sky-300">
            <UtensilsIcon className="h-3.5 w-3.5" />
            <span>Gastronomía</span>
          </a>
          <a href="#planifica-tu-viaje" className="inline-flex items-center gap-1 text-slate-200 hover:text-sky-300">
            <BusIcon className="h-3.5 w-3.5" />
            <span>Planifica tu viaje</span>
          </a>
          <Link
            to="/registro-negocio"
            className="inline-flex items-center gap-1 rounded-full border border-emerald-400/70 bg-emerald-900/40 px-3 py-1 text-xs font-semibold text-emerald-100 shadow-sm shadow-emerald-900/50 hover:bg-emerald-500/20"
          >
            <UserPlusIcon className="h-3.5 w-3.5" />
            <span>Registrar negocio</span>
          </Link>
          <Link
            to="/login"
            className="hidden items-center gap-1 rounded-full border border-sky-400/70 bg-slate-900/60 px-3 py-1 text-xs font-semibold text-sky-200 shadow-sm shadow-sky-900/50 hover:bg-sky-500/20 sm:inline-flex"
          >
            <HomeIcon className="h-3.5 w-3.5" />
            <span>Acceso Municipalidad</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default PublicHeader;
