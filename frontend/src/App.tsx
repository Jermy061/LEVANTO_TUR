// Archivo: frontend/src/App.tsx (VERSIÓN FINAL COMPILABLE)

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import { CloudinaryProvider } from "./context/CloudinaryContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
// --- Importaciones de Componentes CLAVE ---
import LoginPage from "./pages/LoginPage";
import AdminDashboard from './pages/admin/AdminDashboard';
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import TourContentEditor from "./pages/admin/TourContentEditor";
import HomePage from "./pages/public/HomePage";
import TenantDashboard from "./pages/tenant/TenantDashboard";
import TenantRegisterPage from "./pages/public/TenantRegisterPage";

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

const TenantRoute = ({ children }: { children: React.ReactElement }) => {
    const { isAuthenticated, user } = useAuth();
    
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    
    if (user?.role !== 'TENANT_OWNER') {
        // Podríamos redirigir a una página de "no autorizado" o al home
        return <Navigate to="/" replace />; 
    }

    return children;
};

// --- Componente Principal ---
export default function App() {
  return (
    // 2. Envuelve TODO con el ThemeProvider
    <ThemeProvider>
      <CloudinaryProvider>
        <AuthProvider>
          {/* 3. Añade un contenedor principal con las clases de color y min-h-screen */}
          <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Toaster position="top-right" />
            <BrowserRouter>
              <Routes>
                {/* ... todas tus rutas igual que antes ... */}
                <Route path="/" element={<PublicLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="login" element={<LoginPage />} />
                  <Route path="register-tenant" element={<TenantRegisterPage />} />
                  <Route 
                    path="tenant/dashboard"
                    element={
                      <TenantRoute>
                        <TenantDashboard />
                      </TenantRoute>
                    }
                  />
                </Route>

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
          </div>
        </AuthProvider>
      </CloudinaryProvider>
    </ThemeProvider>
  );
}