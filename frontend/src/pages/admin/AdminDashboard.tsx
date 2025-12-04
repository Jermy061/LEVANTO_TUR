// Archivo: src/pages/admin/AdminDashboard.tsx

import { Link } from 'react-router-dom';
import { Plus, Mountain } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'; // I will create this later

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Bienvenido al Panel</h1>
        <p className="text-muted-foreground">
          Gestiona el contenido de la aplicación turística de Levanto desde aquí.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold tracking-tight mb-4">Atajos Rápidos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ShortcutCard
            to="/admin/tour-content"
            icon={<Mountain className="h-6 w-6 text-primary" />}
            title="Gestionar Contenido"
            description="Edita, crea y elimina puntos de interés turístico."
          />
          <ShortcutCard
            to="/admin/tour-content/new"
            icon={<Plus className="h-6 w-6 text-primary" />}
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
  <Link to={to} className="group block">
    <Card className="transition-all group-hover:border-primary group-hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  </Link>
);

export default AdminDashboard;
