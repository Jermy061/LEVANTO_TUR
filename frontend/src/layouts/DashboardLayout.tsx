// Archivo: src/layouts/DashboardLayout.tsx (Diseño del panel administrativo)
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/admin/DashboardSidebar';
import DashboardTopbar from '../components/admin/DashboardTopbar';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <DashboardSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <DashboardTopbar />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
