# Sanity CMS Integration - Implementation Guide

## Overview

Your portfolio is now fully integrated with Sanity CMS for dynamic case study management. Case studies are fetched from Sanity instead of static JSON, enabling real-time content updates without code changes.

## Architecture

### 1. **Sanity Client** (`src/lib/sanity.js`)

Three main functions handle all Sanity interactions:

```javascript
// Fetch all case studies with image URLs transformed
await getCaseStudies()

// Fetch single case study by ID
await getCaseStudy(id)

// Get all case study IDs for static route generation
await getCaseStudyIds()
```

### 2. **Environment Configuration** (`.env.local`)

```
PUBLIC_SANITY_PROJECT_ID=xigalffs
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. **Dynamic Routes**

#### Static Pages (Direct IDs)
- `/case-study/` → Plataforma Logística (ID: "1")
- `/amc-domestico/` → AMC Doméstico (ID: "6")

These pages directly import and fetch specific case studies.

#### Dynamic Route (`/case-study/[id].astro`)
All case studies accessible via dynamic URL pattern: `/case-study/{id}`

- Automatically generates routes for all Sanity case studies
- Uses `getStaticPaths()` to fetch IDs from `getCaseStudyIds()`
- URL examples:
  - `/case-study/1` → Plataforma Logística
  - `/case-study/6` → AMC Doméstico
  - `/case-study/{any-id}` → Any case study in Sanity

## How to Add a New Case Study

### Step 1: Create in Sanity Studio

1. Go to your Sanity Studio (`http://localhost:3333` if running locally)
2. Navigate to Case Studies
3. Create new document with:
   - **ID**: Unique identifier (e.g., "7", "logistics-v2")
   - **Title**: Project name
   - **Description**: Short summary
   - **Year**: Publication year
   - **Role**: Your role
   - **Industry**: Industry category
   - All 10 sections (Problem, Context, Operations, etc.)
   - **Gallery**: Upload images with categories (before/after/ui/flow/interaction)

### Step 2: Draft/Publish

1. Click "Draft" or "Published" to set visibility
2. Publish when ready
3. Case study automatically appears at `/case-study/{id}`

### Step 3: Link from Project Cards (Optional)

Update ProjectCard component to add "View Case Study" button when case study exists:

```astro
<!-- Add CTA button linking to /case-study/{id} -->
<a href={`/case-study/${project.caseStudyId}`}>View Full Case Study</a>
```

## Gallery System

Images are managed directly in Sanity with categorization:

### Categories
- **before**: Before state of system/interface
- **after**: After improvements
- **ui**: User interface components
- **flow**: User flow diagrams
- **interaction**: Interaction patterns or animations

### Display
GallerySection component automatically:
- Groups images by category
- Shows captions
- Implements lazy loading
- Adds hover animations
- Responsive grid layout

## Data Flow

```
Sanity CMS (Backend)
    ↓
lib/sanity.js (Queries)
    ↓
case-study/[id].astro (Router)
    ↓
ProjectCaseStudy.astro (Orchestrator)
    ↓
11 Section Components (Rendering)
    ├─ ProjectHero
    ├─ ProblemSection
    ├─ OperativeContextSection
    ├─ SystemOperationsSection
    ├─ AuditSection
    ├─ InteractionArchitectureSection
    ├─ UIStrategySection
    ├─ ImpactSection
    ├─ GallerySection ← NEW
    ├─ LessonsSection
    └─ NextStepsSection
```

## Migration from JSON

**Before**: Data in `src/data/case-study-schema.json`
```javascript
import caseStudyData from '../data/case-study-schema.json';
const project = caseStudyData.projects.find(p => p.id === '6');
```

**After**: Data from Sanity
```javascript
import { getCaseStudy } from '../lib/sanity.js';
const project = await getCaseStudy('6');
```

**Benefits**:
- ✅ Real-time updates without redeployment
- ✅ Image hosting in Sanity (CDN delivery)
- ✅ No data duplication
- ✅ Automatic image optimization
- ✅ Version control built-in
- ✅ Content editing without code access

## Performance Optimizations

### Image Handling
- Automatic resizing/optimization by Sanity CDN
- Lazy loading in GallerySection
- Progressive enhancement for slower connections

### Static Generation
- `getStaticPaths()` generates routes at build time
- Pre-renders all case studies for Fast page loads
- No runtime database queries needed

### Caching
- Sanity CDN caches images globally
- Build-time generation reduces runtime overhead

## Testing Locally

### With Sanity Studio

```bash
# Terminal 1: Astro dev server
npm run dev

# Terminal 2: Sanity studio (in studio-portafolio-jona/)
npm run dev
```

### Check Case Studies

1. Visit `http://localhost:3000/case-study/1`
2. Visit `http://localhost:3000/case-study/6`
3. View Sanity Studio at `http://localhost:3333`

## Deployment

### Vercel / Netlify

1. Add environment variables:
   ```
   PUBLIC_SANITY_PROJECT_ID=xigalffs
   PUBLIC_SANITY_DATASET=production
   PUBLIC_SANITY_API_VERSION=2024-01-01
   ```

2. Deploy normally - Astro handles static generation

3. Case studies published in Sanity take effect after next deployment

### Always Fresh

- Use Revalidate: Re-trigger deployment when Sanity content changes
- Or: Pre-generate all routes with `getStaticPaths()`

## Troubleshooting

### "Case study not found" Error

1. Check case study is **published** in Sanity (not draft)
2. Verify **ID** matches exactly (case-sensitive)
3. Check environment variables are set correctly
4. Run: `npm run build` to verify static generation

### Images Not Loading

1. Verify image is uploaded to Sanity asset management
2. Check image URL format in studio
3. Ensure category is one of: before/after/ui/flow/interaction

### Dynamic Routes Not Generating

1. Verify `getCaseStudyIds()` returns correct IDs
2. Check build logs: `npm run build`
3. Ensure `[id].astro` file exists in `/src/pages/case-study/`

## File Locations Reference

- **Sanity Schema**: `studio-portafolio-jona/schemas/caseStudy.ts`
- **Client Functions**: `src/lib/sanity.js`
- **Environment Variables**: `.env.local`
- **Dynamic Route**: `src/pages/case-study/[id].astro`
- **Static Pages**: `src/pages/case-study.astro`, `src/pages/amc-domestico.astro`
- **Gallery Component**: `src/components/case-study/GallerySection.astro`
- **Main Orchestrator**: `src/components/case-study/ProjectCaseStudy.astro`

---

**Next Steps:**
1. Create new case studies directly in Sanity
2. Update project URLs to `/case-study/{id}`
3. Deploy to production with environment variables
