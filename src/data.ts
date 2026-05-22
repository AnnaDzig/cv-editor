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
  name: "Anna Dzhyhota",
  title: "Frontend Software Engineer",
  location: "Denmark, Kolding, 6000",
  email: "anna.soft.dev@gmail.com",
  linkedIn: "https://www.linkedin.com/in/ann-dzhyhota/",
  github: "https://github.com/AnnaDzig",
  portfolio: "https://annadzig.github.io/anna-portfolio/",
  photoUrl: Photo,

  summary:
    "Frontend Software Engineer specialized in React and TypeScript for data-intensive applications. Expert at translating complex, high-volume data into intuitive graph-based interfaces. Unique background in Cadastral systems, providing a deep understanding of entity relationships and data traceability - critical for investigative software.",

  skills: [
    {
      id: crypto.randomUUID(),
      title: "Technical Skills",
      items: [
        "Languages: JavaScript (ES6+), TypeScript",
        "Frontend: React, React Native, Next.js, Redux Toolkit",
        "Backend: REST APIs, .NET/C# (Current study), Asynchronous Data Flows",
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Cloud & Infrastructure",
      items: [
        "AWS (S3): Managed scalable media storage and secure file uploads.",
        "Tools: Git, GitHub, Axios, Tailwind CSS.",
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Data & System Thinking",
      items: [
        "Graph Logic: Mapping entity relationships and structured datasets.",
        "Data-Driven UI: Transforming complex backend data into clear user views.",
        "Traceability: Ensuring data accuracy and precision.",
      ],
    },
  ],

  experience: [
    {
      id: crypto.randomUUID(),
      company: "KazbooApp",
      role: "Software Developer",
      period: "Dec 2023 – Jan 2025",
      location: "Kolding, Denmark",
      bullets: [
        "Architected data-driven frontend features using React Native and TypeScript, ensuring data consistency across complex user-generated content flows.",
        "Managed asynchronous data flows between frontend and backend, ensuring consistent state and reliable rendering.",
        "Optimized API integrations and asynchronous data handling, reducing UI latency for real-time data updates.",
        "Handled edge cases, loading states, and failures to ensure a stable user experience.",
        "Contributed to improving performance and debugging complex issues in a live application.",
      ],
    },
    {
      id: crypto.randomUUID(),
      company: "Limbo",
      role: "Frontend Developer Intern",
      period: "Sep 2023 – Dec 2023",
      location: "Vejle, Denmark",
      bullets: [
        "Built responsive web interfaces using Vue.js and Tailwind CSS, focusing on reusable component architecture.",
        "Worked with structured datasets and API integrations to render dynamic content in a clear and maintainable way.",
        "Collaborated in a team environment with designers and developers to deliver consistent UI solutions.",
      ],
    },
    {
      id: crypto.randomUUID(),
      company: "Freelance: web development & UI/UX design",
      role: "Freelance Developer",
      period: "Jan 2019 – Feb 2022",
      location: "Mykolaiv, Ukraine",
      bullets: [
        "Developed web applications using React, Next.js, and modern JavaScript frameworks.",
        "Designed and implemented user interfaces that transform raw data into accessible and user-friendly views.",
        "Managed full feature lifecycle independently, from requirement clarification to deployment.",
      ],
    },
  ],

  courses: [
    {
      id: crypto.randomUUID(),
      school: "CyberBionic Systematics",
      title: "C#/.NET Developer",
      period: "Oct 2024 – Apr 2025",
      location: "Kyiv, Ukraine",
    },
    {
      id: crypto.randomUUID(),
      school: "HackYourFuture",
      title: "Web Development Bootcamp",
      period: "Oct 2022 – Jul 2023",
      location: "Aarhus, Denmark",
    },
    {
      id: crypto.randomUUID(),
      school: "The Rolling Scopes School",
      title: "Frontend Development",
      period: "Jan 2020 – May 2022",
      location: "Minsk, Belarus",
    },
  ],

  education: [
    {
      id: crypto.randomUUID(),
      school: "Pylyp Orlyk International Classical University",
      degree: "Bachelor's degree in Geodesy and Land Management",
      period: "Sep 2019 – Jun 2021",
      location: "Mykolaiv, Ukraine",
    },
    {
      id: crypto.randomUUID(),
      school: "Petro Mohyla Black Sea National University",
      degree: "Master's degree in Social Work",
      period: "Sep 2001 – Jul 2006",
      location: "Mykolaiv, Ukraine",
    },
  ],

  languages: [
    "English — Fluent",
    "Danish — Intermediate",
    "Ukrainian — Native",
    "Polish — Fluent",
    "Russian — Native",
  ],
};
