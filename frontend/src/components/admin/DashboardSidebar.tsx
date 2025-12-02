// src/components/admin/DashboardSidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboardIcon, MountainIcon } from '../../components/icons';
import { useAuth } from '../../context/AuthContext';

const linkBaseClasses =
  'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors';

const DashboardSidebar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <aside className="flex w-64 flex-col justify-between border-r border-slate-800 bg-slate-950 text-slate-100">
      <div className="space-y-6 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 text-2xl font-black text-white">
            L.
          </div>
          <div className="leading-tight">
            <p className="text-lg font-bold tracking-tight text-white">Levanto</p>
            <p className="text-xs text-slate-400">Panel Admin</p>
          </div>
        </div>

        <nav className="space-y-2">
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
            <LayoutDashboardIcon className="h-5 w-5" />
            <span>Dashboard</span>
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
            <MountainIcon className="h-5 w-5" />
            <span>Contenido Turístico</span>
          </NavLink>
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
