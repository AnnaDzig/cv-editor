import type { CvData } from "../data";

type CvHeaderProps = {
  data: CvData;
};

export default function CvHeader({ data }: CvHeaderProps) {
  return (
    <header className="relative mb-4 flex min-h-[145px] items-center bg-[#d9d9d9] pl-[185px] pr-8">
      <div className="absolute left-8 top-1/2 h-[150px] w-[150px] -translate-y-1/2 overflow-hidden rounded-full border-[10px] border-white bg-white shadow-sm">
        <img
          src={data.photoUrl}
          alt={data.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="pt-1 pl-2">
        <p className="text-[20px] font-semibold tracking-[0.12em] text-[#173955]">
          {data.name}
        </p>

        <h1 className="mt-1 text-[34px] font-extrabold leading-none tracking-[0.08em] text-[#173955]">
          {data.title}
        </h1>

        <div className="mt-3 space-y-0.5 text-[12px] font-bold leading-tight text-[#173955]">
          <p>{data.location}</p>
          <p>
            Email:{" "}
            <a href={`mailto:${data.email}`} className="underline">
              {data.email}
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href={data.linkedIn} className="underline">
              {data.linkedIn}
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href={data.github} className="underline">
              {data.github}
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}
