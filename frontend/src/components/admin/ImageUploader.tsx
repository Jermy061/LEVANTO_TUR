// Archivo: frontend/src/components/admin/ImageUploader.tsx
import React, { useState, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { uploadImage } from '../../services/UploadService';
import toast from 'react-hot-toast';
import { UploadCloud, X } from 'lucide-react';
import { Button } from '../ui/button';

interface ImageUploaderProps {
  onUploadSuccess: (url: string) => void;
  initialImageUrl?: string | null;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onUploadSuccess, initialImageUrl }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(initialImageUrl || null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { token } = useAuth();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!token) {
      toast.error('Error de autenticación. No se puede subir la imagen.');
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading('Subiendo imagen...');

    try {
      const url = await uploadImage(file, token);
      setImageUrl(url);
      onUploadSuccess(url);
      toast.success('Imagen subida con éxito.', { id: toastId });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Ocurrió un error desconocido.';
      toast.error(`Error: ${message}`, { id: toastId });
    } finally {
      setIsLoading(false);
      // Reset file input
      if(fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemoveImage = () => {
    setImageUrl(null);
    onUploadSuccess(''); // Inform parent that image has been removed
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
        // --- Vista Previa de la Imagen ---
        <div className="relative group w-full h-64 rounded-lg border-2 border-dashed border-border overflow-hidden">
          <img src={imageUrl} alt="Vista previa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="destructive" size="icon" onClick={handleRemoveImage} disabled={isLoading}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      ) : (
        // --- Zona para Soltar o Seleccionar Archivo ---
        <div
          onClick={triggerFileSelect}
          className="w-full h-64 rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary hover:bg-muted/50 transition-colors"
        >
          {isLoading ? (
            <>
              <div className="animate-spin h-8 w-8 text-primary mb-3" />
              <p className="font-semibold text-muted-foreground">Procesando...</p>
              <p className="text-xs text-muted-foreground">Por favor, espera.</p>
            </>
          ) : (
            <>
              <UploadCloud className="h-10 w-10 text-muted-foreground mb-3" />
              <p className="font-semibold">Haz clic para subir una imagen</p>
              <p className="text-xs text-muted-foreground">PNG, JPG o WEBP (máx. 10MB)</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
