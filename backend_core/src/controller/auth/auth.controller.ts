// Archivo: backend_core/src/controller/auth.controller.ts
import { Request, Response } from 'express';
import { authenticateUser } from '../../services/auth.service';

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Faltan campos: email y password son requeridos.' });
    }

    const result = await authenticateUser(email, password);

    // Éxito: Devuelve el token y la información del usuario
    res.status(200).json(result);

  } catch (error) {
    // Manejo específico de errores de autenticación
    if (error instanceof Error && error.message.includes('Credenciales inválidas')) {
      return res.status(401).json({ error: error.message });
    }
    console.error('Error durante el login:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

export default {
    login,
};