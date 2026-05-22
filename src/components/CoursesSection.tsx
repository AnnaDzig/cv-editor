import React from "react";
import type { TrainingCourse } from "../data";

interface CoursesSectionProps {
  courses: TrainingCourse[];
  handleCourseChange: (
    id: string,
    field: keyof TrainingCourse,
    value: string,
  ) => void;
}

export default function CoursesSection({
  courses,
  handleCourseChange,
}: CoursesSectionProps) {
  return (
    <div className="mb-5">
      <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2">
        Schools & Courses
      </h3>
      <div className="space-y-1.5 text-xs text-slate-600">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex justify-between items-baseline gap-2">
            <div className="flex gap-1 items-center flex-1">
              <span>•</span>
              <input
                type="text"
                value={course.title}
                onChange={(e) =>
                  handleCourseChange(course.id, "title", e.target.value)
                }
                className="font-bold text-slate-800 bg-transparent focus:outline-none w-1/3"
              />
              <span className="text-slate-400">–</span>
              <input
                type="text"
                value={course.provider}
                onChange={(e) =>
                  handleCourseChange(course.id, "provider", e.target.value)
                }
                className="text-slate-700 bg-transparent focus:outline-none w-1/3"
              />
              <input
                type="text"
                value={course.location}
                onChange={(e) =>
                  handleCourseChange(course.id, "location", e.target.value)
                }
                className="text-slate-400 italic bg-transparent focus:outline-none w-1/4"
              />
            </div>
            <input
              type="text"
              value={course.timeline}
              onChange={(e) =>
                handleCourseChange(course.id, "timeline", e.target.value)
              }
              className="text-slate-400 text-right focus:outline-none w-32"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
