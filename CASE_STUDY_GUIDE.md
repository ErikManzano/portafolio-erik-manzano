# 📋 Project Case Study Component System

## Resumen Ejecutivo

Sistema completo de componentes reutilizables para portfolios de diseñadores y desarrolladores. Permite documentar y presentar case studies profesionales de proyectos con una estructura clara y moderna.

---

## 📐 Arquitectura de Componentes

```
src/
├── components/
│   └── case-study/
│       ├── ProjectCaseStudy.astro           ← Componente Principal
│       ├── ProjectHero.astro                ← Sección 1: Hero
│       ├── ProblemSection.astro             ← Sección 2: Problema
│       ├── OperativeContextSection.astro    ← Sección 3: Contexto
│       ├── SystemOperationsSection.astro    ← Sección 4: Operaciones
│       ├── AuditSection.astro               ← Sección 5: Auditoría
│       ├── InteractionArchitectureSection.astro ← Sección 6: Arquitectura
│       ├── UIStrategySection.astro          ← Sección 7: Estrategia UI
│       ├── ImpactSection.astro              ← Sección 8: Impacto
│       ├── LessonsSection.astro             ← Sección 9: Aprendizajes
│       └── NextStepsSection.astro           ← Sección 10: Próximos Pasos
├── data/
│   └── case-study-schema.json               ← Datos del proyecto
└── pages/
    └── case-study.astro                     ← Página de ejemplo
```

---

## 📊 Estructura de Datos

### Archivo: `src/data/case-study-schema.json`

```json
{
  "projects": [
    {
      "id": "1",
      "title": "Nombre del Proyecto",
      "description": "Descripción corta (1-2 líneas)",
      "year": "2023",
      "role": "Rol del usuario",
      "industry": "Sector/Industria",
      "context": "Contexto general del proyecto",
      
      "problem": {
        "title": "Problema principal",
        "description": "Descripción detallada",
        "businessImpact": "Impacto financiero/operativo"
      },
      
      "operativeContext": {
        "environment": "Descripción del entorno",
        "userProfile": [
          {
            "segment": "Nombre del segmento",
            "count": "Cantidad de usuarios",
            "behaviors": "Comportamientos principales"
          }
        ]
      },
      
      "systemOperations": [
        {
          "name": "Nombre de la operación",
          "description": "Descripción"
        }
      ],
      
      "auditFindings": [
        {
          "issue": "Problema encontrado",
          "severity": "alta|media|baja",
          "description": "Descripción"
        }
      ],
      
      "interactionArchitecture": {
        "structure": "Estructura del sistema",
        "navigation": "Sistema de navegación",
        "flows": "Flujos de usuario"
      },
      
      "uiStrategy": {
        "principles": [
          {
            "principle": "Nombre del principio",
            "description": "Explicación"
          }
        ],
        "decisions": ["Decisión 1", "Decisión 2"]
      },
      
      "impact": [
        {
          "metric": "Métrica",
          "value": "Valor (ej: +65%)",
          "description": "Explicación"
        }
      ],
      
      "lessons": [
        {
          "title": "Título del aprendizaje",
          "insight": "Insight del proyecto"
        }
      ],
      
      "nextSteps": [
        {
          "phase": "Q1 2024",
          "items": ["Item 1", "Item 2"]
        }
      ]
    }
  ]
}
```

---

## 🚀 Cómo Usar el Componente

### 1. **Importar el componente**

```astro
---
import ProjectCaseStudy from "../components/case-study/ProjectCaseStudy.astro";
import caseStudyData from "../data/case-study-schema.json";
---

<ProjectCaseStudy project={caseStudyData.projects[0]} />
```

### 2. **Agregar un nuevo proyecto**

Simplemente agrega un nuevo objeto al array `projects` en `case-study-schema.json`:

```json
{
  "projects": [
    { /* Proyecto existente */ },
    {
      "id": "2",
      "title": "Nuevo Proyecto",
      "description": "...",
      // ... resto de propiedades
    }
  ]
}
```

### 3. **Crear una nueva página**

```astro
---
import Layout from "../layouts/Layout.astro";
import ProjectCaseStudy from "../components/case-study/ProjectCaseStudy.astro";
import caseStudyData from "../data/case-study-schema.json";

const project = caseStudyData.projects[1]; // Acceder al nuevo proyecto
---

<Layout title={`${project.title} | Mi Portafolio`}>
  <ProjectCaseStudy project={project} />
</Layout>
```

