import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const marketData = [
  { year: '2024', value: 20.38 },
  { year: '2025', value: 22.6 },
  { year: '2026', value: 25.0 },
  { year: '2027', value: 28.0 },
  { year: '2028', value: 32.0 },
  { year: '2029', value: 36.0 },
  { year: '2030', value: 41.74 }
];

export function MarketAreaChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={marketData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="marketGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#2C3D58" opacity={0.3} />
          <XAxis 
            dataKey="year" 
            stroke="#93A1B5" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#93A1B5" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}B`}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#0EA5E9"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#marketGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="text-center mt-2">
        <p className="text-xs text-[#93A1B5]">Source: Grand View Research (2025)</p>
      </div>
    </div>
  );
}