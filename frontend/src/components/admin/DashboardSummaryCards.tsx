// src/components/admin/DashboardSummaryCards.tsx
import React from 'react';
import { MountainIcon, BuildingIcon, BusIcon } from '../../components/icons';

const DashboardSummaryCards: React.FC = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Sitios turísticos
          </p>
          <MountainIcon className="h-5 w-5 text-sky-500" />
        </div>
        <p className="mt-3 text-2xl font-bold text-slate-900">—</p>
        <p className="text-[11px] text-slate-500">Conteo real vendrá desde el backend.</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Negocios registrados
          </p>
          <BuildingIcon className="h-5 w-5 text-emerald-500" />
        </div>
        <p className="mt-3 text-2xl font-bold text-slate-900">—</p>
        <p className="text-[11px] text-slate-500">Tenants en revisión o publicados.</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Rutas y transporte
          </p>
          <BusIcon className="h-5 w-5 text-amber-500" />
        </div>
        <p className="mt-3 text-2xl font-bold text-slate-900">—</p>
        <p className="text-[11px] text-slate-500">Configuración futura para transporte local.</p>
      </div>
    </div>
  );
};

export default DashboardSummaryCards;
