import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

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
        <LineChart data={marketData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 25% 18% / 0.5)" />
          <XAxis 
            dataKey="x" 
            stroke="hsl(var(--muted))" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="hsl(var(--muted))" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
            domain={[0, 'auto']} 
            unit="B"
            tickFormatter={(value) => `$${value}B`}
          />
          <Tooltip 
            formatter={(v) => [`$${typeof v === 'number' ? v.toFixed(2) : v}B`, 'Market Size']} 
            contentStyle={{ 
              background: 'hsl(var(--card))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '12px',
              color: 'hsl(var(--foreground))'
            }}
          />
          <Line
            type="monotone"
            dataKey="y"
            stroke="hsl(var(--accent))"
            strokeWidth={3}
            dot={{ r: 2, fill: 'hsl(var(--accent))' }}
            activeDot={{ r: 4, fill: 'hsl(var(--accent))' }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-center mt-2">
        <p className="text-xs text-muted-foreground">Source: Grand View Research (2025)</p>
      </div>
    </div>
  );
}