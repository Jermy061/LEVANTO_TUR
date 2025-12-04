// Archivo: backend_core/src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

interface AuthRequest extends Request {
  user?: {
    userId: number;
    role: 'ADMIN' | 'TENANT_OWNER';
    tenantId: number | null;
  };
}

export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Acceso no autorizado. Token no proporcionado.' });
  }

  const [, token] = bearer.split(' ');

  if (!token) {
    return res.status(401).json({ error: 'Acceso no autorizado. Token malformado.' });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET) as AuthRequest['user'];
    req.user = payload;
    next();
  } catch (e) {
    console.error('Error al verificar el token:', e);
    return res.status(401).json({ error: 'Token inválido o expirado.' });
  }
};

export const adminOnly = (req: AuthRequest, res: Response, next: NextFunction) => {
    if (req.user?.role !== 'ADMIN') {
        return res.status(403).json({ error: 'Acceso denegado. Se requiere rol de administrador.' });
    }
    next();
};
