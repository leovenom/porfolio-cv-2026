import type { Experience, Project } from './content'

export type VariantId = 'email' | 'design' | 'frontend'

export type StackGroup = {
  label: string
  items: string[]
}

export type PipelineCopy = {
  firstLine: string
  cursorStep: string
  brazeStep: string
}

export type ProjectOverride = Partial<
  Pick<Project, 'title' | 'subtitle' | 'description' | 'metric' | 'tags' | 'media'>
>

export type PortfolioVariant = {
  id: VariantId
  path: string
  navLabel: string
  pageTitle: string
  metaDescription: string
  cvUrl: string
  hero: {
    line1: string
    line2: string
    line3Before: string
    line3Emphasis: string
    lede: string
  }
  pipeline: PipelineCopy
  stackGroups: StackGroup[]
  featuredIds: string[]
  projectOverrides: Record<string, ProjectOverride>
  workIntro: string
  projectsIntro: string
  sectionTitles: {
    work: string
    projects: string
    experience: string
    stack: string
    contact: string
  }
  contactHeadline: string
  contactEmphasis: string
  contactBody: string
  experience: Experience[]
}

const CV_BASE = 'https://porfolio-cv-2026.vercel.app'

const sharedExperienceTail: Experience[] = [
  {
    period: '2015 — 2020',
    role: 'Artist Assistant',
    company: 'Contemporary artists',
    location: 'Rio de Janeiro',
    summary:
      'Luiz Zerbini, Luiz Roque, Rodrigo Torres, Daniel Albuquerque and others.',
  },
  {
    period: 'March 2020',
    role: 'Full-stack Coding Bootcamp',
    company: 'Le Wagon',
    location: 'Lisbon',
    summary: 'Full-stack web development.',
  },
  {
    period: '2007 — 2010',
    role: 'BA in Industrial Design',
    company: 'UniverCidade',
    location: 'Rio de Janeiro, Brazil',
    summary: 'Industrial design degree.',
  },
]

