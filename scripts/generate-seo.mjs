#!/usr/bin/env node
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const siteUrl = (process.env.VITE_SITE_URL ?? 'https://porfolio-cv-2026.vercel.app').replace(/\/$/, '')

const routes = [
  { path: '/', priority: '1.0' },
  { path: '/design', priority: '0.8' },
  { path: '/front-end', priority: '0.8' },
]

const lastmod = new Date().toISOString().slice(0, 10)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.path === '/' ? '/' : route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(resolve('public/sitemap.xml'), sitemap)

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

writeFileSync(resolve('public/robots.txt'), robots)

console.log(`Generated sitemap.xml and robots.txt for ${siteUrl}`)
