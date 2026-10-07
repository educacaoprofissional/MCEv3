
interface HeaderProps {
  title: string;
  onRefresh?: () => void;
}

export default function Header({ title, onRefresh }: HeaderProps) {
  return (
    <div style={{
      height: "64px", background: "#fff", borderBottom: "1px solid #e5e7eb",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 24px", flexShrink: 0,
    }}>
      <h1 style={{ fontSize: "20px", fontWeight: 700, color: "#111827" }}>{title}</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{ fontSize: "13px", color: "#6b7280" }}>Última atualização: hoje às 14:32</span>
        <button
          onClick={onRefresh}
          style={{
            background: "none", border: "1px solid #e5e7eb", borderRadius: "8px",
            padding: "6px 8px", cursor: "pointer", color: "#6b7280", display: "flex", alignItems: "center",
          }}
          title="Atualizar"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
          </svg>
        </button>
        <div style={{ position: "relative" }}>
          <button style={{ background: "none", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "6px 8px", cursor: "pointer", color: "#6b7280", display: "flex", alignItems: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </button>
          <span style={{
            position: "absolute", top: "-6px", right: "-6px", background: "#dc2626", color: "#fff",
            borderRadius: "50%", width: "16px", height: "16px", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: "10px", fontWeight: 700,
          }}>3</span>
        </div>
        <div style={{
          width: "32px", height: "32px", borderRadius: "50%", background: "#2563eb",
          display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "13px",
        }}>AE</div>
      </div>
    </div>
  );
}
