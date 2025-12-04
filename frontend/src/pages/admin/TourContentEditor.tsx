// src/pages/admin/TourContentEditor.tsx
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import ImageUploader from '../../components/admin/ImageUploader';
import toast from 'react-hot-toast';

// Simula la estructura de datos de un punto turístico
interface TouristicPlaceForm {
  id: number | null;
  name: string;
  description: string;
  mainImageUrl: string;
}

const TourContentEditor: React.FC = () => {
  const [formData, setFormData] = useState<TouristicPlaceForm>({
    id: 1, // Simulando que estamos editando un item existente
    name: 'Plaza de Armas de Levanto',
    description: 'Centro histórico y social del pueblo, rodeado de casonas coloniales.',
    mainImageUrl: 'https://via.placeholder.com/800x600.png/E2E8F0/4A5568?text=Imagen+Inicial',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (url: string) => {
    setFormData(prev => ({ ...prev, mainImageUrl: url }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para llamar a un servicio y guardar en el backend
    console.log('Datos a guardar:', formData);
    toast.success('Los datos del punto turístico se han guardado con éxito (simulación).');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Editor de Contenido Turístico</h1>
          <p className="text-muted-foreground">
            Modifica los detalles del punto de interés y sube una nueva imagen principal.
          </p>
        </div>
        <Button type="submit">
          Guardar Cambios
        </Button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna Izquierda: Campos de Texto */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información General</CardTitle>
              <CardDescription>
                Nombre y descripción que verán los visitantes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="font-medium">Nombre del lugar</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ej. Iglesia de Levanto"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="description" className="font-medium">Descripción</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full rounded-md border border-input bg-transparent p-2 text-sm"
                  placeholder="Una breve descripción del lugar..."
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Columna Derecha: Imagen */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Imagen Principal</CardTitle>
              <CardDescription>Sube una imagen representativa.</CardDescription>
            </CardHeader>
            <CardContent>
              <ImageUploader
                onUploadSuccess={handleImageUpload}
                initialImageUrl={formData.mainImageUrl}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
};

export default TourContentEditor;