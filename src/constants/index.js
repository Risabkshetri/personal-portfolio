import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  kshetriai,
  zobique,
  sun,
  productivity,
  foodlet,
  portfoliobuilder,
  postgres,
  openai,
  nextjs,
  fastapi,
  python,
  langchain,
  huggingface,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack",
    icon: web,
  },
  {
    title: "AI & Automation",
    icon: mobile,
  },
  {
    title: "Cloud & Infra",
    icon: backend,
  },
  {
    title: "Product & Strategy",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Fastapi",
    icon: fastapi,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Langchain",
    icon: langchain,
  },
  {
    name: "Huggingface",
    icon: huggingface,
  },
  {
    name: "OpenAI",
    icon: openai,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgresql",
    icon: postgres
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "2 Years of Learning: MERN & PORN Stack with AI",
    company_name: "Self-Learning & Projects",
    icon: sun,
    iconBg: "#383E56",
    date: "Jan 2022 - Dec 2023",
    points: [
      "Gained expertise in MERN and PORN stacks to build AI-powered systems and scalable web applications.",
      "Explored AI integrations with OpenAI, LangChain, and FastAPI to enhance system capabilities.",
      "Worked on multiple projects involving AI-driven automation, APIs, and dynamic user experiences.",
      "Developed a strong foundation in full-stack development, database optimization, and AI-driven applications.",
    ],
  },
  {
    title: "Founder & AI Innovator: Building KshetriAI",
    company_name: "KshetriAI",
    icon: kshetriai,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Aug 2025",
    points: [
      "Leading KshetriAI, a startup dedicated to developing AI-powered solutions and innovative products.",
      "Building and scaling intelligent web applications using Next.js, PostgreSQL, OpenAI, and LangChain.",
      "Driving AI research and development to create smart automation tools and real-world AI applications.",
      "Managing business operations, collaborating with clients, and strategizing product innovation.",
    ],
  },
  {
    title: "Founder & CEO: Zobique - AI Career Agent",
    company_name: "Zobique",
    icon: zobique,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Building Zobique as an AI-powered career guidance platform that delivers personalized insights for students and early professionals.",
      "Using LLMs, vector databases, and skill-gap analytics to provide real-time learning paths, job matches, and actionable recommendations.",
      "Continuously testing, refining, and scaling the platform to improve performance, usability, and impact across education and career ecosystems.",
    ],
  },
];



const projects = [
  {
    name: "Productivity App",
    description:
      "A web-based productivity management tool designed to help users track tasks, set goals, and improve efficiency using AI-driven insights.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: productivity,
    source_code_link: "https://github.com/Risabkshetri/finance.git",
  },
  {
    name: "Restaurant",
    description:
      "A web-based platform that enables users to browse restaurant menus, place online orders, and track their deliveries in real-time, ensuring a smooth and convenient dining experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: foodlet,
    source_code_link: "https://github.com/Risabkshetri/NehaStreetWeb.git",
  },
  {
    name: "Portfolio Builder",
    description:
      "A dynamic platform that allows users to generate and customize their personal portfolios effortlessly, integrating modern design and real-time updates.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: portfoliobuilder,
    source_code_link: "https://github.com/Risabkshetri/PortfolioGen-frontend.git",
  },
];


export { services, technologies, experiences, projects };
