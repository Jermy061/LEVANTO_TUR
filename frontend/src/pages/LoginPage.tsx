import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../services/AuthService';
import toast from 'react-hot-toast';
import { Mail, Lock, Mountain } from 'lucide-react';

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
      const errorMessage = err instanceof Error && err.message.includes('Credenciales inválidas')
        ? 'El email o la contraseña son incorrectos.'
        : 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo.';
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center gap-2">
            <Mountain className="h-8 w-8 text-primary" />
            <h1 className="font-serif text-3xl font-bold text-foreground">
              LevantoTur
            </h1>
          </div>
          <p className="text-muted-foreground text-sm mt-1">Panel de Administración</p>
        </div>

        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold tracking-tight text-2xl">Iniciar Sesión</h3>
            <p className="text-sm text-muted-foreground">Ingresa tus credenciales para acceder al panel.</p>
          </div>
          <form className="p-6 pt-0 space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none" htmlFor="email">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="flex h-10 w-full rounded-md border border-input bg-transparent py-2 px-3 pl-10 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="admin@municipalidad.pe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none" htmlFor="password">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="flex h-10 w-full rounded-md border border-input bg-transparent py-2 px-3 pl-10 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center w-full h-10 px-4 py-2 bg-primary text-sm font-medium text-primary-foreground rounded-md shadow-sm transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
              ) : null}
              {isLoading ? 'Procesando...' : 'Acceder'}
            </button>
          </form>
        </div>
        <p className="text-center text-muted-foreground text-xs mt-8">
          &copy; {new Date().getFullYear()} LevantoTur. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;