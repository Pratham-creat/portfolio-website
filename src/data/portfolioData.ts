import { Project, SkillCategory, ExperienceItem, AchievementItem } from '../types/portfolio';

export const personalInfo = {
  name: 'Pratham Dixit',
  title: 'AI Engineer & Web Developer',
  tagline: 'Engineering intelligent AI workflows and scalable full-stack web applications with clean architecture.',
  bio: 'I am a B.Tech Computer Science student passionate about bridging the gap between cutting-edge Artificial Intelligence and practical, robust web systems. My work ranges from deploying local LLMs with Ollama and OCR pipelines to building performant full-stack React and FastAPI applications.',
  education: {
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    status: 'Undergraduate Student',
    focus: 'Artificial Intelligence, Machine Learning & Full-Stack Systems'
  },
  location: 'Jabalpur / India',
  status: 'Open to AI & Software Engineering Roles / Internships',
  email: 'prathamdixit445@gmail.com', // Replaceable with real email
  github: 'https://github.com/Pratham-creat',
  linkedin: 'https://www.linkedin.com/in/pratham-dixit-320960302',
  resumeUrl: '#contact',
  stats: [
    { label: 'Core Projects Built', value: '2+' },
    { label: 'Hackathon Finalist', value: '1st Tier' },
    { label: 'Verified Certifications', value: '7' },
    { label: 'Stack Mastery', value: 'Python / TS' }
  ]
};

