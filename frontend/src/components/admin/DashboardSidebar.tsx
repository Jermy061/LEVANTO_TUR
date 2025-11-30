// src/components/admin/DashboardSidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboardIcon, MountainIcon, BuildingIcon, SettingsIcon } from '../../components/icons';
import { useAuth } from '../../context/AuthContext';

const linkBaseClasses =
  'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors';

const DashboardSidebar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <aside className="flex w-64 flex-col justify-between border-r border-slate-800 bg-slate-950 text-slate-100">
      <div className="space-y-6 p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 text-lg font-black">
            LC
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">Levanto ADMIN</p>
            <p className="text-[11px] text-slate-400">Municipalidad de Levanto</p>
          </div>
        </div>

        <nav className="space-y-1 text-xs">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `${linkBaseClasses} ${
                isActive
                  ? 'bg-slate-800 text-sky-300'
                  : 'text-slate-200 hover:bg-slate-900 hover:text-sky-200'
              }`
            }
          >
            <LayoutDashboardIcon className="h-4 w-4" />
            <span>Resumen general</span>
          </NavLink>

          <NavLink
            to="/admin/tour-content"
            className={({ isActive }) =>
              `${linkBaseClasses} ${
                isActive
                  ? 'bg-slate-800 text-sky-300'
                  : 'text-slate-200 hover:bg-slate-900 hover:text-sky-200'
              }`
            }
          >
            <MountainIcon className="h-4 w-4" />
            <span>Contenido turístico</span>
          </NavLink>

          <NavLink
            to="/admin/tenants"
            className={({ isActive }) =>
              `${linkBaseClasses} ${
                isActive
                  ? 'bg-slate-800 text-sky-300'
                  : 'text-slate-200 hover:bg-slate-900 hover:text-sky-200'
              }`
            }
          >
            <BuildingIcon className="h-4 w-4" />
            <span>Locales y negocios</span>
          </NavLink>

          <button
            type="button"
            className={`${linkBaseClasses} mt-2 w-full text-slate-300 hover:bg-slate-900 hover:text-red-300`}
          >
            <SettingsIcon className="h-4 w-4" />
            <span>Configuración (pronto)</span>
          </button>
        </nav>
      </div>

      <div className="border-t border-slate-800 p-4 text-xs text-slate-300">
        <p className="font-semibold">{user?.name}</p>
        <p className="text-[11px] text-slate-400">Rol: {user?.role}</p>
        <button
          onClick={logout}
          className="mt-2 text-[11px] font-semibold text-red-400 hover:text-red-300"
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
