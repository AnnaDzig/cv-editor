import type { Course } from "../data";
import SectionTitle from "./SectionTitle";

type CoursesSectionProps = {
  courses: Course[];
};

export default function CoursesSection({ courses }: CoursesSectionProps) {
  return (
    <section className="break-inside-avoid">
      <SectionTitle>Schools & Courses</SectionTitle>

      <div className="mt-2 space-y-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="grid grid-cols-[1fr_auto] gap-4 text-[14px] leading-tight">
            <div>
              <p className="font-bold text-neutral-900">
                {course.school}
                {course.location ? `, ${course.location}` : ""}
              </p>
              <p>{course.title}</p>
            </div>

            <p className="font-semibold text-neutral-800">{course.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
