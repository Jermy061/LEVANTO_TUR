// Archivo: frontend/src/pages/LoginPage.tsx (COMPLETO)
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../services/AuthService'; 
import toast from 'react-hot-toast'; // Usaremos toast para notificaciones

const LoginPage: React.FC = () => {
const [email, setEmail] = useState('usjermcubas@gmail.com'); // Valor inicial para debug
  const [password, setPassword] = useState('Levanto123*'); // Valor inicial
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth(); // Usado: login
  const navigate = useNavigate(); // Usado: navigate

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await loginApi(email, password);
      
      // Llama a la función global de login del contexto
      login(result.user, result.token);
      toast.success(`Bienvenido, ${result.user.name}. Acceso ADMIN.`);

      // Redirigir al dashboard administrativo
      navigate('/admin/dashboard');

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido al iniciar sesión.';
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Acceso al Panel de Levanto
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
placeholder="usjermcubas@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400"
          >
            {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;