export function Pipeline() {
  const steps = ["Event+RGB", "Edge AI", "Models", "Portal", "MES/ERP"];
  
  return (
    <div className="flex items-center gap-4 justify-center flex-wrap">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-4">
          <div className="relative rounded-xl border border-[#2C3D58] bg-[#122339]/92 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <span className="text-sm text-[#F2F6FA] font-medium">{s}</span>
            <span className="absolute inset-0 rounded-xl ring-1 ring-[#00D1C1]/0 animate-[pulse_2.6s_ease_infinite]" />
          </div>
          {i < steps.length - 1 && (
            <div className="h-[2px] w-8 bg-gradient-to-r from-[#00D1C1]/60 to-[#00D1C1]/0" />
          )}
        </div>
      ))}
    </div>
  );
}