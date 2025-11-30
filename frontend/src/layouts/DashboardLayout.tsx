// Archivo: src/layouts/DashboardLayout.tsx (Implementación Correcta)
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Usaremos 'const DashboardLayout' en lugar de React.FC para evitar conflictos de tipado innecesarios.
const DashboardLayout = () => {
  const { user, logout } = useAuth();
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* 1. Sidebar (Gestión) */}
      <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-6 text-yellow-300">Levanto ADMIN</h1>
          <nav>
            <a href="/admin/dashboard" className="block py-2 px-4 rounded transition hover:bg-gray-700">
              📊 Dashboard
            </a>
            <a href="/admin/tour-content" className="block py-2 px-4 rounded transition hover:bg-gray-700">
              🏞️ Contenido Turístico
            </a>
            <a href="/admin/tenants" className="block py-2 px-4 rounded transition hover:bg-gray-700">
              🏨 Gestión de Locales
            </a>
          </nav>
        </div>
        
        {/* Información del Usuario y Logout */}
        <div className="text-sm border-t border-gray-700 pt-4">
          <p className="font-semibold">{user?.name}</p>
          <p className="text-xs text-gray-400">Rol: {user?.role}</p>
          <button 
            onClick={logout} 
            className="mt-2 text-red-400 text-sm hover:text-red-300 transition"
          >
            ❌ Cerrar Sesión
          </button>
        </div>
      </aside>
      
      {/* 2. Contenido Principal (Renderiza las Páginas de Admin) */}
      <main className="flex-1 overflow-y-auto">
        <header className="p-4 bg-white shadow-md">
          <h2 className="text-2xl font-semibold">Panel de {user?.role}</h2>
        </header>
        <div className="p-6">
          <Outlet /> {/* CLAVE: Aquí se renderizará AdminDashboard, TourContentEditor, etc. */}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;