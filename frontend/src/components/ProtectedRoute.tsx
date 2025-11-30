// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ requiredRole = 'ADMIN' }: { requiredRole?: 'ADMIN' | 'TENANT_OWNER' }) => {
    const { isAuthenticated, user } = useAuth();
    
    if (!isAuthenticated) {
        // Redirige al login si no está autenticado
        return <Navigate to="/login" replace />;
    }

    if (user?.role !== requiredRole) {
        // Redirige si el rol no coincide (ej. Dueño intenta ver /admin)
        return <Navigate to="/" replace />;
    }

    // Renderiza el contenido si la autenticación y el rol son correctos
    return <Outlet />;
};

export default ProtectedRoute; // <<-- Exportación por defecto