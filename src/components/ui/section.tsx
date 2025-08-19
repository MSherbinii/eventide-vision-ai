import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="max-w-[1180px] mx-auto pt-16 pb-14 px-6">
      {title && (
        <h2 className="text-[40px] leading-[48px] text-[#F2F6FA] font-semibold tracking-[-0.01em]">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-2 text-[18px] leading-[28px] text-[#CBD5E1]">
          {subtitle}
        </p>
      )}
      <div className="mt-8 grid gap-6">{children}</div>
    </section>
  );
}