export const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    category: 'Programming Languages',
    icon: 'Code2',
    description: 'Foundational and modern languages used for system-level logic, scripting, and web engines.',
    skills: [
      { name: 'Python', badge: 'Core', description: 'AI/ML scripting, FastAPI/Flask, Data Pipelines' },
      { name: 'JavaScript (ES6+)', badge: 'Core', description: 'Async logic, DOM, Full-Stack JS' },
      { name: 'TypeScript', badge: 'Active', description: 'Type-safe React & Node architectures' },
      { name: 'C', badge: 'Systems', description: 'Memory fundamentals, algorithms' },
      { name: 'C++', badge: 'Systems', description: 'OOP, STL, Data Structures' }
    ]
  },
  {
    id: 'frontend',
    category: 'Frontend Development',
    icon: 'Layout',
    description: 'Component-driven, responsive user interfaces with crisp typography and high accessibility.',
    skills: [
      { name: 'React', badge: 'Core', description: 'Hooks, Context API, state machines' },
      { name: 'Next.js', badge: 'Framework', description: 'App Router, SSR, Server Actions' },
      { name: 'Tailwind CSS', badge: 'Styling', description: 'Utility-first modern design systems' },
      { name: 'HTML5 & Modern CSS', badge: 'Web', description: 'Semantic markup, Flexbox/Grid, animations' },
      { name: 'Framer Motion', badge: 'UI', description: 'Micro-interactions and fluid transitions' }
    ]
  },
  {
    id: 'backend',
    category: 'Backend & APIs',
    icon: 'Server',
    description: 'Fast, secure RESTful microservices, asynchronous request pipelines, and auth workflows.',
    skills: [
      { name: 'FastAPI', badge: 'Core', description: 'High-speed Python APIs, Pydantic validation' },
      { name: 'Flask', badge: 'Python', description: 'Lightweight web services & prototypes' },
      { name: 'Express.js', badge: 'Node.js', description: 'REST APIs, middleware, routing' },
      { name: 'Node.js', badge: 'Runtime', description: 'Server-side runtime & asynchronous I/O' },
      { name: 'RESTful API Design', badge: 'Architecture', description: 'Clean endpoint standards, status codes' }
    ]
  },
  {
    id: 'ai-ml',
    category: 'AI / ML & LLMs',
    icon: 'Cpu',
    description: 'Hands-on experience with local model inference, document parsing, OCR, and AI reasoning.',
    skills: [
      { name: 'Ollama', badge: 'Local LLMs', description: 'Self-hosted LLM orchestration & prompt pipelines' },
      { name: 'OCR & Vision', badge: 'Vision', description: 'Tesseract OCR, document text extraction' },
      { name: 'ML Fundamentals', badge: 'Theory & Code', description: 'Supervised/unsupervised algorithms, evaluation' },
      { name: 'Prompt Engineering', badge: 'GenAI', description: 'Structured JSON outputs, few-shot prompting' },
      { name: 'LangChain & RAG', badge: 'Integration', description: 'Context retrieval & vector embeddings' }
    ]
  },
  {
    id: 'databases',
    category: 'Databases & Storage',
    icon: 'Database',
    description: 'Relational data modeling, schema normalization, index optimization, and document stores.',
    skills: [
      { name: 'MySQL', badge: 'RDBMS', description: 'Schema design, complex joins, transactions' },
      { name: 'SQL', badge: 'Querying', description: 'Aggregations, subqueries, query optimization' },
      { name: 'PostgreSQL', badge: 'RDBMS', description: 'ACID compliance, relational structures' },
      { name: 'SQLite', badge: 'Embedded', description: 'Lightweight local prototyping & testing' },
      { name: 'MongoDB', badge: 'NoSQL', description: 'Document stores, JSON collections' }
    ]
  },
  {
    id: 'tools',
    category: 'Tools & Cloud',
    icon: 'Wrench',
    description: 'Version control, cloud asset delivery, API testing, and continuous deployment.',
    skills: [
      { name: 'Git & GitHub', badge: 'VCS', description: 'Branch workflows, pull requests, collaboration' },
      { name: 'Cloudinary', badge: 'Media CDN', description: 'Automated image uploads, transformations' },
      { name: 'Docker', badge: 'Containers', description: 'Containerized microservice environments' },
      { name: 'Postman', badge: 'Testing', description: 'API mocking, validation, endpoint testing' },
      { name: 'Vercel / Netlify', badge: 'Deployment', description: 'CI/CD pipeline, edge delivery' }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'ai-law-advisor',
    title: 'AI Law Advisor',
    tagline: 'Intelligent legal assistance platform powered by local LLMs, OCR document parsing, and plain-language clause translation.',
    category: 'ai-ml',
    problem: 'Legal statutes, dispute precedents, and legal documents contain dense jargon that creates high barriers and steep consultation costs for everyday citizens and students.',
    solution: 'Engineered an intelligent advisory engine using FastAPI and Ollama (Llama/Mistral) combined with OCR document ingestion. The system digests legal queries or uploaded contracts, extracts salient clauses, and delivers contextual explanations with statute citations.',
    techStack: ['Python', 'FastAPI', 'Ollama', 'React', 'Tailwind CSS', 'OCR (Tesseract)', 'LangChain'],
    keyFeatures: [
      'Interactive AI legal consultation assistant with contextual memory',
      'Optical Character Recognition (OCR) to parse uploaded legal notices and PDFs',
      'Plain-language breakdown of complex legal clauses and statutory cross-references',
      'Local model privacy protection with zero third-party data leakage via Ollama',
      'Structured legal summary generator with downloadable case briefs'
    ],
    metrics: 'Flagship AI Project — 100% Local Inference & Privacy-First',
    githubUrl: 'http://github.com/Pratham-creat/AI-Law-advisor-',
    demoUrl: 'http://github.com/Pratham-creat/AI-Law-advisor-',
    featured: true,
    accentColor: 'indigo',
    architectureNotes: [
      'Frontend (React/Tailwind) communicates with asynchronous FastAPI endpoints',
      'Local Ollama instance executes prompt-engineered reasoning without cloud dependency',
      'OCR pipeline extracts structured text from scanned documents with confidence thresholds'
    ]
  },
  {
    id: 'blogger-platform',
    title: 'Blogger Platform',
    tagline: 'Modern, full-stack content publishing ecosystem with rich markdown editor and Cloudinary media optimization.',
    category: 'web',
    problem: 'Writers and tech bloggers need an unbloated, fast blogging interface with robust media management, tag-based discovery, and responsive reading aesthetics.',
    solution: 'Built a full-stack publication system with Node.js/Express and React. Integrates seamless Cloudinary image uploads, JWT-authenticated author dashboard, tag filtering, and dynamic markdown rendering with syntax highlighting.',
    techStack: ['React', 'Node.js', 'Express', 'Cloudinary API', 'MySQL / MongoDB', 'Tailwind CSS', 'JWT'],
    keyFeatures: [
      'Live markdown authoring preview with embedded image support',
      'Automated cloud image upload and on-the-fly transformations via Cloudinary',
      'Secure author authentication with JSON Web Tokens and password hashing',
      'Category-based article filtering, search bar, and reader engagement metrics',
      'Fully responsive, clean editorial reading mode with estimated read time'
    ],
    metrics: 'Production-ready Full Stack CRUD with Media CDN',
    githubUrl: 'https://github.com/Pratham-creat/Blogger',
    demoUrl: 'https://github.com/Pratham-creat/Blogger',
    featured: true,
    accentColor: 'blue',
    architectureNotes: [
      'REST API design for decoupled frontend rendering',
      'Cloudinary API handles image compression, CDN caching, and responsive formats',
      'Relational schema mapping authors, articles, categories, and tags'
    ]
  },

];

