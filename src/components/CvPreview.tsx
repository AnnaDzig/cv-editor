import type { CvData } from "../data";
import CoursesSection from "./CoursesSection";
import CvHeader from "./CvHeader";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import LanguagesSection from "./LanguagesSection";
import SkillsSection from "./SkillsSection";
import SummarySection from "./SummarySection";

type CvPreviewProps = {
  data: CvData;
};

export default function CvPreview({ data }: CvPreviewProps) {
  return (
    <div className="mx-auto min-h-[1123px] w-[794px] bg-white px-9 py-7 text-neutral-900 shadow-xl print:min-h-0 print:w-full print:shadow-none">
      <CvHeader data={data} />
      <div>
        <h2 className="mt-5 border-b-2 border-neutral-500 pb-1 text-[18px] font-extrabold uppercase tracking-wide text-neutral-800">
          Portfolio:{" "}
          <a href={data.portfolio} className="underline text-[12px]">
            {data.portfolio}
          </a>
        </h2>
      </div>
      <SummarySection summary={data.summary} />
      <SkillsSection skills={data.skills} />
      <ExperienceSection experience={data.experience} />
      <CoursesSection courses={data.courses} />
      <EducationSection education={data.education} />
      <LanguagesSection languages={data.languages} />
    </div>
  );
}
