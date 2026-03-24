# 🏗️ Case Study Component Architecture

## Component Hierarchy Diagram

```
ProjectCaseStudy (Root)
│
├─ ProjectHero
│  └─ [Hero Section: Title, Description, Metadata, Context]
│
├─ ProblemSection
│  ├─ Problem Card
│  └─ Impact Card (Red styled)
│
├─ OperativeContextSection
│  ├─ Environment Card
│  └─ User Profile Grid
│     ├─ User Card 1
│     ├─ User Card 2
│     └─ User Card N
│
├─ SystemOperationsSection
│  ├─ Operation Item 1 (with numbered badge)
│  ├─ Operation Item 2
│  └─ Operation Item N
│
├─ AuditSection
│  ├─ Finding Card (Severity: Alta)
│  ├─ Finding Card (Severity: Media)
│  └─ Finding Card (Severity: Baja)
│
├─ InteractionArchitectureSection
│  ├─ Structure Card
│  ├─ Navigation Card
│  └─ Flows Card
│
├─ UIStrategySection
│  ├─ Principles Column
│  │  ├─ Principle Item 1
│  │  ├─ Principle Item 2
│  │  └─ Principle Item N
│  └─ Decisions Column
│     ├─ Decision Item 1
│     ├─ Decision Item 2
│     └─ Decision Item N
│
├─ ImpactSection
│  ├─ Impact Card (KPI 1) [Green]
│  ├─ Impact Card (KPI 2) [Green]
│  └─ Impact Card (KPI N) [Green]
│
├─ LessonsSection
│  ├─ Lesson Card 1 [Orange BG]
│  ├─ Lesson Card 2 [Orange BG]
│  └─ Lesson Card N [Orange BG]
│
└─ NextStepsSection
   ├─ Phase Card (Q1 2024)
   │  ├─ Item 1 ✓
   │  ├─ Item 2 ✓
   │  └─ Item N ✓
   ├─ Phase Card (Q2 2024)
   └─ Phase Card (Q3 2024)
```

---

## Data Flow Diagram

```
case-study-schema.json
│
├─ projects[0]
│  ├─ title, description, year, role, industry, context
│  │  → ProjectHero
│  │
│  ├─ problem
│  │  → ProblemSection
│  │
│  ├─ operativeContext
│  │  → OperativeContextSection
│  │
│  ├─ systemOperations[]
│  │  → SystemOperationsSection
│  │
│  ├─ auditFindings[]
│  │  → AuditSection
│  │
│  ├─ interactionArchitecture
│  │  → InteractionArchitectureSection
│  │
│  ├─ uiStrategy
│  │  → UIStrategySection
│  │
│  ├─ impact[]
│  │  → ImpactSection
│  │
│  ├─ lessons[]
│  │  → LessonsSection
│  │
│  └─ nextSteps[]
│     └─ NextStepsSection
│
└─ ProjectCaseStudy Component
   └─ case-study.astro (Page)
```

---

## Component Props Interface

```typescript
interface ProjectCaseStudyProps {
  project: {
    // Hero Section
    title: string;
    description: string;
    year: string;
    role: string;
    industry: string;
    context: string;
    
    // Problem Section
    problem: {
      title: string;
      description: string;
      businessImpact: string;
    };
    
    // Operative Context Section
    operativeContext: {
      environment: string;
      userProfile: Array<{
        segment: string;
        count: string;
        behaviors: string;
      }>;
    };
    
    // System Operations Section
    systemOperations: Array<{
      name: string;
      description: string;
    }>;
    
    // Audit Section
    auditFindings: Array<{
      issue: string;
      severity: 'alta' | 'media' | 'baja';
      description: string;
    }>;
    
    // Interaction Architecture Section
    interactionArchitecture: {
      structure: string;
      navigation: string;
      flows: string;
    };
    
    // UI Strategy Section
    uiStrategy: {
      principles: Array<{
        principle: string;
        description: string;
      }>;
      decisions: string[];
    };
    
    // Impact Section
    impact: Array<{
      metric: string;
      value: string;
      description: string;
    }>;
    
    // Lessons Section
    lessons: Array<{
      title: string;
      insight: string;
    }>;
    
    // Next Steps Section
    nextSteps: Array<{
      phase: string;
      items: string[];
    }>;
  };
}
```

---

## Styling Architecture

### CSS Variables (from Layout.astro)

```css
:root {
  --color-base: #121212;          /* Dark background */
  --color-base2: #212121;         /* Body background */
  --color-body: #b6cbce;          /* Light gray text */
  --color-heading: #eef3db;       /* Off-white headings */
  --color-brand: #a480f7;         /* Purple primary */
  --color-brand2: #7c4deb;        /* Darker purple */
  --font-base: "Bai Jamjuree";
}
```

### Color Semantic System

```
Success/Impact:   #10b981 (Green)
Alert/Severity:   #dc2626 (Red)
Warning/Caution:  #f59e0b (Orange)
```

### Responsive Breakpoints

```css
Desktop:  1200px+  (max 2-3 columns)
Tablet:    768px-1199px (max 2 columns)
Mobile:    <768px  (1 column, stack vertical)

Grid pattern:
repeat(auto-fit, minmax(280px, 1fr))
```

---

## Animation System

### AOS (Animate On Scroll) Configuration

