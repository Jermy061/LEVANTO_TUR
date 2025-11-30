// Archivo: src/pages/admin/AdminDashboard.tsx (Implementación Correcta)

// Es mejor no usar React.FC si no necesitas props por simplicidad en las versiones modernas
const AdminDashboard = () => {
  // Asegúrate de que el componente devuelva JSX
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700">
        Panel de Control de la Municipalidad
      </h1>
      <p className="mt-4 text-gray-600">
        ¡Bienvenido, Administrador! Desde aquí gestionarás Sitios Turísticos, Locales (Tenants) y Usuarios.
      </p>
      <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
        Prueba exitosa de autenticación y ruta privada.
      </div>
    </div>
  );
};

export default AdminDashboard; // Exportación por defecto necesaria