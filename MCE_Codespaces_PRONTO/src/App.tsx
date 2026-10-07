import { useState, useCallback } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Toast, { ToastMessage } from "./components/ui/Toast";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ComputersPage from "./pages/ComputersPage";
import ComputerDetailPage from "./pages/ComputerDetailPage";
import ProblemsPage from "./pages/ProblemsPage";
import MaintenancePage from "./pages/MaintenancePage";
import HistoryPage from "./pages/HistoryPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";

type Page = "login" | "dashboard" | "computers" | "computer-detail" | "problems" | "maintenance" | "history" | "reports" | "settings";

const PAGE_TITLES: Record<Page, string> = {
  login: "Login",
  dashboard: "Dashboard",
  computers: "Computadores",
  "computer-detail": "Detalhes do Computador",
  problems: "Problemas",
  maintenance: "Manutenções",
  history: "Histórico",
  reports: "Relatórios",
  settings: "Configurações",
};

export default function App() {
  const [page, setPage] = useState<Page>("login");
  const [selectedComputerId, setSelectedComputerId] = useState<string | null>(null);
  const [computersFilter, setComputersFilter] = useState<string | undefined>(undefined);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((message: string, type: "success" | "error" = "success") => {
    const id = String(Date.now() + Math.random());
    setToasts(prev => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const navigate = useCallback((target: string, filter?: string) => {
    setPage(target as Page);
    if (target === "computers" && filter) setComputersFilter(filter);
    else if (target !== "computers") setComputersFilter(undefined);
  }, []);

  const handleLogin = useCallback(() => setPage("dashboard"), []);

  const handleSelectComputer = useCallback((id: string) => {
    setSelectedComputerId(id);
    setPage("computer-detail");
  }, []);

  const handleLogout = useCallback(() => setPage("login"), []);

  if (page === "login") {
    return (
      <>
        <LoginPage onLogin={handleLogin} />
        <Toast toasts={toasts} onRemove={removeToast} />
      </>
    );
  }

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "#f9fafb" }}>
      <Sidebar
        currentPage={page}
        onNavigate={(p) => navigate(p)}
        onLogout={handleLogout}
      />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Header title={PAGE_TITLES[page]} />
        <div style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column" }}>
          {page === "dashboard" && <DashboardPage onNavigate={navigate} />}
          {page === "computers" && (
            <ComputersPage
              onSelectComputer={handleSelectComputer}
              initialFilter={computersFilter}
              onShowToast={addToast}
            />
          )}
          {page === "computer-detail" && selectedComputerId && (
            <ComputerDetailPage
              computerId={selectedComputerId}
              onBack={() => setPage("computers")}
              onShowToast={addToast}
            />
          )}
          {page === "problems" && <ProblemsPage />}
          {page === "maintenance" && <MaintenancePage onShowToast={addToast} />}
          {page === "history" && <HistoryPage />}
          {page === "reports" && <ReportsPage onShowToast={addToast} />}
          {page === "settings" && <SettingsPage onShowToast={addToast} />}
        </div>
      </div>
      <Toast toasts={toasts} onRemove={removeToast} />
    </div>
  );
}
