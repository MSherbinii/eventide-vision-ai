import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Area, AreaChart } from 'recharts';

const marketData = [
  { x: 2024, y: 20.38 },
  { x: 2025, y: 22.9 },
  { x: 2026, y: 25.7 },
  { x: 2027, y: 28.6 },
  { x: 2028, y: 31.6 },
  { x: 2029, y: 34.6 },
  { x: 2030, y: 41.74 }
];

export function MarketAreaChart() {
  return (
    <div className="w-full h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={marketData}>
          <defs>
            <linearGradient id="marketFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.35}/>
              <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0.05}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 35% / 0.35)" />
          <XAxis dataKey="x" stroke="hsl(var(--foreground) / 0.7)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="hsl(var(--foreground) / 0.7)" fontSize={12} tickLine={false} axisLine={false} domain={[0, 'auto']} unit="B" tickFormatter={(value) => `$${value}B`} />
          <Tooltip formatter={(v) => [`$${typeof v === 'number' ? v.toFixed(2) : v}B`, 'Market Size']} contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '12px', color: 'hsl(var(--foreground))' }} />
          <Area type="monotone" dataKey="y" stroke="hsl(var(--accent))" fillOpacity={1} fill="url(#marketFill)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
      <div className="text-center mt-2">
        <p className="text-xs text-muted-foreground">Source: Grand View Research (2025)</p>
      </div>
    </div>
  );
}