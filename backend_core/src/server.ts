// Archivo: backend_core/src/server.ts
import 'dotenv/config'; // Carga las variables de .env
import app from './app'; // Importa la instancia de Express desde app.ts

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`⚡️ Servidor de Levanto Conecta corriendo en http://localhost:${PORT}`);
  console.log(`Ruta de prueba: http://localhost:${PORT}/api/v1/status`);
});