import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-01-01'
})

// Query para obtener todos los case studies
export async function getCaseStudies() {
  const query = `
    *[_type == "caseStudy"] | order(title asc) {
      "id": coalesce(id.current, _id),
      title,
      "slug": coalesce(id.current, _id),
      summary,
      technologies,
      challenge {
        problem,
        user
      },
      solution,
      aiIntegration[] {
        tool,
        usage
      },
      metrics[] {
        label,
        value
      },
      "heroImage": heroImage.asset->url,
      links {
        live,
        repo
      },
      "executiveGallery": executiveGallery[] {
        caption,
        category,
        "image": asset->url
      },
      "processGallery": processGallery[] {
        caption,
        category,
        "image": asset->url
      },
      "impactGallery": impactGallery[] {
        caption,
        category,
        "image": asset->url
      },
      "gallery": gallery[] {
        caption,
        category,
        "image": image.asset->url
      }
    }
  `
  return await client.fetch(query)
}

// Query para obtener un case study específico por ID
export async function getCaseStudy(id) {
  const query = `
    *[_type == "caseStudy" && (id.current == $id || _id == $id)][0] {
      "id": coalesce(id.current, _id),
      title,
      summary,
      technologies,
      challenge {
        problem,
        user
      },
      solution,
      aiIntegration[] {
        tool,
        usage
      },
      metrics[] {
        label,
        value
      },
      "heroImage": heroImage.asset->url,
      links {
        live,
        repo
      },
      "executiveGallery": executiveGallery[] {
        caption,
        category,
        "image": asset->url
      },
      "processGallery": processGallery[] {
        caption,
        category,
        "image": asset->url
      },
      "impactGallery": impactGallery[] {
        caption,
        category,
        "image": asset->url
      },
      "gallery": gallery[] {
        caption,
        category,
        "image": image.asset->url
      }
    }
  `
  
  const result = await client.fetch(query, { id })
  return result
}

// Query para obtener todos los IDs (para generar rutas estáticas)
export async function getCaseStudyIds() {
  const query = `*[_type == "caseStudy"] { "id": id.current }`
  return await client.fetch(query)
}

// Query para obtener todos los proyectos
export async function getProjects() {
  const query = `
    *[_type == "project"] | order(title asc) {
      title,
      "slug": slug.current,
      description,
      "mainImage": mainImage.asset->url,
      repositoryUrl,
      liveUrl,
      technologies,
      date
    }
  `
  return await client.fetch(query)
}
