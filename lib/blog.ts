export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  sections: { heading?: string; body: string }[]
}

export const posts: BlogPost[] = [
  {
    slug: 'how-to-pick-the-right-tech-stack',
    title: 'How to Pick the Right Tech Stack for Your Next Product',
    excerpt:
      'Choosing a tech stack is one of the most consequential early decisions you will make. Get it wrong and you are refactoring forever. Here is how we think about it.',
    category: 'Software Development',
    date: 'May 12, 2025',
    readTime: '6 min read',
    author: 'Biech Engineering',
    sections: [
      {
        body: 'Every week we talk to founders who are either locked into a stack they regret or paralysed by choice. Both problems are avoidable. The right stack is not the trendiest one — it is the one that matches your team, your timeline, and your expected scale.',
      },
      {
        heading: 'Start with the team, not the technology',
        body: 'The best stack is the one your engineers know well. A team of Python experts shipping in Django will outperform a team learning Rust every time. Novelty has a cost: slower ramp-up, fewer available engineers when you hire, thinner community support. Unless there is a hard technical constraint (latency requirements, hardware access, regulatory mandate), default to what your team already knows.',
      },
      {
        heading: 'Match the stack to the product phase',
        body: 'An MVP and a production system with 500,000 daily users have different requirements. For most early-stage products, Next.js + Node + PostgreSQL or MongoDB will get you to market faster than a microservices architecture. Premature optimisation is real. You can always extract services later; you cannot easily get back six months of engineering time.',
      },
      {
        heading: 'Think about the hiring market',
        body: 'If you are building in Noida, the talent pool for React, Node, Python, and Java is deep. The pool for Elixir or Haskell is thin. Unless you are a remote-first company with global hiring, the local talent market shapes your viable stack more than most founders realise.',
      },
      {
        heading: 'Our default recommendation for web products',
        body: 'For most web platforms we build: Next.js on the frontend, Node.js or FastAPI on the backend, PostgreSQL or MongoDB depending on data shape, deployed on AWS or Vercel. This combination is battle-tested, well-documented, and has a large talent pool in India and globally. We deviate when the use case demands it — ML pipelines get Python, low-latency systems get Go — but the default serves 80% of projects well.',
      },
      {
        heading: 'The one thing most teams get wrong',
        body: 'They pick a stack based on what they read on Hacker News last week. Trends matter for community support and library quality, but a popular stack you do not understand is worse than an unfashionable one you know deeply. Pick boring where boring works. Save novelty for the problems that actually require it.',
      },
    ],
  },
  {
    slug: 'why-your-marketing-dashboard-is-lying',
    title: 'Why Your Marketing Dashboard Is Lying to You',
    excerpt:
      'Vanity metrics feel good but do not pay salaries. Here is how to build a reporting setup that tells you what is actually working — and what is quietly draining budget.',
    category: 'Digital Marketing',
    date: 'April 28, 2025',
    readTime: '5 min read',
    author: 'Biech Growth',
    sections: [
      {
        body: 'Most marketing dashboards are designed to make marketers feel good, not to help businesses make decisions. Impressions, reach, followers, page views — these are real numbers, but they do not tell you whether your marketing is working. They tell you whether your marketing is happening.',
      },
      {
        heading: 'The metrics that actually matter',
        body: 'For most B2B companies, the only numbers that matter at the top of the funnel are: cost per qualified lead (not cost per lead — qualified), lead-to-opportunity conversion rate, and CAC (customer acquisition cost) by channel. For ecommerce: ROAS (return on ad spend), CAC, LTV:CAC ratio, and repeat purchase rate. If your dashboard does not show these, it is showing you something else.',
      },
      {
        heading: 'The attribution problem',
        body: 'With third-party cookies disappearing, last-click attribution is increasingly fiction. A customer might see your LinkedIn post, search for your brand three days later, click an organic result, and convert via a remarketing ad. Last-click credits the remarketing ad. That is technically correct but strategically misleading. Invest in server-side tracking and multi-touch attribution models. GA4 is a start but it is not enough.',
      },
      {
        heading: 'The channel mix trap',
        body: 'We regularly audit marketing accounts where the "best-performing" channel is actually benefiting from brand searches that every other channel generated. Branded search looks great in reports because conversion rates are high. But if you cut the channels that drove awareness, branded search would collapse two months later. Model the full path, not just the last step.',
      },
      {
        heading: 'What a trustworthy dashboard looks like',
        body: 'Pipeline sourced by channel. Revenue influenced by channel. CAC and LTV by cohort and acquisition source. Organic traffic trend by page type and intent cluster. These are harder to build but they are the numbers a CFO or founder will actually use. Reports that exist to satisfy a marketing team are a waste of everyone\'s time.',
      },
      {
        heading: 'One practical step you can take this week',
        body: 'Pick your top three channels. For each one, calculate what it cost you to acquire a paying customer last quarter — fully loaded (ad spend, agency fees, tooling, team time). Compare that to the average revenue per customer in that cohort. If the number does not make sense, you are either measuring wrong or spending wrong. Either way, now you know.',
      },
    ],
  },
  {
    slug: '5-signs-you-need-to-augment-your-engineering-team',
    title: '5 Signs You Need to Augment Your Engineering Team',
    excerpt:
      'Hiring full-time is not always the right answer. Here are the five clearest signals that staff augmentation is what your project needs right now.',
    category: 'Staffing Solutions',
    date: 'April 10, 2025',
    readTime: '4 min read',
    author: 'Biech Talent',
    sections: [
      {
        body: 'Staff augmentation — adding vetted engineers or specialists to an existing team on a contract or contract-to-hire basis — has become the default way fast-moving companies handle temporary capability gaps. But it is not right for every situation. Here are the five clearest signals that augmentation is the answer.',
      },
      {
        heading: '1. You have a deadline and not enough people',
        body: 'A product launch, a compliance deadline, a customer commitment — if you have a hard date and your current team cannot hit it, adding two or three senior engineers for three months is faster and cheaper than going through a six-month hiring process. Full-time hiring takes time that deadline-driven work does not have.',
      },
      {
        heading: '2. You need a skill that you only need once',
        body: 'You are migrating from a monolith to microservices. You need someone who has done this before, not someone who will learn on your production system. Once the migration is done, you probably do not need a full-time migration specialist. Augmentation lets you bring in the expertise, use it, and move on without a permanent headcount increase.',
      },
      {
        heading: '3. Your core team is stuck in maintenance and cannot build new things',
        body: 'This is the most common pattern we see. The founding engineering team is keeping the lights on — bug fixes, customer requests, infrastructure work — and has no bandwidth for new product development. Adding augmented engineers for new feature work frees your senior people to do the strategic work only they can do.',
      },
      {
        heading: '4. You are between funding rounds and cannot commit to permanent hires',
        body: 'If your Series A closes in four months and you need to show product progress, hiring full-time engineers you might have to let go is bad for everyone. Augmentation gives you the capacity without the commitment. If the round closes and you want to convert contractors to full-time, that option is usually available.',
      },
      {
        heading: '5. You are expanding into a new geography or technology',
        body: 'Your team knows your current stack. You are now adding a mobile app, an AI feature, or a new regional market. Augmenting with specialists who already know the terrain is faster than retraining your existing team — and less risky than making expensive full-time hires before you know if the new direction will work.',
      },
    ],
  },
  {
    slug: 'mvp-in-8-weeks-what-it-actually-takes',
    title: 'MVP in 8 Weeks: What It Actually Takes',
    excerpt:
      'Everyone promises an MVP in weeks. Few deliver something worth shipping. Here is the honest breakdown of what an 8-week MVP build requires — and where most projects go wrong.',
    category: 'Software Development',
    date: 'March 22, 2025',
    readTime: '7 min read',
    author: 'Biech Engineering',
    sections: [
      {
        body: 'We have shipped MVPs in as little as six weeks. We have also watched projects with eight-week timelines stretch to eight months. The difference is almost never technical. It is almost always about decisions — who makes them, how fast, and how clearly the scope was defined before a single line of code was written.',
      },
      {
        heading: 'Week 1 is not for building',
        body: 'The fastest projects we have delivered all had one thing in common: a well-defined Week 1 that was entirely about alignment, not code. User flows mapped. Database schema drafted. API contracts agreed. Design system chosen. Tech stack decided. Deployment pipeline set up. If you skip this week and start building immediately, you will rebuild everything twice.',
      },
      {
        heading: 'What MVP actually means',
        body: 'Minimum Viable Product does not mean the smallest thing you can get away with. It means the smallest thing that proves the core hypothesis. If you are building a marketplace, the hypothesis might be "users will pay to access this supply." The MVP tests that and nothing else. Every feature that does not test the hypothesis is scope creep, regardless of how reasonable it sounds.',
      },
      {
        heading: 'The three-meeting rule',
        body: 'Every week, we run three meetings: a Monday kickoff (what are we building this sprint), a midweek checkpoint (are we on track or do we need to cut scope), and a Friday demo (show working software, not designs). The Friday demo is the most important. If you are showing designs in week five, you are not building an MVP — you are planning one.',
      },
      {
        heading: 'Where projects die: scope creep after kick-off',
        body: '"Can we just add one more thing?" is the most expensive sentence in software development. Scope creep on a fixed-timeline project does not add features — it removes quality. Every addition is a subtraction from something else. The right answer to mid-project feature requests is: yes, in version 2. Write it down, prioritise it for after launch, and keep building what you agreed to build.',
      },
      {
        heading: 'What you actually get at week eight',
        body: 'A working product that handles the core user journey end-to-end. Basic auth, core workflow, data persistence, working on mobile and desktop. Not a polished product — a shippable one. The polish comes after you have real users telling you what they actually need, not what they thought they needed in the kick-off meeting.',
      },
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}
