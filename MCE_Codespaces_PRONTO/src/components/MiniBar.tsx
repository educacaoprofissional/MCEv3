interface Props {
  value: number;
  max?: number;
  color?: string;
  height?: number;
}

function getColor(pct: number) {
  if (pct >= 85) return '#f87171';
  if (pct >= 65) return '#fbbf24';
  return '#4ade80';
}

export default function MiniBar({ value, max = 100, color, height = 6 }: Props) {
  const pct = Math.min(100, (value / max) * 100);
  const c = color ?? getColor(pct);
  return (
    <div style={{ width: '100%', height, background: 'rgba(255,255,255,0.06)', borderRadius: 99, overflow: 'hidden' }}>
      <div style={{
        height: '100%', width: `${pct}%`,
        background: c,
        borderRadius: 99,
        transition: 'width 0.5s ease',
        opacity: 0.85,
      }} />
    </div>
  );
}
