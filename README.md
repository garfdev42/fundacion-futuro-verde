## Fundación Futuro Verde – Plataforma de Donaciones

Aplicación web para una fundación ambiental que permite presentar la misión, proyectos de conservación y recibir donaciones en línea a través de una pasarela de pagos externa.

### Características principales

- **Home principal** con hero, imagen destacada, misión y visión con pestañas.
- **Página de proyectos** con tarjetas e imágenes para:
  - Reforestación y recuperación de bosques nativos.
  - Educación ambiental para comunidades y escuelas.
  - Protección hídrica y conservación de ecosistemas acuáticos.
  - Programas sociales rurales y desarrollo sostenible.
- **Flujo de donación**:
  - Formulario con identificación, nombre completo, email, monto en USD y mensaje.
  - Creación de la donación en el backend.
  - Redirección automática a la pasarela de pagos (Stripe) usando la `paymentUrl` devuelta por la API.
- **Formulario de contacto** para captar personas interesadas en colaborar con la fundación.
- Diseño responsive, orientado a contenido institucional.

### Stack tecnológico

- **Frontend**: React + TypeScript.
- **Bundler / Dev Server**: Vite.
- **Estilos**: CSS modular y variables globales (design tokens).
- **Router**: `react-router-dom`.

### Estructura de carpetas

- `src/`
  - `api/`: cliente HTTP y servicios (`donations`, `contacts`).
  - `components/`: componentes reutilizables (`Layout`, `Header`, `Footer`, `DonateButton`, `DonationForm`, `ContactForm`, `Modal`).
  - `pages/`: páginas principales (`Home`, `Proyectos`, `Donaciones`, `Contacto`).
  - `styles/`: estilos globales y variables (`global.css`, `variables.css`).
  - `types/`: definiciones de tipos compartidos (`DonationPayload`, `ContactPayload`, respuesta de donaciones).
  - `lib/`: utilidades de validación de formularios.
- `public/`
  - `proyectos/`: imágenes utilizadas en el hero y en las tarjetas de proyectos.

### Configuración de entorno

La comunicación con el backend se realiza mediante variables de entorno de Vite (prefijo `VITE_`).

Variables esperadas:

- `VITE_API_URL` (obligatoria): URL base de la API.
  - Ejemplo para el backend de pruebas:
    ```env
    VITE_API_URL=https://donations-test.onrender.com/api
    ```
- `VITE_CONTACTS_PATH` (opcional): ruta para el endpoint de contactos.  
  Por defecto el frontend usa `/contacts`. Solo es necesario definirla si el backend expone otra ruta.

Archivos:

- `.env`: contiene los valores reales para cada entorno (no se versiona).
- `.env.example`: plantilla de ejemplo con claves necesarias, incluida en el repositorio.

### Scripts disponibles

En el directorio del proyecto:

- `npm run dev`  
  Inicia el servidor de desarrollo de Vite.

- `npm run build`  
  Genera el build de producción en la carpeta `dist/`.

- `npm run preview`  
  Sirve el build de producción localmente.

- `npm run lint`  
  Ejecuta el linter sobre el código fuente.

### Flujo de donación

1. El usuario abre el modal de donación desde cualquiera de los botones “Donar”.
2. Completa el formulario con:
   - `identification`
   - `fullName`
   - `email`
   - `amount` (USD)
   - `message`
3. El frontend envía un `POST` a:
   - `POST {VITE_API_URL}/donations/create`
4. El backend responde con:
   - Objeto `donation`.
   - Campo `paymentUrl` con la URL de la pasarela de pagos.
5. El frontend redirige automáticamente a `paymentUrl` para completar el pago.

### Flujo de contacto

1. El usuario accede a la página **Contacto**.
2. Completa nombre, email, teléfono (opcional) y mensaje.
3. El frontend envía un `POST` a:
   - `POST {VITE_API_URL}{VITE_CONTACTS_PATH || '/contacts'}`.
4. Si la operación es correcta, se limpia el formulario y se muestra un mensaje de confirmación.

### Despliegue en Vercel

1. Subir el repositorio a GitHub.
2. En Vercel, crear un **New Project** importando el repositorio.
3. Configurar:
   - Framework: **Vite**.
   - Build Command: `npm run build`.
   - Output Directory: `dist`.
4. Definir variables de entorno en Vercel:
   - `VITE_API_URL=https://donations-test.onrender.com/api`
   - Opcional: `VITE_CONTACTS_PATH=/contacts`.
5. Ejecutar el primer deploy.

