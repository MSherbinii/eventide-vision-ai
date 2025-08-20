import { useState, useRef, useEffect } from "react";

interface VideoCompareProps {
  leftSrc?: string;
  rightSrc?: string;
  leftLabel?: string;
  rightLabel?: string;
}

export default function VideoCompare({
  leftSrc = "https://www.youtube.com/embed/6xOmo7Ikwzk?autoplay=1&mute=1&loop=1",
  rightSrc = "https://www.youtube.com/embed/MjX3z-6n3iA?autoplay=1&mute=1&loop=1",
  leftLabel = "Traditional RGB",
  rightLabel = "Event-based (Prophesee)"
}: VideoCompareProps) {
  const [showAnno, setShowAnno] = useState(true);

  const tile = (label: string, src: string) => (
    <div className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
      <div className="absolute z-10 left-3 top-3 text-xs px-2 py-1 rounded-full bg-black/70 text-white font-medium">{label}</div>
      <div className="aspect-video bg-muted">
        <iframe
          src={src}
          title={label}
          className="w-full h-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {showAnno && (
        <div className="absolute bottom-3 left-3 right-3 bg-black/50 text-white text-xs p-2 rounded">
          {label === "Traditional RGB" ? "Standard frame-based capture" : "Event-driven sparse data"}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-muted-foreground">
          Latency: RGB (ms-scale) vs Event-based <strong>&lt;150 µs @1k lux</strong> (IMX636). Source: Sony/Prophesee.
        </div>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <input 
            type="checkbox" 
            checked={showAnno} 
            onChange={() => setShowAnno(v => !v)}
            className="rounded border-border" 
          />
          Show annotations
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tile(leftLabel, leftSrc)}
        {tile(rightLabel, rightSrc)}
      </div>
    </div>
  );
}