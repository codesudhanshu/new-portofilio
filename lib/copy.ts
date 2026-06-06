// Single source of truth for marketing copy. Rewrite voice in one place.

export const company = {
  legal: 'Biech Software Technologies Pvt. Ltd.',
  short: 'Biech',
  tagline: 'Innovate · Develop · Deliver',
  city: 'Greater Noida, India',
  email: 'Softwaretechnologiesbiech@gmail.com',
  phone: '+91 8796938004',
  whatsapp: '+918796938004',
  gst: '09AAOCB6612Q1ZY',
  founded: '2015',
  address: {
    line1: '14th Floor, 1406 Galaxy Diamond Plaza',
    line2: 'Sector 4, Greater Noida, G.B. Nagar, UP 201306',
  },
}

export const home = {
  hero: {
    eyebrow: 'Est. 2015 · Greater Noida · Software · Marketing · Staffing',
    line1: 'We Build Digital',
    line2: 'Products That Matter.',
    sub: 'Since 2015, we\'ve shipped 50+ products, run campaigns that compound, and placed engineers who deliver — for businesses in India, the US, UK, and beyond.',
    ctaPrimary: 'Start a Project',
    ctaSecondary: 'See Our Work',
  },
  services: {
    sectionNumber: '01',
    eyebrow: 'What we do',
    heading: 'Three disciplines, one studio.',
    items: [
      {
        slug: 'software-development',
        name: 'Software Development',
        blurb:
          'Web platforms, mobile apps, internal tools, and APIs — built clean, shipped on time, owned for the long run.',
      },
      {
        slug: 'digital-marketing',
        name: 'Digital Marketing',
        blurb:
          'Search, social, content, performance — the work that compounds. We run campaigns where the numbers actually move.',
      },
      {
        slug: 'staffing-solutions',
        name: 'Staffing Solutions',
        blurb:
          'Senior engineers, designers, and operators on demand. Vetted from a network we have been building since day one.',
      },
    ],
  },
  stats: [
    { value: 10, suffix: '+', label: 'Years in business' },
    { value: 50, suffix: '+', label: 'Projects shipped' },
    { value: 30, suffix: '+', label: 'Clients served' },
    { value: 100, suffix: '%', label: 'On-time delivery' },
  ],
  why: {
    sectionNumber: '02',
    eyebrow: 'Why Biech',
    quote:
      '"Software is built by humans, for humans. We never forget that — and it shows in the work."',
    points: [
      {
        title: '10 years of delivery — not promises',
        body: 'Since 2015, we have shipped 50+ products across software, marketing, and staffing. The track record speaks before we do.',
      },
      {
        title: 'Senior people on every brief',
        body: 'No bait-and-switch after sales. The engineer or strategist you meet on day one is the one who delivers.',
      },
      {
        title: 'Fixed scopes, fixed dates',
        body: 'Predictability is part of the deliverable. We over-think the estimate so you do not have to.',
      },
      {
        title: 'Code and accounts you fully own',
        body: 'No vendor lock-in by design. Repos, ad accounts, hires — all yours, from the first commit.',
      },
    ],
  },
  process: {
    sectionNumber: '03',
    eyebrow: 'How we work',
    heading: 'A process built on respect for your time.',
    steps: [
      { n: '01', title: 'Listen', body: 'Workshop your goals, audience, constraints — before quoting.' },
      { n: '02', title: 'Define', body: 'Scope, milestones, success metrics. In writing, signed off.' },
      { n: '03', title: 'Make', body: 'Design and build in two-week increments you can see.' },
      { n: '04', title: 'Ship', body: 'Production launch with handover docs, training, and warranty.' },
      { n: '05', title: 'Stay', body: 'Quarterly reviews so the work keeps earning its keep.' },
    ],
  },
  cta: {
    heading: 'Have a project worth doing well?',
    sub: 'Start the conversation. We answer every email within one working day.',
    button: 'Get in touch',
  },
  marquee: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'Go',
    'PostgreSQL',
    'AWS',
    'GCP',
    'Docker',
    'Kubernetes',
    'Terraform',
    'GitHub Actions',
    'Vercel',
    'Stripe',
    'Auth0',
    'Sentry',
    'Datadog',
    'Figma',
    'Linear',
  ],
}