```javascript
AOS.init({
  offset: 120,           // Begin animation 120px before element
  delay: 0,              // Base delay
  duration: 700,         // Animation duration (ms)
  easing: 'ease',        // Easing function
  once: false,           // Animation triggers multiple times
  mirror: false,         // Animation on scroll up
  anchorPlacement: 'top-bottom'
});
```

### Animation Delays

```
First element:   100ms
Second element:  200ms
Third element:   300ms
Pattern: 100 + index * 100
```

### Hover Animations

```css
/* Cards: Lift + Shadow + Color shift */
transform: translateY(-4px);
box-shadow: 0 12px 32px rgba(164, 128, 247, 0.1);
border-color: rgba(164, 128, 247, 0.3);
```

---

## Accessibility Features

- Semantic HTML structure
- ARIA labels where needed
- Color contrast: WCAG AA compliant
- Keyboard navigation support
- Screen reader friendly
- Proper heading hierarchy (h1 → h4)

---

## Performance Optimizations

1. **CSS Scoping**: Each component has scoped styles
2. **Lazy Loading**: AOS handles lazy animations
3. **Grid Auto-fit**: Responsive without JS
4. **CSS Variables**: Reduced file size
5. **No Extra Scripts**: Only AOS library

---

## Example: Adding a New Project

### Step 1: Edit `case-study-schema.json`

```json
{
  "projects": [
    { /* existing project */ },
    {
      "id": "2",
      "title": "Aplicación de Finanzas Personales",
      "description": "Diseño e implementación de app móvil para gestión de gastos",
      "year": "2024",
      "role": "UI/UX Designer & Lead Developer",
      "industry": "Fintech",
      "context": "Startup en fase seed necesitaba MVP para validar market fit",
      
      "problem": {
        "title": "Falta de herramientas simples de budgeting",
        "description": "Usuarios gastan 30+ minutos diarios categorizando gastos en Excel",
        "businessImpact": "$2M TAM identificado. Competencia con 500K usuarios activos"
      },
      
      "operativeContext": {
        "environment": "App mobile iOS/Android con sincronización cloud",
        "userProfile": [
          {
            "segment": "Millennials (25-35)",
            "count": "75% de usuario base",
            "behaviors": "Alta adopción de apps de finanzas, uso diario"
          },
          {
            "segment": "Gen Z (18-24)",
            "count": "20% de usuarios",
            "behaviors": "Buscan gamificación y social features"
          }
        ]
      },
      
      "systemOperations": [
        {
          "name": "Auto-categorización de gastos",
          "description": "ML que detecta categoría automáticamente"
        },
        {
          "name": "Análisis de gastos",
          "description": "Reportes visuales de patrones de gasto"
        },
        {
          "name": "Sincronización bancaria",
          "description": "Integración con APIs de bancos"
        }
      ],
      
      // ... resto de propiedades
    }
  ]
}
```

### Step 2: Create New Page

```astro
---
import Layout from "../layouts/Layout.astro";
import ProjectCaseStudy from "../components/case-study/ProjectCaseStudy.astro";
import caseStudyData from "../data/case-study-schema.json";

const project = caseStudyData.projects[1];
---

<Layout title={`${project.title} | Erik Manzano`}>
  <ProjectCaseStudy project={project} />
</Layout>
```

### Step 3: Add Navigation Link

```astro
<!-- In projects listing component -->
<a href={`/case-study-${project.id}`}>
  View Case Study →
</a>
```

---

## Deployment Checklist

- [ ] All JSON data is valid
- [ ] All image assets exist
- [ ] Components render without errors
- [ ] Animations work in target browsers
- [ ] Mobile view tested
- [ ] Performance audit passed
- [ ] SEO metadata complete
- [ ] Lighthouse score >90

---

## Browser Support

- Chrome/Edge: Latest 2 versions
- Safari: Latest 2 versions
- Firefox: Latest 2 versions
- Mobile Safari: iOS 14+
- Chrome Mobile: Latest version

---

## Component File Structure

```
src/components/case-study/
├── ProjectCaseStudy.astro              [Main orchestrator - 50 lines]
├── ProjectHero.astro                   [Hero section - 100 lines]
├── ProblemSection.astro                [Problem + Impact - 80 lines]
├── OperativeContextSection.astro       [Context + Users - 140 lines]
├── SystemOperationsSection.astro       [Numbered list - 110 lines]
├── AuditSection.astro                  [Findings grid - 130 lines]
├── InteractionArchitectureSection.astro [3-column - 100 lines]
├── UIStrategySection.astro             [Principles + Decisions - 160 lines]
├── ImpactSection.astro                 [KPI cards - 120 lines]
├── LessonsSection.astro                [Lessons list - 100 lines]
└── NextStepsSection.astro              [Phase cards - 130 lines]

Total: ~1,200 lines of clean, scoped, reusable code
```

---

## Customization Guide

### Change Colors

Update CSS variables in `Layout.astro`:

```css
--color-brand: #YourColor;
```

### Change Fonts

Update `font-base` variable:

```css
--font-base: "Your Font Family";
```

### Add New Section?

1. Create new component file
2. Define Props interface
3. Add to ProjectCaseStudy
4. Add to JSON schema
5. Update documentation

---

## Support & Maintenance

These components are fully self-contained and don't require external dependencies beyond:
- Astro framework
- AOS library (already included)
- Bootstrap utilities (for responsive grid)

No database required. All data is JSON-based and easily portable.
