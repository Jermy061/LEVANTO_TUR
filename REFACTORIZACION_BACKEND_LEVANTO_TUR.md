🎯 Plan de Refactorización: Backend Core (Arquitectura Limpia)Este plan de refactorización tiene como objetivo reestructurar el backend core de Node.js/Express, siguiendo los principios de la Arquitectura Limpia (Clean Architecture / Screaming Architecture).La organización se centrará en los módulos, donde cada módulo contendrá las tres capas principales: domain, application, e infrastructure.1. Patrones de Diseño AplicadosPara garantizar el desacoplamiento y la testabilidad, se aplicarán los siguientes patrones:A. Patrón Dependency Inversion Principle (DIP)¿Dónde se aplica? En la comunicación entre la capa de Application (Casos de Uso) y la capa de Infrastructure (Prisma).Implementación:La capa de application (Casos de Uso) dependerá de una Abstracción (una Interfaz/Puerto) definida en la capa domain (Ej: AuthRepository.ts).La capa de infrastructure (Ej: PrismaAuthRepository.ts) implementará esa Interfaz/Puerto.El Controller será responsable de inyectar la implementación de infrastructure en el Caso de Uso de application.B. Patrón Repositorio (Repository Pattern)¿Dónde se aplica? Dentro de la capa domain/interfaces y su implementación en infrastructure/prisma.Implementación: Se define la Interfaz [Modulo]Repository (Ej: TourRepository.ts) para todas las operaciones de persistencia (CRUD). Los Casos de Uso solo interactúan con esta interfaz, asegurando que si la base de datos cambia (Ej: de Prisma a un ORM diferente), solo se modifique la capa de infraestructura.C. Patrón Caso de Uso (Use Case / Interactor)¿Dónde se aplica? En la capa application/use_cases.Implementación: Cada acción de negocio significativa se encapsula en una clase o función.Ejemplo: CreateTour.ts, UpdateProfile.ts, SignIn.ts.Los Casos de Uso son el centro de la aplicación: reciben datos crudos, llaman a las Entidades para validación, usan los Repositorios para persistir, y devuelven el resultado.2. Estructura de Directorios DetalladaLa estructura de directorios sigue el patrón "por característica" (módulos), donde cada módulo tiene sus propias capas.backend_core/
├── prisma/
│   └── schema.prisma           // Definición del esquema
├── src/
│   ├── config/                 // Configuración global (dotenv, Cloudinary, etc.)
│   ├── lib/                    // Utilidades genéricas (Ej: cliente de Prisma, helpers de token)
│   ├── middleware/             // Middlewares de Express (auth.middleware, error.middleware)
│   ├── modules/
│   │   // -------------------------------------------------------------------
│   │   // EJEMPLO DE MODULO: AUTH
│   │   // -------------------------------------------------------------------
│   │   ├── auth/
│   │   │   ├── domain/
│   │   │   │   ├── entities/
│   │   │   │   │   └── User.ts         // Entidad User (reglas de negocio puras)
│   │   │   │   └── interfaces/
│   │   │   │       └── AuthRepository.ts // PUERTO: Contrato para persistencia
│   │   │   ├── application/
│   │   │   │   └── use_cases/
│   │   │   │       ├── SignIn.ts       // Caso de Uso: Autenticar usuario (Lógica central)
│   │   │   │       └── SignUp.ts       // Caso de Uso: Registrar usuario (Lógica central)
│   │   │   └── infrastructure/
│   │   │       ├── api/
│   │   │       │   └── AuthController.ts // ADAPTADOR: Express Controller (Manejo de HTTP)
│   │   │       ├── prisma/
│   │   │       │   └── PrismaAuthRepository.ts // ADAPTADOR: Implementación del Repositorio con Prisma
│   │   │       └── routes.ts             // Rutas de Express para el módulo Auth
│   │   // -------------------------------------------------------------------
│   │   // EJEMPLO DE MODULO: TOUR_CONTENT
│   │   // -------------------------------------------------------------------
│   │   ├── tour_content/
│   │   │   ├── domain/
│   │   │   │   ├── entities/
│   │   │   │   │   └── Tour.ts           // Entidad Tour
│   │   │   │   └── interfaces/
│   │   │   │       └── TourRepository.ts // PUERTO: Contrato para persistencia
│   │   │   ├── application/
│   │   │   │   └── use_cases/
│   │   │   │       ├── CreateTour.ts     // Caso de Uso: Crear un Tour
│   │   │   │       └── GetTourDetail.ts  // Caso de Uso: Obtener detalles del Tour
│   │   │   └── infrastructure/
│   │   │       ├── api/
│   │   │       │   └── TourController.ts // ADAPTADOR: Express Controller
│   │   │       ├── prisma/
│   │   │       │   └── PrismaTourRepository.ts // ADAPTADOR: Implementación del Repositorio con Prisma
│   │   │       └── routes.ts             // Rutas de Express para Tour Content
│   │   // ... (Los módulos USERS, ACCOMMODATIONS, RESTAURANTS, etc. seguirán exactamente el mismo patrón)
│   │
│   ├── app.ts                  // Ensamblaje central de Express (middlewares y rutas globales)
│   └── server.ts               // Punto de entrada: Inicializa Express y levanta el servidor
3. Guía de EjecuciónEliminar Carpetas Globales: Eliminar las carpetas globales controller, routes, y services que serán absorbidas por la nueva estructura modular.Crear Estructura Modular: Mover y crear las carpetas domain, application, e infrastructure dentro de cada módulo existente (ej: auth, users, tour_content).Refactorizar Lógica de Servicios:Mover la lógica de negocio central de los antiguos archivos [modulo].service.ts a las clases de Casos de Uso (application/use_cases).Crear la lógica de persistencia de datos (llamadas a Prisma) y moverla a las clases de Repositorio (infrastructure/prisma/Prisma[Modulo]Repository.ts).Adaptar Controladores: Mover la lógica de los antiguos [modulo].controller.ts a los nuevos Controllers (infrastructure/api), asegurando que su única responsabilidad sea manejar las peticiones HTTP y llamar a los Casos de Uso.Implementar Patrones DIP y Repositorio: Crear las Interfaces (domain/interfaces) que definen los contratos, y sus implementaciones (infrastructure/prisma) para desacoplar la lógica de la base de datos (Patrón Repositorio y DIP).