export const software = {
  hero: {
    eyebrow: 'Service · Engineering',
    h1: 'Software, built like it has to last.',
    sub: 'Web platforms, mobile apps, internal tools, integrations — engineered with the boring discipline that keeps systems running five years from now.',
  },
  offerings: [
    {
      title: 'Web platforms',
      body: 'Customer-facing apps and SaaS products on Next.js, React, Node, and Python. Performance-budgeted, accessible, and SEO-ready by default.',
    },
    {
      title: 'Mobile applications',
      body: 'React Native for cross-platform speed. Native iOS / Android when the app deserves it.',
    },
    {
      title: 'Backend & APIs',
      body: 'REST, GraphQL, and event-driven services. Idempotent endpoints, observable from day one, documented before shipped.',
    },
    {
      title: 'Internal tools',
      body: 'Admin panels, dashboards, and operations consoles that your team will actually want to use.',
    },
    {
      title: 'Integrations',
      body: 'Payments, identity, analytics, CRMs. We have seen most of them; we know where the edges are.',
    },
    {
      title: 'Cloud & DevOps',
      body: 'AWS, GCP, CI/CD, infra-as-code, observability. Set up once, sleep through the night thereafter.',
    },
  ],
  process: [
    { n: '01', title: 'Discovery', body: 'A week to understand the problem and write the brief.' },
    { n: '02', title: 'Design', body: 'Architecture decisions, wireframes, and a shippable demo.' },
    { n: '03', title: 'Build', body: 'Two-week sprints, weekly demos, code review on every PR.' },
    { n: '04', title: 'Ship', body: 'Staged rollout, runbooks, observability dashboards, training.' },
    { n: '05', title: 'Maintain', body: 'Optional retainer for evolution, hardening, and on-call.' },
  ],
  stack: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'Django',
    'FastAPI',
    'Go',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'AWS',
    'GCP',
    'Docker',
    'Kubernetes',
    'Terraform',
  ],
}

export const marketing = {
  hero: {
    eyebrow: 'Service · Growth',
    h1: 'Marketing that moves real numbers.',
    sub: 'Search, performance, content, lifecycle. We run the channels where the maths works — and we show you the maths every month.',
  },
  offerings: [
    {
      title: 'SEO',
      body: 'Technical SEO, content strategy, and link earning. The compound channel.',
    },
    {
      title: 'Performance ads',
      body: 'Google, Meta, LinkedIn. Built around CAC and LTV, not vanity metrics.',
    },
    {
      title: 'Content & editorial',
      body: 'Long-form, social, and product copy that actually sounds like your company.',
    },
    {
      title: 'Email & lifecycle',
      body: 'Onboarding, retention, win-back. Where most of the revenue is hiding.',
    },
    {
      title: 'Brand & creative',
      body: 'Visual identity, ad creatives, landing pages. Design-led, conversion-tested.',
    },
    {
      title: 'Analytics & attribution',
      body: 'GA4, server-side events, dashboards your CFO trusts. Cookie-pocalypse-ready.',
    },
  ],
  results: {
    eyebrow: 'Results, not slides',
    items: [
      { metric: '4.2×', label: 'Avg. blended ROAS · DTC client, 9 months' },
      { metric: '−38%', label: 'Cost-per-lead · B2B SaaS, after Q1 reset' },
      { metric: '+118%', label: 'Organic sessions · marketplace, year one' },
    ],
  },
}

export const staffing = {
  hero: {
    eyebrow: 'Service · Talent',
    h1: 'The right person, in your network, sooner than you thought possible.',
    sub: 'We have spent years building a roster of senior engineers, designers, and operators. When you need one — direct, contract, or contract-to-hire — we know who to call.',
  },
  steps: [
    {
      n: '01',
      title: 'Brief',
      body: 'Thirty minutes on the call. Role, seniority, must-haves, deal-breakers. We write it down.',
    },
    {
      n: '02',
      title: 'Match',
      body: 'A shortlist of three to five within seven days. Each one technically vetted by our team, not just CV-screened.',
    },
    {
      n: '03',
      title: 'Place',
      body: 'Direct hire, contract, or contract-to-hire. We handle paperwork; you focus on the conversation.',
    },
  ],
  roles: [
    'Senior Full-Stack',
    'React',
    'Next.js',
    'Node',
    'Python',
    'Django',
    'Go',
    'Rust',
    'iOS',
    'Android',
    'DevOps',
    'SRE',
    'Data Engineer',
    'Data Scientist',
    'ML Engineer',
    'Product Designer',
    'Visual Designer',
    'Product Manager',
    'Growth Marketer',
    'SEO Specialist',
    'Performance Marketer',
    'Content Strategist',
    'Sales Engineer',
  ],
}

