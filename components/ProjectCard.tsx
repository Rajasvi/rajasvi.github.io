import Image from "next/image";
import type { ProjectItem } from "@/data/projects";

export default function ProjectCard({ item }: { item: ProjectItem }) {
  return (
    <div className="flex gap-5 py-5 border-b border-gray-100 last:border-0">
      <div className="flex-shrink-0 w-[130px] flex items-start justify-center pt-1">
        <Image
          src={item.image}
          alt={item.title}
          width={item.imageWidth}
          height={100}
          className="object-contain rounded max-h-[90px] w-auto"
          unoptimized
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
          <span className="font-semibold text-gray-900 leading-snug">{item.title}</span>
          <span className="text-sm text-gray-500 whitespace-nowrap">{item.period}</span>
        </div>
        <p className="text-xs text-gray-400 mb-1">
          <em>{item.tech}</em>
          {item.links.length > 0 && (
            <>
              {" · "}
              {item.links.map((link, i) => (
                <span key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    [{link.label}]
                  </a>
                  {i < item.links.length - 1 && " "}
                </span>
              ))}
            </>
          )}
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}
