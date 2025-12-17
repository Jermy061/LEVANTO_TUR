import { Outlet, Link } from 'react-router-dom';
import { MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ModeToggle } from '../components/ui/ModeToggle';
import { ThemeTestButton } from '../components/ui/ThemeTestButton';

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
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <MapPin className="w-7 h-7 text-primary" />
              <span className="text-xl font-bold text-foreground">
                LEVANTO<span className="text-primary">CONECTA</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                Inicio
              </button>
              <ThemeTestButton />
              <button
                onClick={() => scrollToSection('sitios')}
                className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                Sitios
              </button>
              <button
                onClick={() => scrollToSection('economia')}
                className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                Economía Local
              </button>
              <button
                onClick={() => scrollToSection('logistica')}
                className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                Logística
              </button>
              <div className="flex items-center gap-4">
                <Link to="/login" className="px-5 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg">
                  Login Admin
                </Link>
                <ModeToggle />
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border bg-background animate-fade-in">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-muted-foreground hover:text-primary font-medium text-left"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection('sitios')}
                  className="text-muted-foreground hover:text-primary font-medium text-left"
                >
                  Sitios
                </button>
                <button
                  onClick={() => scrollToSection('economia')}
                  className="text-muted-foreground hover:text-primary font-medium text-left"
                >
                  Economía Local
                </button>
                <button
                  onClick={() => scrollToSection('logistica')}
                  className="text-muted-foreground hover:text-primary font-medium text-left"
                >
                  Logística
                </button>
                <div className="flex items-center justify-between">
                  <Link to="/login" className="px-5 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-left">
                    Login Admin
                  </Link>
                  <ModeToggle />
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16"><Outlet /></main>

      <footer className="bg-muted/50 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold text-foreground">
                  LEVANTOCONECTA
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Descubre la historia viva, el camino inca original y la
                gastronomía local de Levanto, Chachapoyas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Enlaces</h3>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('sitios')}
                  className="block text-muted-foreground hover:text-primary text-sm"
                >
                  Sitios Arqueológicos
                </button>
                <button
                  onClick={() => scrollToSection('economia')}
                  className="block text-muted-foreground hover:text-primary text-sm"
                >
                  Economía Local
                </button>
                <button
                  onClick={() => scrollToSection('logistica')}
                  className="block text-muted-foreground hover:text-primary text-sm"
                >
                  Logística
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
              <p className="text-muted-foreground text-sm">
                Municipalidad Distrital de Levanto
                <br />
                Chachapoyas, Amazonas, Perú
              </p>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 LevantoConecta. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}