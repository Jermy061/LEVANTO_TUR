// Archivo: backend_core/src/routes/auth.routes.ts
import { Router } from 'express';
import authController from '../controller/auth/auth.controller';

const router = Router();

// Endpoint: POST /api/v1/auth/login
router.post('/login', authController.login);

export default router;