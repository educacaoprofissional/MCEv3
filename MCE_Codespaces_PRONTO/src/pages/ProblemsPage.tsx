import React, { useState, useMemo } from "react";
import { PROBLEMS, Problem } from "../data/mockData";
import Badge from "../components/ui/Badge";
import Table, { Column } from "../components/ui/Table";

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div style={{ background: "#fff", borderRadius: "12px", padding: "20px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
      <div style={{ fontSize: "28px", fontWeight: 800, color, marginBottom: "4px" }}>{value}</div>
      <div style={{ fontSize: "13px", color: "#6b7280" }}>{label}</div>
    </div>
  );
}

export default function ProblemsPage() {
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  const filtered = useMemo(() => PROBLEMS.filter(p => {
    if (statusFilter && p.status !== statusFilter) return false;
    if (priorityFilter && p.priority !== priorityFilter) return false;
    return true;
  }), [statusFilter, priorityFilter]);

  const total = PROBLEMS.length;
  const critical = PROBLEMS.filter(p => p.priority === "Alta").length;
  const pending = PROBLEMS.filter(p => p.status === "Pendente").length;
  const resolved = PROBLEMS.filter(p => p.status === "Resolvido").length;

  const columns: Column<Problem>[] = [
    { key: "description", header: "Descrição" },
    { key: "priority", header: "Prioridade", sortable: true, render: r => <Badge variant={r.priority === "Alta" ? "danger" : r.priority === "Média" ? "warning" : "info"}>{r.priority}</Badge> },
    { key: "status", header: "Status", render: r => <Badge variant={r.status === "Resolvido" ? "success" : r.status === "Em andamento" ? "warning" : "neutral"}>{r.status}</Badge> },
    { key: "reportedAt", header: "Reportado em", sortable: true },
  ];

  const selectStyle: React.CSSProperties = {
    padding: "8px 12px", borderRadius: "8px", border: "1px solid #e5e7eb",
    fontSize: "14px", color: "#374151", background: "#fff", fontFamily: "inherit",
  };

  return (
    <div className="fade-in" style={{ padding: "24px", overflow: "auto", flex: 1 }}>
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#111827" }}>Problemas</h2>
        <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>Acompanhe e gerencie todos os problemas reportados</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px", marginBottom: "24px" }}>
        <StatCard label="Total de Problemas" value={total} color="#2563eb" />
        <StatCard label="Críticos (Alta)" value={critical} color="#dc2626" />
        <StatCard label="Pendentes" value={pending} color="#d97706" />
        <StatCard label="Resolvidos" value={resolved} color="#16a34a" />
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} style={selectStyle}>
          <option value="">Todos os status</option>
          <option>Pendente</option>
          <option>Em andamento</option>
          <option>Resolvido</option>
        </select>
        <select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)} style={selectStyle}>
          <option value="">Todas as prioridades</option>
          <option>Alta</option>
          <option>Média</option>
          <option>Baixa</option>
        </select>
        <span style={{ fontSize: "13px", color: "#6b7280", display: "flex", alignItems: "center", marginLeft: "8px" }}>
          {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6", overflow: "hidden" }}>
        <Table columns={columns} data={filtered} />
      </div>
    </div>
  );
}
