import React from "react";

interface CvHeaderProps {
  name: string;
  setName: (v: string) => void;
  title: string;
  setTitle: (v: string) => void;
  contactLocation: string;
  setContactLocation: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  linkedin: string;
  setLinkedin: (v: string) => void;
  github: string;
  setGithub: (v: string) => void;
  handleImageError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export default function CvHeader({
  name,
  setName,
  title,
  setTitle,
  contactLocation,
  setContactLocation,
  email,
  setEmail,
  linkedin,
  setLinkedin,
  github,
  setGithub,
  handleImageError,
}: CvHeaderProps) {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between items-center sm:items-start border-b-2 border-slate-300 pb-5 mb-5 gap-6">
      <div className="space-y-1.5 w-full">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full text-3xl font-bold text-slate-900 bg-transparent focus:outline-none"
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-base font-semibold text-sky-800 bg-transparent focus:outline-none"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-500 font-medium">
          <input
            type="text"
            value={contactLocation}
            onChange={(e) => setContactLocation(e.target.value)}
            className="bg-transparent focus:outline-none border-b border-transparent hover:border-slate-100 w-full"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent focus:outline-none border-b border-transparent hover:border-slate-100 w-full"
          />
          <input
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="bg-transparent focus:outline-none border-b border-transparent hover:border-slate-100 w-full"
          />
          <input
            type="text"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="bg-transparent focus:outline-none border-b border-transparent hover:border-slate-100 w-full"
          />
        </div>
      </div>
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-slate-200 shadow overflow-hidden bg-slate-50 flex items-center justify-center flex-shrink-0">
        <img
          src="/profile.jpg"
          alt="Avatar"
          className="w-full h-full object-cover object-top"
          onError={handleImageError}
        />
      </div>
    </div>
  );
}
