import Photo from "./assets/me.png";

export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export type Course = {
  id: string;
  school: string;
  title: string;
  period: string;
  location?: string;
};

export type Education = {
  id: string;
  school: string;
  degree: string;
  period: string;
  location?: string;
};

export type CvData = {
  fileName: string;
  name: string;
  title: string;
  location: string;
  email: string;
  linkedIn: string;
  github: string;
  portfolio: string;
  photoUrl: string;
  summary: string;
  skills: SkillGroup[];
  experience: Experience[];
  courses: Course[];
  education: Education[];
  languages: string[];
};

export const initialCvData: CvData = {
  fileName: "anna-dzhyhota-frontend-engineer-foreflight",

  name: "Anna Dzhyhota",
  title: "Front End Engineer",
  location: "Kolding, Denmark",
  email: "anna.soft.dev@gmail.com",
  linkedIn: "https://www.linkedin.com/in/ann-dzhyhota/",
  github: "https://github.com/AnnaDzig",
  portfolio: "https://annadzig.github.io/anna-portfolio/",
  photoUrl: Photo,

  summary:
    "Front End Engineer with professional experience building mobile and web interfaces with TypeScript, React Native, JavaScript and REST APIs. At KazbooApp, I developed production features across authentication, profile management, social interactions and media workflows, working with shared application state, asynchronous data flows and cross-platform debugging. My earlier work as a State Cadastral Registrar adds extensive experience with GIS, spatial data validation and map-based systems where data accuracy and traceability were essential.",

  skills: [
    {
      id: crypto.randomUUID(),
      title: "Technical Skills",
      items: [
        "Languages: JavaScript (ES6+), TypeScript",
        "Frontend: React, React Native, Expo, Redux Toolkit, HTML5, CSS3, Vue.js, Nuxt.js",
        "APIs & Data Flow: REST APIs, Axios, Asynchronous Data Flows, State Management",
        "Testing: Jest, React Testing Library, Vitest",
        "Build & Tooling: Vite, Webpack, npm, Git, GitHub, GitHub Actions",
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Front-End Development",
      items: [
        "Responsive UI: Cross-platform and responsive interface development.",
        "Component Architecture: Reusable components and separation of local and shared application state.",
        "Application Quality: Debugging, performance optimization, loading and error-state handling.",
        "Collaboration: Code reviews and implementation discussions within existing product teams.",
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Geospatial & Data Systems",
      items: [
        "GIS: National Cadastral System (NKS), Public Cadastral Map, ArcGIS, QGIS.",
        "Spatial Data: Coordinates, parcel boundaries, polygons, spatial layers and cadastral attributes.",
        "Data Validation: Topology checks, boundary overlaps, coordinate shifts, area mismatches and XML exchange files.",
        "Data Accuracy: Validation and traceability of regulated geospatial records.",
      ],
    },
  ],

  experience: [
    {
      id: "kazbooapp",
      company: "KazbooApp",
      role: "Software Developer",
      period: "Jan 2024 – Jan 2025",
      location: "Kolding, Denmark",
      bullets: [
        "Implemented and maintained production features in a cross-platform React Native application using TypeScript, Expo and Redux Toolkit, including authentication, profile management, social interactions and media workflows.",
        "Integrated REST API flows with Axios and managed shared authentication and profile state across screens, including secure token persistence with expo-secure-store.",
        "Built media upload functionality with expo-image-picker and expo-av, including client-side extraction of video duration and preparation of the required API payload.",
        "Debugged iOS and Android layout inconsistencies involving SafeArea behaviour and responsive sizing, adjusting NativeWind-based layouts for consistent rendering across devices.",
        "Refactored larger screens into smaller reusable components and separated local UI state from shared application state to keep component behaviour easier to maintain.",
        "Participated in code reviews and team discussions on implementation approaches, translating product ideas into working application features.",
      ],
    },
    {
      id: "limbo",
      company: "Limbo",
      role: "Frontend Developer Intern",
      period: "Sep 2023 – Dec 2023",
      location: "Vejle, Denmark",
      bullets: [
        "Built responsive web interfaces with Vue.js, Nuxt.js and Tailwind CSS from existing product designs.",
        "Developed and adapted reusable components within an established frontend codebase.",
        "Worked with API-driven content and collaborated with developers and designers on implementation details.",
      ],
    },
    {
      id: "web-studio",
      company: "Web Studio Projects",
      role: "Part-time Web Developer",
      period: "Jan 2019 – Feb 2022",
      location: "Mykolaiv, Ukraine",
      bullets: [
        "Implemented responsive frontend interfaces from provided designs for small business, portfolio and local e-commerce websites.",
        "Worked on assigned web-development tasks using HTML, CSS and JavaScript as part of an active web-studio workflow.",
        "Adapted layouts for different screen sizes and translated finished visual designs into functional user-facing pages.",
        "Contributed to multiple small client websites, including portfolio sites and a local musical-instrument store.",
      ],
    },
    {
      id: "geocadastre-registrar",
      company: "State Institution – Main Department of State Geocadastre",
      role: "State Cadastral Registrar",
      period: "Apr 2018 – Feb 2022",
      location: "Mykolaiv, Ukraine",
      bullets: [
        "Worked with Ukraine's National Cadastral System and map-based geospatial data, including parcel boundaries, coordinates, polygons, spatial layers and associated cadastral attributes.",
        "Reviewed and validated cadastral and spatial information using the National Cadastral System, Public Cadastral Map, ArcGIS and QGIS.",
        "Validated XML exchange files and identified spatial inconsistencies including boundary overlaps, topology errors, coordinate shifts, area mismatches and incorrect cadastral assignments.",
        "Verified relationships between graphical and attribute data before information was entered or updated in the cadastral system.",
        "Maintained accuracy and traceability of regulated cadastral records where incorrect spatial information could block property transactions or create legal conflicts.",
      ],
    },
    {
      id: "geocadastre-acting",
      company: "State Institution – Main Department of State Geocadastre",
      role: "Acting State Cadastral Registrar",
      period: "Dec 2016 – Apr 2018",
      location: "Mykolaiv, Ukraine",
      bullets: [
        "Performed cadastral registration and spatial-data validation responsibilities before appointment as State Cadastral Registrar.",
      ],
    },
  ],

  courses: [
    {
      id: "rss-react",
      school: "The Rolling Scopes School",
      title: "React",
      period: "Apr 2026 – Jul 2026",
      location: "Online",
    },
    {
      id: "rss-js",
      school: "The Rolling Scopes School",
      title: "JavaScript / Front-end",
      period: "Sep 2025 – Apr 2026",
      location: "Online",
    },
    {
      id: "hyf",
      school: "HackYourFuture Denmark",
      title: "Full-Stack Web Development",
      period: "Oct 2022 – Jul 2023",
      location: "Aarhus, Denmark",
    },
  ],

  education: [
    {
      id: "geodesy",
      school: "Pylyp Orlyk International Classical University",
      degree: "Bachelor's Degree in Geodesy and Land Management",
      period: "2017 – 2021",
      location: "Mykolaiv, Ukraine",
    },
    {
      id: "social-work-specialist",
      school: "Petro Mohyla Black Sea National University",
      degree: "Specialist in Social Work",
      period: "2005 – 2006",
      location: "Mykolaiv, Ukraine",
    },
    {
      id: "social-work-bachelor",
      school: "Petro Mohyla Black Sea National University",
      degree: "Bachelor in Social Work",
      period: "2001 – 2005",
      location: "Mykolaiv, Ukraine",
    },
  ],

  languages: [
    "Ukrainian — Native",
    "Russian — Native",
    "English — Fluent",
    "Polish — Fluent",
    "Danish — Intermediate, Prøve i Dansk 3 passed",
  ],
};
