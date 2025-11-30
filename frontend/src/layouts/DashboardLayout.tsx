// Archivo: src/layouts/DashboardLayout.tsx (Diseño del panel administrativo)
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/admin/DashboardSidebar';
import DashboardTopbar from '../components/admin/DashboardTopbar';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto">
        <DashboardTopbar />
        <div className="p-6">
          <Outlet /> {/* Aquí se renderizarán AdminDashboard, TourContentEditor, etc. */}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
