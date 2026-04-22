import Image from "next/image";
import type { ExperienceItem } from "@/data/experience";

export default function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="flex gap-6 py-5 border-b border-gray-100 last:border-0">
      <div className="flex-shrink-0 w-[110px] flex items-start justify-center pt-1">
        <a href={item.companyUrl} target="_blank" rel="noopener noreferrer">
          {item.logo ? (
            <Image
              src={item.logo}
              alt={item.company}
              width={item.logoWidth}
              height={60}
              className="object-contain max-h-[50px] w-auto"
              unoptimized
            />
          ) : (
            <span className="inline-block text-xs font-semibold text-gray-500 bg-gray-100 rounded px-2 py-1 text-center leading-tight max-w-[100px]">
              {item.company.split(" ")[0]}
            </span>
          )}
        </a>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
          <div>
            <span className="font-semibold text-gray-900">{item.role}</span>
            <span className="text-gray-500"> · </span>
            <a
              href={item.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors font-medium"
            >
              {item.company}
            </a>
          </div>
          <div className="text-sm text-gray-500 sm:text-right whitespace-nowrap">
            {item.period}
          </div>
        </div>
        <p className="text-xs text-gray-400 mb-2">{item.location}</p>
        <ul className="space-y-1.5">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
              <span className="text-gray-300 mt-1 flex-shrink-0">›</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
