import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../services/AuthService';
import toast from 'react-hot-toast';

// Iconos de Heroicons (puedes instalarlos con `npm install @heroicons/react`)
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/solid';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await loginApi(email, password);
      login(result.user, result.token);
      toast.success(`Bienvenido, ${result.user.name}. Acceso Concedido.`);
      navigate('/admin/dashboard');
    } catch (err) {
      if (err instanceof Error && err.message.includes('Credenciales inválidas')) {
        toast.error('El email o la contraseña son incorrectos.');
      } else {
        toast.error('Ocurrió un error inesperado. Por favor, inténtalo de nuevo.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Placeholder */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white tracking-wider">
            LEVanto
            <span className="text-blue-400">.</span>
            TUR
          </h1>
          <p className="text-blue-200 text-sm mt-1">Panel de Administración</p>
        </div>

        {/* Glassmorphism Form Container */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center text-white">
            Iniciar Sesión
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="relative">
              <AtSymbolIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-300" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="w-full bg-white/20 text-white placeholder-blue-200 border-2 border-transparent rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                placeholder="Email"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <LockClosedIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-300" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="w-full bg-white/20 text-white placeholder-blue-200 border-2 border-transparent rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                placeholder="Contraseña"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 transition-all duration-300"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando...
                </div>
              ) : (
                'Acceder'
              )}
            </button>
          </form>
        </div>
        <p className="text-center text-blue-200 text-xs mt-8">
          &copy; {new Date().getFullYear()} LevantoTur. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;