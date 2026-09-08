const IMG_BASE = 'https://raw.githubusercontent.com/leovenom/new-portfolio/main/assets/img'

const PIER_MEDIA = 'https://leonardt-profile.netlify.app/assets/img/portfolio'

export const portfolioImage = (path: string) => `${IMG_BASE}/${path}`

export type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  year: string
  company?: string
  metric?: string
  tags: string[]
  href?: string
  github?: string
  image?: string
  imageFit?: 'cover' | 'contain'
  media?: 'pipeline'
  featured: boolean
  accent: 'copper' | 'sage' | 'neutral'
}

export type Experience = {
  period: string
  role: string
  company: string
  location: string
  summary: string
}

export const projects: Project[] = [
  {
    id: 'sinalverde',
    title: 'SinalVerde',
    subtitle: 'Product · ATS CV personalization',
    description:
      'Web app that tailors a CV to each job posting and scores ATS compatibility. Paste the job and your CV; the AI rewrites bullets and keywords to hit the 75+ triage threshold, with HTML and PDF export.',
    year: '2026',
    metric: 'Score ATS incluído',
    tags: ['React', 'AI', 'PDF export', 'ATS', 'Product UI'],
    href: 'https://www.sinalverde.cv/',
    image: 'https://www.sinalverde.cv/images/og-image.png',
    featured: true,
    accent: 'sage',
  },
  {
    id: 'send-studio-crm',
    title: 'Send Studio',
    subtitle: 'Personal · Multi-channel CRM on Resend',
    description:
      'Portfolio CRM that closes the loop from template design to delivery metrics on Resend. Drag-and-drop block editor with Liquid and locale per contact, CRM with CSV import, email/WhatsApp/Telegram campaigns, and webhook-driven analytics with human vs bot opens.',
    year: '2026',
    metric: 'Webhook-driven analytics',
    tags: ['Next.js', 'React', 'Resend', 'Liquid', 'Turso', 'TypeScript'],
    href: 'https://send-studio.vercel.app/',
    github: 'https://github.com/leovenom/send-studio',
    image: 'https://raw.githubusercontent.com/leovenom/send-studio/main/public/screenshots/analytics.png',
    featured: false,
    accent: 'copper',
  },
  {
    id: 'prezi-pipeline',
    title: 'AI-assisted production pipeline',
    subtitle: 'Prezi · Lifecycle front-end',
    description:
      'Built the pipeline that ships lifecycle UI to production. Claude writes structured content, Cursor assembles hand-coded HTML/CSS + Liquid and in-app components, Braze ships. Campaign turnaround dropped from 3–8 hours to under 15 minutes.',
    year: '2024 — 2026',
    company: 'Prezi',
    metric: '<15 min per campaign',
    tags: ['Claude Code', 'Cursor', 'Braze', 'Liquid', 'Litmus', 'A/B testing'],
    github: 'https://github.com/leovenom/ai-design-engineering',
    media: 'pipeline',
    featured: true,
    accent: 'copper',
  },
  {
    id: 'pier-tinder',
    title: 'Pier × Tinder Carnival landing page',
    subtitle: 'Pier · Co-marketing at scale',
    description:
      'React landing page from Figma spec to shipped code for a Pier × Tinder Carnival campaign. DatoCMS for content, ad creative, and rollout across acquisition channels. One person from design to production on a tight timeline.',
    year: '2023',
    company: 'Pier',
    metric: '+5M ad impressions in 7 days',
    tags: ['React', 'DatoCMS', 'Figma', 'Growth'],
    image: `${PIER_MEDIA}/pier+tinder.gif`,
    imageFit: 'contain',
    featured: true,
    accent: 'sage',
  },
  {
    id: 'pier-ai-ads',
    title: 'AI-generated ad creatives in production',
    subtitle: 'Pier · Brand system + generative AI',
    description:
      'Integrated AI image generation into Pier\'s brand system for auto and smartphone insurance campaigns. Shipped at production scale with consistent art direction, well before generative AI became the default workflow.',
    year: '2023',
    company: 'Pier',
    metric: '+1M impressions/week per campaign',
    tags: ['AI image gen', 'Brand system', 'Facebook Ads', 'TikTok'],
    image: `${PIER_MEDIA}/auto-1.webp`,
    imageFit: 'cover',
    featured: true,
    accent: 'copper',
  },
  {
    id: 'modern-ui',
    title: 'Modern UI/UX showcase',
    subtitle: 'Personal · React + Tailwind',
    description:
      'Interface study with fluid animations, responsive layout, and attention to spacing and hierarchy.',
    year: '2024',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Vercel'],
    href: 'https://ui-ux-website-one.vercel.app/',
    image: portfolioImage('portfolio-uxui.png'),
    featured: false,
    accent: 'copper',
  },
  {
    id: 'sentimental-track',
    title: 'Sentimental Track',
    subtitle: 'Personal · Interactive data viz',
    description:
      'Interactive landing page that captures emotions throughout the week and visualizes them with Chart.js.',
    year: '2023',
    tags: ['React', 'Chart.js', 'Vercel'],
    href: 'https://dearapp.vercel.app/',
    image: portfolioImage('portfolio-sentimental-track.webp'),
    featured: false,
    accent: 'sage',
  },
  {
    id: 'hello-world',
    title: 'Hello, World!',
    subtitle: 'Personal · GitHub calendar art',
    description:
      'Dynamic art piece inspired by GitHub\'s contribution calendar, showcasing the classic "Hello, World!" message.',
    year: '2022',
    tags: ['React', 'JavaScript', 'HTML/CSS'],
    href: 'https://hello-world-grid.netlify.app/',
    image: portfolioImage('portfolio-hello-world.webp'),
    featured: false,
    accent: 'neutral',
  },
  {
    id: 'pier-brandbook',
    title: 'Pier Brandbook',
    subtitle: 'Pier · Brand guidelines site',
    description:
      'Brand book covering tone of voice, visual identity, and usage guidelines for Pier\'s design system.',
    year: '2022',
    company: 'Pier',
    tags: ['WordPress', 'HTML/CSS', 'Brand'],
    href: 'https://brandbook.pier.digital/',
    image: portfolioImage('Brandbook.png'),
    featured: false,
    accent: 'sage',
  },
  {
    id: 'lauenstein',
    title: 'Lauenstein company site',
    subtitle: 'Freelance · React + styled-components',
    description:
      'Corporate website with vertical timeline, lightbox gallery, and contact form. Responsive from mobile to desktop with animated section transitions.',
    year: '2022',
    tags: ['React', 'styled-components', 'EmailJS'],
    href: 'https://lauenstein.world/',
    image: portfolioImage('portfolio-lauenstein.png'),
    featured: false,
    accent: 'neutral',
  },
  {
    id: 'dolla',
    title: 'Dolla',
    subtitle: 'Personal · Styled Components + smooth scroll',
    description:
      'Marketing-style site built with styled-components and smooth scroll interactions.',
    year: '2021',
    tags: ['React', 'styled-components', 'React Router'],
    href: 'https://dolla-web.netlify.app/',
    image: portfolioImage('portfolio-dolla.gif'),
    featured: false,
    accent: 'copper',
  },
  {
    id: 'video-chat',
    title: 'Video chat',
    subtitle: 'Personal · WebRTC',
    description:
      'Peer-to-peer video chat application using WebRTC in the browser.',
    year: '2021',
    tags: ['React', 'WebRTC', 'Node.js'],
    href: 'https://p2p-vc.netlify.app/',
    image: portfolioImage('portfolio-video-chat.jpg'),
    featured: false,
    accent: 'neutral',
  },
  {
    id: 'weather-app',
    title: 'Weather app',
    subtitle: 'Personal · Vue.js',
    description:
      'City-based weather lookup using the OpenWeatherMap API.',
    year: '2021',
    tags: ['Vue.js', 'OpenWeatherMap', 'HTML/CSS'],
    href: 'https://clima-app-vue.netlify.app/',
    image: portfolioImage('portfolio-weather.png'),
    featured: false,
    accent: 'sage',
  },
  {
    id: 'macedo-muzzio',
    title: 'Macedo & Muzzio',
    subtitle: 'Freelance · Law firm web presence',
    description:
      'Adaptable corporate site with UI components and animated interactions. Built for a Brazilian law firm with full responsive coverage.',
    year: '2021',
    tags: ['React', 'styled-components', 'React Router'],
    href: 'https://macedoemuzzio.netlify.app/',
    image: portfolioImage('portfolio-MM.png'),
    featured: false,
    accent: 'neutral',
  },
  {
    id: 'proffy',
    title: 'Proffy',
    subtitle: 'Personal · Teachers ↔ students',
    description:
      'Platform connecting teachers and students with responsive UI components and animated interactions.',
    year: '2021',
    tags: ['React', 'TypeScript', 'Expo', 'PostgreSQL'],
    href: 'https://proffy-react.netlify.app/',
    image: portfolioImage('Proffy.jpeg'),
    featured: false,
    accent: 'copper',
  },
  {
    id: 'happy',
    title: 'Happy',
    subtitle: 'Personal · Social impact app',
    description:
      'App to visit orphanages and organize ways to change a child\'s day.',
    year: '2021',
    tags: ['React', 'Leaflet', 'TypeScript', 'Node.js'],
    href: 'https://happy-aplication.netlify.app/',
    image: portfolioImage('portfolio-happy.png'),
    featured: false,
    accent: 'sage',
  },
  {
    id: 'museum-of-candy',
    title: 'Museum of Candy',
    subtitle: 'Personal · Fictional museum site',
    description:
      'Marketing site for a fictional candy museum, built with Bootstrap and custom styling.',
    year: '2020',
    tags: ['HTML', 'JavaScript', 'Bootstrap', 'Sass'],
    href: 'https://museumofcandys.netlify.app',
    image: portfolioImage('portfolio-museum-of-candy.png'),
    featured: false,
    accent: 'copper',
  },
  {
    id: 'art-portfolio',
    title: 'Art portfolio',
    subtitle: 'Personal · Artist assistant work',
    description:
      'Portfolio showcasing work as an artistic assistant for contemporary artists in Rio de Janeiro.',
    year: '2015 — 2020',
    tags: ['HTML', 'SCSS', 'fullPage.js'],
    href: 'https://leonardt.netlify.app/',
    image: portfolioImage('portfolio-art-portfolio.png'),
    featured: false,
    accent: 'neutral',
  },
  {
    id: 'chairs',
    title: 'Chairs',
    subtitle: 'Personal · Three.js landing page',
    description:
      '3D chairs landing page with Three.js and scroll-driven presentation.',
    year: '2021',
    tags: ['React', 'Three.js', 'SCSS'],
    href: 'https://chairs.netlify.app/',
    image: portfolioImage('portfolio-chair.gif'),
    featured: false,
    accent: 'copper',
  },
  {
    id: 'dribbble-clone',
    title: 'Dribbble-inspired UI',
    subtitle: 'Personal · Tailwind experiment',
    description:
      'UI exploration inspired by Dribbble\'s layout patterns, built with Tailwind CSS.',
    year: '2021',
    tags: ['HTML', 'JavaScript', 'Tailwind CSS'],
    href: 'https://advicefront.netlify.app',
    image: portfolioImage('portfolio-dribbble.png'),
    featured: false,
    accent: 'sage',
  },
  {
    id: 'color-game',
    title: 'RGB Color Game',
    subtitle: 'Personal · JavaScript game',
    description:
      'Classic RGB color matching game built with vanilla JavaScript.',
    year: '2020',
    tags: ['HTML', 'JavaScript', 'CSS'],
    href: 'https://thecolor-game.netlify.app/',
    image: portfolioImage('portfolio-color-game.png'),
    featured: false,
    accent: 'neutral',
  },
  {
    id: 'fun-canvas',
    title: 'Fun with Canvas',
    subtitle: 'Personal · Canvas drawing',
    description:
      'Browser-based drawing tool using HTML5 Canvas 2D.',
    year: '2020',
    tags: ['HTML', 'Canvas', 'JavaScript'],
    href: 'https://fun-with-canvas-htm5.netlify.app/',
    image: portfolioImage('portfolio-fun-canvas.png'),
    featured: false,
    accent: 'copper',
  },
  {
    id: 'drum-kit',
    title: 'Drum kit',
    subtitle: 'Personal · Keyboard instrument',
    description:
      'Play drums with your keyboard using Web Audio and visual key feedback.',
    year: '2020',
    tags: ['HTML', 'JavaScript', 'CSS'],
    href: 'https://js-drum-key.netlify.app/',
    image: portfolioImage('portfolio-key-sound.png'),
    featured: false,
    accent: 'sage',
  },
  {
    id: 'panoplia',
    title: 'Panóplia',
    subtitle: 'Bootcamp · Artist platform MVP',
    description:
      'Platform connecting artists from different backgrounds to professional opportunities. Rails MVP from Le Wagon final project.',
    year: '2020',
    tags: ['Ruby on Rails', 'PostgreSQL', 'Bulma', 'Heroku'],
    github: 'https://github.com/leovenom/Panoplia1.0',
    image: portfolioImage('portfolio-panoplia-2.png'),
    featured: false,
    accent: 'neutral',
  },
  {
    id: 'yelpcamp',
    title: 'Yelpcamp',
    subtitle: 'Bootcamp · Campground reviews',
    description:
      'Full-stack campground listing and review app with authentication and image uploads.',
    year: '2020',
    tags: ['Node.js', 'Express', 'MongoDB', 'Passport'],
    github: 'https://github.com/leovenom/YelpCamp',
    image: portfolioImage('portfolio-yelpcamp.png'),
    featured: false,
    accent: 'copper',
  },
  {
    id: 'ripio',
    title: 'Ripio',
    subtitle: 'Bootcamp · Dark tourism experience',
    description:
      'Rails app exploring sites connected with death and tragedy, with payments and geocoding.',
    year: '2020',
    tags: ['Ruby on Rails', 'Stripe', 'Bootstrap', 'Heroku'],
    github: 'https://github.com/leovenom/rip.io',
    image: portfolioImage('portfolio-ripio.png'),
    featured: false,
    accent: 'sage',
  },
]

export const contact = {
  name: 'Leonardt Lauenstein',
  email: 'leonardt@outlook.com',
  phone: '+351 930 535 828',
  location: 'Porto, Portugal',
  linkedin: 'https://www.linkedin.com/in/leonardtlauenstein/',
  github: 'https://github.com/leovenom',
}
