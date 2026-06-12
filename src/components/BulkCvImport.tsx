import { useState } from "react";
import type {
  Course,
  CvData,
  Education,
  Experience,
  SkillGroup,
} from "../data";

type BulkCvImportProps = {
  data: CvData;
  setData: React.Dispatch<React.SetStateAction<CvData>>;
};

type UnknownRecord = Record<string, unknown>;

function isObject(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(isString);
}

function createId() {
  return crypto.randomUUID();
}

function parseSkillGroups(value: unknown): SkillGroup[] | null {
  if (!Array.isArray(value)) return null;

  const groups: SkillGroup[] = [];

  for (const item of value) {
    if (!isObject(item)) return null;
    if (!isString(item.title)) return null;
    if (!isStringArray(item.items)) return null;

    groups.push({
      id: isString(item.id) ? item.id : createId(),
      title: item.title,
      items: item.items,
    });
  }

  return groups;
}

function parseExperience(value: unknown): Experience[] | null {
  if (!Array.isArray(value)) return null;

  const experience: Experience[] = [];

  for (const item of value) {
    if (!isObject(item)) return null;
    if (!isString(item.company)) return null;
    if (!isString(item.role)) return null;
    if (!isString(item.period)) return null;
    if (!isString(item.location)) return null;
    if (!isStringArray(item.bullets)) return null;

    experience.push({
      id: isString(item.id) ? item.id : createId(),
      company: item.company,
      role: item.role,
      period: item.period,
      location: item.location,
      bullets: item.bullets,
    });
  }

  return experience;
}

function parseCourses(value: unknown): Course[] | null {
  if (!Array.isArray(value)) return null;

  const courses: Course[] = [];

  for (const item of value) {
    if (!isObject(item)) return null;
    if (!isString(item.school)) return null;
    if (!isString(item.title)) return null;
    if (!isString(item.period)) return null;

    courses.push({
      id: isString(item.id) ? item.id : createId(),
      school: item.school,
      title: item.title,
      period: item.period,
      location: isString(item.location) ? item.location : undefined,
    });
  }

  return courses;
}

function parseEducation(value: unknown): Education[] | null {
  if (!Array.isArray(value)) return null;

  const education: Education[] = [];

  for (const item of value) {
    if (!isObject(item)) return null;
    if (!isString(item.school)) return null;
    if (!isString(item.degree)) return null;
    if (!isString(item.period)) return null;

    education.push({
      id: isString(item.id) ? item.id : createId(),
      school: item.school,
      degree: item.degree,
      period: item.period,
      location: isString(item.location) ? item.location : undefined,
    });
  }

  return education;
}

function parseCvUpdate(value: unknown): Partial<CvData> {
  if (!isObject(value)) {
    throw new Error("The pasted CV data must be a JSON object.");
  }

  const update: Partial<CvData> = {};

  if ("fileName" in value) {
    if (!isString(value.fileName))
      throw new Error("fileName must be a string.");
    update.fileName = value.fileName;
  }

  if ("name" in value) {
    if (!isString(value.name)) throw new Error("name must be a string.");
    update.name = value.name;
  }

  if ("title" in value) {
    if (!isString(value.title)) throw new Error("title must be a string.");
    update.title = value.title;
  }

  if ("location" in value) {
    if (!isString(value.location))
      throw new Error("location must be a string.");
    update.location = value.location;
  }

  if ("email" in value) {
    if (!isString(value.email)) throw new Error("email must be a string.");
    update.email = value.email;
  }

  if ("linkedIn" in value) {
    if (!isString(value.linkedIn)) {
      throw new Error("linkedIn must be a string.");
    }

    update.linkedIn = value.linkedIn;
  }

  if ("github" in value) {
    if (!isString(value.github)) throw new Error("github must be a string.");
    update.github = value.github;
  }

  if ("portfolio" in value) {
    if (!isString(value.portfolio)) {
      throw new Error("portfolio must be a string.");
    }

    update.portfolio = value.portfolio;
  }

  if ("photoUrl" in value) {
    if (!isString(value.photoUrl))
      throw new Error("photoUrl must be a string.");
    update.photoUrl = value.photoUrl;
  }

  if ("summary" in value) {
    if (!isString(value.summary)) throw new Error("summary must be a string.");
    update.summary = value.summary;
  }

  if ("skills" in value) {
    const skills = parseSkillGroups(value.skills);

    if (!skills) {
      throw new Error(
        "skills must be an array of objects with title and items.",
      );
    }

    update.skills = skills;
  }

  if ("experience" in value) {
    const experience = parseExperience(value.experience);

    if (!experience) {
      throw new Error(
        "experience must be an array with company, role, period, location and bullets.",
      );
    }

    update.experience = experience;
  }

  if ("courses" in value) {
    const courses = parseCourses(value.courses);

    if (!courses) {
      throw new Error(
        "courses must be an array with school, title, period and optional location.",
      );
    }

    update.courses = courses;
  }

  if ("education" in value) {
    const education = parseEducation(value.education);

    if (!education) {
      throw new Error(
        "education must be an array with school, degree, period and optional location.",
      );
    }

    update.education = education;
  }

  if ("languages" in value) {
    if (!isStringArray(value.languages)) {
      throw new Error("languages must be an array of strings.");
    }

    update.languages = value.languages;
  }

  return update;
}

export default function BulkCvImport({ data, setData }: BulkCvImportProps) {
  const [bulkText, setBulkText] = useState("");

  async function handleCopyCurrentCvJson() {
    const json = JSON.stringify(data, null, 2);

    try {
      await navigator.clipboard.writeText(json);
      alert("Current CV JSON was copied.");
    } catch {
      setBulkText(json);
      alert("Could not copy automatically, so the JSON was inserted here.");
    }
  }

  function handleApplyBulkData() {
    if (!bulkText.trim()) {
      alert("Please paste CV data first.");
      return;
    }

    try {
      const parsedData = JSON.parse(bulkText);
      const cvUpdate = parseCvUpdate(parsedData);

      setData((previousData) => ({
        ...previousData,
        ...cvUpdate,
      }));

      setBulkText("");
      alert("CV data was applied successfully.");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
        return;
      }

      alert("The pasted CV data is not valid.");
    }
  }

  function handleClear() {
    setBulkText("");
  }

  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-neutral-900">
          Paste tailored CV data
        </h2>

        <p className="mt-1 text-sm text-neutral-600">
          Paste JSON data here to update several CV sections at once. You can
          paste a full CV JSON or only selected fields, for example summary,
          skills, experience, courses, education, or languages.
        </p>
      </div>

      <textarea
        value={bulkText}
        onChange={(event) => setBulkText(event.target.value)}
        placeholder='Example: { "summary": "...", "languages": ["English — Fluent"] }'
        className="min-h-48 w-full resize-y rounded-xl border border-neutral-300 p-3 font-mono text-sm outline-none transition focus:border-neutral-700"
      />

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleApplyBulkData}
          className="rounded-xl bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700">
          Apply pasted data
        </button>

        <button
          type="button"
          onClick={handleCopyCurrentCvJson}
          className="rounded-xl border border-neutral-900 px-5 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100">
          Copy current CV as JSON
        </button>

        <button
          type="button"
          onClick={handleClear}
          className="rounded-xl border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100">
          Clear
        </button>
      </div>
    </section>
  );
}
