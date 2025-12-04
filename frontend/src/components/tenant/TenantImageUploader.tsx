// Archivo: frontend/src/components/tenant/TenantImageUploader.tsx
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useCloudinary } from '../../context/CloudinaryContext';
import toast from 'react-hot-toast';
import { UploadCloud, X } from 'lucide-react';
import { Button } from '../ui/button';

interface TenantImageUploaderProps {
  onUploadSuccess: (url: string) => void;
  initialImageUrl?: string | null;
}

/**
 * Componente para que los tenants (inquilinos/dueños de negocios) suban imágenes
 * utilizando un "upload preset" (subida no firmada), que es más simple y no
 * requiere una firma del backend para cada subida.
 */
const TenantImageUploader: React.FC<TenantImageUploaderProps> = ({ onUploadSuccess, initialImageUrl }) => {
  const { cloudName, uploadPreset, apiKey } = useCloudinary();
  const [imageUrl, setImageUrl] = useState<string | null>(initialImageUrl || null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    const toastId = toast.loading('Subiendo imagen...');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('api_key', apiKey);

    const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    try {
      const response = await axios.post(uploadUrl, formData);
      const secureUrl = response.data.secure_url;

      setImageUrl(secureUrl);
      onUploadSuccess(secureUrl);
      toast.success('Imagen subida con éxito.', { id: toastId });

    } catch (error) {
      console.error('Error en la subida no firmada a Cloudinary:', error);
      toast.error('No se pudo subir la imagen.', { id: toastId });
    } finally {
      setIsLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemoveImage = () => {
    setImageUrl(null);
    onUploadSuccess('');
  };

  const triggerFileSelect = () => fileInputRef.current?.click();

  return (
    <div className="w-full">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
        disabled={isLoading}
      />

      {imageUrl ? (
        <div className="relative group w-full h-64 rounded-lg border-2 border-dashed border-border overflow-hidden">
          <img src={imageUrl} alt="Vista previa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="destructive" size="icon" onClick={handleRemoveImage} disabled={isLoading}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      ) : (
        <div
          onClick={triggerFileSelect}
          className="w-full h-64 rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary hover:bg-muted/50 transition-colors"
        >
          {isLoading ? (
             <>
              <div className="animate-spin h-8 w-8 text-primary mb-3" />
              <p className="font-semibold text-muted-foreground">Procesando...</p>
            </>
          ) : (
            <>
              <UploadCloud className="h-10 w-10 text-muted-foreground mb-3" />
              <p className="font-semibold">Subir imagen de tu negocio</p>
              <p className="text-xs text-muted-foreground">Recomendado: Logo o fachada</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TenantImageUploader;
