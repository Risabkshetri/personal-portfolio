import {
  sun,
} from "../assets";

export const navLinks = [
  { id: "", title: "Home" },
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
];

export const credibilityMetrics = [
  { title: "Founder", value: "Zobique" },
  { title: "Ecosystems", value: "NCS Integration" },
  { title: "Adoption", value: "University Pilots" },
  { title: "Engineering", value: "Full-Stack Systems Built" }
];

export const whatIBuild = [
  {
    category: "AI Systems",
    items: ["AI Agents", "RAG Systems", "LLM Applications", "AI Copilots", "Workflow Automation"]
  },
  {
    category: "Product Engineering",
    items: ["SaaS Platforms", "Multi-Tenant Applications", "APIs", "Dashboards", "Scalable Backends"]
  },
  {
    category: "Career Technology",
    items: ["Job Matching Systems", "Assessment Platforms", "Hiring Infrastructure", "Employability Analytics"]
  }
];

export const selectedWorks = [
  {
    name: "Zobique",
    problem: "Students lack clarity on employability and necessary skills to bridge the gap between their education and industry requirements.",
    solution: "An AI-powered career intelligence platform providing personalized learning paths, job matching, and real-time feedback.",
    techSummary: "LLMs, Vector Databases, Python, React, scalable backend architecture.",
    impact: "Deployed as university infrastructure, delivering clear job readiness analysis to early professionals.",
    logo: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1780077187/favicon_joiv4u.jpg",
    link: "https://www.zobique.com"
  },
  {
    name: "NCS Integration",
    problem: "National ecosystem required robust intelligence to support career services at scale.",
    solution: "Integrated AI-driven intelligence services to the national employment ecosystem.",
    techSummary: "API Development, AI orchestration, Service integrations, High-availability backend.",
    impact: "Facilitated service adoption at a national level, scaling career insights to a diverse user base.",
    logo: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1777100591/ncs-small-logo_ucxlog.png",
    link: "https://www.ncs.zobique.com"
  },
  {
    name: "SoftTechEvent",
    problem: "Businesses require high-performing, scalable web applications to handle digital growth and customer engagement.",
    solution: "Engineered performant web platforms and AI-integrated scalable digital solutions.",
    techSummary: "Next.js, Node.js, React, Scalable Architecture.",
    impact: "Delivered robust platforms enabling enhanced digital presence as Co-founder & AI Engineer.",
    logo: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1780077568/logo_g2rcsq.webp",
    link: "https://www.softtechevent.com/solutions/web-development"
  },
  {
    name: "Productivity App",
    problem: "Users struggle to manage their finances and daily tasks in a cohesive, real-time application.",
    solution: "Developed a full-stack productivity and finance tracker integrating real-time database capabilities.",
    techSummary: "React, Supabase, CSS3",
    impact: "Delivered a centralized platform to track and manage productivity flows seamlessly.",
    logo: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1735305029/sub-logo1_jfxydt.jpg",
    link: "https://finance-cyan-tau.vercel.app/"
  },
  {
    name: "Content Creator Website",
    problem: "Content creators need robust, highly accessible platforms to manage and distribute their content reliably.",
    solution: "Built a highly scalable, cloud-native website leveraging containerization and enterprise cloud infrastructure.",
    techSummary: "Next.js, PostgreSQL, Azure, Kubernetes, GitHub Actions, Docker",
    impact: "Provided a zero-downtime, auto-scaling platform tailored for high-volume content delivery.",
    logo: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1725557174/brazil-1368806_1280_jves0l.jpg",
    link: "https://content-creator-s-web.vercel.app/"
  }
];

export const insights = [
  {
    title: "Your Resume Isn't Being Rejected—It's Being Dismissed in Seconds",
    link: "https://blog.zobique.com/blog/your-resume-isnt-being-rejectedits-being-dismissed-in-seconds"
  },
  {
    title: "The Difference Between Busy Learning and Smart Learning",
    link: "https://blog.zobique.com/blog/the-difference-between-busy-learning-and-smart-learning"
  },
  {
    title: "The 7 Deadly Mistakes Students Make When Choosing Tech Internships",
    link: "https://blog.zobique.com/blog/the-7-deadly-mistakes-students-make-when-choosing-tech-internships"
  }
];

export const capabilities = [
  {
    group: "AI Systems",
    skills: ["LLM Orchestration", "RAG Architecture", "Agentic Workflows", "Vector Databases", "Prompt Engineering"]
  },
  {
    group: "Backend Engineering",
    skills: ["Node.js / Express", "Python / FastAPI", "PostgreSQL", "MongoDB", "High-Availability APIs"]
  },
  {
    group: "Product Architecture",
    skills: ["System Design", "Multi-Tenant SaaS", "Microservices", "Data Modeling", "Integrations"]
  },
  {
    group: "Cloud & Deployment",
    skills: ["AWS / GCP", "Docker", "CI/CD Pipelines", "Serverless Infrastructure", "Monitoring"]
  }
];

export const skillsAndTechnologies = [
  {
    group: "Frontend",
    skills: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" }
    ]
  },
  {
    group: "Backend",
    skills: [
      { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339939" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" }
    ]
  },
  {
    group: "Database",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" }
    ]
  },
  {
    group: "DevOps",
    skills: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
      { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/009639" },
      { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" }
    ]
  }
];

// Fallbacks for any old imports missing
export const services = [];
export const technologies = [];
export const experiences = [];
export const projects = [];
