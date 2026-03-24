# Portafolio de Erik Manzano - Versión Astro

Versión modernizada de mi portafolio convertida a [Astro](https://astro.build), un generador de sitios estáticos optimizado para rendimiento.

## 🚀 Características

- ⚡ Rendimiento optimizado (HTML estático pre-renderizado)
- 📱 Diseño responsive con Bootstrap 5
- ✨ Animaciones suaves con AOS (Animate On Scroll)
- 🔧 Fácil de mantener y actualizar
- 📊 Datos organizados en archivos JSON
- 🎨 Componentes reutilizables

## 🛠️ Desarrollo

### Instalación

```bash
npm install
```

### Iniciar servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

### Construir para producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

## 📂 Estructura del Proyecto

```
src/
├── layouts/
│   └── Layout.astro           # Layout principal
├── components/
│   ├── Navbar.astro           # Barra de navegación
│   ├── HeroSection.astro      # Sección inicio
│   ├── ProjectCard.astro      # Tarjeta de proyecto
│   ├── ExperienceCard.astro   # Tarjeta de experiencia
│   ├── EducationCard.astro    # Tarjeta de educación
│   └── Footer.astro           # Pie de página
├── data/
│   ├── projects.json          # Datos de proyectos
│   ├── experience.json        # Datos de experiencia
│   └── education.json         # Datos de educación
└── pages/
    └── index.astro            # Página principal
```

## 📝 Actualizar Contenido

Para actualizar tu portafolio, solo edita los archivos JSON en `src/data/`:

- **Agregar proyecto**: Edit `projects.json`
- **Cambiar experiencia**: Edit `experience.json`
- **Actualizar educación**: Edit `education.json`

## 🚀 Deploy en Netlify

1. Push el repositorio a GitHub
2. Conecta tu repositorio en Netlify
3. Asigna `npm run build` como comando de build
4. Deploy

¡Listo! Tu portafolio estará en línea.

## 📄 Licencia

Todos los derechos reservados © 2025 Erik Manzano
