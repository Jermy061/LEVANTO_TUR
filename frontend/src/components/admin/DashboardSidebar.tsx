// src/components/admin/DashboardSidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Mountain, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { cn } from '../../lib/utils';

const DashboardSidebar: React.FC = () => {
  const { user, logout } = useAuth();

  const getLinkClasses = (isActive: boolean) =>
    cn(
      'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
      isActive && 'bg-muted text-primary'
    );

  return (
    <aside className="hidden w-64 flex-col border-r bg-muted/40 md:flex">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-6">
          <NavLink to="/admin/dashboard" className="flex items-center gap-2 font-semibold">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="">LevantoTur</span>
          </NavLink>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) => getLinkClasses(isActive)}
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </NavLink>
            <NavLink
              to="/admin/tour-content"
              className={({ isActive }) => getLinkClasses(isActive)}
            >
              <Mountain className="h-4 w-4" />
              Contenido Turístico
            </NavLink>
          </nav>
        </div>
        <div className="mt-auto border-t p-4">
           <div className="mb-2">
            <p className="font-semibold text-sm">{user?.name}</p>
            <p className="text-xs text-muted-foreground">Rol: {user?.role}</p>
          </div>
          <button
            onClick={logout}
            className="w-full inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/80"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Cerrar Sesión
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
