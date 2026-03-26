import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-01-01'
})

async function checkCaseStudies() {
  try {
    console.log('Conectando a Sanity...')
    console.log('Project ID:', process.env.PUBLIC_SANITY_PROJECT_ID)
    console.log('Dataset:', process.env.PUBLIC_SANITY_DATASET)
    
    // Query simple para ver todos los documentos tipo caseStudy
    const query = `*[_type == "caseStudy"]`
    const results = await client.fetch(query)
    
    console.log('\n=== CASOS DE ESTUDIO ENCONTRADOS ===')
    console.log('Total:', results.length)
    
    results.forEach((cs, idx) => {
      console.log(`\n${idx + 1}. ${cs.title || 'Sin título'}`)
      console.log(`   ID: ${cs._id}`)
      console.log(`   id.current: ${cs.id?.current || 'N/A'}`)
      console.log(`   Estado: ${cs._type}`)
      console.log(`   Creado: ${cs._createdAt}`)
    })

    // Ahora intenta la query completa usada en getCaseStudies()
    console.log('\n\n=== CONSULTANDO CON QUERY COMPLETA ===')
    const fullQuery = `
      *[_type == "caseStudy"] | order(_createdAt desc) {
        "id": coalesce(id.current, _id),
        title,
        "slug": coalesce(id.current, _id),
        summary,
        technologies,
        challenge {
          problem,
          user
        },
        solution
      }
    `
    const fullResults = await client.fetch(fullQuery)
    console.log('Query completa retornó:', fullResults.length, 'items')
    fullResults.forEach((cs, idx) => {
      console.log(`${idx + 1}. ${cs.title} (slug: ${cs.slug})`)
    })

  } catch (error) {
    console.error('Error:', error)
  }
}

checkCaseStudies()
