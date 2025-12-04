// src/routes/tenants.routes.ts
import { Router } from 'express';
import tenantsController from '../controller/tenants/tenants.controller';

const router = Router();

// POST /api/v1/tenants/register
router.post('/register', tenantsController.register);

export default router;
