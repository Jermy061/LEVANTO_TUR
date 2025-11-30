// Archivo: backend_core/src/services/auth.service.ts
import { prisma } from '../lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// NOTA: El enum UserRole se importa automáticamente de @prisma/client

const JWT_SECRET = process.env.JWT_SECRET || 'LEVANTOTUR_SECRET_CAMBIAR_EN_PRODUCCION';

/**
 * Servicio para manejar la lógica de inicio de sesión.
 */
export const authenticateUser = async (email: string, password: string) => {
  // 1. Buscar usuario
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error('Credenciales inválidas. Usuario no encontrado.');
  }

  // 2. Comparar contraseña
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Credenciales inválidas. Contraseña incorrecta.');
  }

  // 3. Generar JWT
  const token = jwt.sign(
    { 
      userId: user.id, 
      role: user.role,
      tenantId: user.tenantId || null // null si es ADMIN
    }, 
    JWT_SECRET, 
    { expiresIn: '8h' } 
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      tenantId: user.tenantId,
    },
  };
};