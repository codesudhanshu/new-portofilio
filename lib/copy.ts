// Single source of truth for marketing copy. Rewrite voice in one place.

export const company = {
  legal: 'Biech Software Solutions Pvt. Ltd.',
  short: 'Biech',
  tagline: 'Software · Marketing · Staffing',
  city: 'Noida, India',
  email: 'hello@biech.in',
  phone: '+91 120 000 0000',
  address: {
    line1: 'Sector 62, Noida 201309',
    line2: 'Uttar Pradesh, India',
  },
}

export const home = {
  hero: {
    eyebrow: 'Noida, India · Software · Marketing · Staffing',
    line1: 'We Build Digital',
    line2: 'Products That Matter.',
    sub: 'A small Noida studio building tools, growth engines, and engineering teams for ambitious companies — domestic and abroad.',
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
    { value: 50, suffix: '+', label: 'Projects shipped' },
    { value: 30, suffix: '+', label: 'Clients served' },
    { value: 3, suffix: '', label: 'Cities engaged' },
    { value: 100, suffix: '%', label: 'On-time delivery' },
  ],
  why: {
    sectionNumber: '02',
    eyebrow: 'Why Biech',
    quote:
      '"Software is built by humans, for humans. We never forget that — and it shows in the work."',
    points: [
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
      {
        title: 'IST + flexible global overlap',
        body: 'We routinely work with US, UK, and GCC clients. Async by default, with live overlap when it matters.',
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
    'Biech began the way most good things do — with a small group of engineers who had spent enough years inside larger shops to know the difference between work that mattered and work that did not.',
    'We chose Noida because it is home, and because the talent here does not get the credit it deserves. We chose three services — software, marketing, staffing — because the companies we wanted to work with usually needed all three, and because keeping them under one roof means we can move faster than three separate vendors ever could.',
    'We are small on purpose. Every brief gets attention from a senior person. Every deadline is one we have thought hard about before we promised it. Every line of code, every campaign, every candidate we send — we would put our name on it. And we do.',
  ],
  values: [
    'Craft over volume.',
    'Clarity over cleverness.',
    'Long horizons over quick wins.',
  ],
  team: [
    { name: 'Engineering', role: 'Architecture, build, run.' },
    { name: 'Studio', role: 'Design, brand, story.' },
    { name: 'Growth', role: 'Search, ads, lifecycle.' },
    { name: 'Talent', role: 'Sourcing, vetting, placement.' },
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
    { label: 'Hours', value: 'Mon–Fri · 10:00–19:00 IST' },
  ],
}

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
