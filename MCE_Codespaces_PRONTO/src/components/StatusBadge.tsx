import type { ComputerStatus } from '../data/computers';

interface Props {
  status: ComputerStatus;
  showLabel?: boolean;
}

const config = {
  online:  { color: '#4ade80', bg: 'rgba(74,222,128,0.12)', label: 'Online' },
  warning: { color: '#fbbf24', bg: 'rgba(251,191,36,0.12)',  label: 'Atenção' },
  offline: { color: '#f87171', bg: 'rgba(248,113,113,0.12)', label: 'Offline' },
  idle:    { color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', label: 'Inativo' },
};

export default function StatusBadge({ status, showLabel = false }: Props) {
  const { color, bg, label } = config[status];
  if (showLabel) {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: bg, border: `1px solid ${color}44`,
        borderRadius: 20, padding: '4px 10px',
      }}>
        <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: color, display: 'inline-block', flexShrink: 0 }} />
        <span style={{ fontSize: 12, fontWeight: 600, color, fontFamily: 'Inter, sans-serif' }}>{label}</span>
      </span>
    );
  }
  return (
    <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: color, display: 'inline-block', flexShrink: 0, boxShadow: `0 0 6px ${color}` }} />
  );
}
