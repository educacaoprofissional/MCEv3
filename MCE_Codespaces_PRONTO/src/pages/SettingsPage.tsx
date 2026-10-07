import React, { useState } from "react";
import { MOCK_USERS } from "../data/mockData";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";

interface SettingsPageProps {
  onShowToast: (msg: string, type: "success" | "error") => void;
}

type Tab = "profile" | "notifications" | "users" | "permissions";

const TABS: { key: Tab; label: string }[] = [
  { key: "profile", label: "Meu Perfil" },
  { key: "notifications", label: "Notificações" },
  { key: "users", label: "Usuários" },
  { key: "permissions", label: "Permissões" },
];

export default function SettingsPage({ onShowToast }: SettingsPageProps) {
  const [tab, setTab] = useState<Tab>("profile");
  const [profile, setProfile] = useState({ name: "Admin Escola", email: "admin@escola.edu.br", role: "Administrador" });
  const [notifs, setNotifs] = useState({ newProblem: true, maintenance: true, statusChange: false, weeklyReport: true });

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1px solid #e5e7eb",
    fontSize: "14px", fontFamily: "inherit", color: "#111827",
  };

  const Toggle = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      style={{
        width: "44px", height: "24px", borderRadius: "12px", border: "none", cursor: "pointer",
        background: checked ? "#2563eb" : "#e5e7eb", position: "relative", transition: "background 0.2s", flexShrink: 0,
      }}
    >
      <div style={{
        position: "absolute", top: "3px", left: checked ? "23px" : "3px",
        width: "18px", height: "18px", borderRadius: "50%", background: "#fff",
        transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      }} />
    </button>
  );

  return (
    <div className="fade-in" style={{ padding: "24px", overflow: "auto", flex: 1 }}>
      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#111827" }}>Configurações</h2>
        <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>Gerencie suas preferências e configurações do sistema</p>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "0", borderBottom: "1px solid #e5e7eb", marginBottom: "24px" }}>
        {TABS.map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            style={{
              padding: "10px 16px", border: "none", background: "none", cursor: "pointer",
              fontFamily: "inherit", fontSize: "14px", fontWeight: tab === t.key ? 600 : 400,
              color: tab === t.key ? "#2563eb" : "#6b7280",
              borderBottom: tab === t.key ? "2px solid #2563eb" : "2px solid transparent",
              marginBottom: "-1px", transition: "all 0.15s",
            }}
          >{t.label}</button>
        ))}
      </div>

      {tab === "profile" && (
        <div style={{ maxWidth: "500px", background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "22px" }}>AE</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: "16px" }}>{profile.name}</div>
              <div style={{ fontSize: "13px", color: "#6b7280" }}>{profile.role}</div>
            </div>
          </div>
          {[
            { label: "Nome completo", key: "name" as const },
            { label: "E-mail", key: "email" as const },
            { label: "Cargo", key: "role" as const },
          ].map(f => (
            <div key={f.key} style={{ marginBottom: "16px" }}>
              <label style={{ fontSize: "13px", fontWeight: 500, color: "#374151", display: "block", marginBottom: "6px" }}>{f.label}</label>
              <input value={profile[f.key]} onChange={e => setProfile({ ...profile, [f.key]: e.target.value })} style={inputStyle} />
            </div>
          ))}
          <Button variant="primary" size="sm" onClick={() => onShowToast("Perfil salvo com sucesso!", "success")}>Salvar alterações</Button>
        </div>
      )}

      {tab === "notifications" && (
        <div style={{ maxWidth: "500px", background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "20px", color: "#111827" }}>Preferências de Notificação</h3>
          {[
            { key: "newProblem" as const, label: "Novo problema reportado", desc: "Receba notificações quando um novo problema for registrado" },
            { key: "maintenance" as const, label: "Manutenção agendada", desc: "Seja notificado sobre manutenções próximas" },
            { key: "statusChange" as const, label: "Alteração de status", desc: "Notificações quando o status de um computador mudar" },
            { key: "weeklyReport" as const, label: "Relatório semanal", desc: "Receba um resumo semanal por e-mail" },
          ].map(n => (
            <div key={n.key} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #f3f4f6" }}>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#111827" }}>{n.label}</div>
                <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "2px" }}>{n.desc}</div>
              </div>
              <Toggle checked={notifs[n.key]} onChange={() => setNotifs({ ...notifs, [n.key]: !notifs[n.key] })} />
            </div>
          ))}
        </div>
      )}

      {tab === "users" && (
        <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6", overflow: "hidden" }}>
          <div style={{ padding: "16px 20px", borderBottom: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 style={{ fontSize: "15px", fontWeight: 600 }}>Usuários do Sistema</h3>
            <Button variant="primary" size="sm" onClick={() => onShowToast("Funcionalidade em desenvolvimento", "success")}>Adicionar usuário</Button>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
                {["Nome", "E-mail", "Função", "Último acesso"].map(h => (
                  <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontWeight: 600, fontSize: "13px", color: "#374151" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MOCK_USERS.map((u, i) => (
                <tr key={u.id} style={{ borderBottom: "1px solid #f3f4f6", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td style={{ padding: "10px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "11px", fontWeight: 700, flexShrink: 0 }}>
                        {u.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                      </div>
                      <span style={{ fontWeight: 500 }}>{u.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: "10px 16px", color: "#6b7280" }}>{u.email}</td>
                  <td style={{ padding: "10px 16px" }}>
                    <Badge variant={u.role === "Administrador" ? "info" : u.role === "Técnico" ? "warning" : "neutral"}>{u.role}</Badge>
                  </td>
                  <td style={{ padding: "10px 16px", color: "#6b7280", fontSize: "13px" }}>{u.lastAccess}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "permissions" && (
        <div style={{ background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6", overflow: "auto" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "16px" }}>Matriz de Permissões</h3>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 600, color: "#374151" }}>Funcionalidade</th>
                {["Administrador", "Técnico", "Visualizador"].map(r => (
                  <th key={r} style={{ padding: "10px 12px", textAlign: "center", fontWeight: 600, color: "#374151" }}>{r}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Ver computadores", true, true, true],
                ["Editar computadores", true, true, false],
                ["Adicionar computadores", true, false, false],
                ["Registrar manutenção", true, true, false],
                ["Resolver problemas", true, true, false],
                ["Gerenciar usuários", true, false, false],
                ["Ver relatórios", true, true, true],
                ["Exportar dados", true, true, false],
              ].map(([feat, admin, tech, viewer], i) => (
                <tr key={String(feat)} style={{ borderBottom: "1px solid #f3f4f6", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td style={{ padding: "10px 12px", color: "#374151" }}>{String(feat)}</td>
                  {[admin, tech, viewer].map((allowed, j) => (
                    <td key={j} style={{ padding: "10px 12px", textAlign: "center" }}>
                      {allowed
                        ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" style={{ display: "inline" }}><polyline points="20 6 9 17 4 12" /></svg>
                        : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" style={{ display: "inline" }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
