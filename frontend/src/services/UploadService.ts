// Archivo: frontend/src/services/UploadService.ts
import axios from 'axios';

// La URL base del Backend
const API_BASE = 'http://127.0.0.1:4000';
const UPLOAD_API_URL = `${API_BASE}/api/v1/upload`;

interface SignatureResponse {
  signature: string;
  timestamp: number;
  api_key: string;
  cloud_name: string;
}

/**
 * Obtiene una firma de subida segura desde el backend.
 * @param token - El token JWT de autenticación del usuario.
 * @returns La firma y otros datos necesarios para la subida.
 */
const getUploadSignature = async (token: string): Promise<SignatureResponse> => {
  const response = await axios.get<SignatureResponse>(`${UPLOAD_API_URL}/signature`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

/**
 * Sube un archivo directamente a Cloudinary usando la firma obtenida.
 * @param file - El archivo a subir.
 * @param signature - La firma digital.
 * @param timestamp - El timestamp de la firma.
 * @param apiKey - La API Key de Cloudinary.
 * @param cloudName - El Cloud Name de Cloudinary.
 * @returns La respuesta de la API de Cloudinary, que incluye la URL segura.
 */
const uploadToCloudinary = async (
  file: File,
  signature: string,
  timestamp: number,
  apiKey: string,
  cloudName: string
) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('signature', signature);
  formData.append('timestamp', timestamp.toString());
  formData.append('api_key', apiKey);
  // Opcional: Especificar una carpeta en Cloudinary
  // formData.append('folder', 'levanto-tur-uploads');

  const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const response = await axios.post(uploadUrl, formData);
  return response.data;
};

/**
 * Orquesta el proceso completo de subida de una imagen.
 */
export const uploadImage = async (file: File, token: string) => {
  try {
    // 1. Obtener la firma del backend
    const { signature, timestamp, api_key, cloud_name } = await getUploadSignature(token);

    // 2. Subir el archivo a Cloudinary
    const cloudinaryResponse = await uploadToCloudinary(file, signature, timestamp, api_key, cloud_name);
    
    // 3. Devolver la URL segura del archivo subido
    return cloudinaryResponse.secure_url;
  } catch (error) {
    console.error('Error durante la subida de la imagen:', error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'No se pudo subir la imagen.');
    }
    throw new Error('Error de red o de configuración al subir la imagen.');
  }
};
