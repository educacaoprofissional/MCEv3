import React, { useState, useMemo } from "react";
import { HISTORY, HistoryEvent } from "../data/mockData";

const typeLabels: Record<HistoryEvent["type"], string> = {
  status: "Alteração de Status",
  maintenance: "Manutenção",
  problem: "Problema",
  update: "Atualização",
};

const typeColors: Record<HistoryEvent["type"], string> = {
  status: "#2563eb",
  maintenance: "#16a34a",
  problem: "#dc2626",
  update: "#6b7280",
};

export default function HistoryPage() {
  const [typeFilter, setTypeFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const filtered = useMemo(() => HISTORY.filter(h => {
    if (typeFilter && h.type !== typeFilter) return false;
    if (dateFilter) {
      if (dateFilter === "today" && h.date !== "2024-01-16") return false;
      if (dateFilter === "week" && h.date < "2024-01-10") return false;
      if (dateFilter === "month" && h.date < "2024-01-01") return false;
    }
    return true;
  }), [typeFilter, dateFilter]);

  const selectStyle: React.CSSProperties = {
    padding: "8px 12px", borderRadius: "8px", border: "1px solid #e5e7eb",
    fontSize: "14px", color: "#374151", background: "#fff", fontFamily: "inherit",
  };

  return (
    <div className="fade-in" style={{ padding: "24px", overflow: "auto", flex: 1 }}>
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#111827" }}>Histórico</h2>
        <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>Registro completo de todas as ações realizadas no sistema</p>
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
        <select value={dateFilter} onChange={e => setDateFilter(e.target.value)} style={selectStyle}>
          <option value="">Todo o período</option>
          <option value="today">Hoje</option>
          <option value="week">Última semana</option>
          <option value="month">Este mês</option>
        </select>
        <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} style={selectStyle}>
          <option value="">Todos os tipos</option>
          <option value="status">Alteração de Status</option>
          <option value="maintenance">Manutenção</option>
          <option value="problem">Problema</option>
          <option value="update">Atualização</option>
        </select>
        <span style={{ fontSize: "13px", color: "#6b7280", display: "flex", alignItems: "center", marginLeft: "4px" }}>
          {filtered.length} evento{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Timeline */}
      <div style={{ position: "relative", paddingLeft: "32px" }}>
        <div style={{ position: "absolute", left: "14px", top: 0, bottom: 0, width: "2px", background: "#e5e7eb" }} />
        {filtered.map((event, i) => (
          <div key={event.id} className={i === 0 ? "fade-in" : ""} style={{ position: "relative", marginBottom: "16px" }}>
            <div style={{
              position: "absolute", left: "-24px", top: "16px",
              width: "12px", height: "12px", borderRadius: "50%",
              background: typeColors[event.type], border: "2px solid #fff",
              boxShadow: `0 0 0 2px ${typeColors[event.type]}40`,
            }} />
            <div style={{
              background: "#fff", borderRadius: "10px", padding: "14px 16px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{
                    fontSize: "11px", fontWeight: 600, padding: "2px 8px", borderRadius: "9999px",
                    background: `${typeColors[event.type]}18`, color: typeColors[event.type],
                  }}>
                    {typeLabels[event.type]}
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#2563eb" }}></span>
                </div>
                <span style={{ fontSize: "12px", color: "#9ca3af", whiteSpace: "nowrap" }}>
                  {event.date} às {event.time}
                </span>
              </div>
              <div style={{ fontSize: "14px", color: "#374151" }}>{event.action}</div>
              <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>
                Por: {event.user}
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px", color: "#6b7280", fontSize: "14px" }}>
            Nenhum evento encontrado.
          </div>
        )}
      </div>
    </div>
  );
}
