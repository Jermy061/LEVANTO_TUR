// src/services/tenants.service.ts
import { prisma } from '../lib/prisma';
import type { BusinessType } from '@prisma/client';

export interface TenantRegisterInput {
  nombre_empresa: string;
  contactPhone?: string | null;
  businessType?: BusinessType | null;
}

export const registerTenant = async (data: TenantRegisterInput) => {
  const { nombre_empresa, contactPhone, businessType } = data;

  // Generar un subdominio base simple a partir del nombre de la empresa
  const baseSlug = nombre_empresa
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '') || 'tenant';

  const subdominio = `pre-${baseSlug}`; // En futura versión podrías garantizar unicidad

  const tenant = await prisma.tenants.create({
    data: {
      nombre_empresa,
      subdominio,
      contactPhone: contactPhone ?? null,
      businessType: businessType ?? null,
      isApproved: false,
      isPublished: false,
    },
  });

  return tenant;
};
