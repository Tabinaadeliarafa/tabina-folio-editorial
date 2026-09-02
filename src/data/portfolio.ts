export type PortfolioProject = {
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  image?: string;
  projectUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  layout: "split-left" | "split-right" | "wide" | "asymmetric";
};

export const portfolio = {
  name: "Tabina Adelia Rafa",
  role: "Informatics Engineering Student",
  location: "Bekasi, Indonesia",
  availability: "Available for opportunities",
  heroPortrait: undefined as string | undefined,
  aboutPortrait: undefined as string | undefined,
  nav: ["About", "Work", "Experience", "Skills", "Contact"],
  statement: "I create thoughtful digital experiences through design, technology, and data.",
  biography: [
    "I'm an Informatics Engineering student at Padjadjaran University with an interest in creating digital products through the intersection of design, development, and data.",
    "My experience spans UI/UX design, backend development, data analytics, and collaborative technology projects. I enjoy turning ideas and complex problems into digital experiences that are functional, structured, and meaningful.",
  ],
  projects: [
    {
      title: "EcoTrack",
      category: "Backend Development / Mobile Application",
      year: "2025",
      description: "Backend development for a mobile application with RESTful APIs built using Golang. The project includes authentication, email verification, device information, usage tracking, group management, and AI-powered data usage insights.",
      technologies: ["Golang", "REST API", "Database", "AI Integration"],
      layout: "split-left",
    },
    {
      title: "IMDb Film Trends Data Warehouse",
      category: "Data Engineering / Analytics",
      year: "2025",
      description: "A structured IMDb Top 1000 data warehouse developed using Kimball's Nine-Step methodology, ETL pipelines, Star Schema modeling, and multidimensional analysis to explore film industry trends.",
      technologies: ["SSIS", "ETL", "Star Schema", "OLAP", "Data Analytics"],
      layout: "split-right",
    },
    {
      title: "Teraz",
      category: "Backend Development / Web Application",
      year: "2025",
      description: "A web-based boarding house search platform developed using Laravel. Responsible for backend features, database schema, RESTful APIs, user management, property listings, and search functionality.",
      technologies: ["Laravel", "PHP", "REST API", "Database"],
      layout: "wide",
    },
    {
      title: "FundEx Redesign",
      category: "UI/UX Design",
      year: "2025",
      description: "A UI/UX redesign project for the FundEx.id mobile landing page using the Design Sprint framework, including moodboards, wireframes, mini design systems, and high-fidelity prototypes.",
      technologies: ["Figma", "Design Sprint", "Wireframe", "Prototyping", "UI/UX"],
      layout: "asymmetric",
    },
  ] satisfies PortfolioProject[],
  experience: [
    ["2026 — Present", "Data Analyst Intern", "PT Pertamina Gas Negara (Persero)", "Data preparation, transformation, data modeling, Power BI dashboards, KPI reporting, and data quality."],
    ["2025", "Backend Developer Intern", "Bandung Polytechnic of Textile Technology", "Developed backend logic, database architecture, and RESTful APIs for a Laboratory Inventory Management System using Laravel and MySQL."],
    ["2025", "UI/UX Designer", "FundEx × Rakamin Academy", "Redesigned a mobile landing experience through Design Sprint, wireframing, design systems, and prototyping."],
    ["2023 — 2024", "External Relations", "Informatics Engineering Student Association · Padjadjaran University", "Worked on external communication, partnerships, organizational branding, media relations, and project supervision."],
    ["2024", "Project Supervisor", "Informatics Festival", "Led planning and execution of a technology event involving 500+ participants, 20+ company partnerships, and 12 expert speakers."],
  ],
  skills: {
    Design: ["Figma", "FigJam", "Canva", "UI/UX Design", "Wireframing", "Prototyping"],
    Development: ["HTML", "CSS", "JavaScript", "PHP", "Python", "C++", "SQL"],
    Data: ["Power BI", "Tableau", "PostgreSQL", "Google Sheets", "Data Visualization", "Data Analytics"],
    Tools: ["GitHub", "Visual Studio Code", "Notion", "Microsoft Office"],
  },
  metrics: [["500+", "Event participants"], ["20+", "Company partnerships"], ["12", "Expert speakers"], ["685K+", "Instagram Reels views"], ["1.9M+", "TikTok views"]],
  contact: {
    email: "tabinaadeliarafa2004@gmail.com",
    linkedin: "https://linkedin.com/in/tabinaadeliarafa",
    github: "https://github.com/Tabinaadeliarafa",
  },
} as const;