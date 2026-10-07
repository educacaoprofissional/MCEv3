import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { STATS, COMPUTERS } from "../data/mockData";
import Badge from "../components/ui/Badge";

interface DashboardPageProps {
  onNavigate: (page: string, filter?: string) => void;
}

const pieData = [
  { name: "Funcionando", value: STATS.working, color: "#16a34a" },
  { name: "Com defeito", value: STATS.defective, color: "#dc2626" },
];

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: number; color: string }) {
  return (
    <div style={{
      background: "#fff", borderRadius: "12px", padding: "20px 24px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6",
      display: "flex", alignItems: "center", gap: "16px",
    }}>
      <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", color, flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: "28px", fontWeight: 800, color: "#111827", lineHeight: 1 }}>{value.toLocaleString("pt-BR")}</div>
        <div style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>{label}</div>
      </div>
    </div>
  );
}

function CategoryBar({ label, total, working, defective, missingKeys }: { label: string; total: number; working: number; defective: number; missingKeys: number }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontWeight: 600, fontSize: "14px", color: "#111827" }}>{label}</span>
        <span style={{ fontSize: "13px", color: "#6b7280" }}>{total} total</span>
      </div>
      <div style={{ display: "flex", gap: "4px", height: "8px", borderRadius: "4px", overflow: "hidden", background: "#f3f4f6" }}>
        <div style={{ width: `${(working / total) * 100}%`, background: "#16a34a" }} />
        <div style={{ width: `${(defective / total) * 100}%`, background: "#dc2626" }} />
      </div>
      <div style={{ display: "flex", gap: "16px", marginTop: "6px", fontSize: "12px", color: "#6b7280" }}>
        <span style={{ color: "#16a34a", fontWeight: 500 }}>{working} funcionando</span>
        <span style={{ color: "#dc2626", fontWeight: 500 }}>{defective} com defeito</span>
        <span style={{ color: "#d97706", fontWeight: 500 }}>{missingKeys} teclas faltando</span>
      </div>
    </div>
  );
}

export default function DashboardPage({ onNavigate }: DashboardPageProps) {
  const recent = COMPUTERS.slice(0, 5);

  return (
    <div className="fade-in" style={{ padding: "24px", overflow: "auto", flex: 1 }}>
      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px", marginBottom: "24px" }}>
        <StatCard
          label="Total de Computadores" value={STATS.total} color="#2563eb"
          icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>}
        />
        <StatCard
          label="Funcionando" value={STATS.working} color="#16a34a"
          icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="20 6 9 17 4 12" /></svg>}
        />
        <StatCard
          label="Com Defeito" value={STATS.defective} color="#dc2626"
          icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>}
        />
        <StatCard
          label="Com Teclas Faltando" value={STATS.missingKeys} color="#d97706"
          icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><line x1="6" y1="11" x2="6" y2="11" strokeLinecap="round" strokeWidth="3" /><line x1="10" y1="11" x2="10" y2="11" strokeLinecap="round" strokeWidth="3" /><line x1="14" y1="11" x2="14" y2="11" strokeLinecap="round" strokeWidth="3" /></svg>}
        />
      </div>

      {/* Chart row */}
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "16px", marginBottom: "24px" }}>
        {/* Donut chart */}
        <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "16px", color: "#111827" }}>Status dos Computadores</h3>
          <div style={{ height: "220px", position: "relative" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={65} outerRadius={95} paddingAngle={3} dataKey="value">
                  {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip formatter={(v) => [`${v} computadores`, ""]} />
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <Legend formatter={(v, entry: any) => `${v}: ${entry?.payload?.value ?? 0} (${Math.round(((entry?.payload?.value ?? 0) / (STATS.working + STATS.defective)) * 100)}%)`} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
              textAlign: "center", pointerEvents: "none",
            }}>
              <div style={{ fontSize: "28px", fontWeight: 800, color: "#111827" }}>{STATS.working + STATS.defective}</div>
              <div style={{ fontSize: "11px", color: "#6b7280" }}>classificados</div>
            </div>
          </div>
        </div>

        {/* Category distribution */}
        <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "20px", color: "#111827" }}>Distribuição por Categoria</h3>
          <CategoryBar label="Técnico" total={STATS.tecnico.total} working={STATS.tecnico.working} defective={STATS.tecnico.defective} missingKeys={STATS.tecnico.missingKeys} />
          <CategoryBar label="Básicos" total={STATS.basicos.total} working={STATS.basicos.working} defective={STATS.basicos.defective} missingKeys={STATS.basicos.missingKeys} />
          <div style={{ background: "#fffbeb", border: "1px solid #fef3c7", borderRadius: "8px", padding: "12px" }}>
            <div style={{ fontWeight: 600, fontSize: "14px", color: "#92400e", marginBottom: "4px" }}>Não classificados: {STATS.unclassified}</div>
            <div style={{ fontSize: "12px", color: "#92400e", lineHeight: 1.5 }}>
              Estes computadores ainda não foram classificados em uma categoria.
            </div>
          </div>
        </div>
      </div>

      {/* Attention section */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", paddingLeft: "12px", borderLeft: "3px solid #d97706" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#111827" }}>Requer Atenção</h3>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" }}>
          {[
            { label: "Com Defeito", value: STATS.defective, color: "#dc2626", bg: "#fee2e2", filter: "defective" },
            { label: "Teclas Faltando", value: STATS.missingKeys, color: "#d97706", bg: "#fef3c7", filter: "missing" },
            { label: "Não Classificados", value: STATS.unclassified, color: "#6b7280", bg: "#f3f4f6", filter: "unclassified" },
          ].map(item => (
            <button
              key={item.filter}
              onClick={() => onNavigate("computers", item.filter)}
              style={{
                background: "#fff", borderRadius: "12px", padding: "20px", border: `1px solid ${item.color}30`,
                cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "all 0.15s",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)"; }}
            >
              <div style={{ fontSize: "32px", fontWeight: 800, color: item.color, marginBottom: "4px" }}>{item.value}</div>
              <div style={{ fontSize: "14px", color: "#374151", fontWeight: 500 }}>{item.label}</div>
              <div style={{ marginTop: "8px", fontSize: "12px", color: item.color, fontWeight: 500 }}>Ver computadores →</div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent table */}
      <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6", overflow: "hidden" }}>
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#111827" }}>Computadores Recentes</h3>
          <button onClick={() => onNavigate("computers")} style={{ background: "none", border: "none", color: "#2563eb", fontSize: "13px", cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}>
            Ver todos os computadores →
          </button>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <thead>
            <tr style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
              {["Categoria", "Status", "Teclas", "Última verificação"].map(h => (
                <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontWeight: 600, fontSize: "13px", color: "#374151" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recent.map((c, i) => (
              <tr key={c.id} style={{ borderBottom: "1px solid #f3f4f6", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                <td style={{ padding: "10px 16px", color: "#374151" }}>{c.category}</td>
                <td style={{ padding: "10px 16px" }}>
                  <Badge variant={c.status === "Funcionando" ? "success" : "danger"}>{c.status}</Badge>
                </td>
                <td style={{ padding: "10px 16px", color: c.missingKeys > 0 ? "#d97706" : "#374151" }}>
                  {c.missingKeys > 0 ? `${c.missingKeys} faltando` : "Completo"}
                </td>
                <td style={{ padding: "10px 16px", color: "#6b7280", fontSize: "13px" }}>{c.lastCheck}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
