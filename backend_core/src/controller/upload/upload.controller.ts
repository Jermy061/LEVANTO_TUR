// Archivo: backend_core/src/controller/upload/upload.controller.ts
import { Request, Response } from 'express';
import { generateUploadSignature } from '../../services/upload.service';

export const getSignature = (req: Request, res: Response) => {
  try {
    const { signature, timestamp } = generateUploadSignature();
    
    res.status(200).json({
      signature,
      timestamp,
      api_key: process.env.CLOUDINARY_API_KEY,
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    });

  } catch (error) {
    console.error('Error al generar la firma de Cloudinary:', error);
    res.status(500).json({ error: 'No se pudo generar la firma para la subida de archivos.' });
  }
};
