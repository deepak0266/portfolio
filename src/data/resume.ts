// All content below is drawn directly from Deepak Baghel's resume.
// No metrics, titles, or achievements are invented.

export const profile = {
  name: 'Deepak Baghel',
  role: 'Systems & Full-Stack Engineer',
  location: 'Hathras, Uttar Pradesh, India',
  email: 'deepakbaghe6602@gmail.com',
  phone: '+91-7078825153',
  linkedin: 'https://linkedin.com/in/deepak0266',
  github: 'https://github.com/deepak0266',
  availability: 'Open to new opportunities',
  summary:
    "Full-stack engineer with production experience owning backend modules, REST APIs, and deployment pipelines across React.js, Node.js, and MongoDB. Built fraud-resistant attendance infrastructure and Python-based automation tooling using browser-driven AI agents. Published IEEE researcher in AI and Blockchain; solved 450+ DSA problems on LeetCode.",
}

export const stats = [
  { label: 'modules_shipped', value: '7+', suffix: '' },
  { label: 'rest_apis_maintained', value: '30+', suffix: '' },
  { label: 'internal_users_served', value: '1,000+', suffix: '' },
  { label: 'dsa_problems_solved', value: '450+', suffix: '' },
]

export const skills = {
  Frontend: ['React.js', 'JavaScript (ES6+)', 'Redux', 'Tailwind CSS', 'Material UI', 'HTML5', 'CSS3'],
  Backend: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'SQL', 'REST APIs', 'JWT Authentication', 'Redis'],
  'Cloud & DevOps': ['AWS (EC2, S3)', 'Docker', 'Vercel', 'Netlify', 'Render', 'Git', 'GitHub', 'CI/CD'],
  'Automation & AI': ['Python', 'Playwright', 'AsyncIO', 'LLM API Integration', 'Workflow Automation'],
  'Testing & Tools': ['Jest', 'Postman', 'Figma'],
  Other: ['WordPress', 'DotNetNuke (DNN)', 'C++', 'Agile/Scrum'],
}

export const experience = [
  {
    company: 'OYO',
    location: 'Gurugram, India',
    role: 'System Engineer',
    period: 'Dec 2025 – Present',
    status: 'current',
    points: [
      'Engineered and delivered 7+ production modules across React.js, Node.js, and MongoDB, used by 1,000+ internal users across business functions.',
      'Designed and maintained 30+ REST APIs, consolidating backend logic across modules to reduce duplicate implementation work.',
      'Optimized MongoDB performance through indexing, aggregation pipeline refactoring, and query pagination/projection to improve API response times.',
      'Deployed and managed production releases on Linux via PM2, streamlining manual deployment workflows for reliability.',
    ],
    stack: ['React.js', 'Node.js', 'MongoDB', 'PM2', 'Linux'],
  },
  {
    company: 'OYO',
    location: 'Gurugram, India',
    role: 'System Engineer Intern',
    period: 'Jun 2025 – Dec 2025',
    status: 'past',
    points: [
      'Built an internal Inventory Management System (Django, SQL) with full role-based access control (RBAC), replacing spreadsheet-based tracking of laptop assignments and status across the team.',
      'Automated Google Web Story publishing through an n8n workflow integrated with internal APIs, removing manual steps from the content pipeline.',
      'Added 30+ new pages to an existing UAE regional WordPress site, expanding content coverage and structure.',
      'Validated REST API request/response schemas in Postman across internal tool integrations, catching contract mismatches before release.',
    ],
    stack: ['Django', 'SQL', 'n8n', 'WordPress', 'Postman'],
  },
]

