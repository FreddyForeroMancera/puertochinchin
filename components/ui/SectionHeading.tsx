import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, children }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="flex items-center gap-4">
        <div className="h-px w-8 bg-[#8a1912] sm:w-16" />
        <div className="flex gap-1 text-[#8a1912]">
          <span className="text-[10px]">★</span>
          <span className="text-[14px]">★</span>
          <span className="text-[10px]">★</span>
        </div>
        <div className="h-px w-8 bg-[#8a1912] sm:w-16" />
      </div>
      <h2 className="text-3xl font-black uppercase tracking-tight text-[#26201f] sm:text-4xl">
        {title}
      </h2>
      <div className="h-1 w-16 bg-[#8a1912]" />
    </div>
  );
}