export const about = {
  hero: {
    eyebrow: 'About',
    h1: 'A studio for work worth doing well.',
  },
  story: [
    'Biech began in 2015 the way most good things do — with a small group of engineers who had spent enough years inside larger shops to know the difference between work that mattered and work that did not.',
    'We chose Noida because it is home, and because the talent here does not get the credit it deserves. We chose three services — software, marketing, staffing — because the companies we wanted to work with usually needed all three, and because keeping them under one roof means we can move faster than three separate vendors ever could.',
    'Ten years on, we are still small on purpose. Every brief gets attention from a senior person. Every deadline is one we have thought hard about before we promised it. Every line of code, every campaign, every candidate we send — we would put our name on it. And we do.',
  ],
  values: [
    'Craft over volume.',
    'Clarity over cleverness.',
    'Long horizons over quick wins.',
  ],
  team: [
    {
      name: 'Engineering',
      role: 'Architecture, build, run.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&q=80&auto=format&fit=crop',
    },
    {
      name: 'Studio',
      role: 'Design, brand, story.',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=640&q=80&auto=format&fit=crop',
    },
    {
      name: 'Growth',
      role: 'Search, ads, lifecycle.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80&auto=format&fit=crop',
    },
    {
      name: 'Talent',
      role: 'Sourcing, vetting, placement.',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=640&q=80&auto=format&fit=crop',
    },
  ],
}

export const contact = {
  hero: {
    eyebrow: 'Contact',
    h1: 'Tell us about your project.',
    sub: 'We answer every message within one working day. If it is urgent, mention it — we will do better.',
  },
  channels: [
    { label: 'Email', value: company.email },
    { label: 'Phone', value: company.phone },
    { label: 'WhatsApp', value: company.whatsapp },
    { label: 'Hours', value: 'Mon–Fri · 10:00–19:00 IST' },
  ],
}

export const commitments = [
  { icon: '✅', title: '100% Satisfaction Guarantee', body: 'Not happy with the output? We fix it or refund it. No debates.' },
  { icon: '🏆', title: 'Senior People Always', body: 'The engineer or strategist you meet on day one is the one who delivers. No bait-and-switch.' },
  { icon: '📅', title: '95% On-Time Delivery', body: 'We over-engineer the estimate so you do not face surprises. Deadlines are commitments.' },
  { icon: '🔒', title: 'Strict NDA Policy', body: 'Every engagement begins with a signed NDA. Your ideas, code, and data stay yours.' },
  { icon: '🕐', title: '24 / 7 Support', body: 'Production issues do not respect business hours. Neither do we on the projects we own.' },
  { icon: '💰', title: 'Flexible Engagement Models', body: 'Fixed price, time & material, or dedicated team — matched to your budget and timeline.' },
]

export const faqs = [
  { q: 'How long does a typical project take?', a: 'A simple MVP takes 6–10 weeks. A full-featured product is typically 3–6 months. We define scope and timeline before we start, in writing.' },
  { q: 'What is your pricing model?', a: 'We offer fixed-price projects (best for well-defined scope), time & material (best for evolving projects), and dedicated team retainers. We share a detailed estimate before any engagement begins.' },
  { q: 'Do you work with early-stage startups?', a: 'Yes. A significant portion of our work is with founders building their first product. We are used to working with limited budgets and helping prioritise scope ruthlessly.' },
  { q: 'Do you sign NDAs?', a: 'Always. We sign an NDA before any technical discussion begins. Your ideas, IP, and data are protected from day one.' },
  { q: 'Which technologies do you work with?', a: 'Primarily: TypeScript, React, Next.js, Node.js, Python, Go, PostgreSQL, MongoDB, AWS, and GCP. We use what fits the project — not what is trending on Twitter.' },
  { q: 'How do we get started?', a: 'Send us a message or WhatsApp us. We will respond within one working day, set up a 30-minute call, and come back with a written proposal within a week.' },
]

export const testimonials = [
  {
    quote: 'Biech delivered a production-ready SaaS platform in under 3 months. Every sprint had something shippable. No surprises, no excuses.',
    name: 'Rahul M.',
    title: 'Founder, B2B SaaS · Gurugram',
  },
  {
    quote: 'We went from 0 to 40,000 learners in 30 days. The platform handled it. That kind of engineering confidence is rare.',
    name: 'Priya S.',
    title: 'Co-founder, EdTech · Delhi',
  },
  {
    quote: 'They rebuilt our entire ad attribution and ROAS went from 1.4× to 4.2× in one quarter. I wish we had called them sooner.',
    name: 'Arjun K.',
    title: 'Head of Growth, D2C Brand · Noida',
  },
]

export const nav = {
  links: [
    { label: 'Services', href: '/#services', dropdown: true },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  serviceLinks: [
    { label: 'Software Development', href: '/services/software-development' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'Staffing Solutions', href: '/services/staffing-solutions' },
  ],
}
