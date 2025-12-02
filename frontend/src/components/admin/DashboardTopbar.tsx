// src/components/admin/DashboardTopbar.tsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const DashboardTopbar: React.FC = () => {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">Panel administrativo</h1>
        
      </div>
      <div className="text-right text-xs text-slate-600">
        <p className="font-semibold">{user?.name}</p>
        <p className="text-[11px]">Rol: {user?.role}</p>
      </div>
    </header>
  );
};

export default DashboardTopbar;