---

## 🎨 Características de Diseño

### **Tipografía Jerárquica**
- Hero titles: `3.5rem` (desktop), `2rem` (mobile)
- Section titles: `2.5rem` (desktop), `1.8rem` (mobile)
- Subtitles: `1.25rem - 1.5rem`
- Body text: `1rem` con `line-height: 1.8`

### **Paleta de Colores**
- **Primary**: `#a480f7` (Purple)
- **Secondary**: `#7c4deb` (Darker Purple)
- **Success**: `#10b981` (Green) - para impacto
- **Alert**: `#dc2626` (Red) - para severidad alta
- **Warning**: `#f59e0b` (Orange) - para severidad media
- **Background**: `#212121` (Dark)
- **Text**: `#b6cbce` (Light Gray)

### **Espaciado**
- Sistema modular **8px**
- Padding de secciones: `2rem - 3rem`
- Gap entre elementos: `1rem - 2rem`

### **Animaciones**
- **AOS (Animate On Scroll)**: Fade-up en todas las secciones
- Delays: 0-300ms para efecto cascada
- Duración: 700ms
- Hover states: Transform + Shadow

---

## 📱 Responsividad

Todos los componentes son **100% responsivos**:

- **Desktop**: Layouts multi-columna
- **Tablet**: Máx 2 columnas
- **Mobile**: Stack vertical (1 columna)

Breakpoint principal: `@media (max-width: 768px)`

---

## ✨ Subcomponentes Detallados

### **1. ProjectHero**
- Mostrador inicial con fecha, título, descripción
- Metadatos: Rol e Industria
- Contexto del proyecto
- **Props**: `title`, `description`, `year`, `role`, `industry`, `context`

### **2. ProblemSection**
- Problema identificado
- Impacto en el negocio
- Estilo diferenciado para "impacto" (rojo)
- **Props**: `title`, `description`, `businessImpact`

### **3. OperativeContextSection**
- Descripción del entorno
- Grid de perfiles de usuarios
- Cantidad de usuarios por segmento
- **Props**: `environment`, `userProfile[]`

### **4. SystemOperationsSection**
- Lista numerada de operaciones
- Números grandes y gradientes
- Hover transition
- **Props**: `operations[]`

### **5. AuditSection**
- Grid de hallazgos
- Badges de severidad (alta/media/baja)
- Colores según severidad
- **Props**: `findings[]`

### **6. InteractionArchitectureSection**
- 3 columnas: Estructura, Navegación, Flujos
- Íconos emoji
- Cards con hover effect
- **Props**: `structure`, `navigation`, `flows`

### **7. UIStrategySection**
- Dos columnas: Principios + Decisiones
- Badges numeradas para principios
- Bullets para decisiones
- **Props**: `principles[]`, `decisions[]`

### **8. ImpactSection**
- Grid de KPIs
- Valores grandes en verde
- Cards con top border verde
- **Props**: `impact[]`

### **9. LessonsSection**
- Lista de aprendizajes
- Íconos emoji (💡)
- Cards con fondo naranja
- **Props**: `lessons[]`

### **10. NextStepsSection**
- Cards por fase
- Header con gradiente
- Checkmarks numerados
- **Props**: `nextSteps[]`

---

## 🔄 Flujo de Actualización

1. **Editar datos**: Actualiza `case-study-schema.json`
2. **Guardar**: El navegador recarga automáticamente
3. **Animaciones**: Se activan al hacer scroll (AOS)

---

## 📝 Notas Importantes

- Todos los componentes incluyen **data-aos** para animaciones
- Delays escalonados: `100 + index * 100`
- Responsive grid: `repeat(auto-fit, minmax(280px, 1fr))`
- Colores mediante CSS variables
- Estilos scoped en cada componente

---

## 🎯 Próximas Mejoras Sugeridas

1. **Galería de imágenes**: Agregar sección con screenshots
2. **Testimonios**: Feedback de stakeholders
3. **Timeline interactivo**: Mostrar evolución del proyecto
4. **Filtros**: Filtrar projects por industria/año
5. **Integración CMS**: Para gestionar proyectos desde admin
6. **Social sharing**: Botones para compartir en redes

---

## 📄 Licencia

Sistemas de componentes personalizado para portafolio profesional.
