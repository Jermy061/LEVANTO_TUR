// Archivo: backend_core/prisma/seed.ts
import { PrismaClient, UserRole } from '@prisma/client';
import bcrypt from 'bcryptjs';

// Inicializa el cliente de Prisma
const prisma = new PrismaClient();

// --- CREDENCIALES INICIALES ---
// Email actualizado solicitado por el usuario
const ADMIN_EMAIL = 'usjermcubas@gmail.com';
// NOTA: Esta contraseña se hashea antes de guardarse.
const ADMIN_PASSWORD_RAW = 'Levanto123*'; 
const ADMIN_NAME = 'Admin Municipalidad Levanto';

async function main() {
  console.log('Iniciando script de inicialización (Seed)...');

  // 1. Hashear la contraseña de forma segura
  const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD_RAW, 10);
  
  // 2. Crear o actualizar el usuario ADMIN (Rol clave: ADMIN)
  const adminUser = await prisma.user.upsert({
    where: { email: ADMIN_EMAIL },
    update: {
      password: hashedPassword,
      name: ADMIN_NAME,
      role: UserRole.ADMIN,
    },
    create: {
      email: ADMIN_EMAIL,
      password: hashedPassword,
      name: ADMIN_NAME,
      role: UserRole.ADMIN, // Le asigna el rol de súper-administrador
    },
  });

  // 3. Crear un Tenant de prueba (Necesario para que el ADMIN pueda interactuar con la DB si es necesario)
  const demoTenant = await prisma.tenants.upsert({
    where: { subdominio: 'demo-levanto' },
    update: {},
    create: {
      nombre_empresa: 'Contenido Central Levanto',
      subdominio: 'demo-levanto',
      isActive: true,
      isApproved: true,
      isPublished: true,
      businessType: 'TOUR_AGENCY',
      description_public: 'Tenant de prueba para contenido fijo de la Municipalidad.',
    },
  });

  console.log(`✅ Usuario ADMIN creado/actualizado: ${adminUser.email}`);
  console.log(`✅ Tenant de demostración creado: ${demoTenant.nombre_empresa}`);

}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });