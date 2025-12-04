// Archivo: backend_core/src/routes/touristic.routes.ts
import { Router } from 'express';
import touristicController from '../controller/touristic/touristic.controller';
import { protect, adminOnly } from '../middleware/auth.middleware';

const router = Router();

// Rutas públicas (cualquiera puede ver)
router.get('/', touristicController.getAll);
router.get('/:id', touristicController.getById);

// Rutas protegidas (solo para administradores)
router.post('/', protect, adminOnly, touristicController.create);
router.put('/:id', protect, adminOnly, touristicController.update);
router.delete('/:id', protect, adminOnly, touristicController.remove);

export default router;
