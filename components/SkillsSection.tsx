import { skillGroups } from "@/data/skills";

export default function SkillsSection() {
  return (
    <div className="space-y-3 py-2">
      {skillGroups.map((group) => (
        <div key={group.category} className="flex flex-col sm:flex-row sm:items-start gap-2">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-36 flex-shrink-0 pt-0.5">
            {group.category}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
