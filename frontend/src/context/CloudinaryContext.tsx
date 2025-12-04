// Archivo: frontend/src/context/CloudinaryContext.tsx
import React, { createContext, useContext, type ReactNode } from 'react';

// Define la estructura de las credenciales de Cloudinary que necesita el frontend
interface CloudinaryConfig {
  cloudName: string;
  apiKey: string;
  uploadPreset: string; // Preset para subidas no firmadas
}

// Configuración obtenida de tus variables de entorno (o directamente si es pública)
const cloudinaryConfig: CloudinaryConfig = {
  cloudName: 'don0bzjfg',
  apiKey: '849785871736434',
  uploadPreset: 'levanto_tour_preset', // IMPORTANTE: Debes crear este preset en tu cuenta de Cloudinary
};

// Crea el contexto
const CloudinaryContext = createContext<CloudinaryConfig | undefined>(undefined);

// Hook personalizado para acceder fácilmente a la configuración
export const useCloudinary = () => {
  const context = useContext(CloudinaryContext);
  if (!context) {
    throw new Error('useCloudinary debe ser usado dentro de un CloudinaryProvider');
  }
  return context;
};

// Proveedor del contexto
export const CloudinaryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <CloudinaryContext.Provider value={cloudinaryConfig}>
      {children}
    </CloudinaryContext.Provider>
  );
};
