import { useState } from 'react';
import type { Computer } from '../data/computers';
import StatusBadge from './StatusBadge';
import MiniBar from './MiniBar';

interface Props {
  computer: Computer;
  onClick: (c: Computer) => void;
}

export default function ComputerCard({ computer: c, onClick }: Props) {
  const [hovered, setHovered] = useState(false);
  const isOff = c.status === 'offline';

  return (
    <div
      onClick={() => onClick(c)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.13)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 12,
        padding: '14px',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        transform: hovered ? 'translateY(-1px)' : 'none',
        boxShadow: hovered ? '0 6px 20px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      {/* Nome + status */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: '#f1f5f9' }}>{c.name}</span>
        <StatusBadge status={c.status} />
      </div>

      {/* Funcionando */}
      <div style={{ marginBottom: 9 }}>
        <span style={{
          fontSize: 11, fontWeight: 600,
          color: c.working ? '#4ade80' : '#f87171',
          background: c.working ? 'rgba(74,222,128,0.09)' : 'rgba(248,113,113,0.09)',
          border: `1px solid ${c.working ? 'rgba(74,222,128,0.2)' : 'rgba(248,113,113,0.2)'}`,
          borderRadius: 6, padding: '3px 8px', display: 'inline-block',
        }}>
          {c.working ? 'Funcionando' : 'Com defeito'}
        </span>
      </div>

      {/* Usuário */}
      <div style={{ fontSize: 12, color: c.user ? '#94a3b8' : '#475569', marginBottom: 10, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {c.user ?? 'Nenhum usuário ativo'}
      </div>

      {/* Métricas */}
      {!isOff ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {[
            { label: 'CPU', val: c.cpu, max: 100, unit: `${c.cpu}%` },
            { label: 'RAM', val: c.ram, max: c.ramTotal, unit: `${c.ram}/${c.ramTotal} GB` },
          ].map(m => (
            <div key={m.label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 11, color: '#64748b', fontWeight: 500 }}>{m.label}</span>
                <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>{m.unit}</span>
              </div>
              <MiniBar value={m.val} max={m.max} height={5} />
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: 12, color: '#475569' }}>
          Desligado · {c.lastSeen}
        </div>
      )}

      {/* Teclas faltando */}
      {c.missingKeys.length > 0 && (
        <div style={{ marginTop: 10, paddingTop: 9, borderTop: '1px solid rgba(251,191,36,0.12)' }}>
          <div style={{ fontSize: 11, color: '#fbbf24', fontWeight: 600, marginBottom: 5 }}>
            {c.missingKeys.length} tecla{c.missingKeys.length > 1 ? 's' : ''} faltando
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {c.missingKeys.slice(0, 3).map(k => (
              <span key={k} style={{
                fontSize: 10, fontWeight: 600, fontFamily: 'JetBrains Mono, monospace',
                background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.22)',
                color: '#fbbf24', borderRadius: 5, padding: '2px 7px',
              }}>{k}</span>
            ))}
            {c.missingKeys.length > 3 && (
              <span style={{ fontSize: 10, color: '#64748b', alignSelf: 'center' }}>+{c.missingKeys.length - 3}</span>
            )}
          </div>
        </div>
      )}

      {/* Alerta */}
      {c.alerts.filter(a => !a.includes('Teclado')).length > 0 && (
        <div style={{ marginTop: 8, fontSize: 11, color: '#f87171', paddingTop: c.missingKeys.length === 0 ? 8 : 0, borderTop: c.missingKeys.length === 0 ? '1px solid rgba(248,113,113,0.1)' : 'none' }}>
          {c.alerts.find(a => !a.includes('Teclado'))}
        </div>
      )}
    </div>
  );
}
