// src/services/TenantService.ts
import axios from 'axios';

// Detectar entorno / subdominio de desarrollo
const origin = window.location.origin;
let API_BASE = 'http://127.0.0.1:4000';

if (origin.includes('jscs.localhost') || origin.includes('localhost:5173')) {
  API_BASE = 'http://127.0.0.1:4000';
}

const TENANTS_API = `${API_BASE}/api/v1/tenants`;

export type BusinessType = 'ACCOMMODATION' | 'RESTAURANT' | 'TRANSPORT' | 'LOCAL_PRODUCT' | 'TOUR_AGENCY';

export interface TenantRegisterPayload {
  nombre_empresa: string;
  contactPhone?: string;
  businessType?: BusinessType;
}

export interface TenantRegisterResponse {
  message: string;
  tenantId: number;
  subdominio: string;
}

export const registerTenantApi = async (
  payload: TenantRegisterPayload,
): Promise<TenantRegisterResponse> => {
  const response = await axios.post<TenantRegisterResponse>(`${TENANTS_API}/register`, payload);
  return response.data;
};
