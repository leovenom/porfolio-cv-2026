import { contact } from '../data/content'
import type { Project } from '../data/content'
import type { PortfolioVariant } from '../data/variants'
import { projectPath } from './projects'
import { absoluteUrl, canonicalUrl, SITE_URL } from './site'

function upsertMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    document.head.appendChild(element)
  }
  element.href = href
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let script = document.getElementById(id) as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

export function applyPageSeo(variant: PortfolioVariant) {
  const url = canonicalUrl(variant.path)
  const ogImage = absoluteUrl('/og-image.svg')

  document.title = variant.pageTitle

  upsertMeta('description', variant.metaDescription)
  upsertMeta('robots', 'index, follow')
  upsertLink('canonical', url)

  upsertMeta('og:title', variant.pageTitle, 'property')
  upsertMeta('og:description', variant.metaDescription, 'property')
  upsertMeta('og:url', url, 'property')
  upsertMeta('og:type', 'website', 'property')
  upsertMeta('og:image', ogImage, 'property')
  upsertMeta('og:image:alt', `${contact.name} portfolio preview`, 'property')
  upsertMeta('og:site_name', contact.name, 'property')
  upsertMeta('og:locale', 'en_GB', 'property')

  upsertMeta('twitter:card', 'summary_large_image')
  upsertMeta('twitter:title', variant.pageTitle)
  upsertMeta('twitter:description', variant.metaDescription)
  upsertMeta('twitter:image', ogImage)

  upsertJsonLd('schema-person', {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: contact.name,
    url: SITE_URL,
    email: contact.email,
    telephone: contact.phone,
    jobTitle: variant.pageTitle.replace('Leonardt Lauenstein — ', ''),
    image: ogImage,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Porto',
      addressCountry: 'PT',
    },
    sameAs: [contact.linkedin, contact.github],
    knowsLanguage: ['Portuguese', 'English', 'German'],
  })

  upsertJsonLd('schema-profile', {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: variant.pageTitle,
    description: variant.metaDescription,
    url,
    mainEntity: {
      '@type': 'Person',
      name: contact.name,
      jobTitle: variant.pageTitle.replace('Leonardt Lauenstein — ', ''),
    },
  })

  upsertJsonLd('schema-breadcrumbs', {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: canonicalUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: variant.pageTitle.replace('Leonardt Lauenstein — ', ''),
        item: url,
      },
    ],
  })

  upsertJsonLd('schema-local', {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: contact.name,
    url: SITE_URL,
    image: ogImage,
    description: variant.metaDescription,
    email: contact.email,
    telephone: contact.phone,
    areaServed: ['Portugal', 'European Union', 'Worldwide'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Porto',
      addressRegion: 'Porto',
      addressCountry: 'PT',
    },
    founder: {
      '@type': 'Person',
      name: contact.name,
    },
    sameAs: [contact.linkedin, contact.github],
  })
}

export function applyProjectSeo(project: Project, variant: PortfolioVariant) {
  const path = projectPath(variant.path, project.id)
  const url = canonicalUrl(path)
  const title = `${project.title} — Leonardt Lauenstein`
  const description =
    project.description.length > 155 ? `${project.description.slice(0, 152)}…` : project.description
  const ogImage = project.image?.startsWith('http') ? project.image : absoluteUrl('/og-image.svg')
  const variantLabel = variant.pageTitle.replace('Leonardt Lauenstein — ', '')

  document.title = title

  upsertMeta('description', description)
  upsertMeta('robots', 'index, follow')
  upsertLink('canonical', url)

  upsertMeta('og:title', title, 'property')
  upsertMeta('og:description', description, 'property')
  upsertMeta('og:url', url, 'property')
  upsertMeta('og:type', 'article', 'property')
  upsertMeta('og:image', ogImage, 'property')
  upsertMeta('og:image:alt', `${project.title} preview`, 'property')

  upsertMeta('twitter:card', 'summary_large_image')
  upsertMeta('twitter:title', title)
  upsertMeta('twitter:description', description)
  upsertMeta('twitter:image', ogImage)

  upsertJsonLd('schema-creative-work', {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url,
    dateCreated: project.year,
    author: {
      '@type': 'Person',
      name: contact.name,
      url: SITE_URL,
    },
    keywords: project.tags.join(', '),
  })

  upsertJsonLd('schema-breadcrumbs', {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: canonicalUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: variantLabel,
        item: canonicalUrl(variant.path),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: url,
      },
    ],
  })
}

export function applyNotFoundSeo() {
  document.title = 'Page not found — Leonardt Lauenstein'

  upsertMeta('description', 'The page you requested does not exist on Leonardt Lauenstein’s portfolio.')
  upsertMeta('robots', 'noindex, follow')
  upsertLink('canonical', canonicalUrl('/'))

  upsertMeta('og:title', 'Page not found — Leonardt Lauenstein', 'property')
  upsertMeta('og:description', 'The page you requested does not exist.', 'property')
  upsertMeta('og:url', canonicalUrl('/404'), 'property')
}
