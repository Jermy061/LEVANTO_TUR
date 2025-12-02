// Archivo: src/pages/admin/AdminDashboard.tsx

import { Link } from 'react-router-dom';
import { PlusIcon, MountainIcon } from '../../components/icons';

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Bienvenido al Panel</h1>
        <p className="text-slate-600">
          Gestiona el contenido de la aplicación turística de Levanto desde aquí.
        </p>
      </header>

      <section>
        <h2 className="text-lg font-semibold text-slate-800 mb-3">Atajos Rápidos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ShortcutCard
            to="/admin/tour-content"
            icon={<MountainIcon className="h-6 w-6 text-sky-600" />}
            title="Gestionar Contenido"
            description="Edita, crea y elimina puntos de interés turístico."
          />
          <ShortcutCard
            to="/admin/tour-content/new"
            icon={<PlusIcon className="h-6 w-6 text-emerald-600" />}
            title="Añadir Nuevo Punto"
            description="Crea un nuevo punto de interés, restaurante o transporte."
          />
        </div>
      </section>
    </div>
  );
};

// Componente para las tarjetas de atajos
interface ShortcutCardProps {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ShortcutCard: React.FC<ShortcutCardProps> = ({ to, icon, title, description }) => (
  <Link
    to={to}
    className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-sky-300 hover:shadow-md"
  >
    <div className="flex items-center gap-4">
      <div className="rounded-lg bg-sky-100 p-3 group-hover:bg-sky-200">{icon}</div>
      <div>
        <h3 className="font-semibold text-slate-800">{title}</h3>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
    </div>
  </Link>
);

export default AdminDashboard;
