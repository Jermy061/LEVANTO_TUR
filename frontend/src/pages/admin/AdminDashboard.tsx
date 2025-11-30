// Archivo: src/pages/admin/AdminDashboard.tsx
import DashboardSummaryCards from '../../components/admin/DashboardSummaryCards';

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-bold text-slate-900">
          Resumen de Levanto Conecta
        </h1>
        <p className="text-sm text-slate-600">
          Aquí verás el estado general del contenido turístico, los negocios locales registrados y otros
          indicadores clave para la Municipalidad de Levanto.
        </p>
      </section>

      <DashboardSummaryCards />

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-800">Próximas tareas</h2>
          <ul className="mt-3 space-y-1 text-xs text-slate-600">
            <li>• Revisar solicitudes de registro de nuevos negocios.</li>
            <li>• Actualizar la información de sitios turísticos principales.</li>
            <li>• Configurar rutas de transporte locales en la sección correspondiente.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-800">Notas del sistema</h2>
          <p className="mt-2 text-xs text-slate-600">
            Esta versión del panel está enfocada en el diseño. Próximamente conectaremos estas tarjetas con
            los datos reales del backend (Prisma) para que la Municipalidad pueda tomar decisiones en tiempo real.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
