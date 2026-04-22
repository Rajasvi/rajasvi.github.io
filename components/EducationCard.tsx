import Image from "next/image";
import type { EducationItem } from "@/data/education";

export default function EducationCard({ item }: { item: EducationItem }) {
  return (
    <div className="flex gap-6 py-5 border-b border-gray-100 last:border-0">
      <div className="flex-shrink-0 w-[110px] flex items-start justify-center pt-1">
        <a href={item.institutionUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src={item.logo}
            alt={item.institution}
            width={item.logoWidth}
            height={60}
            className="object-contain max-h-[50px] w-auto"
            unoptimized
          />
        </a>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-0.5">
          <a
            href={item.institutionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray-900 hover:text-accent transition-colors leading-snug"
          >
            {item.institution}
          </a>
          <span className="text-sm text-gray-500 whitespace-nowrap">{item.period}</span>
        </div>
        <p className="text-sm text-gray-700 mb-0.5">
          <span className="text-gray-500">{item.degree}</span>
          {" · "}
          {item.field}
          {item.major && (
            <span className="text-gray-500"> &mdash; {item.major}</span>
          )}
        </p>
        {item.gpa && (
          <p className="text-xs text-gray-500 mb-1">
            GPA: <strong className="text-gray-700">{item.gpa}</strong>{" · "}{item.location}
          </p>
        )}
        {item.coursework && (
          <p className="text-xs text-gray-500 leading-relaxed">
            <span className="font-medium">Coursework: </span>
            {item.coursework.join(" · ")}
          </p>
        )}
      </div>
    </div>
  );
}
