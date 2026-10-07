import React, { useState } from "react";
import { COMPUTERS, PROBLEMS, MAINTENANCES } from "../data/mockData";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";

interface ComputerDetailPageProps {
  computerId: string;
  onBack: () => void;
  onShowToast: (msg: string, type: "success" | "error") => void;
}

export default function ComputerDetailPage({ computerId, onBack, onShowToast }: ComputerDetailPageProps) {
  const computer = COMPUTERS.find(c => c.id === computerId) || COMPUTERS[0];
  const problems = PROBLEMS.filter(p => p.computerId === computerId);
  const maintenances = MAINTENANCES.filter(m => m.computerId === computerId);
  const [modalOpen, setModalOpen] = useState(false);
  const [obs, setObs] = useState(computer.observations);
  const [formData, setFormData] = useState({ type: "Preventiva", description: "", technician: "", date: "" });

  const card = (children: React.ReactNode, title?: string) => (
    <div style={{ background: "#fff", borderRadius: "12px", padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6", marginBottom: "16px" }}>
      {title && <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#374151", marginBottom: "14px", paddingBottom: "10px", borderBottom: "1px solid #f3f4f6" }}>{title}</h3>}
      {children}
    </div>
  );

  const field = (label: string, value: string) => (
    <div style={{ marginBottom: "10px" }}>
      <div style={{ fontSize: "11px", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2px" }}>{label}</div>
      <div style={{ fontSize: "14px", color: "#111827", fontWeight: 500 }}>{value}</div>
    </div>
  );

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "8px 12px", borderRadius: "8px", border: "1px solid #e5e7eb",
    fontSize: "14px", fontFamily: "inherit", color: "#111827",
  };

  return (
    <div className="fade-in" style={{ padding: "24px", overflow: "auto", flex: 1 }}>
      <button onClick={onBack} style={{ background: "none", border: "none", color: "#2563eb", cursor: "pointer", fontSize: "14px", fontFamily: "inherit", marginBottom: "16px", display: "flex", alignItems: "center", gap: "4px" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
        Voltar
      </button>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
        <div>
          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827" }}>{computer.id}</h2>
          <div style={{ fontSize: "13px", color: "#6b7280" }}>{computer.category}</div>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <Button variant="secondary" size="sm" onClick={() => onShowToast("Modo de edição em desenvolvimento", "success")}>Editar computador</Button>
          <Button variant="secondary" size="sm" onClick={() => setModalOpen(true)}>Registrar manutenção</Button>
          <Button variant="primary" size="sm" onClick={() => onShowToast("Status alterado com sucesso", "success")}>Alterar status</Button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        {/* Left column */}
        <div>
          {card(<>
            {field("Categoria", computer.category)}
          </>, "Identificação")}

          {card(<>
            {field("Processador", computer.processor)}
            {field("Memória RAM", computer.ram)}
            {field("Armazenamento", computer.storage)}
            {field("Sistema Operacional", computer.os)}
          </>, "Hardware")}

          {card(<>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Badge variant={computer.status === "Funcionando" ? "success" : "danger"}>{computer.status}</Badge>
              <span style={{ fontSize: "13px", color: "#6b7280" }}>Última verificação: {computer.lastCheck}</span>
            </div>
          </>, "Status")}

          {card(<>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {computer.missingKeys === 0
                ? <Badge variant="success">Teclado completo</Badge>
                : <Badge variant="warning">{computer.missingKeys} {computer.missingKeys === 1 ? "tecla faltando" : "teclas faltando"}</Badge>
              }
            </div>
          </>, "Teclado")}
        </div>

        {/* Right column */}
        <div>
          {card(<>
            {maintenances.length === 0
              ? <p style={{ fontSize: "13px", color: "#6b7280" }}>Nenhuma manutenção registrada.</p>
              : maintenances.map(m => (
                <div key={m.id} style={{ padding: "10px", background: "#f9fafb", borderRadius: "8px", marginBottom: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontWeight: 600, fontSize: "13px" }}>{m.type}</span>
                    <Badge variant={m.status === "Concluída" ? "success" : m.status === "Em andamento" ? "warning" : "neutral"}>{m.status}</Badge>
                  </div>
                  <div style={{ fontSize: "13px", color: "#6b7280" }}>{m.description}</div>
                  <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>{m.technician} · {m.scheduledDate}</div>
                </div>
              ))
            }
          </>, "Manutenções")}

          {card(<>
            {problems.length === 0
              ? <p style={{ fontSize: "13px", color: "#6b7280" }}>Nenhum problema registrado.</p>
              : problems.map(p => (
                <div key={p.id} style={{ padding: "10px", background: "#f9fafb", borderRadius: "8px", marginBottom: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontWeight: 600, fontSize: "13px" }}>{p.id}</span>
                    <Badge variant={p.priority === "Alta" ? "danger" : p.priority === "Média" ? "warning" : "info"}>{p.priority}</Badge>
                  </div>
                  <div style={{ fontSize: "13px", color: "#374151" }}>{p.description}</div>
                  <div style={{ display: "flex", gap: "8px", marginTop: "6px" }}>
                    <Badge variant={p.status === "Resolvido" ? "success" : p.status === "Em andamento" ? "warning" : "neutral"}>{p.status}</Badge>
                    <span style={{ fontSize: "12px", color: "#9ca3af" }}>{p.reportedAt}</span>
                  </div>
                </div>
              ))
            }
          </>, "Problemas")}

          {card(<>
            <label style={{ fontSize: "13px", fontWeight: 500, color: "#374151", display: "block", marginBottom: "6px" }}>Observações</label>
            <textarea
              value={obs}
              onChange={e => setObs(e.target.value)}
              rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
              placeholder="Adicione observações sobre este computador..."
            />
            <Button variant="secondary" size="sm" style={{ marginTop: "8px" }} onClick={() => onShowToast("Observações salvas com sucesso!", "success")}>
              Salvar
            </Button>
          </>)}
        </div>
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
            }}>Registrar</Button>
          </>
        }
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div>
            <label style={{ fontSize: "13px", fontWeight: 500, color: "#374151", display: "block", marginBottom: "6px" }}>Tipo</label>
            <select value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })} style={inputStyle}>
              <option>Preventiva</option>
              <option>Corretiva</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: "13px", fontWeight: 500, color: "#374151", display: "block", marginBottom: "6px" }}>Descrição</label>
            <textarea
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              rows={3} style={{ ...inputStyle, resize: "vertical" }}
              placeholder="Descreva a manutenção..."
            />
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
