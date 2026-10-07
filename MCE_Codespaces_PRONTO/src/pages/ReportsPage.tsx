import React from "react";
import {
  PieChart, Pie, Cell, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { STATS } from "../data/mockData";
import Button from "../components/ui/Button";

interface ReportsPageProps {
  onShowToast: (msg: string, type: "success" | "error") => void;
}

const pieData = [
  { name: "Funcionando", value: STATS.working, color: "#16a34a" },
  { name: "Com defeito", value: STATS.defective, color: "#dc2626" },
];

const categoryData = [
  { name: "Técnico", total: 156, funcionando: 143, defeito: 13 },
  { name: "Grade Normal", total: 60, funcionando: 48, defeito: 12 },
  { name: "Não classif.", total: 80, funcionando: 0, defeito: 0 },
];

const problemsData = [
  { name: "Teclas faltando", value: 168 },
  { name: "Não liga", value: 6 },
  { name: "Tela", value: 4 },
  { name: "HD defeituoso", value: 3 },
  { name: "Lentidão", value: 8 },
  { name: "Outros", value: 5 },
];

const maintenanceData = [
  { month: "Set", value: 3 },
  { month: "Out", value: 5 },
  { month: "Nov", value: 4 },
  { month: "Dez", value: 8 },
  { month: "Jan", value: 10 },
];

const cardStyle: React.CSSProperties = {
  background: "#fff", borderRadius: "12px", padding: "20px",
  boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6",
};

export default function ReportsPage({ onShowToast }: ReportsPageProps) {
  return (
    <div className="fade-in" style={{ padding: "24px", overflow: "auto", flex: 1 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
        <div>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#111827" }}>Relatórios</h2>
          <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>Análise visual dos dados do sistema</p>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <Button variant="secondary" size="sm" onClick={() => onShowToast("Exportando relatório PDF...", "success")}>Exportar PDF</Button>
          <Button variant="secondary" size="sm" onClick={() => onShowToast("Exportando relatório Excel...", "success")}>Exportar Excel</Button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        {/* Donut */}
        <div style={cardStyle}>
          <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "16px", color: "#111827" }}>Status dos Computadores</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={3} dataKey="value">
                {pieData.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip formatter={(v) => [`${v}`, ""]} />
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Legend formatter={(v, e: any) => `${v}: ${e?.payload?.value ?? 0}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar: category */}
        <div style={cardStyle}>
          <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "16px", color: "#111827" }}>Computadores por Categoria</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={categoryData} margin={{ top: 0, right: 16, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="funcionando" name="Funcionando" fill="#16a34a" radius={[4, 4, 0, 0]} />
              <Bar dataKey="defeito" name="Com defeito" fill="#dc2626" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar: problems */}
        <div style={cardStyle}>
          <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "16px", color: "#111827" }}>Problemas Mais Comuns</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={problemsData} layout="vertical" margin={{ top: 0, right: 16, bottom: 0, left: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" name="Ocorrências" fill="#2563eb" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line: maintenances */}
        <div style={cardStyle}>
          <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "16px", color: "#111827" }}>Manutenções por Mês</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={maintenanceData} margin={{ top: 0, right: 16, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="value" name="Manutenções" stroke="#2563eb" strokeWidth={2} dot={{ fill: "#2563eb", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
