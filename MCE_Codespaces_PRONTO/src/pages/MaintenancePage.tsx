import React, { useState } from "react";
import { MAINTENANCES, Maintenance } from "../data/mockData";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import Table, { Column } from "../components/ui/Table";

interface MaintenancePageProps {
  onShowToast: (msg: string, type: "success" | "error") => void;
}

export default function MaintenancePage({ onShowToast }: MaintenancePageProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ computerId: "", type: "Preventiva", description: "", technician: "", date: "" });

  const pending = MAINTENANCES.filter(m => m.status === "Pendente").length;
  const inProgress = MAINTENANCES.filter(m => m.status === "Em andamento").length;
  const done = MAINTENANCES.filter(m => m.status === "Concluída").length;

  const columns: Column<Maintenance>[] = [
    { key: "type", header: "Tipo", sortable: true },
    { key: "description", header: "Descrição" },
    { key: "technician", header: "Técnico" },
    { key: "status", header: "Status", render: r => <Badge variant={r.status === "Concluída" ? "success" : r.status === "Em andamento" ? "warning" : "neutral"}>{r.status}</Badge> },
    { key: "scheduledDate", header: "Data", sortable: true },
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "8px 12px", borderRadius: "8px", border: "1px solid #e5e7eb",
    fontSize: "14px", fontFamily: "inherit", color: "#111827",
  };

  return (
    <div className="fade-in" style={{ padding: "24px", overflow: "auto", flex: 1 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
        <div>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#111827" }}>Manutenções</h2>
          <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>Gerencie todas as manutenções preventivas e corretivas</p>
        </div>
        <Button variant="primary" size="sm" onClick={() => setModalOpen(true)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          Registrar manutenção
        </Button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px", marginBottom: "24px" }}>
        {[
          { label: "Pendentes", value: pending, color: "#d97706" },
          { label: "Em andamento", value: inProgress, color: "#2563eb" },
          { label: "Concluídas", value: done, color: "#16a34a" },
        ].map(s => (
          <div key={s.label} style={{ background: "#fff", borderRadius: "12px", padding: "20px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
            <div style={{ fontSize: "28px", fontWeight: 800, color: s.color, marginBottom: "4px" }}>{s.value}</div>
            <div style={{ fontSize: "13px", color: "#6b7280" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6", overflow: "hidden" }}>
        <Table columns={columns} data={MAINTENANCES} />
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Registrar Manutenção"
        footer={
          <>
            <Button variant="secondary" size="sm" onClick={() => setModalOpen(false)}>Cancelar</Button>
            <Button variant="primary" size="sm" onClick={() => {
              setModalOpen(false);
              onShowToast("Manutenção registrada com sucesso.", "success");
              setFormData({ computerId: "", type: "Preventiva", description: "", technician: "", date: "" });
            }}>Registrar</Button>
          </>
        }
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div>
            <label style={{ fontSize: "13px", fontWeight: 500, color: "#374151", display: "block", marginBottom: "6px" }}>Computador</label>
            <input value={formData.computerId} onChange={e => setFormData({ ...formData, computerId: e.target.value })} style={inputStyle} placeholder="Ex: PC-001" />
          </div>
          <div>
            <label style={{ fontSize: "13px", fontWeight: 500, color: "#374151", display: "block", marginBottom: "6px" }}>Tipo</label>
            <select value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })} style={inputStyle}>
              <option>Preventiva</option>
              <option>Corretiva</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: "13px", fontWeight: 500, color: "#374151", display: "block", marginBottom: "6px" }}>Descrição</label>
            <textarea value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} rows={3} style={{ ...inputStyle, resize: "vertical" }} placeholder="Descreva a manutenção..." />
          </div>
          <div>
            <label style={{ fontSize: "13px", fontWeight: 500, color: "#374151", display: "block", marginBottom: "6px" }}>Técnico responsável</label>
            <input value={formData.technician} onChange={e => setFormData({ ...formData, technician: e.target.value })} style={inputStyle} placeholder="Nome do técnico" />
          </div>
          <div>
            <label style={{ fontSize: "13px", fontWeight: 500, color: "#374151", display: "block", marginBottom: "6px" }}>Data agendada</label>
            <input type="date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} style={inputStyle} />
          </div>
        </div>
      </Modal>
    </div>
  );
}
