// Archivo: frontend/src/App.tsx (VERSIÓN FINAL COMPILABLE)

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

// --- Importaciones de Componentes CLAVE ---
import LoginPage from "./pages/LoginPage";
import AdminDashboard from './pages/admin/AdminDashboard';
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import TourContentEditor from "./pages/admin/TourContentEditor";
import HomePage from "./pages/public/HomePage";

const AdminRoute = ({ children }: { children: React.ReactElement }) => { // CORRECCIÓN CLAVE
    const { isAuthenticated, user } = useAuth();
    
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    
    if (user?.role !== 'ADMIN') {
        return <Navigate to="/" replace />; 
    }

    return children;
};

// --- Componente Principal ---
export default function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>

          {/* Rutas de Administración (MUNICIPALIDAD / ADMIN) */}
          <Route 
            path="/admin" 
            element={
              <AdminRoute> 
                <DashboardLayout />
              </AdminRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="tour-content" element={<TourContentEditor />} />
            <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Route>

          <Route path="*" element={<div>404 - Página no encontrada</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}