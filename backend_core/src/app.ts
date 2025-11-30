// Archivo: backend_core/src/app.ts
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Importar las rutas
import authRoutes from './routes/auth.routes'; 

const app: Application = express();

// Middlewares globales

// Permitir peticiones desde el frontend de Vite (http://localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(bodyParser.json());

// Montaje de las rutas de los módulos
app.use('/api/v1/auth', authRoutes);

// Ruta de prueba
app.get('/api/v1/status', (req: Request, res: Response) => {
  res.status(200).json({ 
    message: 'Backend Core de Levanto Conecta funcionando!', 
    status: 'ok'
  });
});

export default app; // Exporta por defecto para que server.ts lo importe
