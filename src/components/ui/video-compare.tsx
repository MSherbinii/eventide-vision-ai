import { useState, useRef, useEffect } from "react";

interface VideoCompareProps {
  leftSrc?: string;
  rightSrc?: string;
  leftLabel?: string;
  rightLabel?: string;
}

export default function VideoCompare({
  leftSrc = "/media/frame_rgb_line.mp4",
  rightSrc = "/media/event_line_demo.mp4",
  leftLabel = "Traditional RGB",
  rightLabel = "Event-based (IMX636 demo)"
}: VideoCompareProps) {
  const [showAnno, setShowAnno] = useState(true);
  const leftRef = useRef<HTMLVideoElement>(null);
  const rightRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const sync = () => {
      if (!leftRef.current || !rightRef.current) return;
      const t = leftRef.current.currentTime;
      const d = Math.abs(rightRef.current.currentTime - t);
      if (d > 0.05) rightRef.current.currentTime = t; // simple sync
    };
    const id = setInterval(sync, 250);
    return () => clearInterval(id);
  }, []);

  const tile = (label: string, videoRef: any, src: string) => (
    <div className="relative rounded-2xl border border-[#2C3D58] bg-[#122339]/92 overflow-hidden">
      <div className="absolute z-10 left-3 top-3 text-xs px-2 py-1 rounded-full bg-black/50 text-white">{label}</div>
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        className="w-full h-[360px] object-cover"
        poster="/media/poster.jpg"
      />
      {showAnno && (
        <img
          src="/media/overlay/bbox_overlay.png"
          alt=""
          className="pointer-events-none absolute inset-0 opacity-70"
        />
      )}
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-[#CBD5E1]">
          Latency: RGB (ms-scale) vs Event-based <strong>&lt;100 µs @1000 lux</strong> (IMX636). Source: Sony/Prophesee EVK4.
        </div>
        <label className="flex items-center gap-2 text-sm text-[#CBD5E1]">
          <input 
            type="checkbox" 
            checked={showAnno} 
            onChange={() => setShowAnno(v => !v)}
            className="rounded border-[#2C3D58]" 
          />
          Show annotations
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tile(leftLabel, leftRef, leftSrc)}
        {tile(rightLabel, rightRef, rightSrc)}
      </div>
    </div>
  );
}