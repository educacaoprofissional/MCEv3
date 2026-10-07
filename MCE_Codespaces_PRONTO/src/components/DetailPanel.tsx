import type { Computer } from '../data/computers';
import StatusBadge from './StatusBadge';
import MiniBar from './MiniBar';

interface Props {
  computer: Computer | null;
  onClose: () => void;
}

function getColor(pct: number) {
  if (pct >= 85) return '#f87171';
  if (pct >= 65) return '#fbbf24';
  return '#4ade80';
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#475569', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        {title}
      </div>
      {children}
    </div>
  );
}

export default function DetailPanel({ computer: c, onClose }: Props) {
  if (!c) return null;

  const cpuColor  = getColor(c.cpu);
  const ramColor  = getColor((c.ram / c.ramTotal) * 100);
  const diskColor = getColor(c.disk);

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', justifyContent: 'flex-end', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="slide-in"
        onClick={e => e.stopPropagation()}
        style={{
          width: 360, height: '100%',
          background: '#111520',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          overflowY: 'auto',
          display: 'flex', flexDirection: 'column',
          boxShadow: '-20px 0 50px rgba(0,0,0,0.5)',
        }}
      >
        {/* Header */}
        <div style={{ padding: '22px 22px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#f1f5f9', letterSpacing: '-0.02em' }}>{c.name}</div>
              <div style={{ fontSize: 12, color: '#475569', marginTop: 3, fontFamily: 'JetBrains Mono, monospace' }}>{c.ip} · {c.os}</div>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)',
                color: '#94a3b8', borderRadius: 8, width: 32, height: 32,
                cursor: 'pointer', fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.12s',
              }}
              onMouseEnter={e => { (e.currentTarget).style.background = 'rgba(255,255,255,0.1)'; (e.currentTarget).style.color = '#f1f5f9'; }}
              onMouseLeave={e => { (e.currentTarget).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget).style.color = '#94a3b8'; }}
            >
              ✕
            </button>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <StatusBadge status={c.status} showLabel />
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              background: c.working ? 'rgba(74,222,128,0.09)' : 'rgba(248,113,113,0.09)',
              border: `1px solid ${c.working ? 'rgba(74,222,128,0.22)' : 'rgba(248,113,113,0.22)'}`,
              borderRadius: 20, padding: '4px 11px',
              fontSize: 12, fontWeight: 600,
              color: c.working ? '#4ade80' : '#f87171',
            }}>
              {c.working ? 'Funcionando' : 'Com defeito'}
            </span>
          </div>
        </div>

        <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 22 }}>

          {/* Informações */}
          <Section title="Informações">
            <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
              {[
                { label: 'Usuário', value: c.user ?? 'Nenhum usuário ativo' },
                { label: 'Sistema operacional', value: c.os },
                { label: 'Tempo ligado', value: c.uptime },
                { label: 'Última atividade', value: c.lastSeen },
                { label: 'Laboratório', value: c.room.replace('-', ' ').toUpperCase() },
              ].map((row, i, arr) => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <span style={{ fontSize: 12, color: '#64748b' }}>{row.label}</span>
                  <span style={{ fontSize: 12, color: '#cbd5e1', fontWeight: 500 }}>{row.value}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Desempenho */}
          {c.status !== 'offline' && (
            <Section title="Desempenho">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { label: 'CPU', val: c.cpu, max: 100, unit: `${c.cpu}%`, color: cpuColor },
                  { label: 'Memória RAM', val: c.ram, max: c.ramTotal, unit: `${c.ram} / ${c.ramTotal} GB`, color: ramColor },
                  { label: 'Disco', val: c.disk, max: 100, unit: `${c.disk}%`, color: diskColor },
                ].map(m => (
                  <div key={m.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
                      <span style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>{m.label}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: m.color, fontFamily: 'JetBrains Mono, monospace' }}>{m.unit}</span>
                    </div>
                    <MiniBar value={m.val} max={m.max} height={7} color={m.color} />
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Teclado */}
          <Section title="Teclado">
            {c.missingKeys.length === 0 ? (
              <div style={{ background: 'rgba(74,222,128,0.07)', border: '1px solid rgba(74,222,128,0.18)', borderRadius: 10, padding: '11px 14px', fontSize: 13, color: '#4ade80', fontWeight: 500 }}>
                Nenhuma tecla faltando
              </div>
            ) : (
              <div>
                <div style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.18)', borderRadius: 10, padding: '10px 14px', fontSize: 13, color: '#fbbf24', marginBottom: 10, fontWeight: 500 }}>
                  {c.missingKeys.length} tecla{c.missingKeys.length > 1 ? 's' : ''} faltando — reposição pendente
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {c.missingKeys.map(k => (
                    <span key={k} style={{
                      fontSize: 12, fontWeight: 600, fontFamily: 'JetBrains Mono, monospace',
                      background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.25)',
                      color: '#fbbf24', borderRadius: 7, padding: '4px 10px',
                    }}>{k}</span>
                  ))}
                </div>
              </div>
            )}
          </Section>

          {/* Alertas */}
          {c.alerts.length > 0 && (
            <Section title="Alertas">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {c.alerts.map((a, i) => (
                  <div key={i} style={{ background: 'rgba(248,113,113,0.07)', border: '1px solid rgba(248,113,113,0.18)', borderRadius: 9, padding: '9px 14px', fontSize: 13, color: '#fca5a5', fontWeight: 500 }}>
                    {a}
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Ações */}
          <Section title="Ações">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[
                { label: 'Controle remoto', color: '#60a5fa' },
                { label: 'Enviar aviso', color: '#34d399' },
                { label: 'Reiniciar', color: '#fbbf24' },
                { label: 'Desligar', color: '#f87171' },
              ].map(a => (
                <button
                  key={a.label}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    borderRadius: 9, padding: '10px',
                    cursor: 'pointer', color: '#94a3b8',
                    fontSize: 12, fontWeight: 500,
                    transition: 'all 0.12s', fontFamily: 'Inter, sans-serif',
                    textAlign: 'center',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget).style.background = `${a.color}12`;
                    (e.currentTarget).style.borderColor = `${a.color}44`;
                    (e.currentTarget).style.color = a.color;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget).style.background = 'rgba(255,255,255,0.04)';
                    (e.currentTarget).style.borderColor = 'rgba(255,255,255,0.09)';
                    (e.currentTarget).style.color = '#94a3b8';
                  }}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
