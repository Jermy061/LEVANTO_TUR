// src/controller/tenants/tenants.controller.ts
import type { Request, Response } from 'express';
import { registerTenant } from '../../services/tenants.service';

export const register = async (req: Request, res: Response) => {
  try {
    const { nombre_empresa, contactPhone, businessType } = req.body ?? {};

    if (!nombre_empresa || typeof nombre_empresa !== 'string') {
      return res.status(400).json({ error: 'El campo nombre_empresa es obligatorio.' });
    }

    const tenant = await registerTenant({ nombre_empresa, contactPhone, businessType });

    return res.status(201).json({
      message: 'Solicitud de registro recibida. El negocio está pendiente de aprobación por la Municipalidad.',
      tenantId: tenant.id,
      subdominio: tenant.subdominio,
    });
  } catch (error) {
    console.error('Error al registrar tenant:', error);
    return res.status(500).json({ error: 'Error interno al registrar el negocio.' });
  }
};
