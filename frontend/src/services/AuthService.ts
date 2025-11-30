// Archivo: frontend/src/services/AuthService.ts
import axios from 'axios';

// La URL base del Backend (compatibilidad con jscs.localhost y localhost:5173)
const origin = window.location.origin;
let API_BASE = 'http://127.0.0.1:4000';

if (origin.includes('jscs.localhost') || origin.includes('localhost:5173')) {
  API_BASE = 'http://127.0.0.1:4000';
}

const API_URL = `${API_BASE}/api/v1/auth`;

// --- Tipos de Datos (Deben coincidir con lo que devuelve el Backend) ---

interface UserData {
  id: number;
  name: string;
  email: string;
  role: 'ADMIN' | 'TENANT_OWNER';
  tenantId: number | null;
}

export interface LoginResponse {
  token: string;
  user: UserData;
}

/**
 * Llama al endpoint de login del backend.
 */
export const loginApi = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/login`, { 
      email, 
      password 
    });
    
    return response.data;
    
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Captura el mensaje de error del backend (ej. "Credenciales inválidas")
      throw new Error(error.response.data.error || 'Error de conexión con el servidor.');
    }
    throw new Error('Error de red o no se pudo conectar con el servicio.');
  }
};