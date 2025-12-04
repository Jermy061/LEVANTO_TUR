// Archivo: backend_core/src/routes/upload.routes.ts
import { Router } from 'express';
import { getSignature } from '../controller/upload/upload.controller';
import { protect, adminOnly } from '../middleware/auth.middleware';

const router = Router();

// Endpoint: GET /api/v1/upload/signature
// Protegido: Solo los administradores autenticados pueden obtener una firma.
router.get('/signature', protect, adminOnly, getSignature);

export default router;
