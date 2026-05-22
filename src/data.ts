export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  timeline: string;
  location: string;
  bullets: string[];
}

export interface ProjectHighlight {
  id: string;
  title: string;
  role: string;
  bullets: string[];
}

export interface TrainingCourse {
  id: string;
  provider: string;
  location: string;
  title: string;
  timeline: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  timeline: string;
}

export const initialExperience: WorkExperience[] = [
  {
    id: "exp-1",
    company: "KazbooApp",
    role: "SOFTWARE DEVELOPER",
    timeline: "Dec 2023 – Jan 2025",
    location: "Kolding, Denmark",
    bullets: [
      "Built and improved real-time analytical dashboards using React Native (Expo) and integrated chart tracking setups (Recharts/Chart.js).",
      "Transformed complex, streaming JSON payloads from backend sources into performant, actionable web UI frameworks.",
      "Refactored modular components and optimized UI performance to prevent canvas lag over high-frequency state updates.",
      "Designed and improved form-based data capture flows, successfully reducing rendering friction and user validation errors.",
      "Collaborated closely across Agile sprints with product teams to align engineering decisions with core mission scalability.",
    ],
  },
  {
    id: "exp-2",
    company: "Limbo",
    role: "FRONTEND DEVELOPER INTERN",
    timeline: "Sep 2023 – Dec 2023",
    location: "Vejle, Denmark",
    bullets: [
      "Built reusable UI component primitives using Vue.js and Nuxt to scale code pattern recycling safely.",
      "Implemented pixel-perfect responsive layouts and ensured strict visual parity against design mockups.",
      "Contributed to establishing clean, maintainable frontend architecture rules across application folders.",
    ],
  },
  {
    id: "exp-3",
    company: "Freelance: web development & UI/UX design",
    role: "FREELANCE DEVELOPER",
    timeline: "Feb 2011 – Feb 2022",
    location: "Mykolaiv, Ukraine",
    bullets: [
      "Built customized web interfaces from scratch utilizing raw functional JavaScript, HTML5, and CSS3 grids.",
      "Translated precise stakeholder performance specifications into clean, accessible web layouts.",
      "Enforced robust Git branch structures to manage iterative client feedback deployments cleanly.",
    ],
  },
  {
    id: "exp-4",
    company: "State Institution – Main Department of State Geocadastre",
    role: "CADASTRAL SURVEYOR / Technical Specialist",
    timeline: "Jan 2019 – Feb 2022",
    location: "Mykolaiv, Ukraine",
    bullets: [
      "Processed large, nested geographic information datasets structured within rigid schema engines (XML).",
      "Preserved high database standardizations and data consistency rules across system mapping assets.",
      "Developed sharp technical parsing patterns to isolate logical inconsistencies inside telemetry outputs.",
    ],
  },
];

export const initialProjects: ProjectHighlight[] = [
  {
    id: "proj-1",
    title: "Tandem Learning Platform (SAA-Cat)",
    role: "Frontend Developer",
    bullets: [
      "Architecting a frontend-heavy data tracking UI designed to handle structural live progression matrix inputs.",
      "Integrating responsive layout parameters and exploring WebSockets architecture layers to stream updates dynamically.",
      "Configuring clean user interaction states to map complex backend navigation structures gracefully.",
    ],
  },
];

export const initialCourses: TrainingCourse[] = [
  {
    id: "c-1",
    provider: "CyberBionic Systematics",
    location: "Kyiv, Ukraine",
    title: "C#/.NET Developer",
    timeline: "Oct 2024 – Apr 2025",
  },
  {
    id: "c-2",
    provider: "HackYourFuture (BOOTCAMP)",
    location: "Aarhus, Denmark",
    title: "Web Development",
    timeline: "Oct 2022 – Jul 2023",
  },
  {
    id: "c-3",
    provider: "The Rolling Scopes School (EPAM)",
    location: "Minsk, Belarus",
    title: "Frontend Development",
    timeline: "Jan 2020 – May 2022",
  },
];

export const initialEducation: EducationItem[] = [
  {
    id: "edu-1",
    degree: "BACHELOR'S DEGREE in geodesy and land management",
    institution: "Pylyp Orlyk International University",
    timeline: "2019 – 2021",
  },
  {
    id: "edu-2",
    degree: "MASTER'S DEGREE in social work",
    institution: "Petro Mohyla Black Sea University",
    timeline: "2001 – 2006",
  },
];
