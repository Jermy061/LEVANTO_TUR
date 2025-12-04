// Archivo: backend_core/src/services/upload.service.ts
import cloudinary from '../config/cloudinary';

const API_KEY = process.env.CLOUDINARY_API_KEY as string;
const API_SECRET = process.env.CLOUDINARY_API_SECRET as string;

if (!API_KEY || !API_SECRET) {
  throw new Error('Las credenciales de Cloudinary no están configuradas en el entorno.');
}

/**
 * Genera una firma digital para una subida segura y directa a Cloudinary.
 * @returns Un objeto con la firma y el timestamp necesarios para la solicitud a la API de Cloudinary.
 */
export const generateUploadSignature = () => {
  const timestamp = Math.round(new Date().getTime() / 1000);

  // La firma se genera usando el timestamp y el API Secret.
  // Opcionalmente, se pueden añadir más parámetros para mayor seguridad (ej. `folder`, `tags`).
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
      // Aquí podrías añadir un folder específico para organizar las subidas
      // folder: 'levanto-tur-uploads' 
    },
    API_SECRET
  );

  return { timestamp, signature };
};