export const experienceData: ExperienceItem[] = [
  {
    id: 'krazyfox-web-dev',
    role: 'Web Developer Intern',
    company: 'Krazyfox',
    companyUrl: 'https://krazyfox.com',
    period: 'Internship Experience',
    type: 'Internship',
    location: 'Remote / India',
    summary: 'Contributed to front-end and web development initiatives, collaborating with senior developers on production client features.',
    highlights: [
      'Architected modular, reusable UI components following clean component hierarchy and responsive design standards.',
      'Optimized client-side rendering performance, reducing page load times and enhancing mobile responsiveness.',
      'Integrated RESTful API endpoints, handling asynchronous data fetching, error boundaries, and loading skeletons.',
      'Participated in code reviews, bug fixes, and cross-browser compatibility testing.'
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Git', 'UI/UX Design']
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'data-engineer-career-path',
    title: 'Data Engineer Career Path',
    issuer: 'Microsoft',
    date: 'Mar 2026',
    category: 'certification',
    badge: 'Microsoft Certified',
    description: 'Comprehensive mastery in data engineering architecture, distributed data processing workflows, pipeline orchestration, and cloud analytics storage on Azure.',
    skillsGained: ['Data Engineering', 'Azure Pipelines', 'ETL / ELT', 'Big Data Architecture'],
    credentialUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/PrathamDixit-2582/J3QJVCXT?sharingId=6DCA5A372E8598C6'
  },
  {
    id: 'hp-data-science',
    title: 'Data Science & Analytics',
    issuer: 'HP LIFE',
    date: 'Mar 2026',
    category: 'certification',
    badge: 'HP LIFE Certified',
    description: 'Hands-on training in statistical data exploration, exploratory data analysis, data storytelling, and extracting actionable business intelligence.',
    skillsGained: ['Data Science', 'Data Analytics', 'Statistical Analysis', 'Business Intelligence'],
    credentialUrl: 'https://www.life-global.org/certificate/a90ac2dd-b5d6-425c-80ff-f2000761a27b'
  },
  {
    id: 'azure-data-engineering-intro',
    title: 'Introduction to Data Engineering on Azure',
    issuer: 'Microsoft Learning',
    date: 'Mar 2026',
    category: 'certification',
    badge: 'Microsoft Learning',
    description: 'Explored cloud storage architectures, data integration systems with Azure Data Factory, Synapse Analytics, and stream processing basics.',
    skillsGained: ['Azure Data Factory', 'Azure Synapse', 'Cloud Data Lake', 'Data Pipelines'],
    credentialUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/PrathamDixit-2582/NM6UR8ZF?sharingId=6DCA5A372E8598C6'
  },
  {
    id: 'azure-ml-resources',
    title: 'Explore Azure Machine Learning Workspace Resources & Assets',
    issuer: 'Microsoft Learning',
    date: 'Jan 2026',
    category: 'certification',
    badge: 'Microsoft Learning',
    description: 'Configuring and managing enterprise Azure ML workspaces, compute targets, datastores, model registries, and automated ML pipelines.',
    skillsGained: ['Azure Machine Learning', 'MLOps', 'Compute Clusters', 'Model Registry'],
    credentialUrl: 'https://learn.microsoft.com/en-us/users/PrathamDixit-2582/achievements/WVD2YYFN'
  },
  {
    id: 'ibm-ai-fundamentals',
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    date: 'Aug 2025',
    category: 'certification',
    badge: 'IBM / Credly Verified',
    description: 'Foundational credential covering core AI architectures, neural representations, computer vision, natural language processing, and ethical AI frameworks.',
    skillsGained: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks', 'AI Ethics'],
    credentialUrl: 'https://www.credly.com/badges/50fcd780-90f1-4057-a8ce-69f78c55296d/linked_in_profile'
  },
  {
    id: 'microsoft-ml-intro',
    title: 'Introduction to Machine Learning',
    issuer: 'Microsoft',
    date: 'Apr 2025',
    category: 'certification',
    badge: 'Microsoft Certified',
    description: 'Practical grounding in supervised and unsupervised learning algorithms, regression, classification, loss optimization, and feature engineering.',
    skillsGained: ['Machine Learning Algorithms', 'Supervised Learning', 'Feature Engineering', 'Model Optimization'],
    credentialUrl: 'https://learn.microsoft.com/en-us/users/prathamdixit-2582/achievements/7kqbtwmz'
  },
  {
    id: 'hubspot-digital-marketing',
    title: 'Digital Marketing Certification',
    issuer: 'HubSpot Academy',
    date: 'Mar 2026 (Expires Apr 2027)',
    category: 'certification',
    badge: 'HubSpot Certified',
    description: 'Certified in inbound marketing methodologies, search engine optimization (SEO), content strategy, and performance campaign analytics.',
    skillsGained: ['Digital Marketing', 'SEO Optimization', 'Content Strategy', 'Campaign Analytics'],
    credentialUrl: 'https://app-na2.hubspot.com/academy/achievements/4mz83h31/en/1/pratham-dixit/digital-marketing'
  },
  {
    id: 'jabalpur-hackathon',
    title: 'Inter-College Jabalpur Hackathon — Finalist',
    issuer: 'Inter-College Tech Committee',
    date: 'Sep 2024',
    category: 'hackathon',
    badge: 'Team Lead & Finalist',
    description: 'Led a 4-member developer team through rapid problem discovery, software architecture, and iterative product delivery, reaching the grand finale among 50+ collegiate teams.',
    skillsGained: ['Leadership', 'Rapid Prototyping', 'System Architecture', 'Pitch Presentation']
  }
];