export const projects = [
  {
    id: 'attendance-system',
    name: 'Enterprise Attendance & Shift Management System',
    tagline: 'Offline-first attendance infrastructure with multi-layer anti-fraud controls',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Socket.io'],
    live: 'https://attendance-management-system-deepak.vercel.app',
    github: null,
    status: 'Live',
    metrics: [
      { label: 'designed_capacity', value: '10,000 employees' },
      { label: 'load_tested', value: '125 concurrent users' },
      { label: 'geofence_radius', value: '400m' },
      { label: 'qr_token_expiry', value: '15s (TOTP)' },
    ],
    features: [
      'Offline-first data queuing with a secure background sync engine',
      'Multi-layer anti-fraud framework: geofencing (400m office radius), TOTP-based QR codes with 15-second expiry, and device-ID binding to eliminate proxy punch-ins',
      'Real-time hierarchical approval pipelines (Employee → Manager → HR) via Socket.io',
      'Analytics engine computing work hours, overtime, and cross-midnight shifts',
      'Role-based access control, CSRF protection, and audit logging on all high-risk operations',
    ],
    architecture:
      'Client-side queue buffers punch events when connectivity drops, then a background sync engine reconciles state with the server once the device reconnects. Approval state moves through a Socket.io-driven pipeline so managers and HR see status changes in real time rather than on refresh.',
    challenge:
      'Proxy punch-ins (one employee marking attendance for another) and unreliable office network conditions on mobile devices.',
    solution:
      'Layered fraud detection combining location, time-boxed one-time codes, and device fingerprinting, plus an offline queue so attendance capture never blocks on connectivity.',
  },
  {
    id: 'job-search-agent',
    name: 'Autonomous Job Search Agent',
    tagline: 'LLM-driven browser agent that completes job applications across ATS platforms',
    stack: ['Python', 'Playwright', 'OpenAI API', 'AsyncIO'],
    live: null,
    github: 'https://github.com/deepak0266/Autonomous-Job-Search-Agent',
    status: 'Open source',
    metrics: [
      { label: 'ats_platforms', value: 'Greenhouse, Workday, Lever' },
      { label: 'execution_model', value: 'Concurrent async sessions' },
    ],
    features: [
      'Detects when Naukri job postings redirect to external ATS platforms',
      'Uses an LLM to autonomously read and complete application forms',
      'AsyncIO-driven concurrent browser sessions across multiple platforms',
      'Reliable handling of varied application workflows without manual intervention',
    ],
    architecture:
      'Playwright drives headless browser sessions per job listing; a redirect detector classifies the destination ATS, then hands form-filling to an LLM-backed agent loop. AsyncIO lets multiple applications progress concurrently instead of serially.',
    challenge:
      'Each ATS platform (Greenhouse, Workday, Lever) has a different form structure and flow, and platforms redirect unpredictably.',
    solution:
      'A redirect classifier plus an LLM agent that reads form context on the fly, instead of hardcoding a scraper per platform.',
  },
  {
    id: 'crm',
    name: 'Lead Management & CRM System',
    tagline: 'Full-stack CRM for lead lifecycle tracking and sales pipeline reporting',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Redis', 'Socket.io'],
    live: 'https://bhlcrm.com',
    github: null,
    status: 'Live',
    metrics: [
      { label: 'scope', value: 'Lead lifecycle → conversion' },
    ],
    features: [
      'Full-stack CRM for tracking lead lifecycle, follow-ups, and conversion status',
      'Role-based dashboards for lead assignment and status tracking',
      'REST APIs powering reporting across the sales pipeline',
    ],
    architecture:
      'Node.js/Express REST API backed by MongoDB for lead records, with Redis supporting fast lookups and Socket.io pushing status updates to dashboards in real time.',
    challenge:
      'Giving different roles (sales reps vs. managers) the right slice of pipeline data without separate codebases.',
    solution:
      'Role-based dashboard views over a shared API and data model, with permissions enforced server-side.',
  },
]

export const education = [
  {
    school: 'Dronacharya Group of Institutions, Greater Noida',
    degree: 'B.Tech, Computer Science',
    period: '2021 – 2025',
    detail: '75.19%',
  },
  {
    school: 'B S Public School, Sadabad',
    degree: 'Higher Secondary (Class XII), Science (PCM)',
    period: '2019 – 2020',
    detail: '86.80%',
  },
  {
    school: 'B S Public School, Sadabad',
    degree: 'High School (Class X)',
    period: '2017 – 2018',
    detail: '75.83%',
  },
]

export const achievements = [
  {
    title: 'IEEE Xplore Publication — ICSCAI 2024',
    detail: 'Published research on blockchain and AI-powered frameworks for secure service workflows.',
  },
  {
    title: '1st Place, College Hackathon',
    detail: 'Led a team building an AI-based Diabetic Retinopathy Detection application.',
  },
  {
    title: '450+ DSA Problems Solved',
    detail: 'Solved on LeetCode across data structures and algorithms.',
  },
  {
    title: '5-Star SQL Gold Badge',
    detail: 'Earned on HackerRank.',
  },
]
