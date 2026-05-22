import React, { useState } from "react";
import type {
  WorkExperience,
  ProjectHighlight,
  TrainingCourse,
  EducationItem,
} from "./data";
import {
  initialExperience,
  initialProjects,
  initialCourses,
  initialEducation,
} from "./data";
import CvHeader from "./components/CvHeader";
import SummarySection from "./components/SummarySection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import CoursesSection from "./components/CoursesSection";
import EducationSection from "./components/EducationSection";
import LanguagesSection from "./components/LanguagesSection";

export default function App() {
  const [name, setName] = useState<string>("Anna Dzhyhota");
  const [title, setTitle] = useState<string>("Frontend / Fullstack Developer");
  const [contactLocation, setContactLocation] = useState<string>(
    "Denmark, Kolding, 6000",
  );
  const [email, setEmail] = useState<string>("anna.soft.dev@gmail.com");
  const [linkedin, setLinkedin] = useState<string>("://linkedin.com");
  const [github, setGithub] = useState<string>("://github.com");
  const [summary, setSummary] = useState<string>(
    "Frontend-focused developer with a strong product mindset and hands-on experience building and improving user-facing applications using React, TypeScript, and React Native. Specializes in translating complex streaming data pipelines into intuitive analytics interfaces and dashboards. Focuses on creating fast, responsive, and performance-optimized user interfaces where complex logic is turned into clear user workflows.",
  );

  const [frontendSkills, setFrontendSkills] = useState<string>(
    "React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3, UI/UX implementation, component libraries, Recharts, Chart.js",
  );
  const [backendSkills, setBackendSkills] = useState<string>(
    "REST APIs, Node.js, C#/.NET, API integration, data flow design, WebSockets parsing",
  );
  const [productSkills, setProductSkills] = useState<string>(
    "Form-heavy applications, usability improvements, dashboard user flows, state management, complex JSON payloads",
  );
  const [toolsSkills, setToolsSkills] = useState<string>(
    "Git, GitHub workflows, CI/CD pipelines, Expo, Figma configurations, Cursor, Claude",
  );

  const [experience, setExperience] =
    useState<WorkExperience[]>(initialExperience);
  const [projects, setProjects] = useState<ProjectHighlight[]>(initialProjects);
  const [courses, setCourses] = useState<TrainingCourse[]>(initialCourses);
  const [education, setEducation] = useState<EducationItem[]>(initialEducation);

  const handleExpHeaderChange = (
    id: string,
    field: keyof Omit<WorkExperience, "id" | "bullets">,
    value: string,
  ) => {
    setExperience((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const handleExpBulletChange = (id: string, index: number, value: string) => {
    setExperience((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const updatedBullets = [...item.bullets];
        updatedBullets[index] = value;
        return { ...item, bullets: updatedBullets };
      }),
    );
  };

  const handleProjHeaderChange = (
    id: string,
    field: "title" | "role",
    value: string,
  ) => {
    setProjects((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const handleProjBulletChange = (id: string, index: number, value: string) => {
    setProjects((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const updatedBullets = [...item.bullets];
        updatedBullets[index] = value;
        return { ...item, bullets: updatedBullets };
      }),
    );
  };

  const handleCourseChange = (
    id: string,
    field: keyof TrainingCourse,
    value: string,
  ) => {
    setCourses((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const handleEducationChange = (
    id: string,
    field: keyof EducationItem,
    value: string,
  ) => {
    setEducation((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://placeholder.com";
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4 font-sans antialiased text-slate-800">
      <div className="no-print max-w-4xl mx-auto mb-6 flex justify-between items-center bg-slate-800 p-4 rounded-lg shadow-xl text-white">
        <div>
          <h4 className="font-bold text-sm">💼 LIVE PORTFOLIO ENGINE v4</h4>
          <p className="text-xs text-slate-400">
            Click any text directly on the canvas to customize values live.
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded shadow cursor-pointer">
          📥 PRINT TO PDF
        </button>
      </div>

      <div className="cv-page max-w-4xl mx-auto bg-white p-6 sm:p-12 shadow-2xl border border-slate-200">
        <CvHeader
          name={name}
          setName={setName}
          title={title}
          setTitle={setTitle}
          contactLocation={contactLocation}
          setContactLocation={setContactLocation}
          email={email}
          setEmail={setEmail}
          linkedin={linkedin}
          setLinkedin={setLinkedin}
          github={github}
          setGithub={setGithub}
          handleImageError={handleImageError}
        />
        <SummarySection summary={summary} setSummary={setSummary} />
        <SkillsSection
          frontendSkills={frontendSkills}
          setFrontendSkills={setFrontendSkills}
          backendSkills={backendSkills}
          setBackendSkills={setBackendSkills}
          productSkills={productSkills}
          setProductSkills={setProductSkills}
          toolsSkills={toolsSkills}
          setToolsSkills={setToolsSkills}
        />
        <ExperienceSection
          experience={experience}
          handleExpHeaderChange={handleExpHeaderChange}
          handleExpBulletChange={handleExpBulletChange}
        />
        <ProjectsSection
          projects={projects}
          handleProjHeaderChange={handleProjHeaderChange}
          handleProjBulletChange={handleProjBulletChange}
        />
        <CoursesSection
          courses={courses}
          handleCourseChange={handleCourseChange}
        />
        <EducationSection
          education={education}
          handleEducationChange={handleEducationChange}
        />
        <LanguagesSection />
      </div>
    </div>
  );
}
