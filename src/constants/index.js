import {
  mobile,
  backend,
  creator,
  web,
  kshetriai,
  zobique,
  sun,
  productivity,
  foodlet,
  portfoliobuilder,
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
    name: "Automated Hiring Infrastructure",
    problem: "Recruiters and hiring managers spend excessive time screening and parsing resumes without deep capability insights.",
    solution: "Built an autonomous screening and assessment pipeline to evaluate candidate capabilities beyond keywords.",
    techSummary: "Agentic workflows, NLP parsing, Node.js, Next.js, PostgreSQL.",
    impact: "Reduced candidate evaluation time significantly and improved match quality for specialized roles.",
    logo: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1725626044/ai-generated-8775742_640_a0zgdm.webp"
  },
  {
    name: "SoftTechEvent",
    problem: "Businesses require high-performing, scalable web applications to handle digital growth and customer engagement.",
    solution: "Engineered performant web platforms and AI-integrated scalable digital solutions.",
    techSummary: "Next.js, Node.js, React, Scalable Architecture.",
    impact: "Delivered robust platforms enabling enhanced digital presence as Co-founder & AI Engineer.",
    logo: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1780077568/logo_g2rcsq.webp",
    link: "https://www.softtechevent.com/solutions/web-development"
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

// Fallbacks for any old imports missing
export const services = [];
export const technologies = [];
export const experiences = [];
export const projects = [];
