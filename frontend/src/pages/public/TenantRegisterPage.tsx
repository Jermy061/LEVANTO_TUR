// src/pages/public/TenantRegisterPage.tsx
import React, { useState } from 'react';
import { registerTenantApi, type BusinessType } from '../../services/TenantService';
import toast from 'react-hot-toast';
import { PlusIcon } from '../../components/icons';

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
    if (!nombreEmpresa.trim()) {
      toast.error('Por favor, ingresa el nombre de tu negocio.');
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
    <div className="bg-slate-950 px-4 py-12 text-slate-50">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-sky-300 sm:text-3xl">
            Registro de Negocios de Levanto
          </h1>
          <p className="text-sm text-slate-200">
            Si eres dueño de un hospedaje, restaurante, transporte local o productor de Levanto, puedes enviar tu
            solicitud de registro. La Municipalidad revisará los datos antes de publicar tu negocio en la plataforma
            pública de turismo.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-slate-300">
              Nombre del negocio
            </label>
            <input
              type="text"
              value={nombreEmpresa}
              onChange={(e) => setNombreEmpresa(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="Ej. Quesería artesanal Levanto"
              required
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-slate-300">
                Teléfono de contacto
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="9XXXXXXXX"
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-slate-300">
                Tipo de negocio
              </label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value as BusinessType | '')}
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                disabled={isLoading}
              >
                <option value="">Selecciona una opción</option>
                {businessOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-[11px] text-slate-400">
            Al enviar este formulario, aceptas que tus datos serán revisados por la Municipalidad de Levanto. El
            registro no se publica automáticamente; quedará pendiente hasta su aprobación.
          </p>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-sky-700/60"
          >
            <PlusIcon className="h-4 w-4" />
            <span>{isLoading ? 'Enviando solicitud...' : 'Enviar solicitud de registro'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default TenantRegisterPage;
