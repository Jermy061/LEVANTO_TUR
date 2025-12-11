import { Outlet, Link } from 'react-router-dom';
import { MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function PublicLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <MapPin className="w-7 h-7 text-[#0077B6]" />
              <span className="text-xl font-bold text-gray-900">
                LEVANTO<span className="text-[#0077B6]">CONECTA</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-[#0077B6] font-medium transition-colors duration-200"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('sitios')}
                className="text-gray-700 hover:text-[#0077B6] font-medium transition-colors duration-200"
              >
                Sitios
              </button>
              <button
                onClick={() => scrollToSection('economia')}
                className="text-gray-700 hover:text-[#0077B6] font-medium transition-colors duration-200"
              >
                Economía Local
              </button>
              <button
                onClick={() => scrollToSection('logistica')}
                className="text-gray-700 hover:text-[#0077B6] font-medium transition-colors duration-200"
              >
                Logística
              </button>
              <Link to="/login" className="px-5 py-2 bg-[#0077B6] text-white rounded-lg font-medium hover:bg-[#005F8F] transition-colors duration-200 shadow-md hover:shadow-lg">
                Login Admin
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 bg-white animate-fade-in">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-700 hover:text-[#0077B6] font-medium text-left"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection('sitios')}
                  className="text-gray-700 hover:text-[#0077B6] font-medium text-left"
                >
                  Sitios
                </button>
                <button
                  onClick={() => scrollToSection('economia')}
                  className="text-gray-700 hover:text-[#0077B6] font-medium text-left"
                >
                  Economía Local
                </button>
                <button
                  onClick={() => scrollToSection('logistica')}
                  className="text-gray-700 hover:text-[#0077B6] font-medium text-left"
                >
                  Logística
                </button>
                <Link to="/login" className="px-5 py-2 bg-[#0077B6] text-white rounded-lg font-medium text-left">
                  Login Admin
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16"><Outlet /></main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-6 h-6 text-[#0077B6]" />
                <span className="text-lg font-bold text-gray-900">
                  LEVANTOCONECTA
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                Descubre la historia viva, el camino inca original y la
                gastronomía local de Levanto, Chachapoyas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Enlaces</h3>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('sitios')}
                  className="block text-gray-600 hover:text-[#0077B6] text-sm"
                >
                  Sitios Arqueológicos
                </button>
                <button
                  onClick={() => scrollToSection('economia')}
                  className="block text-gray-600 hover:text-[#0077B6] text-sm"
                >
                  Economía Local
                </button>
                <button
                  onClick={() => scrollToSection('logistica')}
                  className="block text-gray-600 hover:text-[#0077B6] text-sm"
                >
                  Logística
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contacto</h3>
              <p className="text-gray-600 text-sm">
                Municipalidad Distrital de Levanto
                <br />
                Chachapoyas, Amazonas, Perú
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 LevantoConecta. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}