// Archivo: backend_core/src/config/cloudinary.ts
import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config';

// Cargar la configuración de Cloudinary desde las variables de entorno
// Estas variables deben estar en tu archivo .env
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true, // Asegura que las URLs generadas sean HTTPS
});

export default cloudinary;
