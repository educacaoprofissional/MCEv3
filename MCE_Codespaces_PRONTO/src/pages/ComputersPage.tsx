import React, { useState, useMemo } from "react";
import { COMPUTERS, Computer } from "../data/mockData";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Table, { Column } from "../components/ui/Table";

interface ComputersPageProps {
  onSelectComputer: (id: string) => void;
  initialFilter?: string;
  onShowToast: (msg: string, type: "success" | "error") => void;
}

const PAGE_SIZE = 10;

export default function ComputersPage({ onSelectComputer, initialFilter, onShowToast }: ComputersPageProps) {
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState(initialFilter === "unclassified" ? "Não classificado" : "");
  const [statusFilter, setStatusFilter] = useState(initialFilter === "defective" ? "Com defeito" : "");
  const [keyFilter, setKeyFilter] = useState(initialFilter === "missing" ? "com_teclas" : "");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return COMPUTERS.filter(c => {
      if (search && !c.category.toLowerCase().includes(search.toLowerCase()) && !c.processor.toLowerCase().includes(search.toLowerCase())) return false;
      if (catFilter && c.category !== catFilter) return false;
      if (statusFilter && c.status !== statusFilter) return false;
      if (keyFilter === "com_teclas" && c.missingKeys === 0) return false;
      if (keyFilter === "sem_teclas" && c.missingKeys > 0) return false;
      return true;
    });
  }, [search, catFilter, statusFilter, keyFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const columns: Column<Computer>[] = [
    { key: "category", header: "Categoria", sortable: true },
    { key: "status", header: "Status", render: r => <Badge variant={r.status === "Funcionando" ? "success" : "danger"}>{r.status}</Badge> },
    {
      key: "missingKeys", header: "Teclas", sortable: true,
      render: r => r.missingKeys > 0
        ? <Badge variant="warning">{r.missingKeys} faltando</Badge>
        : <Badge variant="neutral">Completo</Badge>
    },
    { key: "lastCheck", header: "Última verificação", sortable: true },
  ];

  const selectStyle: React.CSSProperties = {
    padding: "8px 12px", borderRadius: "8px", border: "1px solid #e5e7eb",
    fontSize: "14px", color: "#374151", background: "#fff", fontFamily: "inherit", cursor: "pointer",
  };

  return (
    <div className="fade-in" style={{ padding: "24px", overflow: "auto", flex: 1 }}>
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#111827" }}>Computadores</h2>
        <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>Gerencie todos os computadores cadastrados no sistema</p>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px", alignItems: "center" }}>
        <input
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
          placeholder="Buscar por categoria ou processador..."
          style={{ padding: "8px 12px", borderRadius: "8px", border: "1px solid #e5e7eb", fontSize: "14px", fontFamily: "inherit", width: "220px" }}
        />
        <select value={catFilter} onChange={e => { setCatFilter(e.target.value); setPage(1); }} style={selectStyle}>
          <option value="">Todas as categorias</option>
          <option>Técnico</option>
          <option>Básicos</option>
          <option>Não classificado</option>
        </select>
        <select value={statusFilter} onChange={e => { setStatusFilter(e.target.value); setPage(1); }} style={selectStyle}>
          <option value="">Todos os status</option>
          <option>Funcionando</option>
          <option>Com defeito</option>
        </select>
        <select value={keyFilter} onChange={e => { setKeyFilter(e.target.value); setPage(1); }} style={selectStyle}>
          <option value="">Teclado</option>
          <option value="sem_teclas">Completo</option>
          <option value="com_teclas">Com teclas faltando</option>
        </select>
        <div style={{ marginLeft: "auto" }}>
          <Button variant="primary" size="sm" onClick={() => onShowToast("Funcionalidade em desenvolvimento", "success")}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            Adicionar computador
          </Button>
        </div>
      </div>

      {/* Results count */}
      <div style={{ fontSize: "13px", color: "#6b7280", marginBottom: "12px" }}>
        Mostrando {paginated.length} de {filtered.length} computadores
      </div>

      {/* Table */}
      <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6", overflow: "hidden", marginBottom: "16px" }}>
        <Table
          columns={columns}
          data={paginated}
          onRowClick={(row) => onSelectComputer(row.id)}
        />
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ display: "flex", gap: "4px", justifyContent: "center", alignItems: "center" }}>
          <Button variant="ghost" size="sm" disabled={page === 1} onClick={() => setPage(p => p - 1)}>
            ← Anterior
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={p}
              onClick={() => setPage(p)}
              style={{
                width: "32px", height: "32px", borderRadius: "6px", border: "1px solid",
                borderColor: p === page ? "#2563eb" : "#e5e7eb",
                background: p === page ? "#2563eb" : "#fff",
                color: p === page ? "#fff" : "#374151",
                cursor: "pointer", fontSize: "13px", fontWeight: p === page ? 600 : 400, fontFamily: "inherit",
              }}
            >{p}</button>
          ))}
          <Button variant="ghost" size="sm" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
            Próximo →
          </Button>
        </div>
      )}
    </div>
  );
}