export const variants: PortfolioVariant[] = [
  {
    id: 'email',
    path: '/',
    navLabel: 'Email',
    pageTitle: 'Leonardt Lauenstein — Email Engineer',
    metaDescription:
      'Leonardt Lauenstein — Email Engineer based in Portugal. I build and A/B test responsive email systems for lifecycle marketing. Currently at Prezi, previously Pier.',
    cvUrl: `${CV_BASE}/CV_Leonardt_2026.pdf`,
    hero: {
      line1: 'Email engineer',
      line2: 'automating the lifecycle',
      line3Before: 'pipeline with',
      line3Emphasis: 'AI.',
      lede:
        "I'm Leonardt, email engineer with a design background. Most recently at Prezi, where my AI pipeline (Claude → Cursor → Braze) cut campaign production from hours to under 15 minutes. Before that, growth campaigns at Pier: +5M ad impressions in 7 days.",
    },
    pipeline: { firstLine: 'brief', cursorStep: 'template', brazeStep: 'campaign' },
    stackGroups: [
      {
        label: 'Email & in-app engineering',
        items: [
          'HTML / CSS (hand-coded)',
          'JavaScript',
          'Liquid',
          'Braze (CRM)',
          'In-app messaging',
          'Litmus',
          'Cross-client QA (Gmail · Outlook · Apple Mail)',
          'Accessibility',
          'Dark mode',
          'Mobile-first rendering',
          'VML for Outlook',
          'Dynamic content blocks',
        ],
      },
      {
        label: 'Optimization & analytics',
        items: ['A/B testing', 'Hex', 'CTR / open-rate analysis', 'Conversion modeling'],
      },
      {
        label: 'AI & automation',
        items: [
          'Claude',
          'Cursor',
          'Node.js',
          'JSON pipelines',
          'Figma → Braze automation',
          'Prompt engineering',
        ],
      },
      {
        label: 'Design & web',
        items: ['Figma', 'Adobe Creative Cloud', 'React', 'TypeScript', 'Next.js', 'Notion'],
      },
      {
        label: 'Backend (previous experience)',
        items: ['Ruby', 'Ruby on Rails', 'Node.js', 'Express.js', 'MySQL'],
      },
    ],
    featuredIds: ['prezi-pipeline', 'pier-tinder', 'pier-ai-ads'],
    projectOverrides: {
      'prezi-pipeline': {
        title: "How I automated Prezi's lifecycle messaging pipeline",
        subtitle: 'Prezi · AI automation',
        description:
          'Built an AI pipeline that runs lifecycle production from brief to ship. Claude writes the content. Cursor assembles the responsive templates (emails in HTML/CSS + Liquid, in-app messages in HTML/CSS + JavaScript). Braze ships the campaign across both email and in-app. Everything flows as structured JSON, so the pipeline is versionable and reviewable instead of hand-authored each time. The same pipeline runs A/B variants: subject-line and CTA tests at 3M+ sends per arm, analysed in Hex.',
        metric: '<15 min per campaign',
        tags: [
          'Claude',
          'Cursor',
          'Node',
          'JSON',
          'Braze',
          'Liquid',
          'JavaScript',
          'In-app messaging',
        ],
        media: 'pipeline',
      },
      'pier-tinder': {
        title: 'Pier × Tinder, Carnival campaign',
        subtitle: 'Pier · Growth marketing',
        description:
          'Co-marketing between Pier (digital insurance) and Tinder for Brazilian Carnival 2023. I owned the visual system across the landing page, Tinder swipe-card ad creative and the full ad rollout. One person from design to shipped code, on a tight co-marketing timeline.',
        metric: '+5M ad impressions in 7 days',
        tags: ['Landing page', 'Ad creative', 'Brand', 'Co-marketing'],
      },
      'pier-ai-ads': {
        title: 'AI-generated ad creatives, back when AI was still new',
        subtitle: 'Pier · AI + growth',
        description:
          "In early 2023 I started shipping production ad creatives using AI image generation, embedded inside Pier's brand system. Auto-coverage and smartphone-insurance campaigns hit over a million impressions in a week. I've been running generative AI in real marketing output well before it became the trend.",
        metric: '+1M impressions in 7 days',
        tags: ['AI image generation', 'Ad creative', 'Performance'],
      },
      'send-studio-crm': {
        subtitle: 'Personal · Lifecycle CRM on Resend',
        description:
          'End-to-end CRM for operators who live in email: block editor with Liquid and locale per contact, CSV import, multi-channel campaigns (email via Resend, WhatsApp, Telegram), and analytics fed by signed webhooks — including human vs bot open classification.',
        metric: 'Human vs bot opens',
        tags: ['Resend', 'Liquid', 'Webhooks', 'CRM', 'Next.js', 'Analytics'],
      },
    },
    workIntro:
      'Lifecycle email, in-app messaging, and the AI pipeline that ships them. Three cases that show the full stack.',
    projectsIntro:
      'Personal products, interface studies, and experiments — separate from the three lifecycle cases above.',
    sectionTitles: {
      work: 'Selected lifecycle work',
      projects: 'Side projects & product work',
      experience: 'Professional path',
      stack: 'Email & lifecycle stack',
      contact: 'Start a conversation',
    },
    contactHeadline: 'Need an',
    contactEmphasis: 'email engineer',
    contactBody:
      'who codes, tests, and automates the whole pipeline? Open to full-time roles. Porto hybrid, or remote within Portugal, EU, or global.',
    experience: [
      {
        period: 'Jun 2024 — Jun 2026',
        role: 'Email Front-End Developer',
        company: 'Prezi',
        location: 'Remote, Portugal',
        summary:
          'Built, tested and automated lifecycle email and in-app messaging with AI.',
      },
      {
        period: 'Dec 2023 — Jun 2024',
        role: 'Web Designer',
        company: 'Hakkoda',
        location: 'Remote, Portugal',
        summary: 'Front-end and graphical solutions for growth.',
      },
      {
        period: '2021 — 2023',
        role: 'Front-end · Designer',
        company: 'Pier',
        location: 'Remote, Brazil',
        summary: 'Growth campaigns, landing pages and ad creatives.',
      },
      {
        period: '2020 — present',
        role: 'Web Developer · Freelance',
        company: 'International clients',
        location: 'Brazil · Portugal · Germany',
        summary: 'Web projects for international clients.',
      },
      ...sharedExperienceTail,
    ],
  },
  {
    id: 'design',
    path: '/design',
    navLabel: 'Design',
    pageTitle: 'Leonardt Lauenstein — Design Engineer',
    metaDescription:
      'Leonardt Lauenstein — Design Engineer based in Portugal. I bridge Figma to React — building product UIs, design systems and lifecycle messaging, shipped to production.',
    cvUrl: `${CV_BASE}/CV_Leonardt_2026_DesignEngineer.pdf`,
    hero: {
      line1: 'Design engineer',
      line2: 'bridging Figma',
      line3Before: 'to',
      line3Emphasis: 'production code.',
      lede:
        "I'm Leonardt, design engineer with seven years across design and front-end. Most recently at Prezi, where I built an AI pipeline (Claude → Cursor → Braze) that ships pixel-precise UIs from brief to production in under 15 minutes. Before that, React + DatoCMS at Pier: +5M ad impressions in 7 days.",
    },
    pipeline: { firstLine: 'Figma brief', cursorStep: 'component', brazeStep: 'production' },
    stackGroups: [
      {
        label: 'Design engineering',
        items: [
          'Figma',
          'Design systems',
          'Component architecture',
          'Design tokens',
          'Motion',
          'Adobe Creative Cloud',
        ],
      },
      {
        label: 'Front-end',
        items: [
          'React',
          'TypeScript',
          'Next.js',
          'HTML / CSS (hand-coded)',
          'JavaScript',
          'Tailwind',
          'Node.js',
          'Responsive',
          'Accessibility',
        ],
      },
      {
        label: 'Lifecycle messaging',
        items: [
          'Braze (CRM)',
          'Liquid',
          'In-app messaging',
          'Litmus',
          'Cross-client QA (Gmail · Outlook · Apple Mail)',
          'VML for Outlook',
          'Dynamic content blocks',
          'Dark mode',
          'Mobile-first rendering',
        ],
      },
      {
        label: 'AI & automation',
        items: ['Claude', 'Cursor', 'JSON pipelines', 'Figma → code', 'Prompt engineering'],
      },
      {
        label: 'Optimization & analytics',
        items: ['A/B testing', 'Hex', 'CTR / open-rate analysis', 'Conversion modeling'],
      },
      {
        label: 'Backend (previous experience)',
        items: ['Ruby', 'Ruby on Rails', 'Node.js', 'Express.js', 'MySQL'],
      },
    ],
    featuredIds: ['prezi-pipeline', 'pier-tinder', 'pier-ai-ads'],
    projectOverrides: {
      'prezi-pipeline': {
        title: 'From Figma brief to production UI in under 15 minutes',
        subtitle: 'Prezi · Design ↔ Code',
        description:
          'Built the AI pipeline that ships pixel-precise UIs from brief to production. Claude writes the content. Cursor assembles the components (emails in HTML/CSS + Liquid, in-app messages in HTML/CSS + JavaScript). Braze ships across both email and in-app surfaces. Everything flows as structured JSON, which keeps the whole thing versionable and reviewable. Design intent survives from spec to ship.',
        metric: '<15 min per campaign',
        tags: ['Figma', 'Claude', 'Cursor', 'React', 'HTML/CSS', 'JavaScript', 'Braze'],
        media: 'pipeline',
      },
      'pier-tinder': {
        title: 'Pier × Tinder, Carnival visual system',
        subtitle: 'Pier · Visual system + Front-end',
        description:
          'Co-marketing between Pier (digital insurance) and Tinder for Brazilian Carnival 2023. I owned the visual system from Figma through the React landing page, swipe-card ad creative and the full ad rollout. One person from design intent to shipped code, on a tight co-marketing timeline.',
        metric: '+5M ad impressions in 7 days',
        tags: ['Figma', 'React', 'DatoCMS', 'Visual system', 'Co-marketing'],
      },
      'pier-ai-ads': {
        title: 'AI-generated ad creatives, embedded in a brand system',
        subtitle: 'Pier · AI + Design',
        description:
          "In early 2023 I started shipping production ad creatives using AI image generation, embedded inside Pier's brand system. Auto-coverage and smartphone-insurance campaigns hit over a million impressions a week. I've been running generative AI in real visual design output well before it became the trend.",
        metric: '+1M impressions in 7 days',
        tags: ['AI image generation', 'Brand system', 'Visual design'],
      },
    },
    workIntro:
      'Design systems, Figma-to-production workflows, and lifecycle UI shipped at scale. Three cases from brief to production.',
    projectsIntro:
      'Personal builds and interface work that sit outside the three featured cases above.',
    sectionTitles: {
      work: 'Selected design-engineering work',
      projects: 'Side projects & experiments',
      experience: 'Design & front-end path',
      stack: 'Design-engineering stack',
      contact: 'Start a project conversation',
    },
    contactHeadline: 'Need a',
    contactEmphasis: 'design engineer',
    contactBody:
      'who bridges Figma and React all the way to production? Open to full-time roles. Porto hybrid, or remote within Portugal, EU, or global.',
    experience: [
      {
        period: 'Jun 2024 — Jun 2026',
        role: 'Email Front-End Developer',
        company: 'Prezi',
        location: 'Remote, Portugal',
        summary: 'Built lifecycle UI for email + in-app, automated with AI.',
      },
      {
        period: 'Dec 2023 — Jun 2024',
        role: 'Web Designer',
        company: 'Hakkoda',
        location: 'Remote, Portugal',
        summary: 'Front-end and graphical solutions for growth.',
      },
      {
        period: '2021 — 2023',
        role: 'Front-end · Designer',
        company: 'Pier',
        location: 'Remote, Brazil',
        summary: 'React + DatoCMS, landing pages, visual systems, ad creatives.',
      },
      {
        period: '2020 — present',
        role: 'Web Developer · Freelance',
        company: 'International clients',
        location: 'Brazil · Portugal · Germany',
        summary: 'Figma to deployment for international clients.',
      },
      ...sharedExperienceTail,
    ],
  },
  {
    id: 'frontend',
    path: '/front-end',
    navLabel: 'Front-end',
    pageTitle: 'Leonardt Lauenstein — Front-end Developer',
    metaDescription:
      'Leonardt Lauenstein — Front-end Developer based in Portugal. React, TypeScript, Next.js. I ship product UIs with a design background — pixel-precise to spec.',
    cvUrl: `${CV_BASE}/CV_Leonardt_2026_FrontEnd.pdf`,
    hero: {
      line1: 'Front-end developer',
      line2: 'shipping React UIs',
      line3Before: 'with an',
      line3Emphasis: "eye for design.",
      lede:
        "I'm Leonardt, front-end developer with seven years shipping product UIs and lifecycle messaging. React, Next.js, TypeScript, and a design background that means I ship pixel-precise to spec. Most recently at Prezi. Before that, growth front-end at Pier (+5M ad impressions).",
    },
    pipeline: { firstLine: 'brief', cursorStep: 'components', brazeStep: 'production' },
    stackGroups: [
      {
        label: 'Front-end',
        items: [
          'React',
          'TypeScript',
          'Next.js',
          'JavaScript',
          'HTML / CSS (hand-coded)',
          'Tailwind',
          'Node.js',
          'Responsive',
          'Accessibility',
          'Performance',
        ],
      },
      {
        label: 'Design',
        items: [
          'Figma',
          'Design systems',
          'Component architecture',
          'Design tokens',
          'Adobe Creative Cloud',
        ],
      },
      {
        label: 'AI & automation',
        items: ['Claude', 'Cursor', 'JSON pipelines', 'Prompt engineering', 'Figma → code'],
      },
      {
        label: 'Lifecycle messaging (specialty)',
        items: [
          'Braze (CRM)',
          'Liquid',
          'In-app messaging',
          'Litmus',
          'Cross-client QA',
          'VML for Outlook',
          'Dark mode',
        ],
      },
      {
        label: 'Optimization & analytics',
        items: ['A/B testing', 'Hex', 'CTR / open-rate analysis'],
      },
      {
        label: 'Backend (previous experience)',
        items: ['Ruby', 'Ruby on Rails', 'Node.js', 'Express.js', 'MySQL'],
      },
    ],
    featuredIds: ['prezi-pipeline', 'pier-tinder', 'pier-ai-ads'],
    projectOverrides: {
      'prezi-pipeline': {
        title: 'AI-assisted front-end production pipeline',
        subtitle: 'Prezi · AI-assisted front-end',
        description:
          "Built the AI pipeline that ships front-end components to production. Claude writes the content. Cursor assembles the components: hand-coded HTML/CSS + Liquid for email, HTML/CSS + JavaScript for in-app. Braze ships. Everything flows as structured JSON, so it's versionable, reviewable and testable. What used to take hours of manual coding now takes 15 minutes, without giving up pixel-precision.",
        metric: '<15 min per campaign',
        tags: ['HTML/CSS', 'Liquid', 'JavaScript', 'JSON', 'Claude', 'Cursor', 'Braze'],
        media: 'pipeline',
      },
      'pier-tinder': {
        title: 'Pier × Tinder, React landing page at scale',
        subtitle: 'Pier · React landing page',
        description:
          'Co-marketing between Pier (digital insurance) and Tinder for Brazilian Carnival 2023. I built the React landing page from Figma spec to shipped code, integrated with DatoCMS for content editing, plus the ad creative and rollout across acquisition channels. One person from design to production, on a tight co-marketing timeline.',
        metric: '+5M ad impressions in 7 days',
        tags: ['React', 'DatoCMS', 'Landing page', 'Figma', 'Co-marketing'],
      },
      'pier-ai-ads': {
        title: 'AI-generated ad creatives, shipped at production scale',
        subtitle: 'Pier · AI-native workflow',
        description:
          "In early 2023 I started integrating AI image generation into production ad creatives, embedded inside Pier's brand system. Auto-coverage and smartphone-insurance campaigns hit over a million impressions per week. I've been running generative AI in shipped output well before it became the trend.",
        metric: '+1M impressions in 7 days',
        tags: ['AI image generation', 'Brand system', 'Production workflow'],
      },
    },
    workIntro:
      'React, TypeScript, and lifecycle front-end shipped to production. Professional work and side projects.',
    projectsIntro:
      'Personal apps and shipped work beyond the three featured front-end cases above.',
    sectionTitles: {
      work: 'Selected front-end work',
      projects: 'Side projects & shipped work',
      experience: 'Front-end career path',
      stack: 'Front-end & product stack',
      contact: 'Start a conversation',
    },
    contactHeadline: 'Need a',
    contactEmphasis: 'front-end developer',
    contactBody:
      "who ships React with a designer's eye? Open to full-time roles. Porto hybrid, or remote within Portugal, EU, or global.",
    experience: [
      {
        period: 'Jun 2024 — Jun 2026',
        role: 'Email Front-End Developer',
        company: 'Prezi',
        location: 'Remote, Portugal',
        summary: 'Front-end for lifecycle email + in-app, automated with AI.',
      },
      {
        period: 'Dec 2023 — Jun 2024',
        role: 'Web Designer',
        company: 'Hakkoda',
        location: 'Remote, Portugal',
        summary: 'Front-end and graphical solutions for growth.',
      },
      {
        period: '2021 — 2023',
        role: 'Front-end · Designer',
        company: 'Pier',
        location: 'Remote, Brazil',
        summary: 'React + DatoCMS, landing pages, visual systems, ad creatives.',
      },
      {
        period: '2020 — present',
        role: 'Web Developer · Freelance',
        company: 'International clients',
        location: 'Brazil · Portugal · Germany',
        summary: 'React + Next.js from Figma to deployment.',
      },
      ...sharedExperienceTail,
    ],
  },
]

export function getVariantByPath(pathname: string): PortfolioVariant {
  let normalized = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname

  if (normalized.includes('/projects/')) {
    normalized = normalized.replace(/\/projects\/[^/]+$/, '') || '/'
  }

  return variants.find((v) => v.path === normalized) ?? variants[0]
}

export function resolveProject(
  base: Project,
  override?: ProjectOverride,
): Project {
  if (!override) return base
  return { ...base, ...override }
}
