import React from "react";

type Logo = {
  alt: string;
  src: string;
};

interface LogoStripProps {
  logos: Logo[];
  className?: string;
  rowClassName?: string;
  maxHeight?: number;
}

export const LogoStrip: React.FC<LogoStripProps> = ({
  logos,
  className,
  rowClassName,
  maxHeight = 28,
}) => {
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
              style={{ maxHeight, height: maxHeight }}
              className="object-contain w-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoStrip;


