interface SectionHeaderProps {
  id: string;
  title: string;
}

export default function SectionHeader({ id, title }: SectionHeaderProps) {
  return (
    <div id={id} className="pt-2 pb-3 border-t border-gray-200 scroll-mt-6">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
        {title}
      </h2>
    </div>
  );
}
