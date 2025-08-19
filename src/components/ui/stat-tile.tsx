import { ReactNode } from "react";

interface StatTileProps {
  label: string;
  value: string;
  foot?: string;
}

export function StatTile({ label, value, foot }: StatTileProps) {
  return (
    <div className="rounded-2xl border border-[#2C3D58] bg-[#122339]/92 px-6 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <div className="text-3xl font-semibold text-[#F2F6FA]">{value}</div>
      <div className="text-sm text-[#93A1B5] mt-1">{label}</div>
      {foot && <div className="text-xs text-[#93A1B5] mt-2">{foot}</div>}
    </div>
  );
}