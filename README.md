# Titanes FC — hub digital

Sitio web de un equipo de fútbol formativo: presenta su metodología de entrenamiento, su cuerpo técnico, los horarios, los planes de precio y su marco legal, y permite que familias y jugadores lo contacten por formulario o WhatsApp. Está dirigido a padres de niños, jóvenes y adultos que buscan dónde entrenar (categorías infantil, juvenil, libre y femenil).

## Funcionalidades principales

- **Página principal de una sola vista** con portada, proceso de entrenamiento, cuerpo técnico, objetivo, uniforme, misión y visión, características del programa, valores, planes, horarios, contacto y llamada a la acción final.
- **Planes de precio** con botones para apartar lugar por WhatsApp.
- **Formulario de contacto** validado (nombre, correo y mensaje) que envía el mensaje por correo con EmailJS, con estados de carga y avisos de éxito o error.
- **Página de marco legal** (`/marco-legal`) con el documento institucional del centro de formación.
- **Botones de WhatsApp** en la portada, los planes, la llamada final y el pie.
- **Animaciones de entrada** al hacer scroll.
- **Diseño responsivo** con componentes shadcn/ui.

## Capturas

<!-- Agrega aquí tus imágenes, por ejemplo: ![Portada](docs/capturas/portada.png) -->

_Pendiente._

## Stack

| Capa | Tecnología |
|---|---|
| Framework | React 18.3, TypeScript 5.8, React Router 6.30 |
| Build | Vite 5.4 con `@vitejs/plugin-react-swc` |
| Estilos y UI | Tailwind CSS 3.4, shadcn/ui (Radix UI), Lucide |
| Formularios | React Hook Form y Zod |
| Correo | EmailJS (`@emailjs/browser` 4) |
| Hosting | Firebase Hosting |

## Arquitectura

Aplicación de una sola página (SPA) sin backend propio:

- `src/App.tsx` define dos rutas: `/` (`src/pages/Index.tsx`) y `/marco-legal`.
- `src/pages/Index.tsx` compone la página con una sección por componente en `src/components/` (`Hero`, `TrainingProcess`, `Staff`, `About`, `Uniform`, `Mission`, `Features`, `ValuesAndCommitments`, `Pricing`, `Schedule`, `Contact`, `FinalCTA` y `Footer`). El componente `TargetAudience` existe pero está desactivado.
- `src/components/ScrollAnimation.tsx` anima la entrada de las secciones con `react-intersection-observer`.
- `src/components/ui/` contiene los componentes base de shadcn/ui.
- `firebase.json` publica la carpeta `dist` y redirige todas las rutas a `index.html`.

## Instalación y ejecución

Requisitos: Node.js 18 o superior y npm.

```bash
git clone https://github.com/LDanielMC/titanes-fc-digital-hub.git
cd titanes-fc-digital-hub
npm install
# crea un archivo .env con las variables de la tabla siguiente
npm run dev
```

### Variables de entorno

| Variable | Uso |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | Servicio de EmailJS que envía el formulario de contacto |
| `VITE_EMAILJS_TEMPLATE_ID` | Plantilla del correo |
| `VITE_EMAILJS_PUBLIC_KEY` | Clave pública de EmailJS (se incluye en el bundle del navegador por diseño) |

Sin estas variables el formulario de contacto no puede enviar mensajes.

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Compila para producción en `dist/` |
| `npm run preview` | Sirve la compilación para revisarla |
| `npm run lint` | Revisa el código con ESLint |

### Despliegue

```bash
npm run build
firebase deploy --only hosting
```

## Pruebas

El proyecto no incluye pruebas automatizadas; la calidad del código se revisa con `npm run lint`.
