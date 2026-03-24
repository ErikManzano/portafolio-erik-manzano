# 📋 Guía de Instalación y Uso - Portafolio Astro

## 🚀 Primeros Pasos

### 1. Navega al directorio del proyecto
```bash
cd c:\Users\Admin\OneDrive\Desktop\portafolio-astro
```

### 2. Instala las dependencias
```bash
npm install
```

Este comando instalará:
- **Astro** - Framework estático
- **AOS** - Animaciones al scroll
- **Bootstrap** - Framework CSS
- **Bootstrap Icons** - Iconografía

### 3. Inicia el servidor de desarrollo
```bash
npm run dev
```

Abre tu navegador en: **http://localhost:3000**

La página se recargará automáticamente cuando hagas cambios.

---

## 📝 Actualizar Contenido

Todo el contenido está **centralizado en archivos JSON** para fácil mantenimiento:

### ✨ Agregar/Editar Proyectos
📄 Archivo: `src/data/projects.json`

```json
{
  "id": 6,
  "title": "MI NUEVO PROYECTO",
  "description": "Descripción breve",
  "image": "/assets/images/nuevo-proyecto.png",
  "url": "https://link-del-proyecto.com",
  "features": [
    "Feature 1",
    "Feature 2"
  ]
}
```

### 💼 Agregar Experiencia Laboral
📄 Archivo: `src/data/experience.json`

```json
{
  "id": 5,
  "position": "NUEVO PUESTO",
  "company": "Empresa",
  "period": "mes año - mes año",
  "responsibilities": [
    "Responsabilidad 1",
    "Responsabilidad 2"
  ]
}
```

### 🎓 Agregar Educación
📄 Archivo: `src/data/education.json`

```json
{
  "id": 2,
  "title": "Nombre de la carrera/certificado",
  "institution": "Institución",
  "period": "mes año - mes año"
}
```

### 🛠️ Agregar Tecnologías
📄 Archivo: `src/data/technologies.json`

Agrega el nombre del archivo de ícono (sin extensión):
```json
["figma", "react", "typescript", ...]
```

Los iconos deben estar en: `public/assets/images/iconos/`

---

## 🏗️ Estructura del Proyecto

```
portafolio-astro/
├── src/
│   ├── components/
│   │   ├── Navbar.astro           # Barra navegación
│   │   ├── HeroSection.astro      # Sección principal
│   │   ├── ProjectCard.astro      # Tarjeta de proyecto
│   │   ├── ExperienceCard.astro   # Tarjeta de experiencia
│   │   ├── EducationCard.astro    # Tarjeta educación
│   │   └── Footer.astro           # Pie de página
│   ├── layouts/
│   │   └── Layout.astro           # Layout principal
│   ├── data/
│   │   ├── projects.json          # 📝 Proyectos
│   │   ├── experience.json        # 📝 Experiencia
│   │   ├── education.json         # 📝 Educación
│   │   └── technologies.json      # 📝 Tecnologías
│   └── pages/
│       └── index.astro            # Página principal
├── public/
│   └── assets/
│       ├── images/                # Imágenes
│       ├── css/
│       │   └── style.css          # Estilos personalizados
│       └── js/
│           └── main.js            # Scripts personalizados
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

---

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `src/layouts/Layout.astro`:

```css
:root {
    --color-body: #b6cbce;           /* Color texto */
    --color-heading: #eef3db;        /* Color títulos */
    --color-base: #121212;           /* Fondo base */
    --color-brand: #a480f7;          /* Color principal */
    --color-brand2: #7c4deb;         /* Color secundario */
}
```

### Modificar Estilos
- Estilos globales: `public/assets/css/style.css`
- Estilos por componente: Cada `.astro` tiene su `<style>` block

---

## 🔨 Comandos Disponibles

```bash
# Desarrollo local
npm run dev

# Compilar para producción
npm run build

# Ver preview de build
npm run preview

# Astro CLI
npm run astro -- [comando]
```

---

## 📤 Deploy en Netlify

### Opción 1: Línea de Comandos
```bash
# Instala Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Opción 2: Conectar Repositorio
1. Push a GitHub: `git push origin main`
2. Ve a [Netlify](https://netlify.com)
3. Click en "New site from Git"
4. Conecta tu repositorio
5. Asigna:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/`

### ¡Listo! 🎉
Tu portafolio estará en línea en segundos.

---

## 📚 Recursos Útiles

- [Documentación de Astro](https://docs.astro.build)
- [Bootstrap Docs](https://getbootstrap.com/docs)
- [AOS - Animate On Scroll](https://michalsnik.github.io/aos/)

---

## 💡 Tips de Mantenibilidad

✅ **Lo mejor de Astro para tu caso:**
- Cambiar jobs = actualizar `experience.json`
- Agregar proyecto = agregar objeto a `projects.json`
- Sin recargas de componentes innecesarias
- SEO optimizado automáticamente
- Deploy super rápido

¡Tu portafolio es ahora 10x más mantenible! 🚀
