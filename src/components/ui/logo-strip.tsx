import React from "react";

type Logo = {
  alt: string;
  src: string;
  height?: number;
};

interface LogoStripProps {
  logos: Logo[];
  className?: string;
  rowClassName?: string;
  maxHeight?: number;
  grayscale?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const LogoStrip: React.FC<LogoStripProps> = ({
  logos,
  className,
  rowClassName,
  maxHeight = 28,
  grayscale = true,
  size = 'md',
}) => {
  const sizeClass = size === 'sm' ? 'h-5 md:h-6' : size === 'lg' ? 'h-7 md:h-8' : 'h-6 md:h-7';
  const fxClass = grayscale
    ? 'grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition'
    : 'opacity-100 transition';
  return (
    <div className={"w-full " + (className ?? "")}>
      <div
        className={
          "flex flex-wrap items-center justify-center gap-x-6 gap-y-3 opacity-70 hover:opacity-100 transition-opacity " +
          (rowClassName ?? "")
        }
      >
        {logos.map((logo, idx) => (
          <div key={idx} className="shrink-0">
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ maxHeight, height: logo.height ?? undefined }}
              className={`object-contain w-auto ${sizeClass} ${fxClass}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoStrip;


