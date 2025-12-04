// src/pages/public/TenantRegisterPage.tsx
import React, { useState } from 'react';
import { registerTenantApi, type BusinessType } from '../../services/TenantService';
import toast from 'react-hot-toast';
import { Send } from 'lucide-react';

const businessOptions: { value: BusinessType; label: string }[] = [
  { value: 'ACCOMMODATION', label: 'Hospedaje / Alojamiento' },
  { value: 'RESTAURANT', label: 'Restaurante / Comida' },
  { value: 'TRANSPORT', label: 'Transporte Local' },
  { value: 'LOCAL_PRODUCT', label: 'Productos Locales / Lácteos' },
  { value: 'TOUR_AGENCY', label: 'Agencia / Operador de Tours' },
];

const TenantRegisterPage: React.FC = () => {
  const [nombreEmpresa, setNombreEmpresa] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState<BusinessType | ''>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombreEmpresa.trim() || !businessType) {
      toast.error('Por favor, completa todos los campos obligatorios.');
      return;
    }

    try {
      setIsLoading(true);
      const result = await registerTenantApi({
        nombre_empresa: nombreEmpresa.trim(),
        contactPhone: phone.trim() || undefined,
        businessType: businessType || undefined,
      });

      toast.success(result.message);
      setNombreEmpresa('');
      setPhone('');
      setBusinessType('');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'No se pudo registrar el negocio.';
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-serif text-2xl font-semibold leading-none tracking-tight">
            Registro de Negocios de Levanto
          </h3>
          <p className="text-sm text-muted-foreground">
            Si eres dueño de un negocio local, envía tu solicitud para aparecer en nuestra plataforma.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 pt-0">
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="business-name"
              >
                Nombre del negocio
              </label>
              <input
                type="text"
                id="business-name"
                value={nombreEmpresa}
                onChange={(e) => setNombreEmpresa(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Ej. Quesería Artesanal Levanto"
                required
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                 <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="phone"
                >
                  Teléfono de contacto (Opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="9XXXXXXXX"
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="business-type"
                >
                  Tipo de negocio
                </label>
                <select
                  id="business-type"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value as BusinessType | '')}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                  disabled={isLoading}
                >
                  <option value="" disabled>Selecciona una opción</option>
                  {businessOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
             <p className="text-xs text-muted-foreground">
              Al enviar, aceptas que tus datos serán revisados por la Municipalidad. El registro no es automático.
            </p>
          </div>
          <div className="flex items-center pt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              {isLoading ? (
                <div className="animate-spin mr-2 h-4 w-4 border-t-2 border-r-2 border-primary-foreground rounded-full"></div>
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              <span>{isLoading ? 'Enviando Solicitud...' : 'Enviar Solicitud de Registro'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TenantRegisterPage;
