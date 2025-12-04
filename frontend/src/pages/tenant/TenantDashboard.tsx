// Archivo: frontend/src/pages/tenant/TenantDashboard.tsx
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import TenantImageUploader from '../../components/tenant/TenantImageUploader';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

const TenantDashboard: React.FC = () => {
  const { user } = useAuth();
  const [imageUrl, setImageUrl] = useState('');

  const handleSave = () => {
    // Lógica para guardar la URL de la imagen y otros datos del tenant
    console.log('Guardando URL para el tenant:', imageUrl);
    toast.success('Información guardada (simulación).');
  };

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Panel de Mi Negocio</h1>
        <p className="text-muted-foreground">
          Hola, {user?.name}. Aquí puedes gestionar la información de tu negocio.
        </p>
      </header>
      
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Imagen de Perfil</CardTitle>
            <CardDescription>
              Sube una imagen principal para tu negocio. Puede ser tu logo o la fachada de tu local.
              Esta imagen se usará en la página pública.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TenantImageUploader 
              onUploadSuccess={(url) => setImageUrl(url)}
            />
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button onClick={handleSave} size="lg">
            Guardar Cambios
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;
