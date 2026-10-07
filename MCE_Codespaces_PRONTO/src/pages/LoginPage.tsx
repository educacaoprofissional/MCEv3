import React, { useState } from "react";
import Button from "../components/ui/Button";

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin(); }, 1000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 12px", borderRadius: "8px",
    border: "1px solid #e5e7eb", fontSize: "14px", fontFamily: "inherit",
    outline: "none", color: "#111827", background: "#fff",
    boxSizing: "border-box",
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Left panel */}
      <div style={{
        width: "45%", background: "#1e3a5f", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", padding: "40px", color: "#fff",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
          <div style={{ width: "48px", height: "48px", background: "#2563eb", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "22px" }}>MCE</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>Monitoramento Computacional Escolar</div>
          </div>
        </div>

        {/* Abstract SVG illustration */}
        <svg width="280" height="200" viewBox="0 0 280 200" style={{ marginBottom: "32px" }}>
          <circle cx="140" cy="100" r="6" fill="rgba(255,255,255,0.4)" />
          <circle cx="50" cy="60" r="5" fill="rgba(255,255,255,0.3)" />
          <circle cx="230" cy="60" r="5" fill="rgba(255,255,255,0.3)" />
          <circle cx="50" cy="140" r="5" fill="rgba(255,255,255,0.3)" />
          <circle cx="230" cy="140" r="5" fill="rgba(255,255,255,0.3)" />
          <circle cx="140" cy="30" r="5" fill="rgba(255,255,255,0.3)" />
          <circle cx="140" cy="170" r="5" fill="rgba(255,255,255,0.3)" />
          <line x1="140" y1="100" x2="50" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="140" y1="100" x2="230" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="140" y1="100" x2="50" y2="140" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="140" y1="100" x2="230" y2="140" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="140" y1="100" x2="140" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="140" y1="100" x2="140" y2="170" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          {[50, 230].map(x => [60, 140].map(y => (
            <rect key={`${x}-${y}`} x={x - 12} y={y - 10} width="24" height="16" rx="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          )))}
          <rect x="116" y="20" width="48" height="20" rx="3" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <rect x="116" y="162" width="48" height="20" rx="3" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <rect x="116" y="90" width="48" height="20" rx="3" fill="rgba(37,99,235,0.6)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        </svg>

        <div style={{ textAlign: "center", maxWidth: "280px" }}>
          <p style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>Gerencie todos os computadores da escola</p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
            Monitore status, registre manutenções e acompanhe problemas em um único lugar.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div style={{
        flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
        background: "#f9fafb", padding: "40px",
      }}>
        <div style={{
          background: "#fff", borderRadius: "16px", padding: "40px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)", width: "100%", maxWidth: "400px",
        }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "4px", color: "#111827" }}>Bem-vindo de volta</h2>
          <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "28px" }}>Faça login para continuar</p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#374151", marginBottom: "6px" }}>E-mail</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@escola.edu.br"
                style={inputStyle}
              />
            </div>
            <div style={{ marginBottom: "8px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#374151", marginBottom: "6px" }}>Senha</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                style={inputStyle}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#6b7280", cursor: "pointer" }}>
                <input type="checkbox" style={{ accentColor: "#2563eb" }} />
                Lembrar-me
              </label>
              <button type="button" style={{ background: "none", border: "none", color: "#2563eb", fontSize: "13px", cursor: "pointer", fontFamily: "inherit" }}>
                Esqueci a senha
              </button>
            </div>

            {error && (
              <div style={{ background: "#fee2e2", color: "#b91c1c", padding: "10px 12px", borderRadius: "8px", fontSize: "13px", marginBottom: "16px" }}>
                {error}
              </div>
            )}

            <Button type="submit" variant="primary" loading={loading} style={{ width: "100%", justifyContent: "center" }}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <div style={{ marginTop: "20px", padding: "12px", background: "#f3f4f6", borderRadius: "8px", fontSize: "12px", color: "#6b7280" }}>
            <strong>Credenciais de demonstração:</strong><br />
            admin@escola.edu.br / senha: ••••••••
          </div>
        </div>
      </div>
    </div>
  );
}
